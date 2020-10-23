import refs from './refs';
import newImage from './apiService';
import updateImageMarkup from './update-image-markup';
import LoadMoreBtn from './components/load-more-button';
import * as basicLightbox from 'basiclightbox';

const loadMoreBtn = new LoadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.galleryContainer.addEventListener('click', onImageClick);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  newImage.query = form.elements.query.value;
  fetchImages();
  form.reset();
  clearGalleryContainer();
}

function clearGalleryContainer() {
  refs.galleryContainer.innerHTML = ''; //сбросить запрос
}
function fetchImages() {
  loadMoreBtn.disabled();
  newImage.fetcImages().then(hits => {
    updateImageMarkup(hits);
    loadMoreBtn.show();
    loadMoreBtn.enable();
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}

function onImageClick(event) {
  const imageClick = event.target;
  if (imageClick.nodeName !== 'IMG') {
    return;
  }
  const src = imageClick.dataset.source;
  console.dir(imageClick.dataset.source);
  basicLightbox
    .create(
      `
  	<img width="1400" height="900" src="${src}">
  `,
    )
    .show();
}
