// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import { useState } from 'react';
import * as Location from '../shims/expo-location';
import { BASE_SHIP_FEE, STUDENT } from '@constants/student';

// Tọa độ cổng KTX cố định
const KTX_GATE_COORDS = { latitude: 10.8222, longitude: 106.6875 };

// Hàm tính Haversine
function calculateHaversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export const useCampusLocation = () => {
    const [status, setStatus] = useState<'idle' | 'granted' | 'denied' | 'blocked'>('idle');
    const [distanceKm, setDistanceKm] = useState<number | null>(null);
    const [shipFee, setShipFee] = useState<number | null>(null);

    const requestLocation = async () => {
        const { status: currentStatus, canAskAgain } = await Location.requestForegroundPermissionsAsync();

        if (currentStatus === 'granted') {
            setStatus('granted');
            const location = await Location.getCurrentPositionAsync({});
            const km = calculateHaversine(
                location.coords.latitude,
                location.coords.longitude,
                KTX_GATE_COORDS.latitude,
                KTX_GATE_COORDS.longitude
            );
            setDistanceKm(km);

            // Công thức B (do số cuối = 1): BASE_SHIP_FEE + Math.round(km * 1500) + 2000
            const fee = BASE_SHIP_FEE + Math.round(km * 1500) + 2000;
            setShipFee(fee);
        } else if (!canAskAgain) {
            setStatus('blocked');
        } else {
            setStatus('denied');
        }
    };

    return { status, distanceKm, shipFee, requestLocation };
};