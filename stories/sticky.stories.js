// #### This is a generated file #### //
export default {
  title: 'sticky'
}
    
                        
  export const USAGE = () => `<div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="bottom: #offset">Stick to the top</div>`
                    
                        
  export const OFFSET = () => `<div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="offset: 100; bottom: #top">Stick 100px below the top</div>`
                    
                        
  export const TOP = () => `<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="top: 200; bottom: #animation">Stick to the top but only after 200px scrolling</div>
    </div>
    <div>
        <div id="container-1" class="uk-background-muted uk-height-medium" style="margin-bottom: 200px;">
            <div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="top: #container-1; bottom: #animation">Stick to the top but below the box</div>
        </div>
    </div>
</div>`
                    
                        
  export const ANIMATION = () => `<div class="uk-card uk-card-default uk-card-body" style="margin-bottom: 200px; z-index: 980;" uk-sticky="top: 100; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up">Animation Slide Top</div>`
                    
                        
  export const STICKY_ON_SCROLL_UP = () => `<div class="uk-card uk-card-default uk-card-body" style="margin-bottom: 200px; z-index: 980;" uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom">Slide in on scroll up</div>`
                    
                        
  export const BOTTOM = () => `<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div class="uk-background-muted uk-height-medium">
            <div class="uk-height-medium uk-background-muted">
                <div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="bottom: true">Stick until the bottom of its parent container</div>
            </div>
        </div>
    </div>
    <div>
        <div>
            <div class="uk-card uk-card-default uk-card-body" style="z-index: 980;" uk-sticky="bottom: #container-2">Stick until the next headline</div>
        </div>
    </div>
</div>

<h3 id="container-2">Some Headline</h3>
`
                    