import {MMKV, MMKVConfiguration} from 'react-native-mmkv';
import {StateStorage} from 'zustand/middleware';

const config: MMKVConfiguration | undefined = {
  id: 'lrn.main',
  encryptionKey: 'my-encryption-key',
};

const localStorage = new MMKV(config);

// create storage for zustand
const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return localStorage.set(name, value);
  },
  getItem: name => {
    const value = localStorage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return localStorage.delete(name);
  },
};

export {localStorage, zustandStorage};
