import React from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = () => {
  return (
    <View
      style={{
        backgroundColor: '#81663F',
        width: 350,
        height: 350,
        marginLeft: 40,
        marginTop: 100,
        borderRadius: 20,
        borderWidth: 1,
      }}>
      <View />
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold',
          marginLeft: 98,
          marginTop: 20,
          borderRadius: 20,
        }}>
        Login Form
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
          width: 290,
          marginLeft: 27,
        }}
        placeholder="Id Or Email"
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 30,
          width: 290,
          marginLeft: 27,
        }}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          width: 100,
          height: 35,
          backgroundColor: '#BCBCBC',
          marginLeft: 125,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 16,
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            marginTop: 50,
            marginLeft: 25,
          }}>
          Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            marginLeft: 210,
            margin: -19,
          }}>
          Forgot Password
        </Text>
      </TouchableOpacity>
      <Image
        style={{
          width: 50,
          height: 50,
          marginTop: -370,
          marginLeft: 150,
        }}
        source={require('./assets/images/user.png')}
      />
    </View>
  );
};

export default Login;
