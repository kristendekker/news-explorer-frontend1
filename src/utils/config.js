export const API_KEY = '933e121e7cc34cc3aa7e80a6123a62e0';

export const BASE_URL_MAIN = 'https://api.dekker-news.students.nomoredomains.rocks';
export const BASE_URL_NEWS = 'https://newsapi.org/v2/top-headlines';
export const BASE_URL_PROXY = 'https://nomoreparties.co/news/v2/everything';

export const PLACEHOLDER_IMAGE = 'https://adhara.hr/web/wp-content/uploads/2015/05/adhara-nutricionizam-news.jpg';

export const SHOW_ARTICLES_ON_PAGE = 3;

const dateTo = new Date().toLocaleString('sv', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
});

const dateFrom = new Date(
    Date.now() - (24 * 3600 * 1000 * 7)
).toISOString().slice(0, 10);

export const DATE_TO = dateTo;
export const DATE_FROM = dateFrom;
export const PAGE_SIZE = 100;