import { create } from "zustand";

interface NavigationHighlighterState {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const useNavigationHighlighter = create<NavigationHighlighterState>()(
  (set) => ({
    currentPage: "/",
    setCurrentPage: (page) => set({ currentPage: page }),
  })
);
