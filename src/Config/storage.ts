import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageParamList } from '../Type';

export default {
  get: async (key: keyof StorageParamList) => {
    try {
      const value: any = await AsyncStorage.getItem(key);
      return value !== null ? JSON.parse(value) : null;
    } catch (error) {
      throw error;
    }
  },

  getAllKeys: async () => {
    let keys: any = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (error) {
      throw error;
    }
    return keys;
  },

  set: async (key: keyof StorageParamList, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw error;
    }
  },

  remove: async (key: keyof StorageParamList) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      throw error;
    }
  },

  clear: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      throw error;
    }
  },
};
