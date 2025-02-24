import { create } from 'zustand';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import cart from './store/cartSlice'; // cartSlice가 있다고 가정

// Zustand 상태 관리
export const useBear = create((set) => ({
  bear: 0,
  increaseBear: () => set((state) => ({ bear: state.bear + 1 })),
  removeAllBear: () => set({ bear: 0 }),
}));

// Redux 상태 관리
let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state) {
      return 'john ' + state;
    },
  },
});

export let { changeName } = user.actions;

const store = configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});

export default store; // ✅ Redux store를 default export
