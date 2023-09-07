const input = document.getElementById('input');
const btn = document.querySelector('.add');
const messageBox = document.querySelector(".right");

function addTask(){
    if(input.value == ''){
        alert("You Must Write Something");
    }
    else{
        let task = document.createElement("div");
        task.innerHTML = input.value;
        let span  = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add= "span";
        span.setAttribute('id', 'spanhai');
        task.appendChild(span);
        messageBox.appendChild(task);
        // messageBox.appendChild(span);
        console.log("done");
        input.value = "";
    }
    savingTask();
}

function savingTask(){
    localStorage.setItem("data", messageBox.innerHTML);
}

function showingTask(){
    messageBox.innerHTML = localStorage.getItem("data");
}

messageBox.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN" ){
        e.target.parentElement.remove();
        savingTask();
    }
})

function clearAll(){
    const val = prompt("Type 'YES' if you really want to clear all your tasks");

    if(val == 'YES'){
        localStorage.clear();
        location.reload();
    }
    else{
        alert("Value Does not match with 'YES'--> Try again ");
    }
}

showingTask();
