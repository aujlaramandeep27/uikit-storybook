// #### This is a generated file #### //
export default {
  title: 'toggle'
}
    
                        
  export const USAGE = () => `<div>
    <button class="uk-button uk-button-default" type="button" uk-toggle="target: #toggle-usage">Toggle</button>
    <p id="toggle-usage">What's up?</p>
</div>`
                    
                        
  export const MULTIPLE_ITEMS = () => `<button class="uk-button uk-button-default" type="button" uk-toggle="target: .toggle">Toggle</button>
<p class="toggle">Hello!</p>
<p class="toggle" hidden>Bazinga!</p>`
                    
                        
  export const CUSTOM_CLASS = () => `<button class="uk-button uk-button-default" type="button" uk-toggle="target: #toggle-custom; cls: uk-card-primary">Toggle</button>
<div id="toggle-custom" class="uk-card uk-card-default uk-card-body uk-margin-small">Custom class</div>`
                    
                        
  export const ANIMATIONS = () => `<button href="#toggle-animation" class="uk-button uk-button-default" type="button" uk-toggle="target: #toggle-animation; animation: uk-animation-fade">Toggle</button>
<div id="toggle-animation" class="uk-card uk-card-default uk-card-body uk-margin-small">Animation</div>`
                    
                        
  export const MULTIPLE_ANIMATIONS = () => `<button class="uk-button uk-button-default" type="button" uk-toggle="target: #toggle-animation-multiple; animation:  uk-animation-slide-left, uk-animation-slide-bottom">Toggle</button>
<div id="toggle-animation-multiple" class="uk-card uk-card-default uk-card-body uk-margin-small">Animation</div>`
                    
                        
  export const QUEUED_ANIMATIONS = () => `<button class="uk-button uk-button-default" type="button" uk-toggle="target: .toggle-animation-queued; animation: uk-animation-fade; queued: true; duration: 300">Toggle</button>
<p class="toggle-animation-queued uk-card uk-card-default uk-card-body uk-margin-small">Animation</p>
<p class="toggle-animation-queued uk-card uk-card-primary uk-card-body uk-margin-small" hidden>Animation</p>`
                    
                        
  export const MODES = () => `<button class="uk-button uk-button-default" type="button" uk-toggle="target: #toggle-hover; mode: hover">hover</button>
<p id="toggle-hover">What's up?</p>`
                    
                        
  export const MEDIA = () => `<div class="uk-card uk-card-default uk-card-body uk-width-medium" uk-toggle="cls: uk-card-primary; mode: media; media: @l">
    Primary on large screens
</div>`
                    