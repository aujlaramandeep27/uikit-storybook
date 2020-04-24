// #### This is a generated file #### //
export default {
  title: 'button'
}
    
                        
  export const USAGE = () => `<p uk-margin>
    <a class="uk-button uk-button-default" href="#">Link</a>
    <button class="uk-button uk-button-default">Button</button>
    <button class="uk-button uk-button-default" disabled>Disabled</button>
</p>`
                    
                        
  export const STYLE_MODIFIERS = () => `<p uk-margin>
    <button class="uk-button uk-button-default">Default</button>
    <button class="uk-button uk-button-primary">Primary</button>
    <button class="uk-button uk-button-secondary">Secondary</button>
    <button class="uk-button uk-button-danger">Danger</button>
    <button class="uk-button uk-button-text">Text</button>
    <button class="uk-button uk-button-link">Link</button>
</p>`
                    
                        
  export const SIZE_MODIFIERS = () => `<p uk-margin>
    <button class="uk-button uk-button-default uk-button-small">Small button</button>
    <button class="uk-button uk-button-primary uk-button-small">Small button</button>
    <button class="uk-button uk-button-secondary uk-button-small">Small button</button>
</p>

<p uk-margin>
    <button class="uk-button uk-button-default uk-button-large">Large button</button>
    <button class="uk-button uk-button-primary uk-button-large">Large button</button>
    <button class="uk-button uk-button-secondary uk-button-large">Large button</button>
</p>`
                    
                        
  export const EXAMPLE = () => `<button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">Button</button>
<button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Button</button>
<button class="uk-button uk-button-secondary uk-width-1-1">Button</button>`
                    
                        
  export const GROUP = () => `<div>
    <div class="uk-button-group">
        <button class="uk-button uk-button-secondary">Button</button>
        <button class="uk-button uk-button-secondary">Button</button>
        <button class="uk-button uk-button-secondary">Button</button>
    </div>
</div>

<div class="uk-margin-small">
    <div class="uk-button-group">
        <button class="uk-button uk-button-primary">Button</button>
        <button class="uk-button uk-button-primary">Button</button>
        <button class="uk-button uk-button-primary">Button</button>
    </div>
</div>

<div>
    <div class="uk-button-group">
        <button class="uk-button uk-button-danger">Button</button>
        <button class="uk-button uk-button-danger">Button</button>
        <button class="uk-button uk-button-danger">Button</button>
    </div>
</div>`
                    
                        
  export const BUTTON_WITH_DROPDOWNS = () => `<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Dropdown</button>
    <div uk-dropdown>
        <ul class="uk-nav uk-dropdown-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-header">Header</li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#">Item</a></li>
        </ul>
    </div>
</div>`
                    
                        
  export const BUTTON_GROUP_WITH_DROPDOWNS = () => `
<div class="uk-button-group">
    <button class="uk-button uk-button-default">Dropdown</button>
    <div class="uk-inline">
        <button class="uk-button uk-button-default" type="button"><span uk-icon="icon:  triangle-down"></span></button>
        <div uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;">
            <ul class="uk-nav uk-dropdown-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li class="uk-nav-header">Header</li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li class="uk-nav-divider"></li>
                <li><a href="#">Item</a></li>
            </ul>
        </div>
    </div>
</div>`
                    