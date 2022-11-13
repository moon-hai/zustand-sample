import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useBearStore = create(persist((get, set) => ({
  bears: 0,
  increasePopulation: () => set({ bears: get().bears + 1 }),
  removeAllBears: () => set({ bears: 0 }),
}), {
  name: 'bear-storage',
  getStorage: () => sessionStorage,
}))
