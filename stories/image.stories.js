// #### This is a generated file #### //
export default {
  title: 'image'
}
    
                        
  export const USAGE = () => `<img data-src="images/light.jpg" width="1800" height="1200" alt="" uk-img>`
                    
                        
  export const SRCSET = () => `<img data-src="https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=650&h=433&q=80"
     data-srcset="https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=1300&h=866&q=80 1300w"
     sizes="(min-width: 650px) 650px, 100vw" width="650" height="433" alt="" uk-img>
`
                    
                        
  export const BACKGROUND_IMAGE = () => `<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="images/photo.jpg" uk-img>
  <h1>Background Image</h1>
</div>`
                    
                        
  export const BACKGROUND_IMAGE_WITH_SRCSET = () => `<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
     data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"
     data-srcset="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=1300&h=866&q=80 1300w"
     data-sizes="(min-width: 650px) 650px, 100vw" uk-img>
    <h1>Background Image</h1>
</div>`
                    
                        
  export const TARGET = () => `<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

    <ul class="uk-slideshow-items">
        <li>
            <img data-src="images/photo.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
        </li>
        <li>
            <img data-src="images/dark.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
        </li>
        <li>
            <img data-src="images/light.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !.uk-slideshow-items">
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>`
                    
                        
  export const LOAD_PREVIOUS_AND_NEXT = () => `<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>

    <ul class="uk-slideshow-items">
        <li>
            <img data-src="images/photo.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !ul > :last-child, !* +*">
        </li>
        <li>
            <img data-src="images/dark.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !* -*, !* +*">
        </li>
        <li>
            <img data-src="images/light.jpg" width="1800" height="1200" alt="" uk-cover uk-img="target: !* -*, !ul > :first-child">
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>`
                    