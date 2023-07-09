import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './app/navigation/RootNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
