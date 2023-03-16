
const { createApp } = Vue

createApp(
    {
        data() {
            return {
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
                ]  
            } 
            
        },
        methods:{
            changeflag(index){
                if(this.todoList[index].done == false){
                    this.todoList[index].done = true
                }else{
                    this.todoList[index].done = false
                }
                
            }
        }
    }
).mount('#app')