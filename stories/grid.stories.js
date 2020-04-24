// #### This is a generated file #### //
export default {
  title: 'grid'
}
    
                        
  export const USAGE = () => `<div class="uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>`
                    
                        
  export const GAP_MODIFIERS = () => `<div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>

<div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>

<div class="uk-grid-large uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>

<div class="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large-top" uk-grid>
    <div>
        <div class="uk-background-muted uk-padding">Item</div>
    </div>
    <div>
        <div class="uk-background-primary uk-padding uk-light">Item</div>
    </div>
    <div>
        <div class="uk-background-secondary uk-padding uk-light">Item</div>
    </div>
</div>`
                    
                        
  export const COLUMN_AND_ROW = () => `<div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>`
                    
                        
  export const NESTED_GRID = () => `<div class="uk-child-width-1-2 uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
	</div>
	<div>
		<div class="uk-child-width-1-2 uk-text-center" uk-grid>
			<div>
				<div class="uk-card uk-card-primary uk-card-body">Item</div>
			</div>
			<div>
				<div class="uk-card uk-card-primary uk-card-body">Item</div>
			</div>
		</div>
	</div>
</div>`
                    
                        
  export const DIVIDER_MODIFIER = () => `<div class="uk-grid-divider uk-child-width-expand@s" uk-grid>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    <div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
</div>`
                    
                        
  export const MATCH_HEIGHT = () => `<div class="uk-grid-match uk-child-width-expand@s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
     </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item<br>...</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item<br>...<br>...</div>
    </div>
</div>`
                    
                        
  export const MATCH_ONLY_ONE_CELL = () => `<div class="uk-child-width-expand@s" uk-grid>
    <div class="uk-grid-item-match">
        <div class="uk-card uk-card-default uk-card-body">
            <h3>Heading</h3>
            <p>
                Lorem ipsum dolor sit amet.
            </p>
        </div>
     </div>
    <div>
        <h3>Heading</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>
</div>`
                    
                        
  export const TARGETS = () => `<div class="uk-child-width-expand@s uk-text-center" uk-grid uk-height-match="target: > div > .uk-card">
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
     </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item<br>...</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item<br>...<br>...</div>
    </div>
</div>`
                    
                        
  export const GRID_AND_WIDTH = () => `<div class="uk-text-center" uk-grid>
    <div class="uk-width-auto@m">
        <div class="uk-card uk-card-default uk-card-body">Auto</div>
    </div>
    <div class="uk-width-1-3@m">
        <div class="uk-card uk-card-default uk-card-body">1-3</div>
    </div>
    <div class="uk-width-expand@m">
        <div class="uk-card uk-card-default uk-card-body">Expand</div>
    </div>
</div>`
                    
                        
  export const CHILD_WIDTH = () => `<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>`
                    
                        
  export const GRID_AND_FLEX = () => `<div class="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 1</div>
    </div>
    <div class="uk-flex-last">
        <div class="uk-card uk-card-secondary uk-card-body">Item 2</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 3</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 4</div>
    </div>
    <div class="uk-flex-first">
        <div class="uk-card uk-card-primary uk-card-body">Item 5</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item 6</div>
    </div>
</div>`
                    
                        
  export const MASONRY = () => `<div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="masonry: true">
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 100px">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 130px">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 150px">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 160px">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 120px">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 140px">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 200px">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 180px">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 140px">Item</div>
    </div>
</div>`
                    
                        
  export const PARALLAX = () => `<div class="uk-child-width-expand@s uk-text-center" uk-grid="parallax: 150">
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">Item</div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">Item</div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">Item</div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">Item</div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">Item</div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">Item</div>
        <div class="uk-card uk-card-default uk-card-body uk-grid-margin">Item</div>
    </div>
</div>
<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-text-center" uk-grid="parallax: 150">
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body">Item</div>
    </div>
</div>`
                    