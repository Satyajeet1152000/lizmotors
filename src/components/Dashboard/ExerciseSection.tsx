import React, { useEffect, useState } from "react";
import { TaskType } from "../../utils/types";
import { LoggedInUser } from "../../utils/dummyData";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaArrowCircleRight } from "react-icons/fa";

interface Props {
    Taskdata: TaskType;
    userData: typeof LoggedInUser;
}

const ExerciseSection = ({ Taskdata, userData }: Props) => {
    // console.log(Taskdata);
    const [activeModule, setActiveModule] = useState(0);
    const progress = userData.assignedTasks.filter(
        (t) => t.taskId === Taskdata.id
    )[0].progress;

    const progressCalculator = () => {
        const moduleLength = Taskdata.modules.length;
    };

    useEffect(() => {
        if (Taskdata.modules.length > 0) {
            const moduleLength = Taskdata.modules.length;
            const currentProgressValue = (moduleLength * progress) / 100;
            console.log(moduleLength, progress, currentProgressValue);

            setActiveModule(Math.floor(currentProgressValue));
        }
    }, [Taskdata]);
    return (
        <div className="p-5 w-full flex flex-col justify-between">
            {/* Heading Section */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl">
                    Module{" "}
                    {Taskdata.modules.indexOf(Taskdata.modules[activeModule]) +
                        1}
                    : {Taskdata.modules[activeModule].title}
                </h1>
                <div className="p-5">
                    <CircularProgressbar
                        value={progress}
                        text={`${progress}%`}
                        className=" w-fit h-36"
                        strokeWidth={15}
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full flex flex-grow">
                <div className=" text-wrap w-[60%]">
                    {Taskdata.modules[activeModule].description}
                    {Taskdata.modules[activeModule].description}
                    {Taskdata.modules[activeModule].description}
                    {Taskdata.modules[activeModule].description}
                    {Taskdata.modules[activeModule].description}
                    {Taskdata.modules[activeModule].description}
                    {Taskdata.modules[activeModule].description}
                </div>
                <div className="w-[40%]">
                    <video controls className="h-fit w-full">
                        <source
                            src={Taskdata.modules[activeModule].videoSrc}
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>

            {/* Footer Section */}
            {Taskdata.modules[activeModule + 1] && (
                <div className="text-2xl flex justify-end items-center gap-3 p-5">
                    Module {activeModule + 2}:{" "}
                    {Taskdata.modules[activeModule + 1].title}
                    <button
                        className="text-5xl"
                        onClick={() => setActiveModule(activeModule + 1)}
                    >
                        <FaArrowCircleRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ExerciseSection;
