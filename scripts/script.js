
const books = [
    { 
      author: "Скотт Бэккер",
      name: "Тьма, что приходит прежде",
      price: 70 
    }, 
    {
     author: "Скотт Бэккер",
     name: "Воин-пророк",
    }, 
    { 
      name: "Тысячекратная мысль",
      price: 70
    }, 
    { 
      author: "Скотт Бэккер",
      name: "Нечестивый Консульт",
      price: 70
    }, 
    {
     author: "Дарья Донцова",
     name: "Детектив на диете",
     price: 40
    },
    {
     author: "Дарья Донцова",
     name: "Дед Снегур и Морозочка",
    }
  ];

function createMarkup() {
  const root = document.getElementById("root");
  
  return function(element) {
    root.append(element);
  }
}

const append = createMarkup();

function fillElements () {
  try{
    books.map(element => element.author, element.name, element.price);
    // append(document.createElement("ul")
  } catch(err) {
    console.log();(err.name = "Property Existence Error");
  }

}

fillElements();


let ul = append(document.createElement("ul"));
ul = append(document.createElement("li").textContent = "ky");

ul();