import { FaPlus } from "react-icons/fa";
import Button from "../Button";
import { Tasks as initialTasks, User } from "../../utils/dummyData";
import { useState } from "react";
import { cn } from "../../utils/functions";
import TaskSection from "./TaskSection";
import { TaskType } from "../../utils/types";
import UserInfo from "../UserInfo";

const AdminPanel = () => {
    const [tasks, setTasks] = useState<TaskType[]>(initialTasks);
    const [activeTask, setActiveTask] = useState<TaskType | null>(
        initialTasks[0] || null
    );

    const handleOnDeleteTask = (id?: string) => {
        // Remove the task from the state
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);

        // If the deleted task was the active task, set a new active task
        if (activeTask && activeTask.id === id) {
            setActiveTask(updatedTasks.length > 0 ? updatedTasks[0] : null);
        }
    };

    const handleOnAddNewModule = (id?: string) => {
        console.log("Adddd", id);
        const newModule: TaskType["modules"][number] = {
            title: "New Module",
            description:
                "This is new module. Please add proper description for this.",
            videoSrc: "",
        };
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, modules: [...task.modules, newModule] }
                    : task
            )
        );
    };

    return (
        <main className="flex h-full border-2">
            <div className=" border-2 space-y-3 p-3 bg-[#0e131f] ">
                {/* User Info */}
                <UserInfo data={User} />

                {/* Created Tasks List */}
                <div className="flex flex-col gap-2">
                    {tasks.map((t) => (
                        <Button
                            key={t.id}
                            text={t.title}
                            onClick={() => setActiveTask(t)}
                            className={cn("", {
                                "border-blue-300 text-white bg-blue-500":
                                    t.id === activeTask?.id,
                            })}
                        />
                    ))}
                </div>

                {/* Create new task button */}
                <div className="pt-5">
                    <Button
                        text={
                            <span className="flex items-center justify-center gap-2">
                                <FaPlus /> Create New Task
                            </span>
                        }
                        className=" border-green-600 bg-green-600 text-white"
                        onClick={() => {}}
                    />
                </div>
            </div>

            <TaskSection
                data={activeTask}
                onDelete={handleOnDeleteTask}
                onAddNewModule={handleOnAddNewModule}
            />
        </main>
    );
};

export default AdminPanel;
