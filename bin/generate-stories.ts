import { createReadStream, promises as fs } from 'fs';
import * as readline from 'readline';
import { flatten, forEach, fromIter, fromPromise, map, pipe } from 'callbag-basics';

const src = './src/'

pipe(
    fromPromise(fs.readdir(src)),
    map(fromIter),
    flatten,
    map(createStory),
    flatten,
    forEach(x => console.log(x))
);

function createStory(sourceFile: string) {
    const componentName = sourceFile.replace(/\.[^/.]+$/, '');
    const storyFile = `./stories/${componentName}.stories.js`;
    return pipe(
        fromPromise(createContent(componentName, `./src/${sourceFile}`)),
        map(content => fromPromise(fs.writeFile(storyFile, content, 'utf8'))),
        flatten
    );
}

function createContent(componentName: string, sourceFile: string): Promise<string> {
    const content = {};
    let lastKey = '';
    let copy = false;
    const header = `// #### This is a generated file #### //
export default {
  title: '${ componentName }'
}
    `;

    return new Promise<string>((resolve) => {
        const rl = readline.createInterface({
            input: createReadStream(sourceFile),
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {
            if (/^#/.test(line)) {
                lastKey = line.replace(/#/g, '').trim();
                content[lastKey] = [];
            }

            if (/^```$/.test(line)) {
                copy = false;
            }

            if (copy) {
                content[lastKey].push(line);
            }

            if (/^```example/.test(line)) {
                copy = true;
            }
        });

        rl.on('close', () => {
            resolve(Object.keys(content).reduce((body, key) => {
                if (content[key].length) {
                    return `${body}
                        
  export const ${createComponentName(key)} = () => \`${content[key].join('\n')}\`
                    `
                }
                return body;
            }, header));
        })
    })
}

function createComponentName(uikitHeader: string) {
    return uikitHeader
        .toUpperCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s/gi, '_');
}
