// #button addbtn
// #input searchbox

let addbtn = document.querySelector("#addbtn");
let deletebtn = document.querySelector("#deletebtn");
let input = document.querySelector("#searchbox");
let tableList = document.querySelector("#tableList");

addbtn.addEventListener("click", () => {
  //   let tableList = document.querySelector("#tableList");
  //   let userInput = input.value.trim();

  //   if (userInput !== "") {
  //     let userTask = document.createElement("li");
  //     userTask.textContent = userInput;
  //     tableList.appendChild(userTask);
  //     input.value = "";
  //   } else {
  //     alert("Invalid input");
  //   }
  // });

  let userInput = input.value.trim();

  if (!userInput) {
    alert("Invalid Input, please enter soemthing");
    return;
  }

  let li = document.createElement("li");
  // li.innerHTML = `
  // <span>${userInput}</span>
  // <button class="delete-item">X</button>
  // `;

  let span = document.createElement("span");
  span.innerHTML = userInput;
  let button = document.createElement("button");
  button.innerText = "X";
  button.classList.add("deleteitem");

  li.appendChild(span)
  li.appendChild(button)
  tableList.appendChild(li);
  input.value = "";


});





tableList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteitem")) {
    e.target.parentElement.remove();
  }
  // let tableList = document.querySelector("#tableList");
  // console.log(tableList)

});


// old delete
deletebtn.addEventListener("click", () => {
  let tableList = document.querySelector("#tableList");

  if (tableList.children.length === 0) {
    alert("Empty! no items yer");
  } else {
    tableList.lastElementChild.remove();
  }
});
