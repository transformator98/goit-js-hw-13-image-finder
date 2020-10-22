import galleryTpl from '../templates/gallery.hbs';
import refs from './refs';

function updateImageMarkup(hits) {
  const markup = galleryTpl(hits);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateImageMarkup;
