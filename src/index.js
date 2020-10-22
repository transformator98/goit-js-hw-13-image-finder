import './styles.css';
import './sass/styles.scss';

import './js/script';
import refs from './js/refs';
import newImage from './js/new-image';
import updateImageMarkup from './js/update-image-markup';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  newImage.query = form.elements.query.value;
  fetchImages();
  console.log('newImage', newImage.query);
  form.reset();
  clearArticlesContainer();
});
function clearArticlesContainer() {
  refs.galleryContainer.innerHTML = ''; //сбросить запрос
}
function fetchImages() {
  newImage.fetcImages().then(hits => {
    updateImageMarkup(hits);
  });
}
