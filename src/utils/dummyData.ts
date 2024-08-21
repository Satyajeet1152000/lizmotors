import { TaskType, UserType } from "./types";

export const User: UserType = {
    id: "c6as876cd",
    name: "Satyajeet Singh",
    email: "satyajeet1152000@gmail.com",
    token: "token",
};

export const Tasks: TaskType[] = [
    {
        id: "324sdgf",
        title: "Training Program",
        modules: [
            {
                title: "Personal Protective Equipment (PPE)",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
                title: "Fire Safety and Preventionn",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
                title: "Slip, Trip, and Fall Prevention",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
        ],
        assignedTo: ["7", "3", "15", "10", "19"],
    },
    {
        id: "345vchbc",
        title: "Get Hired",
        modules: [
            {
                title: "Pctive Equipment (PPE)",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
                title: "Fire Safety ention",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
                title: "Slip, Tevention",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
        ],
        assignedTo: ["12", "8", "5", "1", "17"],
    },
    {
        id: "34534cxvbgd",
        title: "Leave Grant Process",
        modules: [
            {
                title: "Pesdfgpment (PPE)",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
                title: "Firjkhlhjention",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
                title: "S4enb 4657yn Prevention",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
        ],
        assignedTo: ["2", "11", "14", "18", "9"],
    },
    {
        id: "3453xcfbvdsf",
        title: "Saftey tutorials",
        modules: [
            {
                title: "Pertyurtur mn5r67PPE)",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
                title: "Fifdhgt6y 65ion",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
                title: "Slip,  re5 5ention",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, adipisci facere? Aspernatur dolorem sint excepturi soluta doloribus magni fugit error voluptas? Repellat perferendis enim veniam odio nostrum in totam illo.",
                videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
        ],
        assignedTo: ["4", "6", "13", "16", "20"],
    },
];

export const Users: Pick<UserType, "id" | "name">[] = [
    { id: "1", name: "Alice Johnson" },
    { id: "2", name: "Bob Smith" },
    { id: "3", name: "Charlie Brown" },
    { id: "4", name: "David Wilson" },
    { id: "5", name: "Emma Davis" },
    { id: "6", name: "Frank Miller" },
    { id: "7", name: "Grace Lee" },
    { id: "8", name: "Henry Martinez" },
    { id: "9", name: "Ivy Thomas" },
    { id: "10", name: "Jack White" },
    { id: "11", name: "Kara Young" },
    { id: "12", name: "Leo Walker" },
    { id: "13", name: "Mia Allen" },
    { id: "14", name: "Noah King" },
    { id: "15", name: "Olivia Scott" },
    { id: "16", name: "Paul Harris" },
    { id: "17", name: "Quinn Moore" },
    { id: "18", name: "Rachel Adams" },
    { id: "19", name: "Sam Baker" },
    { id: "20", name: "Tina Robinson" },
];

export const LoggedInUser: UserType & {
    assignedTasks: Array<{
        taskId: string;
        progress: number;
    }>;
} = {
    id: "sa78df689",
    name: "Bob Smith",
    email: "bob123@gmail.com",
    token: "34lui534qwver0v3q4u04vn30q22b8vityhugskbgyewap8o93wq489lhuvaweluira789",
    assignedTasks: [
        { taskId: "324sdgf", progress: 1 },
        { taskId: "345vchbc", progress: 0 },
    ],
};
