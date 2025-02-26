import { create } from 'zustand';

// Zustand 상태 관리
export const useUser = create((set) => ({
  user: 'kim',
  changeName: () => set((state) => ({ user: 'john' + state.user})),
}));

export const useCart = create((set) => ({
  cart: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ],

  // 🔥 기존 배열을 새로운 배열로 업데이트해야 React가 상태 변경을 감지함!
  addCount: (index) => set((state) => ({
    cart: state.cart.map((a, i) => 
      i === index ? { ...a, count: a.count + 1 } : a
    )
  })),

  addItem: (newItem) => set((state) => ({
    cart: [...state.cart, newItem]  // 🔥 push() 대신 새로운 배열을 반환해야 함!
  })),
}));