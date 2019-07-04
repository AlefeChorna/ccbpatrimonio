import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

const Routes = (userLogged = false) => createAppContainer(createSwitchNavigator(
  {
    Login,
    Main
  }, {
    initialRouteName: 'Login',
  }
));

export default Routes;
