require('./sass/main.scss')
require('./index.html')
require('./js/seed.js');


class List {
  constructor(el) {
    this.el = el
    this.data = Seed.api
  }

  static createListItem(text) {
    const li = document.createElement('li');
    li.textContent = text
    return li
  }

  update() {
    while (this.el.firstChild) {
      this.el.removeChild(this.el.firstChild);
    }

    for (const text of this.data) {
      console.log(text.from);
      this.el.appendChild(List.createListItem(text.from));
    }
  }

}

// const listBox = document.getElementById('listBox');
// const listBinding = new List(listBox);

// listBinding.update();
