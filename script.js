let formEl = document.querySelector('form')
let text = document.getElementById('text')
let todoShow = document.querySelector('.todo-con')
    formEl.addEventListener('submit', (e) => {
          e.preventDefault();
            addTodo();
            clearTodo();
    })
    
    function addTodo(){
        let todoCall = document.createElement('div');
        let todoText = text.value;
        todoCall.innerHTML = `
            <div class="todo-li">
                            <div class="check"><img src="images/icon-check.svg" alt=""></div>
                            <p>${todoText}</p>
                            <button class="close"><img src="images/icon-cross.svg" alt=""> </button>
                        </div>
                        <hr>`
        todoShow.appendChild(todoCall);
        
        
        let closeEl = todoCall.querySelector('.close');
        closeEl.addEventListener('click', () => {
            todoCall.remove();
        });
        
        let check = todoCall.querySelector('.check');
        check.addEventListener('click', () => {
            check.classList.toggle('active-check')

            todoCall.children[0].children[1].classList.add('complete')
        })
        
    }

    function clearTodo(){
        document.getElementById('text').value = "";
    }


    let clearItems = document.querySelector('.clear')
    let items = document.querySelector('.todo-con')

    clearItems.addEventListener('click', () => {
        items.innerHTML = '';
    })

let toggleImage = document.getElementById('toggleDark')
toggleImage.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})





