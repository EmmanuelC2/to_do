import React, { useState } from "react";
import PageLayout from "../components/page-layout";
import GeneralBanner from "../components/general-banner";
import TaskInput from "../components/task-input";
import TaskList from "../components/task-list";
import useLocalStorage from "use-local-storage";

function HomePage() {

    const [tasks, setTasks] = useLocalStorage("tasks", []);
    const [newTask, setNewTask] = useState("");
    const [isDark, setIsDark] = useLocalStorage("isDark", false);

    const pageState = {
        tasks,
        setTasks,
        newTask,
        setNewTask,
        isDark,
        setIsDark,
    }

    return (

        <PageLayout data={pageState}>
            <GeneralBanner data={pageState}/>
            <TaskInput data={pageState} />
            <TaskList data={pageState}/>
        </PageLayout> 
        
    );
}

export default HomePage;
