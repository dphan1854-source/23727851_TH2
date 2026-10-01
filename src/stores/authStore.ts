// TH2 | 23727851 | PHAN XUAN DUNG | #997321
import { create } from 'zustand';
import { STUDENT, examStamp } from '@constants/student';

interface AuthState {
    token: string | null;
    login: (input: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: null,
    login: () => {
        const fakeToken = `ktxgo-${STUDENT.mssv}-${examStamp()}`;
        set({ token: fakeToken });
    },
    logout: () => set({ token: null }),
}));