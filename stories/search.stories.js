// #### This is a generated file #### //
export default {
  title: 'search'
}
    
                        
  export const USAGE = () => `<form class="uk-search uk-search-default">
    <input class="uk-search-input" type="search" placeholder="Search...">
</form>`
                    
                        
  export const SEARCH_ICON = () => `<div class="uk-margin">
    <form class="uk-search uk-search-default">
        <span uk-search-icon></span>
        <input class="uk-search-input" type="search" placeholder="Search...">
    </form>
</div>

<div class="uk-margin">
    <form class="uk-search uk-search-default">
        <span class="uk-search-icon-flip" uk-search-icon></span>
        <input class="uk-search-input" type="search" placeholder="Search...">
    </form>
</div>`
                    
                        
  export const CLICKABLE = () => `<div class="uk-margin">
    <form class="uk-search uk-search-default">
        <a href="" uk-search-icon></a>
        <input class="uk-search-input" type="search" placeholder="Search...">
    </form>
</div>

<div class="uk-margin">
    <form class="uk-search uk-search-default">
        <a href="" class="uk-search-icon-flip" uk-search-icon></a>
        <input class="uk-search-input" type="search" placeholder="Search...">
    </form>
</div>`
                    
                        
  export const DEFAULT_MODIFIER = () => `<form class="uk-search uk-search-default">
    <span uk-search-icon></span>
    <input class="uk-search-input" type="search" placeholder="Search...">
</form>`
                    
                        
  export const LARGE_MODIFIER = () => `<form class="uk-search uk-search-large">
    <span uk-search-icon></span>
    <input class="uk-search-input" type="search" placeholder="Search...">
</form>`
                    
                        
  export const NAVBAR_MODIFIER = () => `<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

        <div class="uk-navbar-item">
            <form class="uk-search uk-search-navbar">
                <span uk-search-icon></span>
                <input class="uk-search-input" type="search" placeholder="Search...">
            </form>
        </div>

    </div>
</nav>`
                    
                        
  export const TOGGLE = () => `<a class="uk-search-toggle" href="" uk-search-icon></a>`
                    
                        
  export const OVERLAY = () => `<nav class="uk-navbar-container uk-margin" uk-navbar>

    <div class="nav-overlay uk-navbar-left">

        <a class="uk-navbar-item uk-logo" href="#">Logo</a>

        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>

    <div class="nav-overlay uk-navbar-right">

        <a class="uk-navbar-toggle" uk-search-icon uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>

    </div>

    <div class="nav-overlay uk-navbar-left uk-flex-1" hidden>

        <div class="uk-navbar-item uk-width-expand">
            <form class="uk-search uk-search-navbar uk-width-1-1">
                <input class="uk-search-input" type="search" placeholder="Search..." autofocus>
            </form>
        </div>

        <a class="uk-navbar-toggle" uk-close uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>

    </div>

</nav>`
                    
                        
  export const DROP = () => `<nav class="uk-navbar-container uk-margin" uk-navbar>
    <div class="uk-navbar-left">

        <a class="uk-navbar-item uk-logo" href="#">Logo</a>

        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
    <div class="uk-navbar-right">

        <div>
            <a class="uk-navbar-toggle" uk-search-icon href="#"></a>
            <div class="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
                <form class="uk-search uk-search-navbar uk-width-1-1">
                    <input class="uk-search-input" type="search" placeholder="Search..." autofocus>
                </form>
            </div>
        </div>

    </div>
</nav>`
                    
                        
  export const DROPDOWN = () => `<nav class="uk-navbar-container uk-margin" uk-navbar>
    <div class="uk-navbar-left">

        <a class="uk-navbar-item uk-logo" href="#">Logo</a>

        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
    <div class="uk-navbar-right">

        <div>
            <a class="uk-navbar-toggle" href="#" uk-search-icon></a>
            <div class="uk-navbar-dropdown" uk-drop="mode: click; cls-drop: uk-navbar-dropdown; boundary: !nav">

                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <form class="uk-search uk-search-navbar uk-width-1-1">
                            <input class="uk-search-input" type="search" placeholder="Search..." autofocus>
                        </form>
                    </div>
                    <div class="uk-width-auto">
                        <a class="uk-navbar-dropdown-close" href="#" uk-close></a>
                    </div>
                </div>

            </div>
        </div>

    </div>
</nav>`
                    
                        
  export const MODAL = () => `<nav class="uk-navbar uk-navbar-container uk-margin">
    <div class="uk-navbar-left">

        <a class="uk-navbar-item uk-logo" href="#">Logo</a>

        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Active</a></li>
            <li><a href="#">Item</a></li>
        </ul>

    </div>
    <div class="uk-navbar-right">

        <a class="uk-navbar-toggle" href="#modal-full" uk-search-icon uk-toggle></a>

    </div>
</nav>

<div id="modal-full" class="uk-modal-full uk-modal" uk-modal>
    <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" uk-height-viewport>
        <button class="uk-modal-close-full" type="button" uk-close></button>
        <form class="uk-search uk-search-large">
            <input class="uk-search-input uk-text-center" type="search" placeholder="Search..." autofocus>
        </form>
    </div>
</div>`
                    