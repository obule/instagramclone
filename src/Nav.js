import { Navigation } from 'react-native-navigation';
import { registerScreen } from './screens';
import { iconMap } from './utils/themes';
import appInitalized from './utils/appinitialized';

registerScreen();

export function startLogin() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'newproject.LoginScreen',
      navigatorStyle: {
        navBarHidden: true,
      },
    },
  });
}

export function startMainApp() {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Feeds',
        screen: 'newproject.FeedsScreen',
        title: 'Instagram',
        icon: iconMap.home,
      },
      {
        label: 'Explore',
        screen: 'newproject.ExploreScreen',
        title: 'Explore',
        icon: iconMap['ios-search'],
      },
    ],
  });
}

export function init() {
  appInitalized();
}
