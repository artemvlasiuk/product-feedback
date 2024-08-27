import { create } from 'zustand';
import { ProductRequest } from '@/types';

interface StoreState {
  productRequests: ProductRequest[];
  setProductRequests: (requests: ProductRequest[]) => void;
}

export const useRequestsStore = create<StoreState>((set) => ({
  productRequests: [],
  setProductRequests: (requests) => set({ productRequests: requests }),
}));
