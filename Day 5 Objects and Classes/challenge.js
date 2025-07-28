const books = require("./books.json");



function priceOfBook(bookName) {
  for (book of books) {
    if(bookName == book.title)
      return (book.price)
  }
}


function affordableBooks(budget) {
  let affordablebookslist=[]
  for (const book of books) {
    if(budget>=book.price)
      affordablebookslist.push(book.title)
  }
  return affordablebookslist
}

function findBookByGenre(genre) {
  let bookbygenre = []
  for (const book of books) {
    for (let j = 0; j < book.genres.length; j++) {
        if(genre == book.genres[j])
        bookbygenre.push(book.title) 
    }
  }
  return bookbygenre
}


function groupByGenre() {
  const groupedByGenre  = {}
  for (const book of books) {
    for (const genre of book.genres) {
      if(!groupedByGenre[genre]){
        groupedByGenre[genre] = [book.title]
      }else{
        groupedByGenre[genre].push(book.title)
      }
    }
  }
  return groupedByGenre
}


function sortBooksByPrice() {

  for (let i = 0; i < books.length-1; i++) {
    for (let j = 0; j < books.length-1; j++) {
      if (books[j].price>books[j+1].price) {
        [books[j],books[j+1]]=[books[j+1],books[j]]
      }
    }
  }
  return books
}



(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();