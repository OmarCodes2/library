const addBook = document.querySelector('.add');
const close = document.querySelector('.close-button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('#overlay');
const submit = document.querySelector('.button');

console.log(submit);
addBook.addEventListener('click', ()=>{
    console.log("YES")
    modal.classList.add('active')
    overlay.classList.add('active')
})

close.addEventListener('click', ()=>{
    modal.classList.remove('active')
    overlay.classList.remove('active')
})



