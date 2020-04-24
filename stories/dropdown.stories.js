// #### This is a generated file #### //
export default {
  title: 'dropdown'
}
    
                        
  export const USAGE = () => `<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Hover</button>
    <div uk-dropdown>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Click</button>
    <div uk-dropdown="mode: click">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
</div>`
                    
                        
  export const NAV_IN_DROPDOWN = () => `<button class="uk-button uk-button-default" type="button">Hover</button>
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
</div>`
                    
                        
  export const GRID_IN_DROPDOWN = () => `<button class="uk-button uk-button-default" type="button">Hover</button>
<div class="uk-width-large" uk-dropdown>
    <div class="uk-dropdown-grid uk-child-width-1-2@m" uk-grid>
        <div>
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
        <div>
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
                    
                        
  export const POSITION = () => `<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Top Right</button>
    <div uk-dropdown="pos: top-right">
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

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Bottom Justify</button>
    <div uk-dropdown="pos: bottom-justify">
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

<div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Right Center</button>
    <div uk-dropdown="pos: right-center">
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
                    
                        
  export const BOUNDARY = () => `<div class="boundary uk-panel uk-placeholder uk-width-2-3@s">

    <button class="uk-button uk-button-default uk-float-left" type="button">Hover</button>
    <div uk-dropdown="boundary: .boundary">
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

    <button class="uk-button uk-button-default uk-float-right" type="button">Hover</button>
    <div uk-dropdown="boundary: .boundary">
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
                    
                        
  export const BOUNDARY_ALIGNMENT = () => `<div class="boundary-align uk-panel uk-placeholder">

    <button class="uk-button uk-button-default uk-float-left" type="button">Justify</button>
    <div uk-dropdown="pos: bottom-justify; boundary: .boundary-align; boundary-align: true">
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

    <button class="uk-button uk-button-default uk-float-right" type="button">Center</button>
    <div uk-dropdown="pos: bottom-center; boundary: .boundary-align; boundary-align: true">
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
                    
                        
  export const OFFSET = () => `<button class="uk-button uk-button-default" type="button">Hover</button>
<div uk-dropdown="offset: 80">
    <ul class="uk-nav uk-dropdown-nav">
        <li class="uk-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-header">Header</li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="#">Item</a></li>
    </ul>
</div>`
                    
                        
  export const ANIMATION = () => `<button class="uk-button uk-button-default" type="button">Hover</button>
<div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
    <ul class="uk-nav uk-dropdown-nav">
        <li class="uk-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-header">Header</li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="#">Item</a></li>
    </ul>
</div>`
                    