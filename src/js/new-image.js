// key (required)	str	Your API
const apiKey = '18773643-f1542c573d467a3c4fb890edb';

export default {
  searchQuerry: '',
  page: 1,
  // ${this.searcQuery}
  fetcImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuerry}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => hits);
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuerry;
  },
  set query(value) {
    this.searchQuerry = value;
  },
};
