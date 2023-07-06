document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('nav ul li a');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(item => item.classList.remove('active'));
      item.classList.add('active');
    });
  });

  const addToCartButtons = document.querySelectorAll('.button');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('clicked');
      if (button.classList.contains('clicked')) {
        button.style.backgroundColor = 'black';
      } else {
        button.style.backgroundColor = 'rgb(207, 28, 58)';
      }
    });
  });

  // Fetch books data from the API
  fetch('http://localhost:3000/books/')
    .then(response => response.json())
    .then(books => {
      const booksContainer = document.getElementById('books');

      // Create a book element for each book in the data
      books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        const imageElement = document.createElement('img');
        imageElement.src = book.image;
        bookElement.appendChild(imageElement);

        const titleElement = document.createElement('h2');
        titleElement.textContent = book.title;
        bookElement.appendChild(titleElement);

        const subtitleElement = document.createElement('p');
        subtitleElement.textContent = book.subtitle;
        bookElement.appendChild(subtitleElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = book.description;
        bookElement.appendChild(descriptionElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: ${book.price}`;
        bookElement.appendChild(priceElement);

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.classList.add('button');
        bookElement.appendChild(addToCartButton);

        booksContainer.appendChild(bookElement);
      });
    });
});
