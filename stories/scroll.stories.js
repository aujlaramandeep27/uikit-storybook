// #### This is a generated file #### //
export default {
  title: 'scroll'
}
    
                        
  export const USAGE = () => `<a class="uk-button uk-button-primary" href="#target" uk-scroll>Scroll down</a>`
                    
                        
  export const CALLBACK_AFTER_SCROLL = () => `<a id="js-scroll-trigger" class="uk-button uk-button-primary" href="#target" uk-scroll>Down with callback</a>

<script>
    UIkit.util.on('#js-scroll-trigger', 'scrolled', function () {
        alert('Done.');
    });
</script>`
                    