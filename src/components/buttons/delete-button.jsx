function DeleteButton({data, index}) {

    // Filter out the current position instead of mutating the original array.
    function deleteTask(index) {
        const updatedTasks = data.tasks.filter((element, i) => i !== index);
        data.setTasks(updatedTasks);
    }

    return (
        <button
            className="delete-button"
            onClick={() => deleteTask(index)}
        >
            🗑
        </button>
    )
}

export default DeleteButton;
