let addform = document.addfrm;
let text = addform.add;
let ul = document.querySelector("ul");

// let addItem = (item) => {
//   let li = document.createElement("li");
//   let span = document.createElement("span");

//   let textnode = document.createTextNode(item);
//   li.appendChild(textnode);
//   li.classList.add(
//     "list-group-item",
//     "d-flex",
//     "justify-content-between",
//     "align-items-center",
//     "text-light"
//   );
//   span.classList.add("fa-regular", "fa-trash-can");
//   li.appendChild(span);
//   ul.appendChild(li);
// };

let addItem = (item) => {
  let li = ` <li
    class="list-group-item d-flex justify-content-between align-items-center text-light"
  >
    <span>${item}</span>
    <i class="fa-regular fa-trash-can delete"></i>
  </li>`;
  ul.innerHTML += li;
  //   ul.appendChild(li); // here this method has failed to execute on 'Node'
};
ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    // here target provide us element name or node name like li, span, i
    e.target.parentElement.remove(); // here we have to remove colomn that's why we used parentElement.remove()
  }
});

let searchItem = (text) => {
  let listItem = ul.children;
  for (let li of listItem) {
    if (li.innerText.toLowerCase().indexOf(text) === -1) {
      li.classList.add("filtered");
    } else {
      li.classList.remove("filtered");
    }
  }
};

let searchText = document.querySelector(".search input"); // here we have to find an input element their parent class name should be search
searchText.addEventListener("keyup", (e) => {
  searchItem(searchText.value.toLowerCase());
});

addform.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(text.value);
  let item = text.value;
  if (item.length > 0) {
    addItem(item);
  }
  text.value = "";
});
