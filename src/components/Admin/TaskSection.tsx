import { TaskType } from "../../utils/types";

const TaskSection = ({ data }: { data: TaskType }) => {
    return (
        <div className="p-10">
            <div className=" text-5xl font-semibold">{data.title}</div>
            <div>
                {data.modules.map((d, i) => (
                    <Module key={i} data={d} />
                ))}
            </div>
        </div>
    );
};

const Module = ({ data }: { data: TaskType["modules"][number] }) => {
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    );
};

export default TaskSection;
