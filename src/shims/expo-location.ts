// TH2 | 23727851 | PHAN XUAN DUNG | #997321

export enum PermissionStatus {
    GRANTED = 'granted',
    UNDETERMINED = 'undetermined',
    DENIED = 'denied',
}

export const requestForegroundPermissionsAsync = async () => {
    return {
        status: 'granted' as const,
        granted: true,
        canAskAgain: true,
        expires: 'never',
    };
};

export const getForegroundPermissionsAsync = async () => {
    return {
        status: 'granted' as const,
        granted: true,
        canAskAgain: true,
        expires: 'never',
    };
};

export const getCurrentPositionAsync = async (_options?: any) => {
    // Tọa độ gần khuôn viên IUH/KTX
    return {
        coords: {
            latitude: 10.8222,
            longitude: 106.6875,
            altitude: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            heading: 0,
            speed: 0,
        },
        timestamp: Date.now(),
    };
};

export default {
    requestForegroundPermissionsAsync,
    getForegroundPermissionsAsync,
    getCurrentPositionAsync,
    PermissionStatus,
};
