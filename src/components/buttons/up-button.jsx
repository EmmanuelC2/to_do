function UpButton({data, index}) {

    // Swap the clicked task with the one above it to move up the list.
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...data.tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            data.setTasks(updatedTasks);
        }
    }

    return (
        <button
            className="move-button"
            onClick={() => moveTaskUp(index)}
        >
            ▲
        </button>
    )
}

export default UpButton;
