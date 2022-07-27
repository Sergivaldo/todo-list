export const load_tasks = (list_tasks,ul)=>{
    
    clear_view(ul)
    list_tasks.forEach((task,index) => {
        const li = task_element(task,index)
        ul.appendChild(li)
    })
}

const task_element = (task,index)=>{
    const li = document.createElement('li')
    li.innerHTML =
    `
        <p id='anotation-${index}'>${task.anotation}</p>
        <input type="checkbox" name="checkbox" data-type='edit' id="check_task-${index}">
        <button class="material-symbols-rounded" data-type='edit' id="delete_task-${index}">delete</button>
    `
    
    const anotation = li.querySelector(`#anotation-${index}`)
    const check_box = li.querySelector(`#check_task-${index}`)
    set_state_task(task,anotation,check_box)
    return li
    
}

export const set_state_task = (task,anotation,check_box)=>{
    check_box.checked = task.completed
    if(task.completed){
        anotation.classList.add('active')
    }else{
        anotation.classList.remove('active')
    }
}


export const is_valid_input = (input)=> {
    return input.reportValidity()
}

export const clear_view = (ul)=>{
    const tasks = ul.querySelectorAll('li')
    tasks.forEach(task => {
        task.remove()
    });
}

export const clear_input = (input_task)=>{
    input_task.value = ''
}