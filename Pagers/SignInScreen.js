import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, Dimensions, Platform, StatusBar } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import {AuthContext} from '../components/context';




const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {signIn} =React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#B1C640' barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../assets/img/img2.jpg')}
          style={styles.logo}
          resizeMode="stretch"

        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}> Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => textInputChange(val)}
          />
          <Feather
            name="check-circle"
            color="green"
            size={20}
          />
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}> Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize='none'
          />
          <TouchableOpacity>

            <Feather
              name="eye-off"
              color="grey"
              size={20}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={{ color: '#FF6347', marginTop: 10, marginLeft: 130 }}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => { signIn() }}>

            <LinearGradient
              colors={['#FF6347', '#ff7759']}
              style={styles.signIn}>
              <Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>
            </LinearGradient>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[styles.signIn, {
              borderColor: '#FF6347',
              borderWidth: 1,
              marginTop: 15
            }]}
          >
            <Text style={[styles.textSign, {
              color: '#FF6347'
            }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347'
  },
  header: {
    flex: 1,
    marginBottom: 50,


  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30

  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  logo: {
    width: 420,
    height: 220,

  },

});