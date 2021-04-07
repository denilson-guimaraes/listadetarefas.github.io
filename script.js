function addList() {
   let e = document.querySelector('#inputAssignment').value
   let storage = localStorage.getItem('list')

   if (localStorage.getItem('list') == null) {
      storage = [e]
      localStorage.setItem('list', JSON.stringify(storage))
      console.log(JSON.stringify(storage))
   } else {
      storage = JSON.parse(storage)
      storage.push(e)
      localStorage.setItem("list", JSON.stringify(storage))
      console.log(localStorage.getItem('list'))
   }
}

function clearList() {
   localStorage.removeItem('list')
}

function loadList() {
   if (localStorage.getItem('list') != null) {

      let assignments = document.querySelector('#assignments')

      assignments.innerHTML = "";

      for (let i in JSON.parse(localStorage.getItem('list'))) {
         // console.log(i)
         let jList = JSON.parse(localStorage.getItem('list'))
         assignments.innerHTML += `
         
         <div class="assignment ${i}">
            <p>${jList[i]}</p>
            <img onclick="removeList(this.parentElement)" src="./icons/x.svg" alt="Excluir">
         </div>
         `
      }
   } else {
      assignments.innerHTML = `
      <div class="assignment">
         <p>Lista vasia</p>
         
      </div>
      `

   }
   document.querySelector("#inputAssignment").value = ""
}

function removeList(e) {
   let eId = e.className.split(" ")[1]
   let storage = localStorage.getItem('list')

   let s = JSON.parse(storage)



   s.splice(eId, 1)

   // console.log(eId, s)

   localStorage.setItem('list', JSON.stringify(s))
   loadList()

   // console.log(eId,JSON.parse(storage))
}





// Dispara as funcoes ao apertar os botões
let buttons = document.querySelectorAll('.clearAssignments')
for (let btn of buttons) {
   btn.addEventListener('click', clearList)
   btn.addEventListener('click', loadList)
}
let button = document.querySelector('#addBtn')
button.addEventListener('click', loadList)
