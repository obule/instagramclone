import { Navigation } from 'react-native-navigation';
import FeedsScreen from './FeedsScreen';
import ExploreScreen from './ExploreScreen';
import LoginScreen from './LoginScreen';
import CreatePhotoScreen from './createPhotoScreen';
import CaptionScreen from './CaptionScreen';
import CommentsScreen from './CommentsScreen';

import withProvider from '../components/WithProvider';

export const registerScreen = () => {
  Navigation.registerComponent('newproject.FeedsScreen', () =>
    withProvider(FeedsScreen),
  );
  Navigation.registerComponent('newproject.ExploreScreen', () =>
    withProvider(ExploreScreen),
  );
  Navigation.registerComponent('newproject.LoginScreen', () =>
    withProvider(LoginScreen),
  );
  Navigation.registerComponent('newproject.CreatePhotoScreen', () =>
    withProvider(CreatePhotoScreen),
  );
  Navigation.registerComponent('newproject.CaptionScreen', () =>
    withProvider(CaptionScreen),
  );
  Navigation.registerComponent('newproject.CommentsScreen', () =>
    withProvider(CommentsScreen),
  );
};
