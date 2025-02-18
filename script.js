// JavaScript to handle adding a new book and searching
const addBookForm = document.getElementById('addBookForm');
const booksTable = document.getElementById('booksTable').getElementsByTagName('tbody')[0];
const searchBar = document.getElementById('searchBar');

// Function to add a new book
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const year = document.getElementById('bookYear').value;

    const newRow = booksTable.insertRow();

    newRow.innerHTML = `
        <td>${booksTable.rows.length}</td>
        <td>${title}</td>
        <td>${author}</td>
        <td>${year}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteBook(this)">Delete</button></td>
    `;

    // Clear form inputs after submission
    addBookForm.reset();
});

// Function to delete a book
function deleteBook(button) {
    const row = button.closest('tr');
    row.remove();
}

// Function to search through the books
searchBar.addEventListener('input', () => {
    const searchQuery = searchBar.value.toLowerCase();
    const rows = booksTable.getElementsByTagName('tr');

    Array.from(rows).forEach((row) => {
        const title = row.cells[1].textContent.toLowerCase();
        const author = row.cells[2].textContent.toLowerCase();

        if (title.includes(searchQuery) || author.includes(searchQuery)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
