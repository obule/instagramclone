import { AsyncStorage } from 'react-native';

import { iconsLoaded } from '../utils/themes';
import { authToken } from '../utils/constants';

import { startLogin, startMainApp } from '../Nav';

export default async function appInitalized() {
  await iconsLoaded();
  const token = await AsyncStorage.getItem(authToken);

  if (!token) {
    startLogin();
  } else {
    startMainApp();
  }
}
