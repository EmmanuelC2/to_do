function DownButton({data, index}) {

    // Mirror move up behavior but guard against moving past the final index.
    function moveTaskDown(index) {
        if (index < data.tasks.length - 1) {
            const updatedTasks = [...data.tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            data.setTasks(updatedTasks);
        }
    }

    return (
        <button
            className="move-button"
            onClick={() => moveTaskDown(index)}
        >
            ▼
        </button>
    )
}

export default DownButton;
