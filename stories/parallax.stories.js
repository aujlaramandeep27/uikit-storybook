// #### This is a generated file #### //
export default {
  title: 'parallax'
}
    
                        
  export const USAGE = () => `<div class="uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -200" style="background-image: url('images/dark.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">Headline</h1>

</div>`
                    
                        
  export const START_AND_END_VALUES = () => `<div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style="background-image: url('images/dark.jpg');">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Headline</h1>
        <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>`
                    
                        
  export const MULTIPLE_STEPS = () => `<div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style="background-image: url('images/dark.jpg');">
    <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;">Headline</h1>
        <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>`
                    
                        
  export const VIEWPORT_POSITION = () => `<div class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top" style="background-image: url('images/dark.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="opacity: 0,1; y: 100,0; viewport: 0.5">Headline</h1>

</div>`
                    
                        
  export const NESTING = () => `<div class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top" uk-parallax="bgy: -200" style="background-image: url('images/dark.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="y: 100,0">Headline</h1>

</div>`
                    
                        
  export const TARGET = () => `<div id="test-target" class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top" uk-parallax="bgy: -200" style="background-image: url('images/dark.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-target; y: 100,0">Headline</h1>

</div>`
                    
                        
  export const EASING = () => `<div id="test-easing" class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex" style="background-image: url('images/dark.jpg');">
     <div class="uk-grid uk-margin-auto uk-margin-auto-vertical uk-flex-inline">
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: -2">-2</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: -1">-1</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: -0.5">-0.5</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: 0">0</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: 0.5">0.5</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: 1">1</div></div>
        <div><div class="uk-card uk-card-default uk-padding-small" uk-parallax="y: 200; easing: 2">2</div></div>
    </div>
</div>`
                    
                        
  export const COLORS = () => `<div id="test-color" class="test-color uk-height-large uk-overflow-hidden uk-flex uk-flex-top" uk-parallax="background-color: yellow,white; border-color: #00f,#f00; viewport: 0.5" style="border: 10px solid #000;">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-target; color: #0f0; viewport: 0.5">Headline</h1>

</div>`
                    
                        
  export const FILTERS = () => `<div id="test-filter" class="uk-height-large uk-background-cover uk-overflow-hidden uk-flex uk-flex-top" uk-parallax="sepia: 100;" style="background-image: url('images/light.jpg');">

    <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-filter; blur: 0,10;">Headline</h1>

</div>`
                    
                        
  export const SVG_STROKES = () => `<div class="uk-text-center" uk-parallax="stroke: 100%; viewport: 0.7">
    <img src="images/strokes.svg" alt="" uk-svg>
</div>`
                    