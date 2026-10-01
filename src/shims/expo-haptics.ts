// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import { Vibration } from 'react-native';

export enum ImpactFeedbackStyle {
    Light = 'light',
    Medium = 'medium',
    Heavy = 'heavy',
}

export enum NotificationFeedbackType {
    Success = 'success',
    Warning = 'warning',
    Error = 'error',
}

export const selectionAsync = async (): Promise<void> => {
    try {
        Vibration.vibrate(15);
    } catch (_) {}
};

export const impactAsync = async (_style?: ImpactFeedbackStyle): Promise<void> => {
    try {
        Vibration.vibrate(25);
    } catch (_) {}
};

export const notificationAsync = async (_type?: NotificationFeedbackType): Promise<void> => {
    try {
        Vibration.vibrate([0, 20, 40, 20]);
    } catch (_) {}
};

export default {
    selectionAsync,
    impactAsync,
    notificationAsync,
    ImpactFeedbackStyle,
    NotificationFeedbackType,
};
