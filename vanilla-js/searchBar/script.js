// 1. Get the search bar element
// 2. Get the search input element
// 3. Get the search button element
// 4. Add an event listener to the search button
// 5. When the search button is clicked, get the search input value
// 6. Make an API call with the search input value
// 7. Render the result

const searchBar = document.querySelector('.search-bar');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('.search-button');
console.log(searchButton, 'searchButton');

const makeApiCall = async (searchTerm) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${searchTerm}`,
  );
  const data = await response.json();
  return data;
};

const getDataAndRender = async (searchTerm) => {
  if (!searchTerm) {
    return;
  }
  const data = await makeApiCall(searchTerm);
  if (data.items) {
    renderResult(data);
  } else {
    renderError();
  }
};

searchButton.addEventListener('click', async () => {
  const searchTerm = searchInput.value;
  await getDataAndRender(searchTerm);
});

// debounce search input
let timeoutId;
searchInput.addEventListener('input', () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(async () => {
    const searchTerm = searchInput.value;
    await getDataAndRender(searchTerm);
  }, 500);
});

const renderResult = (data) => {
  const resultContainer = document.querySelector('.results');
  resultContainer.innerHTML = '';
  data.items.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${item.owner.avatar_url}" alt="${item.owner.login}" />
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <a href="${item.html_url}" target="_blank">View on GitHub</a>
    `;
    resultContainer.appendChild(card);
  });
};

const renderError = () => {
  const resultContainer = document.querySelector('.result-container');
  resultContainer.innerHTML = '';
  const error = document.createElement('div');
  error.classList.add('error');
  error.innerHTML = `
    <h2>Sorry, no results found</h2>
  `;
  resultContainer.appendChild(error);
};
