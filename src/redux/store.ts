import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import storage from 'redux-persist/lib/storage';

//slices
import authReducer, { AuthSliceKey } from './slices/authSlice';

//api
import { apIAddress } from './services/addressApi';
import { apiAuth } from './services/authApi';
import { apiCart } from './services/cartApi';
import { apiCategory } from './services/categoryApi';
import { apiOrder } from './services/orderApi';
import { apiOrderItem } from './services/orderItemApi';
import { apiPayment } from './services/paymentApi';
import { apiProduct } from './services/productApi';
import { apiPromotion } from './services/promotionApi';
import { apiRate } from './services/rateApi';
import { apiShipper } from './services/shipperApi';
import { apiStore } from './services/storeApi';
import { apiUser } from './services/userApi';
import { apiVendor } from './services/vendorApi';
import { apiVoucher } from './services/voucherApi';

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    }
  };
};

const persistConfig = {
  key: 'root',
  storage:
    typeof window !== 'undefined'
      ? createWebStorage('local')
      : createNoopStorage(),
  whitelist: [AuthSliceKey],
  blacklist: []
};

const combinedReducer = combineReducers({
  [AuthSliceKey]: authReducer,

  [apiAuth.reducerPath]: apiAuth.reducer,
  [apIAddress.reducerPath]: apIAddress.reducer,
  [apiCart.reducerPath]: apiCart.reducer,
  [apiCategory.reducerPath]: apiCategory.reducer,
  [apiOrder.reducerPath]: apiOrder.reducer,
  [apiOrderItem.reducerPath]: apiOrderItem.reducer,
  [apiPayment.reducerPath]: apiPayment.reducer,
  [apiProduct.reducerPath]: apiProduct.reducer,
  [apiPromotion.reducerPath]: apiPromotion.reducer,
  [apiRate.reducerPath]: apiRate.reducer,
  [apiShipper.reducerPath]: apiShipper.reducer,
  [apiStore.reducerPath]: apiStore.reducer,
  [apiUser.reducerPath]: apiUser.reducer,
  [apiVendor.reducerPath]: apiVendor.reducer,
  [apiVoucher.reducerPath]: apiVoucher.reducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'auth/logOut') {
    state.auth = undefined;
  }

  return combinedReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'socket/createSocket',
          'apiAuth/executeMutation/fulfilled',
          'apiUser/executeMutation/fulfilled'
        ],
        ignoredActionPaths: [
          'socket.socket',
          'payload',
          'meta.baseQueryMeta.request',
          'meta.baseQueryMeta.response'
        ],
        ignoredPaths: [
          'socket',
          'meta.baseQueryMeta.request',
          'meta.baseQueryMeta.respone'
        ]
      },
      immutableCheck: {
        ignoredPaths: [
          'ignoredPath',
          'ignoredNested.one',
          'ignoredNested.two',
          'items.data'
        ]
      }
    }).concat([
      apiAuth.middleware,
      apIAddress.middleware,
      apiCart.middleware,
      apiCategory.middleware,
      apiOrder.middleware,
      apiOrderItem.middleware,
      apiPayment.middleware,
      apiProduct.middleware,
      apiPromotion.middleware,
      apiRate.middleware,
      apiShipper.middleware,
      apiStore.middleware,
      apiUser.middleware,
      apiVendor.middleware,
      apiVoucher.middleware
    ])
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
export const persistor = persistStore(store);
