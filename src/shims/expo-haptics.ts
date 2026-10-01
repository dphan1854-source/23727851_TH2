// TH2 | 23727851 | PHAN XUAN DUNG | #997321

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
    console.log('[Haptics] selectionAsync executed');
};

export const impactAsync = async (style?: ImpactFeedbackStyle): Promise<void> => {
    console.log('[Haptics] impactAsync executed with style:', style);
};

export const notificationAsync = async (type?: NotificationFeedbackType): Promise<void> => {
    console.log('[Haptics] notificationAsync executed with type:', type);
};

export default {
    selectionAsync,
    impactAsync,
    notificationAsync,
    ImpactFeedbackStyle,
    NotificationFeedbackType,
};
