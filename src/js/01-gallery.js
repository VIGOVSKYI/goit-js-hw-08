// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector(".gallery");
console.log(galleryRef);

const creatomarcupCard = createCard(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", creatomarcupCard);



function createCard (galleryItems) {
    const marcupCard = galleryItems.map( ({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
    <img 
     class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
        
    }).join("");
    
    return marcupCard;

    console.log(marcupCard);
}
    
console.log(createCard(galleryItems));


galleryRef.addEventListener("click", handlerCkick);

function handlerCkick(event) {
  event.preventDefault();
  
    if (!event.target.classList.contains("gallery__image")) {
        return
    }
    console.log(event.target)
    

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250
    });
    
}


