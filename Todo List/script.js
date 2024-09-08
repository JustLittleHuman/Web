function appendTask() {
    if (inputTask.value.length === 0) {
        return;
    }

    let curId = "task" + ids;

    tasks.insertAdjacentHTML("beforeend", `<div class="task" id="${curId}">
                <span class="desc unfinished">${inputTask.value}</span>
                <div class="controls">
                    <button class="control done">Done</button>
                    <button class="control edit">Edit</button>
                    <button class="control delete">Delete</button>
                </div>
            </div>`);

    inputTask.value = "";
    let el = document.getElementById(curId);
    let desc = el.querySelector(".desc");

    let del = el.querySelector(".delete");
    del.addEventListener("click", ()=>{
        el.remove();
    })

    let edit = el.querySelector(".edit");
    edit.addEventListener("click", ()=>{
        inputTask.value = desc.innerHTML;
        el.remove();
        inputTask.focus();
    })

    let done = el.querySelector(".done");
    done.addEventListener("click", ()=>{
        if (desc.classList.contains("unfinished"))
        {
            desc.classList.remove("unfinished");
            desc.classList.add("finished");
            done.innerText = "Undo";
        }
        else
        {
            desc.classList.remove("finished");
            desc.classList.add("unfinished");
            done.innerText = "Done";
        }
    })

    ids++;
}

let ids = 1;
const inputTask = document.getElementById("inputTask");
const addTask = document.getElementById("addTask");
const tasks = document.querySelector(".tasks");
addTask.addEventListener("click", appendTask)