function DeleteButton({data, index}) {

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