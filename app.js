const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const todoFilter=document.querySelector(".filter-todo")


const alertSuccess=document.querySelector(".alert-success");
const alertWarning=document.querySelector(".alert-warning");

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
todoFilter.addEventListener("click",filter);

function addTodo(e){
    e.preventDefault();

    const isEmpty=str=>!str.trim().length;

    if(isEmpty(todoInput.value)){
        alertWarning.style.display="block";
        setTimeout(() => {
           alertWarning.style.display="none";
        }, 1500);
    }else{
        alertSuccess.style.display="block";
        setTimeout(() => {
            alertSuccess.style.display="none";
         }, 1500);
    }



    const todoDıv=document.createElement("div");
    todoDıv.classList.add("todo");


    const completeButton=document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML="<i class='fas fa-check-circle'></i>";
    todoDıv.appendChild(completeButton);


    const newTodo=document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText=todoInput.value;
    todoDıv.appendChild(newTodo);


    const trashButton=document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML="<i class='fa fa-minus-circle'></i>";
    todoDıv.appendChild(trashButton);

    
    todoList.appendChild(todoDıv);
    todoInput.value="";
    

}

function deleteCheck(e){
    const item=e.target;

    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();

        })
    }
    if(item.classList[0]==="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filter(e){
    const todos=todoList.childNodes;
    todos.forEach(function(item){
        switch(e.target.value){
            case"all":
                item.style.display="flex"
                break;
            case"completed":
            if(item.classList.contains("completed")){
                item.style.display="flex";
            }else{
                item.style.display="none"
            }
            break;
            case"uncompleted":
            if(!item.classList.contains("completed")){
                item.style.display="flex";
            }else{
                item.style.display="none"
            }
            break;
          


        }
    })
}

   







