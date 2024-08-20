interface Module {
    title: string;
    description: string;
    videoSrc: string;
}

export interface TaskType {
    id: string;
    title: string;
    modules: Module[];
    assignedTo: string[];
}

export interface UserType {
    id: string;
    name: string;
    email: string;
    token: string;
}
