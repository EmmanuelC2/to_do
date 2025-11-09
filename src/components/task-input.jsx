import AddButton from "./buttons/add-button";

function TaskInput({ data }) {

    // Normalize user input and prepend new tasks to keep the latest at the top.
    function addTask() {
        if (data.newTask.trim() !== "") {
            data.setTasks(t => [data.newTask, ...t]);
            data.setNewTask("");
        }
    }

    function handleInputChange(event) {
        data.setNewTask(event.target.value);
    }

    // Allow creating a task without clicking the Add button.
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            addTask();
        }
    }

    return (
        <div className="task-input">
            <input
                type="text"
                placeholder="Enter a task..."
                value={data.newTask}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <AddButton data={data} />
        </div>
    )
}

export default TaskInput;
