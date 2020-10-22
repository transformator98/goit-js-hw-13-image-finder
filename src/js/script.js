import refs from './refs';
import newImage from './apiService';
import updateImageMarkup from './update-image-markup';
import LoadMoreBtn from './components/load-more-button';

const loadMoreBtn = new LoadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  newImage.query = form.elements.query.value;
  fetchImages();
  form.reset();
  clearArticlesContainer();
}

function clearArticlesContainer() {
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
