let form = document.querySelector("#form");
let input = document.querySelector("#input");
let list = document.querySelector("#list");

// javscript varibale
let addtodo = [];

// function renderScreen() {
//     list.innerHTML = ''
//     addtodo.map((item, index) => {
//       list.innerHTML += `
//           <li>${item}
//           <button onclick="deleteBtn(${index})">Delete</button>
//           <button onclick="editBtn(${index})">Edit</button>
//           </li>
//           `;
//     });
//   }

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   addtodo.push(input.value);
//   console.log(addtodo);
//   renderScreen();
//   input.value = "";
// });

// // delete button
// function deleteBtn(index) {
//   addtodo.splice(index,1);
//   renderScreen();
// }

// function editBtn(index) {
//     let newTodo = prompt("ENTER NEW TODO")
//     if (newTodo = " ") {
// alert('poka')
//     } else {
//         addtodo.splice(index , 1 , newTodo)
//         renderScreen()
//     }
// }

function renderScreen() {
    list.innerHTML = "";
    addtodo.map((item, index) => {
      list.innerHTML += `
            <li>${item}
            <button onclick="deleteBtn(${index})">Delete</button>
            <button onclick="editBtn(${index})">Edit</button>
            </li>
            `;
    });
  }
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addtodo.push(input.value);
    console.log(addtodo);
    renderScreen();
    input.value = "";
  });
  
