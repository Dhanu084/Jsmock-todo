let formData = document.getElementById("todo-form");
let idCounter = 0;

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  ++idCounter;

  let value = document.getElementById("search-field").value;
  document.getElementById("search-field").value = "";
  console.log(value);
  let lists = document.getElementById("todo-lists");
  let item = document.createElement("div");
  item.id = idCounter;
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("click", (e) => {
    changeStyle(item.id);
  });
  item.appendChild(checkBox);
  let newSpan = document.createElement("span");
  newSpan.innerText = value;
  newSpan.classList.add("title");
  let deleteicon = document.createElement("span");
  deleteicon.innerText = "x";
  deleteicon.classList.add("close");
  deleteicon.addEventListener("click", () => {
    deleteDodo(item.id);
  });
  item.appendChild(newSpan);
  item.appendChild(deleteicon);

  lists.appendChild(item);
  document.getElementById("todo-count").innerText = lists.childElementCount;
});

deleteDodo = (id) => {
  let lists = document.getElementById("todo-lists");
  let delitem = document.getElementById(id);
  lists.removeChild(delitem);
  document.getElementById("todo-count").innerText = lists.childElementCount;
};

changeStyle = (id) => {
  let div = document.getElementById(id);
  console.log(div);
  div.classList.toggle("inactive");
};
