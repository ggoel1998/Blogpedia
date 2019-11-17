// let editBtn = document.getElementById('editBtn');
// let editArticle = document.getElementById('exampleFormControlTextarea1')
let {getAllComments} = require('../controllers/comments')

async function NumberOfComments(){
  let Number = await getAllComments() ;
  console.log(Number)
   return Number;
 
}


// editBtn.onclick = function(){
//     document.getElementById("")
// }

// function openForm() {
//     document.getElementById("myForm").style.display = "block";
//   }
  
//   function closeForm() {
//     document.getElementById("myForm").style.display = "none";
//   }