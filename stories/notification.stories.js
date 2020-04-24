// #### This is a generated file #### //
export default {
  title: 'notification'
}
    
                        
  export const HTML_MESSAGE = () => `<button class="uk-button uk-button-default demo" type="button" onclick="UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Message with an icon'})">With icon</button>
`
                    
                        
  export const POSITION = () => `<p uk-margin>
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Left...', pos: 'top-left'})">Top Left</button>
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Center...', pos: 'top-center'})">Top Center</button>
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Right...', pos: 'top-right'})">Top Right</button>
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Left...', pos: 'bottom-left'})">Bottom Left</button>
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Center...', pos: 'bottom-center'})">Bottom Center</button>
    <button class="uk-button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Right...', pos: 'bottom-right'})">Bottom Right</button>
</p>`
                    
                        
  export const STYLE = () => `<p uk-margin>
    <button class="uk-button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Primary message...', status: 'primary'})">Primary</button>
    <button class="uk-button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Success message...', status: 'success'})">Success</button>
    <button class="uk-button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Warning message...', status: 'warning'})">Warning</button>
    <button class="uk-button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Danger message...', status: 'danger'})">Danger</button>
</p>`
                    
                        
  export const CLOSE_ALL = () => `<button class="uk-button uk-button-default close" onclick="UIkit.notification.closeAll()">Close All</button>
`
                    