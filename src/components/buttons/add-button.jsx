function AddButton({data}) {

    // Mirror TaskInput so clicking the button and pressing Enter share the logic.
    function addTask() {
        if (data.newTask.trim() !== "") {
            data.setTasks(t => [data.newTask, ...t]);
            data.setNewTask("");
        }
    }

    return (
        <button
            className="add-button"
            onClick={addTask}
        >
            Add
        </button>
    )
}

export default AddButton;
