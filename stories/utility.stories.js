// #### This is a generated file #### //
export default {
  title: 'utility'
}
    
                        
  export const PANEL = () => `<div class="uk-child-width-1-3@s" uk-grid>
    <div>
        <div class="uk-panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div>
        <div class="uk-panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div>
        <div class="uk-panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
</div>`
                    
                        
  export const SCROLLABLE_PANEL = () => `<div class="uk-panel uk-panel-scrollable">
    <ul class="uk-list">
        <li><label><input class="uk-checkbox" type="checkbox"> Category 1</label></li>
        <li>
            <label><input class="uk-checkbox" type="checkbox"> Category 2</label>
            <ul>
                <li><label><input class="uk-checkbox" type="checkbox"> Category 2.1</label></li>
                <li><label><input class="uk-checkbox" type="checkbox"> Category 2.2</label></li>
                <li>
                    <label><input class="uk-checkbox" type="checkbox"> Category 2.3</label>
                    <ul>
                        <li><label><input class="uk-checkbox" type="checkbox"> Category 2.3.1</label></li>
                        <li><label><input class="uk-checkbox" type="checkbox"> Category 2.3.2</label></li>
                    </ul>
                </li>
                <li><label><input class="uk-checkbox" type="checkbox"> Category 2.4</label></li>
            </ul>
        </li>
        <li><label><input class="uk-checkbox" type="checkbox"> Category 3</label></li>
        <li><label><input class="uk-checkbox" type="checkbox"> Category 4</label></li>
    </ul>

</div>`
                    
                        
  export const CLEARING_AND_FLOATING = () => `<div class="uk-clearfix">
    <div class="uk-float-right">
        <div class="uk-card uk-card-default uk-card-body">Right</div>
    </div>
    <div class="uk-float-left">
        <div class="uk-card uk-card-default uk-card-body">Left</div>
    </div>
</div>`
                    
                        
  export const OVERFLOW = () => `<div class="uk-overflow-auto uk-height-small">
    <table class="uk-table uk-table-striped uk-table-condensed uk-text-nowrap">
        <thead>
            <tr>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
                <th>Table Heading</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
                <td>Table Footer</td>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
            <tr>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
                <td>Table Data</td>
            </tr>
        </tbody>
    </table>
</div>`
                    
                        
  export const OVERFLOW_AUTO = () => `<div class="uk-height-medium">
    <div class="js-wrapper">

        <p>Some content before the overflow auto container.</p>

        <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
            <div class="uk-grid-small" uk-grid>
                <div class="uk-width-1-2"><img src="images/light.jpg" alt=""></div>
                <div class="uk-width-1-2"><img src="images/dark.jpg" alt=""></div>
                <div class="uk-width-1-2"><img src="images/photo.jpg" alt=""></div>
                <div class="uk-width-1-2"><img src="images/photo2.jpg" alt=""></div>
            </div>
        </div>

        <p>Some content after the overflow auto container.</p>

    </div>
</div>
<a class="uk-button uk-button-default" href="#modal-overflow" uk-toggle>Open</a>

<div id="modal-overflow" uk-modal>
    <div class="uk-modal-dialog">

        <button class="uk-modal-close-default" type="button" uk-close></button>

        <div class="uk-modal-header">
            <h2 class="uk-modal-title">Headline</h2>
        </div>

        <div class="uk-modal-body" uk-overflow-auto>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

        <div class="uk-modal-footer uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            <button class="uk-button uk-button-primary" type="button">Save</button>
        </div>

    </div>
</div>`
                    
                        
  export const RESIZE = () => `<div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <pre class="uk-resize-vertical">
            <code>
&lt;!-- Resize vertically --&gt;
&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
&lt;/div&gt;

&lt;div class="uk-child-width-1-2" uk-grid&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
            </code>
        </pre>
    </div>
    <div>
        <pre class="uk-resize">
            <code>
&lt;!-- Resize horizontally and vertically --&gt;
&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;...&lt;/div&gt;
&lt;/div&gt;

&lt;div class="uk-child-width-1-2" uk-grid&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
            </code>
        </pre>
    </div>
</div>`
                    
                        
  export const INLINE = () => `<div class="uk-inline">
    <img src="images/photo.jpg" width="300" alt="">
    <div class="uk-position-medium uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">Overlay</div>
</div>`
                    
                        
  export const BORDER_RADIUS = () => `<img class="uk-border-rounded" src="images/avatar.jpg" width="200" height="200" alt="Border rounded">
<img class="uk-border-circle" src="images/avatar.jpg" width="200" height="200" alt="Border circle">
<img class="uk-border-pill" src="images/avatar.jpg" width="200" height="200" alt="Border pill">`
                    
                        
  export const BOX_SHADOW = () => `<div class="uk-child-width-1-2@s uk-text-center" uk-grid>
    <div>
        <div class="uk-box-shadow-small uk-padding">Small</div>
    </div>

    <div>
        <div class="uk-box-shadow-medium uk-padding">Medium</div>
    </div>

    <div>
        <div class="uk-box-shadow-large uk-padding">Large</div>
    </div>

    <div>
        <div class="uk-box-shadow-xlarge uk-padding">X-Large</div>
    </div>
</div>`
                    
                        
  export const BOX_SHADOW_BOTTOM = () => `<div class="uk-box-shadow-bottom uk-box-shadow-small uk-width-1-2@s uk-text-center">
    <div class="uk-background-default uk-padding-large">
        Box shadow bottom
    </div>
</div>`
                    
                        
  export const HOVER = () => `<div class="uk-child-width-1-2@s uk-text-center" uk-grid>
    <div>
        <div class="uk-box-shadow-hover-small uk-padding">Hover Small</div>
    </div>

    <div>
        <div class="uk-box-shadow-hover-xlarge uk-padding">Hover X-Large</div>
    </div>

    <div>
        <div class="uk-box-shadow-small uk-box-shadow-hover-large uk-padding">Small + Hover Large</div>
    </div>

    <div>
        <div class="uk-box-shadow-xlarge uk-box-shadow-hover-medium uk-padding">X-Large + Hover Medium</div>
    </div>
</div>`
                    
                        
  export const DROP_CAP = () => `<p class="uk-dropcap">Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`
                    
                        
  export const LOGO = () => `<a class="uk-logo" href="#">Logo</a>
<div class="uk-panel uk-padding uk-background-secondary uk-light">
    <a class="uk-logo" href="#">Logo</a>
</div>`
                    
                        
  export const LOGO_IMAGE = () => `<div class="uk-child-width-expand@s" uk-grid>
    <div>
        <div class="uk-panel uk-padding uk-background-muted">
            <a class="uk-logo" href="#">
                <img src="images/logo-placeholder.svg" alt="">
                <img class="uk-logo-inverse" src="images/logo-placeholder-light.svg" alt="">
            </a>
        </div>
    </div>
    <div>
        <div class="uk-panel uk-padding uk-background-secondary uk-light">
            <a class="uk-logo" href="#">
                <img src="images/logo-placeholder.svg" alt="">
                <img class="uk-logo-inverse" src="images/logo-placeholder-light.svg" alt="">
            </a>
        </div>
    </div>
</div>`
                    
                        
  export const BLEND_MODES = () => `<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-small uk-light" uk-grid>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-multiply" src="images/dark.jpg" alt="Blend Multiply">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Multiply</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-screen" src="images/dark.jpg" alt="Blend Screen">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Screen</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-overlay" src="images/dark.jpg" alt="Blend Overlay">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Overlay</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-darken" src="images/dark.jpg" alt="Blend Darken">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Darken</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-lighten" src="images/dark.jpg" alt="Blend Lighten">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Lighten</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-color-dodge" src="images/dark.jpg" alt="Blend Color Dodge">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Color Dodge</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-color-burn" src="images/dark.jpg" alt="Blend Color Burn">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Color Burn</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-hard-light" src="images/dark.jpg" alt="Blend Hard Light">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Hard Light</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-soft-light" src="images/dark.jpg" alt="Blend Soft Light">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Soft Light</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-difference" src="images/dark.jpg" alt="Blend Difference">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Difference</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-exclusion" src="images/dark.jpg" alt="Blend Exclusion">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Exclusion</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-hue" src="images/dark.jpg" alt="Blend Hue">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Hue</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-saturation" src="images/dark.jpg" alt="Blend Saturation">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Saturation</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-color" src="images/dark.jpg" alt="Blend Color">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Color</p>
            </div>
        </div>
    </div>
    <div>
        <div class="uk-inline uk-background-primary">
            <img class="uk-blend-luminosity" src="images/dark.jpg" alt="Blend Luminosity">
            <div class="uk-position-center">
                <p class="uk-h4 uk-margin-remove">Luminosity</p>
            </div>
        </div>
    </div>
</div>`
                    
                        
  export const TRANSFORM_CENTER = () => `<div class="uk-inline">
    <img src="images/light.jpg" alt="">
    <a class="uk-position-absolute uk-transform-center" style="left: 50%; top: 50%" href="#" uk-marker></a>
</div>`
                    
                        
  export const TRANSFORM_ORIGIN = () => `<div class="uk-child-width-1-3@m" uk-grid>
    <div class="uk-animation-toggle" tabindex="0">
        <div class="uk-transform-origin-bottom-right uk-card uk-card-default uk-card-body uk-animation-scale-up">
            <p class="uk-text-center">Bottom Right</p>
        </div>
    </div>
    <div class="uk-animation-toggle" tabindex="0">
        <div class="uk-transform-origin-top-center uk-card uk-card-default uk-card-body uk-animation-scale-up">
            <p class="uk-text-center">Top Center</p>
        </div>
    </div>
    <div class="uk-animation-toggle" tabindex="0">
        <div class="uk-transform-origin-bottom-center uk-card uk-card-default uk-card-body uk-animation-scale-up">
            <p class="uk-text-center">Bottom Center</p>
        </div>
    </div>
</div>`
                    
                        
  export const DISABLED = () => `<a class="uk-disabled uk-button uk-button-default" href="#">Disabled</a>`
                    
                        
  export const DRAG = () => `<div class="uk-drag uk-width-small uk-padding uk-background-muted uk-text-center">
    <i uk-icon="icon: move; ratio: 2"></i>
</div>`
                    