import DeleteButton from "./buttons/delete-button";
import UpButton from "./buttons/up-button";
import DownButton from "./buttons/down-button";

function TaskList({ data }) {

    return (
        <div className="task-list">
            <div className="task-list__list-wrapper">
                <ol>
                    {/* Keep index as key because tasks are stored as simple strings. */}
                    {data.tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <div className="button-container">
                                {/* Each control receives the shared state bag plus the row index. */}
                                <DeleteButton data={data} index={index} />
                                <UpButton data={data} index={index} />
                                <DownButton data={data} index={index} />
                            </div>
                        </li>
                    )}
                </ol>
            </div>

        </div>
    )
}

export default TaskList;
