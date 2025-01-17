const GetDataFromAPI = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (!res.ok) {
            throw new Error(`${res.status} Something went wrong! `);
        }
        const data = await res.json();
        // console.log(data);
        RenderTasks(data);
    } catch (error) {
        console.log("I am a handmade error!");
    }
};
GetDataFromAPI();
const RenderTasks = (tasks) => {
    tasks.forEach((element) => RenderTask(element));
};

const toDoList = document.getElementById("todo-list");
function RenderTask(task) {
    let liClass = `bg-white-200`;
    if (task.completed) {
        liClass = `bg-green-500 `;
    }
    const li = document.createElement("li");
    li.innerHTML = `<li class = " ${liClass} p-2 m-1 border ">${task.title}</li>`;
    toDoList.appendChild(li);
}
