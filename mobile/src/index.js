import React from 'react';

import createNavigator from './routes';

const App = () => {
    const Routes = createNavigator();

    return <Routes />;
};

export default App;
