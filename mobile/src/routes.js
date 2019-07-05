import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';
import Products from './pages/Products';
import Verifications from './pages/Verifications';


import { colors } from './styles';

const Routes = (userLogged = false) => createAppContainer(createSwitchNavigator(
  {
    Login,
    User: createBottomTabNavigator({
      Main,
      Verifications,
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
  }, {
    initialRouteName: 'Login',
  }
));

export default Routes;
