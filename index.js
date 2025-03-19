// Function to fetch books from API
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json())
      .then(data => renderBooks(data))
      .catch(error => console.error('Error fetching books:', error));
}

// Function to render book titles in the DOM
function renderBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear previous content

  books.forEach(book => {
      const listItem = document.createElement("li");
      listItem.textContent = book.name;
      bookList.appendChild(listItem);
  });
}

// Ensure the function runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { fetchBooks, renderBooks };
}
