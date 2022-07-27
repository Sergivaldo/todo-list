export const setLocalStorage = (list_tasks)=>{
    localStorage.setItem('tasks', JSON.stringify(list_tasks))
}

export const getLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem('tasks'))??[]
}

export const clearLocalStorage = ()=>{
    localStorage.removeItem('tasks')
}