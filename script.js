import * as Task from './modules/tasks.js'
import * as View from './modules/view.js'

const ul = document.querySelector("#todo__content__list")
const new_task_btt = document.querySelector('#todo__footer > button')
const menu_button = document.getElementById('menu-button')
const remove_all_btt = document.querySelector('#menu > ul > li')

new_task_btt.addEventListener('click',()=>{
    const new_task = {
        anotation:'',
        completed:false,
    }
    const input_task = document.getElementById('input_task')
    new_task.anotation = input_task.value
    if(View.is_valid_input(input_task)){

        Task.create_task(new_task)
        View.load_tasks(Task.read_tasks(),ul)
        View.clear_input(input_task)
    }
    
})

ul.addEventListener('click',(e)=>{  
    if(e.target.dataset.type == 'edit'){
        const [action,index] =  e.target.id.split('-')
        
        if(action == 'check_task'){
            const check_input = document.getElementById(`check_task-${index}`)
            Task.set_state_task(check_input,index)
            const task = Task.read_tasks()[index]
            const anotation = document.getElementById(`anotation-${index}`)
            View.set_state_task(task,anotation,check_input)
        }else{
            Task.delete_task(index)
            View.load_tasks(Task.read_tasks(),ul)
        }
    }
        
})

menu_button.addEventListener('click',()=>{
    const menu = document.getElementById('menu')
    menu.classList.toggle('active')
}) 

remove_all_btt.addEventListener('click',()=>{
    const menu = document.getElementById('menu')
    Task.delete_all_tasks()
    View.load_tasks(Task.read_tasks(),ul)
    menu.classList.remove('active')

})

window.addEventListener('load',()=>{
    View.load_tasks(Task.read_tasks(),ul)
})

