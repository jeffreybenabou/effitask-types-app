import { TextProps, TextStyle, ViewStyle, TouchableOpacityProps } from 'react-native';
interface StyledTextSnippet {
    text?: string;
    style?: TextStyle | TextStyle[];
    refreshTextInterval?: number;
    onPress?: () => void;
}
export interface CustomTextProps extends TextProps {
    content?: StyledTextSnippet[];
    containerStyle?: TextStyle;
    refreshAlways?: boolean;
    isButton?: boolean;
}
export interface RenderTaskTypeProps {
    id?: number;
    textProps?: CustomTextProps;
    iconProps: CustomIconProps;
    changeCurrentCategory?: (task: RenderTaskTypeProps) => void;
    currentCategory: RenderTaskTypeProps | null;
}
export type CategoryType = {
    iconProps: CustomIconProps;
    textProps: CustomTextProps;
};
export type TaskType = {
    title: string;
    description: string;
    isDone: boolean;
    reminder: number;
    reminderDay: string;
    reminderTime: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    category: string;
    progress: number;
    dateDue: number;
    colorPalate: number;
    taskOID: string;
    createdBy: string;
    dateDueStart: number;
    dateDueEnd: number;
    dateDueStartTime: number;
    dateDueEndTime: number;
    permanentTask: boolean;
    dayAsArray: Array<string>;
    allDay?: boolean;
    taskExtraData: Array<objectType>;
    isFavorite?: boolean;
};
export type objectType = {
    imagePath?: string;
    name?: string;
    description: string;
    value: string;
    checked?: boolean;
    oid: string;
    type: "phoneList" | "photosURL" | "locations" | "checkList" | "links";
};
export type ChatType = {
    taskOID: string;
    participants: Array<string>;
    dataCreated: number;
};
export type linkObject = {
    name: string;
    url: string;
};
export type UserType = {
    uid: string;
    email: string;
    photoURL: string;
    relatedTasks: Array<string>;
    FCMToken: string;
    firstName: string;
    lastName: string;
    dates: Array<string>;
    openTasks: Array<string>;
    phoneNumber: string;
    password: string;
    notificationsHistory: Array<NotificationType>;
    tasks: Array<TaskType>;
    isLocal?: boolean;
};
export type checkListObject = {
    name: string;
    checked: boolean;
};
export type locationObject = {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
};
export type phoneObject = {
    name: string;
    number: string;
};
export type ParticipantType = {
    displayName: string;
    uid: string;
    photoURL: string;
    email: string;
};
export type ColorPalate = {
    mainColor: string;
    sideColor: string;
    borderColor: string;
    textColor: string;
};
export type WeatherType = {
    cityName: string;
    description: string;
    icon: string;
    degree: string;
};
export interface initInterface {
    setScreenName: () => void;
}
export type MessageType = {
    body: string;
    type: string;
    createdAt: string;
    userOID: string;
    taskOID: string;
    sendName: string | null;
    id?: string | number;
};
export type CustomSnackbarProps = {
    message: string;
    title: string;
    onDismiss?: () => void;
    typeOfSnackBar?: {
        ICON: number;
        COLOR: string;
    };
    visible?: boolean;
};
export type SnackBarProps = {
    ICON: string;
    COLOR: string;
};
export type ChatProps = {
    body: string;
    dataCreated: number;
    taskOID: string;
    participants: Array<string>;
    lastMessage: MessageType | null;
    title: string;
    chatOID: string;
    totalUnreadMessages: number;
    creatorOID: string;
    icon: number | null | undefined;
    iconColor: string;
    iconBackground: string;
};
export type ChatDefinitions = {
    messages: Array<MessageType>;
    dateCreated: number;
    lastMessageDate: number;
    lastMessage: string | null;
    participants: Array<string>;
    totalUnreadMessages: number;
    creatorOID: string;
    title: string;
    chatOID: string;
};
export type notificationProps = {
    item: NotificationType;
};
export type NotificationType = {
    title: string;
    body: string;
    type: string;
    userOID: string;
    creator: string;
    creatorOID: string;
    newMessage: boolean;
    date: Date;
    id: string;
};
export interface DefaultUserData {
    lastLoginDate: number;
    email: string;
    photoURL: string;
    uid: string;
    relatedTasks: Array<TaskType>;
    FCMToken: string;
    firstName: string;
    lastName: string;
    dates: Array<string>;
    openTasks: Array<TaskType>;
    phoneNumber: string;
    password: string;
    notificationsHistory: Array<NotificationType>;
}
export type CustomIconProps = {
    iconType?: number | null | undefined;
    iconColor?: string;
    iconSize?: number;
    iconStyle?: object;
    iconContainerStyle?: object;
    onPress?: () => void;
    iterationCount?: number | string;
    typeOfAnimation?: Animation;
    duration?: number;
    testId?: string;
};
export interface CustomButtonProps extends TouchableOpacityProps {
    textProps?: CustomTextProps;
    buttonStyle?: ViewStyle | ViewStyle[];
    iconProps?: CustomIconProps;
    onPressProps?: any;
    onPress?: (onPressProps: any) => void;
    renderProps?: any;
    addIndicator?: boolean;
    renderAlways?: boolean;
    showLoader?: boolean;
    indicatorText?: string;
    iterationCount?: number | string;
    typeOfAnimation?: Animation;
    duration?: number;
    mainContainerStyle?: ViewStyle | ViewStyle[];
    isNotification?: boolean;
    indicatorHeight?: number;
    indicatorLocation?: "bottom" | "top" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    useBorderOnIndicator?: boolean;
    customIndicatorHeight?: number;
    animationProps?: any;
    loaderColor?: string;
    indicatorTestId?: string;
}
export {};
//# sourceMappingURL=types.d.ts.map