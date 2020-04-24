// #### This is a generated file #### //
export default {
  title: 'switcher'
}
    
                        
  export const USAGE = () => `<ul class="uk-subnav uk-subnav-pill" uk-switcher>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<ul class="uk-switcher uk-margin">
    <li>Hello!</li>
    <li>Hello again!</li>
    <li>Bazinga!</li>
</ul>`
                    
                        
  export const NAVIGATION_CONTROLS = () => `<ul class="uk-subnav uk-subnav-pill" uk-switcher>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>
<ul class="uk-switcher uk-margin">
    <li>Hello! <a href="#" uk-switcher-item="2">Switch to item 3</a></li>
    <li>Hello again! <a href="#" uk-switcher-item="next">Next item</a></li>
    <li>Bazinga! <a href="#" uk-switcher-item="previous">Previous item</a></li>
</ul>`
                    
                        
  export const CONNECT_MULTIPLE_CONTAINERS = () => `<ul class="uk-subnav uk-subnav-pill" uk-switcher="connect: .switcher-container">
    <li><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<h4>Container 1</h4>

<ul class="uk-switcher switcher-container uk-margin">
    <li>Hello!</li>
    <li>Hello again!</li>
    <li>Bazinga!</li>
</ul>

<h4>Container 2</h4>

<ul class="uk-switcher switcher-container uk-margin">
    <li>Hello! The first item.</li>
    <li>Hello again! The second item.</li>
    <li>Bazinga! The third item.</li>
</ul>`
                    
                        
  export const ANIMATIONS = () => `<ul class="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<ul class="uk-switcher uk-margin">
    <li>Hello!</li>
    <li>Hello again!</li>
    <li>Bazinga!</li>
</ul>`
                    
                        
  export const MULTIPLE_ANIMATIONS = () => `<ul class="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<ul class="uk-switcher uk-margin">
    <li>Hello!</li>
    <li>Hello again!</li>
    <li>Bazinga!</li>
</ul>`
                    
                        
  export const SWITCHER_AND_SUBNAV = () => `<ul class="uk-subnav uk-subnav-pill" uk-switcher>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<ul class="uk-switcher uk-margin">
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
</ul>`
                    
                        
  export const SWITCHER_AND_TAB = () => `<ul uk-tab>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
</ul>

<ul class="uk-switcher uk-margin">
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
</ul>`
                    
                        
  export const VERTICAL_TABS = () => `<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div uk-grid>
            <div class="uk-width-auto@m">
                <ul class="uk-tab-left" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
                    <li><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
            <div class="uk-width-expand@m">
                <ul id="component-tab-left" class="uk-switcher">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
                </ul>
            </div>
        </div>
    </div>
    <div>
        <div uk-grid>
            <div class="uk-width-auto@m uk-flex-last@m">
                <ul class="uk-tab-right" uk-tab="connect: #component-tab-right; animation: uk-animation-fade">
                    <li><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li><a href="#">Item</a></li>
                </ul>
            </div>
            <div class="uk-width-expand@m">
                <ul id="component-tab-right" class="uk-switcher">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
                </ul>
            </div>
        </div>
    </div>
</div>`
                    
                        
  export const SWITCHER_AND_BUTTON = () => `<div uk-switcher="animation: uk-animation-fade; toggle: > *">
    <button class="uk-button uk-button-default" type="button">Item</button>
    <button class="uk-button uk-button-default" type="button">Item</button>
    <button class="uk-button uk-button-default" type="button">Item</button>
</div>

<ul class="uk-switcher uk-margin">
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
</ul>`
                    
                        
  export const SWITCHER_AND_NAV = () => `<div uk-grid>
    <div class="uk-width-small@m">

        <ul class="uk-nav uk-nav-default" uk-switcher="connect: #component-nav; animation: uk-animation-fade">
            <li><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
    <div class="uk-width-expand@m">

        <ul id="component-nav" class="uk-switcher">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
        </ul>

    </div>
</div>`
                    