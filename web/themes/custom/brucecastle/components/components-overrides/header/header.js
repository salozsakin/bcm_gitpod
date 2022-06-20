const searchBox = document.getElementById('block-brucecastle-localgov-sitewide-search-block-scarfolk');
const searchButton = document.createElement('button');
const searchIcon = document.createElement('img');
const searchTextBox = document.getElementById('views-exposed-form-localgov-sitewide-search-sitewide-search-page-block');
searchIcon.setAttribute("src", "/themes/custom/brucecastle/images/icons/search-icon.svg");
searchIcon.setAttribute("class", "sitewide-search-block__search-icon");
searchButton.setAttribute("class", "sitewide-search-block__search-button");
searchButton.appendChild(searchIcon);
searchBox.appendChild(searchButton);

searchButton.addEventListener('click', e => {
  if (searchTextBox.style.display && searchTextBox.style.display !== 'none') {
    searchTextBox.style.display = 'none';
  } else {
    searchTextBox.style.display = 'flex';
  }
});

window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 800) {
    searchTextBox.style.display = 'none';
  } else {
    searchTextBox.style.display = 'flex';
  }
});
