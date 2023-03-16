
const { createApp } = Vue

createApp(
    {
        data() {
            return {
                newtask: "",
                todoList: [
                    {
                        todo: 'prova1',
                        done: false,
                    },
                    {
                        todo: 'prova2',
                        done: true,
                    },
                    {
                        todo: 'prova3',
                        done: true,
                    }
                ], 
            } 
            
        },
        methods:{
            changeflag(index){
                if(this.todoList[index].done == false){
                    this.todoList[index].done = true
                }else{
                    this.todoList[index].done = false
                }
            },
            addtask(){
                let newtask ={
                    todo: this.newtask,
                    done: false,
                }
                this.todoList.push(newtask);
            },
            removeTask(index){
                this.todoList.splice(index, 1)
            },
        }
    }
).mount('#app')