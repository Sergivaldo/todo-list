import * as LS from './localStorage.js'

export const create_task = (task)=> {
    const tasks =  read_tasks()
    tasks.push(task)
    LS.setLocalStorage(tasks)
    console.log(read_tasks())
}

export const set_state_task = (check_input,index) =>{
    const tasks = read_tasks()
    tasks[index].completed = check_input.checked
    LS.setLocalStorage(tasks)
}

export const read_tasks = ()=>{
    return LS.getLocalStorage()
}

export const delete_task = (index)=>{
    const tasks = read_tasks()
    tasks.splice(index,1)
    LS.setLocalStorage(tasks)
    console.log(read_tasks())
}

export const delete_all_tasks = ()=>{
    LS.clearLocalStorage()
}