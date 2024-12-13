export interface UserRecord {
    uid: string;
    email: string;
    createdAt: Date;
    lastLogin: Date;
    photoURL: string;
    displayName: string;
    relatedTasks: string[];
}
export type Status = 'todo' | 'late' | 'done';
export interface TaskRecord {
    title: string;
    description: string;
    dueDate: number;
    status: Status;
    createdAt: number;
    createdBy: string;
    constant: boolean;
    allDay: boolean;
    icon: number;
    colorPalette: number;
    days: [];
    taskCategory: string;
    taskId: string;
    permanent: boolean;
}
export interface Category {
    title: string;
    icon: number;
    isChosen: boolean;
    id: string;
}
export interface ChatProps {
    chatId: string;
    users: string[];
    messages: MessageProps[];
    createdOn: number;
    updatedOn: number;
    createdById: string;
}
export interface MessageProps {
    sender: string;
    message: string;
    timestamp: number;
}
//# sourceMappingURL=types.d.ts.map