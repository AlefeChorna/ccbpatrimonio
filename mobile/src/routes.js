import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';
import Products from './pages/Products';
import AddVerification from './pages/AddVerification';

import { fromLeft } from './helpers/transitions';

import { colors } from './styles';

const MainRoute = () => createStackNavigator(
  {
    User: createBottomTabNavigator({
      Main,
      Products
    }, {
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.themeColor,
        inactiveTintColor: colors.darkTransparent,
        style: {
          display: true ? 'flex' : 'none',
          backgroundColor: '#FFFE',
        }
      }
    }),
    AddVerification,
  }, {
    initialRouteName: 'User',
    transitionConfig: () => fromLeft(600),
    headerMode: 'none'
  }
);

const Routes = (userLogged = false) => createAppContainer(createSwitchNavigator(
  {
    Login,
    Main: MainRoute(),
  }, {
    initialRouteName: 'Main',
  }
));

export default Routes;
