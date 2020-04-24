// #### This is a generated file #### //
export default {
  title: 'form'
}
    
                        
  export const USAGE = () => `<form>
    <fieldset class="uk-fieldset">

        <legend class="uk-legend">Legend</legend>

        <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Input">
        </div>

        <div class="uk-margin">
            <select class="uk-select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>

        <div class="uk-margin">
            <textarea class="uk-textarea" rows="5" placeholder="Textarea"></textarea>
        </div>

        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label><input class="uk-radio" type="radio" name="radio2" checked> A</label>
            <label><input class="uk-radio" type="radio" name="radio2"> B</label>
        </div>

        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
            <label><input class="uk-checkbox" type="checkbox" checked> A</label>
            <label><input class="uk-checkbox" type="checkbox"> B</label>
        </div>

        <div class="uk-margin">
            <input class="uk-range" type="range" value="2" min="0" max="10" step="0.1">
        </div>

    </fieldset>
</form>`
                    
                        
  export const STATES_MODIFIERS = () => `<div class="uk-margin">
    <input class="uk-input uk-form-danger uk-form-width-medium" type="text" placeholder="form-danger" value="form-danger">
</div>

<div class="uk-margin">
    <input class="uk-input uk-form-success uk-form-width-medium" type="text" placeholder="form-success" value="form-success">
</div>

<div class="uk-margin">
    <input class="uk-input uk-form-width-medium" type="text" placeholder="disabled" value="disabled" disabled>
</div>`
                    
                        
  export const SIZE_MODIFIERS = () => `<form>

    <div class="uk-margin">
        <input class="uk-input uk-form-width-medium uk-form-large" type="text" placeholder="Large">
    </div>

    <div class="uk-margin">
        <input class="uk-input uk-form-width-medium" type="text" placeholder="Default">
    </div>

    <div class="uk-margin">
        <input class="uk-input uk-form-width-medium uk-form-small" type="text" placeholder="Small">
    </div>

</form>`
                    
                        
  export const WIDTH_MODIFIERS = () => `<form>

    <div class="uk-margin">
        <input class="uk-input uk-form-width-large" type="text" placeholder="Large">
    </div>

    <div class="uk-margin">
        <input class="uk-input uk-form-width-medium" type="text" placeholder="Medium">
    </div>

    <div class="uk-margin">
        <input class="uk-input uk-form-width-small" type="text" placeholder="Small">
    </div>

    <div class="uk-margin">
        <input class="uk-input uk-form-width-xsmall" type="text" placeholder="X-Small">
    </div>

</form>
<form>
    <input class="uk-input uk-width-1-2" type="text" placeholder="uk-width-1-2">
</form>`
                    
                        
  export const BLANK_MODIFIER = () => `<form>
    <input class="uk-input uk-form-blank uk-form-width-medium" type="text" placeholder="Form blank">
</form>`
                    
                        
  export const LAYOUT = () => `<form class="uk-form-stacked">

    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Text</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-stacked-text" type="text" placeholder="Some text...">
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-select">Select</label>
        <div class="uk-form-controls">
            <select class="uk-select" id="form-stacked-select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-form-label">Radio</div>
        <div class="uk-form-controls">
            <label><input class="uk-radio" type="radio" name="radio1"> Option 01</label><br>
            <label><input class="uk-radio" type="radio" name="radio1"> Option 02</label>
        </div>
    </div>

</form>`
                    
                        
  export const HORIZONTAL_FORM = () => `<form class="uk-form-horizontal uk-margin-large">

    <div class="uk-margin">
        <label class="uk-form-label" for="form-horizontal-text">Text</label>
        <div class="uk-form-controls">
            <input class="uk-input" id="form-horizontal-text" type="text" placeholder="Some text...">
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="form-horizontal-select">Select</label>
        <div class="uk-form-controls">
            <select class="uk-select" id="form-horizontal-select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-form-label">Radio</div>
        <div class="uk-form-controls uk-form-controls-text">
            <label><input class="uk-radio" type="radio" name="radio1"> Option 01</label><br>
            <label><input class="uk-radio" type="radio" name="radio1"> Option 02</label>
        </div>
    </div>

</form>`
                    
                        
  export const FORM_AND_ICONS = () => `<form>

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input" type="text">
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
            <input class="uk-input" type="text">
        </div>
    </div>

</form>`
                    
                        
  export const CLICKABLE_ICONS = () => `<form>

    <div class="uk-margin">
        <div class="uk-inline">
            <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
            <input class="uk-input" type="text">
        </div>
    </div>

    <div class="uk-margin">
        <div class="uk-inline">
            <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: link"></a>
            <input class="uk-input" type="text">
        </div>
    </div>

</form>`
                    
                        
  export const FORM_AND_GRID = () => `<form class="uk-grid-small" uk-grid>
    <div class="uk-width-1-1">
        <input class="uk-input" type="text" placeholder="100">
    </div>
    <div class="uk-width-1-2@s">
        <input class="uk-input" type="text" placeholder="50">
    </div>
    <div class="uk-width-1-4@s">
        <input class="uk-input" type="text" placeholder="25">
    </div>
    <div class="uk-width-1-4@s">
        <input class="uk-input" type="text" placeholder="25">
    </div>
    <div class="uk-width-1-2@s">
        <input class="uk-input" type="text" placeholder="50">
    </div>
    <div class="uk-width-1-2@s">
        <input class="uk-input" type="text" placeholder="50">
    </div>
</form>`
                    
                        
  export const FILE = () => `<form>

    <div class="uk-margin">
        <div uk-form-custom>
            <input type="file">
            <button class="uk-button uk-button-default" type="button" tabindex="-1">Select</button>
        </div>
    </div>

    <div class="uk-margin">
        <span class="uk-text-middle">Here is a text</span>
        <div uk-form-custom>
            <input type="file">
            <span class="uk-link">upload</span>
        </div>
    </div>

    <div class="uk-margin" uk-margin>
        <div uk-form-custom="target: true">
            <input type="file">
            <input class="uk-input uk-form-width-medium" type="text" placeholder="Select file" disabled>
        </div>
        <button class="uk-button uk-button-default">Submit</button>
    </div>

</form>`
                    
                        
  export const SELECT = () => `<form>

    <div class="uk-margin">
        <div uk-form-custom="target: true">
            <select>
                <option value="1">Option 01</option>
                <option value="2">Option 02</option>
                <option value="3">Option 03</option>
                <option value="4">Option 04</option>
            </select>
            <span></span>
        </div>
    </div>

    <div class="uk-margin">
        <div uk-form-custom="target: > * > span:last-child">
            <select>
                <option value="1">Option 01</option>
                <option value="2">Option 02</option>
                <option value="3">Option 03</option>
                <option value="4">Option 04</option>
            </select>
            <span class="uk-link">
                <span uk-icon="icon: pencil"></span>
                <span></span>
            </span>
        </div>
    </div>

    <div class="uk-margin">
        <div uk-form-custom="target: > * > span:first-child">
            <select>
                <option value="">Please select...</option>
                <option value="1">Option 01</option>
                <option value="2">Option 02</option>
                <option value="3">Option 03</option>
                <option value="4">Option 04</option>
            </select>
            <button class="uk-button uk-button-default" type="button" tabindex="-1">
                <span></span>
                <span uk-icon="icon: chevron-down"></span>
            </button>
        </div>
    </div>

</form>`
                    