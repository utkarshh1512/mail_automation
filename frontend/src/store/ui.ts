import { create } from 'zustand';
type Theme = 'dark' | 'light';
export const useUiStore = create<{ theme: Theme; toggleTheme: () => void }>((set) => ({ theme: 'dark', toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })) }));
