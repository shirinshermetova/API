// let list = document.querySelector(".list")
// let data = []
// async function getUsers (){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")

//         console.log(response);
//         data = await response.json()
//         console.log(data);
//         render(data)
        
        
//     }
//     catch(error){
//         console.log('Xatolik',error);
        
//     }
// }
// function render(){
//     list.innerHTML = data.map((user)=> `<li>${user.name}</li>`).join("")
// }
// getUsers()

async function editTodo(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/todos/1",{


        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title : "JavaScriptda kod yozish",
            completed: true,
            userId: 1,
        }),
        
    },
)
let editTodo = await response.json()
console.log(editTodo);
}

catch(error)
{
    console.log("Xatolik", error);
    
}
}
editTodo()
async function deleteTodo(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1",{
            method : "DELETE"
        })
        let deleteTodo = await response.json()
        console.log("O'chirilgan todo", deleteTodo);
        
    }
    catch(error){
        console.log("Xatolik", error);
        
    }
}
deleteTodo()
