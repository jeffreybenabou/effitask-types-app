
import { TextProps, TextStyle, ViewStyle, TouchableOpacityProps} from 'react-native';

export interface UserRecord {
    uid: string;
    email: string;
    createdAt: Date;
    lastLogin: Date;
    photoURL: string;
    displayName: string;
}

type Status = 'todo' | 'inProgress' | 'done';

export interface TaskRecord {
    title: string;
    description: string;
    dueDate: number;
    status: Status;
    createdAt: number;
    createdBy: string;
    constant: boolean;
    allDay: boolean;
    icon: string;
    colorPalette: string;
}

