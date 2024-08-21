import { LoggedInUser, Tasks } from "../../utils/dummyData";
import UserInfo from "../UserInfo";
import Button from "../Button";
import { useState } from "react";
import ExerciseSection from "./ExerciseSection";
import { cn } from "../../utils/functions";

const Dashboard = () => {
    const x = LoggedInUser.assignedTasks.map((d) => d.taskId);
    const AssignedTaskData = Tasks.filter((t) => x.includes(t.id));

    const [activeTaskBtn, setActiveTaskBtn] = useState(AssignedTaskData[0]);

    return (
        <main className="flex h-full border-2">
            <div className=" border-2 space-y-3 p-3 bg-[#0e131f] ">
                {/* User Info */}
                <UserInfo data={LoggedInUser} />

                {/* Assigned Tasks List */}
                <div className="flex flex-col gap-2">
                    {AssignedTaskData.map((t, i) => (
                        <Button
                            key={t.id}
                            text={t.title}
                            onClick={() =>
                                setActiveTaskBtn(AssignedTaskData[i])
                            }
                            className={cn("", {
                                "border-blue-300 text-white bg-blue-500":
                                    t.id === activeTaskBtn?.id,
                            })}
                        />
                    ))}
                </div>
            </div>

            <ExerciseSection
                Taskdata={activeTaskBtn}
                taskProgress={
                    LoggedInUser.assignedTasks.filter(
                        (t) => t.taskId === activeTaskBtn.id
                    )[0].progress
                }
            />
        </main>
    );
};

export default Dashboard;
