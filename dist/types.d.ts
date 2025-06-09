export interface UserRecord {
    uid: string;
    email: string;
    createdAt: Date;
    lastLogin: Date;
    photoURL: string;
    displayName: string;
    relatedTasks: string[];
    phoneNumber: string;
    tasksDates: string[];
    encryptedUserKey: string;
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
    links: LinkProps[];
    images: ImageProps[];
    taskCategoryID: number;
    taskId: string;
    permanent: boolean;
    participants: string[];
    checkBoxes: CheckBoxProps[];
    reminder: boolean;
    progress: number;
    encryptionKey: string;
    reminderTime: boolean;
}
export interface ImageProps {
    link: string;
    id: number;
}
export interface LinkProps {
    id: string;
    linkPlaceholder: string;
    link: string;
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
    encryptionKey: string;
    messages: MessageProps[];
    index: number;
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
export interface FileObject {
    name: string;
    file: Buffer | string;
    type: string;
}
export declare const taskResponseCodes: {
    TASK_ALREADY_EXISTS: number;
    TASK_NOT_FOUND: number;
    TASK_NOT_CREATED: number;
    TASK_NOT_DELETED: number;
    TASK_NOT_UPDATED: number;
    TASK_NOT_COMPLETED: number;
    TASK_NOT_UNCOMPLETED: number;
    TASK_MISSING_FIELDS: number;
};
//# sourceMappingURL=types.d.ts.map