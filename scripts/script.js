books = [
    {
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70,
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    },
    {
        name: "Тысячекратная мысль",
        price: 70,
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70,
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40,
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    }
  ];

function createMarkup(root) {
    root = document.getElementById(root);

    return (element, id) => {
        element = document.createElement(element)
        element.setAttribute("id", id);
        root.append(element);
    }
}

function compose(arr) {
    createMarkup("root")("ul", "ul");

    arr.forEach((element, index) => {
        let id = "li" + index;

        try {
            if (Object.keys(element).length !== 3) {
                throw new Error("More properties expected");
            } else {
                createMarkup("ul")("li", id);
                document.getElementById(id).textContent = `Автор: ${element.author};
                Название: ${element.name}; Цена: ${element.price}`;
            }
        } catch (err) {
            console.log(`${err} in ${index + 1} element`);
        }
    });
}

compose(books);