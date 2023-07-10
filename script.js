document.addEventListener('DOMContentLoaded', () => {
  // Add click event listeners to navigation menu items
  const menuItems = document.querySelectorAll('nav ul li a');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(item => item.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Add click event listeners to "Add to Cart" buttons
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
  fetch('https://server-2xg5.onrender.com/books')
    .then(response => response.json())
    .then(books => {
      const booksContainer = document.getElementById('books');

      // Create a book element for each book in the data
      books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

       // Add book image 
        const imageElement = document.createElement('img');
        imageElement.src = book.image;
        bookElement.appendChild(imageElement);

        // Add book title
        const titleElement = document.createElement('h2');
        titleElement.textContent = book.title;
        bookElement.appendChild(titleElement);

         // Add book subtitle
        const subtitleElement = document.createElement('p');
        subtitleElement.textContent = book.subtitle;
        bookElement.appendChild(subtitleElement);

        // Add book description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = book.description;
        bookElement.appendChild(descriptionElement);
        
          // Add book price
        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: ${book.price}`;
        bookElement.appendChild(priceElement);

        // Add "Add to Cart" button
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.classList.add('button');
        bookElement.appendChild(addToCartButton);


        booksContainer.appendChild(bookElement);
      });
    });
});
