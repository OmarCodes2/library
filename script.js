const addBook = document.querySelector('.add');
const close = document.querySelector('.close-button');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('#overlay');
const submit = document.querySelector('.button');
const empty = document.querySelectorAll('.empty')
const form = document.querySelector('.modal-form');
const display = document.querySelector('.container');

let filled = false;

let library = [];

addBook.addEventListener('click', ()=>{
    modal.classList.add('active');
    overlay.classList.add('active');
});

close.addEventListener('click', ()=>{
    modal.classList.remove('active');
    overlay.classList.remove('active');
    form.reset();
});

overlay.addEventListener('click', ()=>{
    modal.classList.remove('active');
    overlay.classList.remove('active');
    form.reset();
});

submit.addEventListener('click', ()=>{
    title = document.getElementById('book-title').value;
    author = document.getElementById('author').value;
    total = document.getElementById('pages-total').value;
    read = document.getElementById('read');
    complete();
    if (filled == true){
        const book = new books(title,author,total, read.checked)
        library.push(book)
        console.log(library)
        modal.classList.remove('active');
        overlay.classList.remove('active');
        filled = false;
        form.reset();
        draw()
    };
});

function books(title, author, pagesTotal, read){
    this.title = title;
    this.author = author;
    this.pagesTotal = pagesTotal;
    this.read = read;
    this.index = null;
}

function complete(){
    if (document.getElementById('book-title').value !=""
    && document.getElementById('author').value !=""
    && document.getElementById('pages-total').value!=""){
        filled = true;
    }
    else{
        filled = false;
    }

}
function clear(){
    const box = document.querySelectorAll('.book');
    box.forEach((choices)=>{
        choices.remove();

    });
}


function draw(){

    clear();
    let index = 0;

    library.forEach((book)=>{
        const box = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const read = document.createElement('div');
        const del = document.createElement('button');
        del.classList.add("delete-button");
        read.dataset.status = index;
        del.dataset.pos = index;
        del.addEventListener('click',()=>{
            console.log(del);
            library.splice(del.dataset.pos, 1);
            draw();

        });

        read.addEventListener('click', ()=>{
            if (library[read.dataset.status].read == false){
                library[read.dataset.status].read = true;
            }
            else{
                library[read.dataset.status].read = false;
            }
            draw();
                
        })


        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pagesTotal;
        del.innerHTML = "remove";
        if (book.read == false){
            read.textContent = "Not Completed";
        }
        else{
            read.textContent = "Completed";
        }

        box.appendChild(title);
        box.appendChild(author);
        box.appendChild(pages);
        box.appendChild(read);
        box.appendChild(del);
        box.classList.add('book');
        display.appendChild(box);

        book.index = index;

        index += 1;
    }) 
}


