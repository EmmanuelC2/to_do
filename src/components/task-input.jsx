import AddButton from "./buttons/add-button";

function TaskInput({ data }) {

    function addTask() {
        if (data.newTask.trim() !== "") {
            data.setTasks(t => [data.newTask, ...t]);
            data.setNewTask("");
        }
    }

    function handleInputChange(event) {
        data.setNewTask(event.target.value);
    }

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
