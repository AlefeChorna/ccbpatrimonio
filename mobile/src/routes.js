import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import AddFireExtinguisher from './pages/AddFireExtinguisher';
import AddVerification from './pages/AddVerification';
import FireExtinguisher from './pages/FireExtinguisher';
import Login from './pages/Login';
import Main from './pages/Main';
import Products from './pages/Products';

import { fromLeft } from './helpers/transitions';

import { colors } from './styles';

const MainRoute = () => createStackNavigator(
  {
    User: createBottomTabNavigator({
      Main,
      Products,
      FireExtinguisher
    }, {
      tabBarOptions: {
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.themeColor,
        inactiveTintColor: colors.darkTransparent,
        style: {
          display: true ? 'flex' : 'none',
          backgroundColor: '#FFFE',
        }
      }
    }),
    AddVerification,
    AddFireExtinguisher
  }, {
    initialRouteName: 'User',
    transitionConfig: () => fromLeft(),
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
