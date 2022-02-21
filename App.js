/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from './src/component/SignUp';
import HomeScreen from './src/component/HomeScreen';
import Location from './src/component/Location';
import ProfileScreen from './src/component/ProfileScreen/ProfileScreen';
import SplashScreen from './src/component/SplashScreen/SplashScreen';
import GenerateQr from './src/component/MakeQr';
import ScanQr from './src/component/ScanQr';
import GeneratedQr from './src/component/ViewGeneratedQrScreen';
import BusAndDriverInfo from './src/component/BusAndDriverInfo';
import ReportBoardScreen from './src/component/ReportBoardScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const auth = useSelector(state => state.userAuth);
  const [loggedIn, setLoggedIn] = useState(false);
  const [animating, setAnimating] = useState(true);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#ffff' : '#ffff',
    height: '100%',
  };
  React.useEffect(() => {
    StatusBar.setBackgroundColor('#FF573300');
    StatusBar.setTranslucent(true);
  }, []);

  const Stack = createNativeStackNavigator();

  const isLogged = async () => {
    const loggedIn = await AsyncStorage.getItem('isLoggedIn');
    if (loggedIn == '1') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };
  useEffect(() => {
    isLogged();
  }, []);

  useEffect(() => {
    isLogged(auth.authenticate);
  }, [auth.authenticate]);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
    }, 1000);
  }, []);
  if (animating) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{title: 'SplashScreen'}}
        /> */}
        {loggedIn ? (
          <>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{title: 'HomeScreen'}}
            />

            <Stack.Screen
              name="Location"
              component={Location}
              options={{title: 'Location'}}
            />
            <Stack.Screen
              name="generateQr"
              component={GenerateQr}
              options={{title: 'generateQr'}}
            />
            <Stack.Screen
              name="scanQr"
              component={ScanQr}
              options={{title: 'scanQr'}}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{title: 'ProfileScreen'}}
            />
            <Stack.Screen
              name="GeneratedQr"
              component={GeneratedQr}
              options={{title: 'GeneratedQr'}}
            />
            <Stack.Screen
              name="BusAndDriverInfo"
              component={BusAndDriverInfo}
              options={{title: 'BusAndDriverInfo'}}
            />
            <Stack.Screen
              name="ReportBoardScreen"
              component={ReportBoardScreen}
              options={{title: 'ReportBoardScreen'}}
            />
          </>
        ) : (
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: 'SignUp'}}
            setLoggedIns={setLoggedIn}
            // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  login: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 44,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 30,
    color: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
