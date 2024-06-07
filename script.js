

const myLibrary = [];
const newBtn = document.getElementById("openForm");
const addBtn = document.getElementById("addBookBtn");
const closeBtn = document.getElementById("closeForm");
const bookContainer = document.getElementById("bookContainer");
function Book (name, author, pages, status){
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
newBtn.addEventListener("click",function(){
  document.getElementById("bookForm").style.display = "block";
})
closeBtn.addEventListener("click",function(){
  document.getElementById("bookForm").style.display = "none";
})

Book.prototype.toggleReadStatus = function (){
  this.status = this.status === "Read" ? "Not Read" : "Read";
}

bookForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let author = document.getElementById("author").value;
  let name = document.getElementById("name").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked ? "Read" : "Not Read";
  let newBook = new Book(name, author, pages, read);
  myLibrary.push(newBook);
  bookForm.reset();
  document.getElementById("bookForm").style.display = "none";
  addBookToLibrary(newBook);
});

function addBookToLibrary(newBook){
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    const bookName = document.createElement("h3");
    bookName.textContent = newBook.name;
    bookCard.appendChild(bookName);

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${newBook.author}`;
    bookCard.appendChild(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.textContent = `Pages: ${newBook.pages}`;
    bookCard.appendChild(bookPages);

    const bookStatus = document.createElement("p");
    bookStatus.textContent = `Status: ${newBook.status}`;
    bookCard.appendChild(bookStatus);

    const remvBtn = document.createElement("button");
    remvBtn.classList.add("delete");
    remvBtn.textContent = "delete";
    remvBtn.addEventListener("click", function() {
      const index = myLibrary.indexOf(newBook);
      if (index !== -1) {
        myLibrary.splice(index, 1);
        bookContainer.removeChild(bookCard);
      }
    });

    const statusButton = document.createElement("button");
    statusButton.classList.add("toggle-status");
    statusButton.textContent = "Toggle Read Status";
    statusButton.addEventListener("click", function() {
      newBook.toggleReadStatus();
      bookStatus.textContent = `Status: ${newBook.status}`;
    });

    bookCard.appendChild(statusButton);
    bookCard.appendChild(remvBtn);

    bookContainer.appendChild(bookCard);
  }


