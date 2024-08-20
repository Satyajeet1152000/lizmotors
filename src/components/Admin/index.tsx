import { FaPlus } from "react-icons/fa";
import Button from "../Button";
import { Tasks, User } from "../../utils/dummyData";
import { useState } from "react";
import { cn } from "../../utils/functions";
import UserInfo from "./User";
import TaskSection from "./TaskSection";

const AdminPanel = () => {
    const [activeTask, setActiveTask] = useState(Tasks[0]);
    const handleOnDeleteTask = (id: string) => {
        console.log("Delte task - ", id);
    };
    return (
        <main className="flex h-full border-2">
            <div className=" border-2 space-y-3 p-3 bg-[#0e131f] ">
                {/* User Info */}
                <UserInfo data={User} />

                {/* Created Tasks List */}
                <div className="flex flex-col gap-2">
                    {Tasks.map((t) => (
                        <Button
                            key={t.id}
                            text={t.title}
                            onClick={() => setActiveTask(t)}
                            className={cn("", {
                                "border-blue-300 text-white bg-blue-500":
                                    t.id === activeTask.id,
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

            <TaskSection data={activeTask} onDelete={handleOnDeleteTask} />
        </main>
    );
};

export default AdminPanel;
