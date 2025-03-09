import { create } from 'zustand';

// Zustand 상태 관리
export const useUser = create((set) => ({
  user: 'kim',
  changeName: () => set((state) => ({ user: 'john' + state.user})),
}));

export const useStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
  setUser: (user) => set({ user }),
}));

export const useCart = create((set) => ({
  cart: [
    { id: 0, name: 'White and Black', count: 2, price : 120000 },
    { id: 2, name: 'Grey Yordan', count: 1, price : 130000 }
  ],

  // 🔥 기존 배열을 새로운 배열로 업데이트해야 React가 상태 변경을 감지함!
  addCount: (index) => set((state) => ({
    cart: state.cart.map((a) => 
      a.id === index ? { ...a, count: a.count + 1 } : a //변경된 부분만 업뎃 후 Object를 반환(객체 spread operator)
    )
  })),

  bddCount: (index) => set((state) => ({
    cart: state.cart.map((a) => 
      a.id === index ? { ...a, count: a.count - 1 } : a //변경된 부분만 업뎃 후 Object를 반환(객체 spread operator)
    )
  })),

  addItem: (newItem) => set((state) => ({
    cart: state.cart.some((item) => item.id === newItem.id) //some()함수를 통해 현재 cart 안에 newItem이랑 같은게 있는지 확인
      ? state.cart.map((item) =>
          item.id === newItem.id ? { ...item, count: item.count + parseInt(newItem.count) } : item
        )
      : [...state.cart, {...newItem, count: parseInt(newItem.count)}]  // 항상 배열을 유지!
  })),

  removeItem:(index) => set((state) => ({
    cart: state.cart.filter((a) => a.id !== index)
  })),

  removeAll:() => set({ cart: [] }),
}));