import create from 'zustand'

export const useFruitStore = create(set => ({
  fruits: {
    mango: 10,
    orange: 20
  },
  change: (newFruit) => set((state) => ({ fruits: {...newFruit, ...state} })),
}))
