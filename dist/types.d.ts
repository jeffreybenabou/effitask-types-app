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
    taskCategoryID: number;
    taskId: string;
    permanent: boolean;
    checkBoxes: CheckBoxProps[];
    reminder: boolean;
}
export interface CheckBoxProps {
    title: string;
    id: number;
    isChecked: boolean;
}
export interface Category {
    title: string;
    icon: number;
    isChosen: boolean;
    id: number;
    isDefault?: boolean;
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
    senderUID: string;
    message: string;
    timestamp: number;
    type: "text" | "image" | "audio";
    downloadURL?: string;
    updatedAt: number;
    id: string;
}
//# sourceMappingURL=types.d.ts.map