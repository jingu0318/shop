import { create } from 'zustand';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import cart from './store/cartSlice'; // cartSlice가 있다고 가정

// Zustand 상태 관리
export const useBear = create((set) => ({
  bear: 0,
  increaseBear: () => set((state) => ({ bear: state.bear + 1 })),
  removeAllBear: () => set({ bear: 0 }),
  bears: ['brownbear ', 'blackbear '],
  addBear: (bear) => set((state) => ({ //함수의 파라미터를 이용한다.
    bears: [...state.bears, bear]
  })),  // 배열에 값 추가
  removeBear: (bearToRemove) => set((state) => ({
    bears: state.bears.filter((bear) => bear !== bearToRemove)  // 특정 값 제외
  })),
  changeBear: (oldBear, newBear) => set((state) => ({
    bears: state.bears.map((bear) => (bear === oldBear ? newBear : bear)) //map 순환하며 특정값 변경
  })),
  changeBearByIndex: (index, newBear) => set((state) => {
    const newBears = [...state.bears];
    newBears[index] = newBear;  // 특정 인덱스의 값 변경
    return { bears: newBears };
  }),
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
