(function headerSearch(Drupal) {
  Drupal.behaviors.headerSearch = {
    attach: function (context) {
      context = context || document;
      const searchBox = context.getElementById('block-brucecastle-localgov-sitewide-search-block-scarfolk');
      const searchButton = context.createElement('button');
      const searchIcon = context.createElement('img');
      const searchTextBox = context.getElementById('views-exposed-form-localgov-sitewide-search-sitewide-search-page-block');
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
    },
  };
}(Drupal));
