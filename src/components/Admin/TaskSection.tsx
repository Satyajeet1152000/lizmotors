import { useState } from "react";
import { Users } from "../../utils/dummyData";
import { cn } from "../../utils/functions";
import { TaskType } from "../../utils/types";
import { GoPlusCircle } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";

const TaskSection = ({
    data,
    onDelete,
}: {
    data: TaskType;
    onDelete: (id: string) => void;
}) => {
    return (
        <div className="p-10 space-y-5 w-full">
            <div className=" text-5xl font-semibold flex justify-between items-center">
                <h1>{data.title}</h1>
                <button
                    className="border-2 border-transparent px-2 py-1 rounded-lg hover:border-red-600 transition-all duration-200 ease-in-out"
                    onClick={() => onDelete(data.id)}
                >
                    <RiDeleteBin6Line className="text-3xl text-red-600" />
                </button>
            </div>
            <div className="flex gap-5">
                <div className="w-[80%] space-y-5">
                    {data.modules.map((d, i) => (
                        <Module key={i} data={d} index={i + 1} />
                    ))}

                    {/* Add new Module */}
                    <div className="border rounded-lg border-gray-500 p-2 hover:border-green-600 hover:text-green-600  text-gray-500 transition-all duration-200 ease-in-out flex justify-center items-center flex-col h-24">
                        <GoPlusCircle className=" w-10 h-10" />
                        <h1 className="text-xl">Add New Module</h1>
                    </div>
                </div>

                {/* Assigned Users */}
                <div className="text-xl border border-gray-500 w-[20%] rounded-lg p-2">
                    <h1 className="text-gray-400 text-2xl font-semibold pb-2">
                        Assigned User
                    </h1>
                    <form action="">
                        {Users.map((user) => (
                            <div
                                key={user.id}
                                className={cn("text-gray-400 space-x-2", {
                                    "text-green-500": data.assignedTo.includes(
                                        user.id
                                    ),
                                })}
                            >
                                <input
                                    type="checkbox"
                                    id={user.id}
                                    checked={data.assignedTo.includes(user.id)}
                                />
                                <label htmlFor={user.id}>{user.name}</label>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
        </div>
    );
};

const Module = ({
    data,
    index,
}: {
    data: TaskType["modules"][number];
    index: number;
}) => {
    return (
        <div className="border rounded-lg border-gray-500 p-2 hover:border-green-600 hover:text-green-600 transition-all duration-200 ease-in-out flex justify-between h-24">
            <div>
                <h1 className="text-xl font-semibold text-gray-500">
                    Module #{index}
                </h1>
                <h1 className="text-2xl">{data.title}</h1>
            </div>
            <video className=" rounded-lg">
                <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.1"
                    type="video/mp4"
                />
            </video>
        </div>
    );
};

export default TaskSection;
