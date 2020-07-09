import AsyncStorage from '@react-native-community/async-storage';

export async function storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('Value ', value, ' with key: ', key, 'could not be saved...');
  }
  console.log('Value ', value, ' with key: ', key, 'has been saved.');
}

export async function readData(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    console.log('Item with key: ', key, 'could not be read...');
  }
  console.log('Item with key: ', key, 'has been read.');
}

export async function removeData(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('Item with key: ', key, 'could not be removed...');
  }
}

export async function clearStorage() {
  try {
    await AsyncStorage.clear();
    console.log('Storage has been cleared...');
  } catch (e) {
    console.log('Storage can not be cleared...');
  }
}
