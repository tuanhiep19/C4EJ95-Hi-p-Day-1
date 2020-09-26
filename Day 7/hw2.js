// 11
let button = document.getElementById("upper_btn");
console.log(button);

function displayButton() {
  alert(`The button is clicked`);
}
document.getElementById(`upper_btn`).addEventListener(`click`, displayButton);

function read() {
  let input = document.getElementById(`name_input`);
  console.log(input);
  let inputValue = document.getElementById(`name_input`).value;
  console.log(inputValue);
  let newInputValue = inputValue.toUpperCase();
  console.log(newInputValue);
  let result = document.getElementsByClassName(`result`)[0];
  console.log(result);
  document.getElementsByClassName(`result`)[0].innerHTML = newInputValue;
}
document.getElementById(`upper_btn`).addEventListener(`click`, read);

// 12
let items = [`Backpack`, `MiBand Watch`, `Ring`];
console.log(items);
console.log(document.getElementById(`item_input`));
console.log(document.getElementById(`add_btn`));
function add() {
  let itemInput = document.getElementById(`item_input`).value;
  items.push(itemInput);
  console.log(items);
  let list = document.createElement("li");
  // let node = document.createTextNode(itemInput);
  // list.appendChild(node);
  // let element = document.getElementById("ul");
  // element.appendChild(list + <button type="button" class="remove">remove</button>);
  let container = document.getElementById(`ul`);
  container.insertAdjacentHTML(
    "beforeend",
    `<li>${itemInput}<button type="button" class="remove">remove</button></li>`
  );
  document.getElementById(`item_input`).value = ``;
}
document.getElementById(`add_btn`).addEventListener(`click`, add);

let removeButton = document.getElementsByClassName("remove");
function remove() {
  
}