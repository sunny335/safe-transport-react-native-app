import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Alert,
  Button,
  ImageBackground,
  Image,
  Dimensions,
  Pressable,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
// import SendSMS from 'react-native-sms';

import SmsAndroid from 'react-native-get-sms-android';

import image1 from '../image/loginBg.png';
// import profile from '../image/profile.jpg';
import avatar from '../image/avatar.png';
import DoubleRight from '../image/DoubleRight.png';

import HomeImg from '../image/homedefault.png';
import ProfileImg from '../image/useactive.png';
import QrCode from '../image/QrCode.png';

const HEIGHT = Dimensions.get('window').height;

// var SmsAndroid = require('react-native-sms-android');

const EmergencyContactScreen = ({navigation}) => {
  // const userauth = useSelector(state => state.userAuth);
  const isDarkMode = useColorScheme() === 'dark';
  const [loggedIn, setLoggedIn] = useState({});
  const [voices, setVoice] = useState('initial');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#ffff' : '#ffff',
  };

  const userFormLogin = async () => {
    const loggedIna = await AsyncStorage.getItem('UserData');
    setLoggedIn(JSON.parse(loggedIna));
  };

  useEffect(() => {
    userFormLogin();
  }, []);

  // const HandleVoiceResult = e => {
  //   setVoice(e);
  //   console.log('result', e);
  // };
  // const HandleVoiceStart = e => {
  //   setVoice('starting');
  //   console.log('starting', e);
  // };
  // const HandleVoiceEnd = e => {
  //   setVoice(e);
  //   console.log('ending', e);
  // };
  // useEffect(() => {
  //   Voice.onSpeechStart = e => {
  //     setVoice('starting');
  //     console.log('starting', e);
  //   };
  //   Voice.onSpeechEnd = e => {
  //     setVoice(e);
  //     console.log('ending', e);
  //   };
  //   Voice.onSpeechResults = e => {
  //     setVoice(e);
  //     console.log('result', e);
  //   };
  //   return () => {
  //     Voice.destroy().then(Voice.removeAllListeners);
  //   };
  // }, []);

  // const startRecording = () => {
  //   try {
  //     Voice.start('en-US');
  //     console.log('clicked record', Voice.onSpeechStart);
  //   } catch (error) {
  //     console.log('error rised', error);
  //   }
  // };

  const [mobileNumber, setMobileNumber] = useState(['01967487507']);
  const [Message, setMessage] = useState('I am On danger');

  // const sendingSms = (Receivers, Messagex) => {
  //   try {
  //     Receivers.map(
  //       async Numbers =>
  //         await SmsAndroid.sms(
  //           Numbers,
  //           Messagex,
  //           'sendDirect',
  //           (err, message) => {
  //             if (err) {
  //               console.log(err);
  //             } else {
  //               console.log(message);
  //             }
  //           },
  //         ),
  //     );
  //   } catch (e) {
  //     alert('' + e);
  //   }
  // };

  const sendingSms = (Receivers, Messagex) => {
    const granted = PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
      {
        title: 'Example App SEND_SMS Permission',
        message: 'Example App needs access to your SEND_SMS',
      },
    );
    try {
      Receivers.map(
        async Numbers =>
          await SmsAndroid.autoSend(
            Numbers,
            Messagex,
            fail => {
              console.log('Failed with this error: ' + fail);
            },
            success => {
              console.log('SMS sent successfully');
            },
          ),
      );
    } catch (e) {
      alert('' + e);
    }
  };

  // SmsAndroid.autoSend(
  //     Receivers,
  //     Messagex,
  //     fail => {
  //       console.log('Failed with this error: ' + fail);
  //     },
  //     success => {
  //       console.log('SMS sent successfully');
  //     },
  //   );
  return (
    <View
      style={{
        height: '100%',
        position: 'relative',
        backgroundColor: '#fff',
      }}>
      {/* <StatusBar barStyle={isDarkMode ? '#fff' : 'dark-content'} /> */}
      <View contentInsetAdjustmentBehavior="automatic" style={{height: 320}}>
        <ImageBackground
          source={image1}
          resizeMode="cover"
          style={{height: 320}}>
          <View style={{marginLeft: 20, marginRight: 53}}>
            <View
              style={{
                display: 'flex',
                // flex: 1,
                flexDirection: 'row',
                marginBottom: 30,
                marginTop: 80,
              }}>
              <Image
                source={DoubleRight}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  aspectRatio: 1,
                  marginTop: 10,
                  // marginLeft: 'auto',
                }}
              />
              <View
                style={{
                  height: 42,
                  width: 42,
                  overflow: 'hidden',
                  borderRadius: 50,
                  position: 'relative',
                }}>
                <Image
                  source={avatar}
                  resizeMode="contain"
                  style={{width: '100%', height: undefined, aspectRatio: 1}}
                />
              </View>
              <View>
                <Text
                  style={{
                    marginTop: 0,
                    color: '#fff',
                    paddingTop: 11,
                    paddingBottom: 12,
                    paddingLeft: 12,
                    paddingRight: 31,
                    fontSize: 15,
                    fontWeight: '700',
                    textTransform: 'uppercase',
                  }}>
                  {loggedIn?.user?.firstName &&
                    loggedIn?.user?.firstName + ' ' + loggedIn?.user.lastName}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                // flex: 1,
                textAlign: 'center',
                marginTop: 0,
                fontWeight: '600',
                fontSize: 36,
                color: '#fff',
              }}>
              SAFE
            </Text>
          </View>
          <Text
            style={{
              // flex: 1,
              textAlign: 'center',
              marginTop: 0,
              fontWeight: '400',
              fontSize: 16,
              color: '#fff',
              textTransform: 'uppercase',
            }}>
            Transport
          </Text>
        </ImageBackground>
      </View>
      <View
        style={{
          height: HEIGHT - 320,
          maxHeight: HEIGHT - 320,
        }}>
        <View
          style={{
            marginLeft: 37,
            marginRight: 37,
            // marginBottom: 30,
            shadowColor: '#000',
            shadowOffset: {width: 15, height: 15},
            shadowOpacity: 10,
            shadowRadius: 20,
            elevation: 5,
            borderRadius: 15,
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          <ScrollView>
            {/* <View>
              <Text>Emergency Contact</Text>
              <Pressable>
                <Text style={{padding: 10, backgroundColor: '#ddd'}}>
                  Start
                </Text>
              </Pressable>
              <Text>{voices}</Text>
            </View> */}
            {/* <View style={styles.container}>
              <Text style={styles.titleText}>
                Example to Send Text SMS on Button Click in React Native
              </Text>
              <Text style={styles.titleTextsmall}>Enter Mobile Number</Text>
              <TextInput
                value={mobileNumber}
                onChangeText={mobileNumber => setMobileNumber(mobileNumber)}
                placeholder={'Enter Conatct Number to Call'}
                keyboardType="numeric"
                style={styles.textInput}
              />
              <Text style={styles.titleTextsmall}>Enter SMS body</Text>
              <TextInput
                value={bodySMS}
                onChangeText={bodySMS => setBodySMS(bodySMS)}
                placeholder={'Enter SMS body'}
                style={styles.textInput}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={initiateSMS}>
                <Text style={styles.buttonTextStyle}>Send Message</Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.container}>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '90%',
                }}
                onChangeText={Message => setMessage(Message)}
                value={Message}
              />
              <Button
                title="SEND"
                onPress={() => sendingSms(mobileNumber, Message)}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          // flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 50,
          paddingRight: 50,
          shadowColor: '#000',
          shadowOffset: {width: 15, height: 15},
          shadowOpacity: 10,
          shadowRadius: 20,
          elevation: 30,
          backgroundColor: '#fff',
          height: 75,
          // marginTop: 30,
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}>
        <Text onPress={() => navigation.replace('HomeScreen')}>
          <View style={{width: 35, textAlign: 'center'}}>
            <Image
              source={HomeImg}
              resizeMode="contain"
              style={{
                width: 18,
                height: 20,
                aspectRatio: 1,
                marginTop: 0,
                marginLeft: 3,
              }}
            />
            <Text
              style={{
                color: '#4F4F4F',
                fontSize: 12,
                fontWeight: '700',
                marginTop: 9,
              }}>
              Home
            </Text>
          </View>
        </Text>
        <Text onPress={() => navigation.replace('scanQr')}>
          <View
            style={{
              width: 70,
              height: 58,
              backgroundColor: '#03CA51',
              borderRadius: 10,
              marginRight: 62,
              marginLeft: 62,
              paddingTop: 14,
              paddingBottom: 14,
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            <Image
              source={QrCode}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                aspectRatio: 1,
                marginTop: 0,
              }}
            />
          </View>
        </Text>
        <Text>
          <View style={{width: 37, textAlign: 'center'}}>
            <Image
              source={ProfileImg}
              resizeMode="contain"
              style={{
                width: 18,
                height: 20,
                aspectRatio: 1,
                marginTop: 0,
                marginLeft: 3,
              }}
            />
            <Text
              style={{
                color: '#27AE60',
                fontSize: 12,
                fontWeight: '400',
                marginTop: 9,
              }}>
              Profile
            </Text>
          </View>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alreadyMember: {
    // flex: 1,
    marginTop: 21,
    fontWeight: '700',
    fontSize: 12,
    color: '#5C5F69',
    textTransform: 'capitalize',
    marginBottom: 5,
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  submitButton: {
    borderRadius: 45,
    width: 300,
    textAlign: 'center',
    backgroundColor: '#00D253',
  },
  login: {
    // flex: 1,
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
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default EmergencyContactScreen;
