import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
interface CounterStore {
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  decrement: () => set((store) => ({ counter: store.counter - 1 })),
  reset: () => set(() => ({ counter: 0 })),
}));

if (process.env.NODE_ENV) mountStoreDevtool("Store counter", useCounterStore);

export default useCounterStore;
