import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Button, WhiteSpace } from '@ant-design/react-native';
import styles from '../styles/LoginStyle';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    try {
      const response = await fetch('https://dating2-theta.vercel.app/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const contentType = response.headers.get("content-type");

      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);

      if (response.ok) {
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log("Logged in Successfully!")
          Alert.alert('Success', 'Login Successful!');
          navigation.navigate('BasicInfoScreen'); // Navigation to next screen
        } else {
          console.log("Unexpected Response:", await response.text());
          Alert.alert('Login Failed', response.data.message || 'Invalid credentials');
        }
      } else {
        let errorMessage = 'Something went wrong';
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          errorMessage = data.message || errorMessage;
          console.log("Error Message from Backend:", errorMessage);
        } else {
          console.log("Unexpected Error Response:", await response.text());
        }
        Alert.alert('Error', errorMessage);
      }
    } catch (error) {
      console.error('Login Error:', error);
      Alert.alert('Error', 'Unable to Login. Please try again later.');
    }
  };

  return (
    <View style={styles.LoginView}>
      <View style={styles.LoginCard} >
        <Text style={styles.LoginTitle}>Login</Text>

        <TextInput
          style={styles.LoginInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <WhiteSpace size="lg" />

        <TextInput
          style={styles.LoginInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <WhiteSpace size="lg" />

        <Button type="primary" onPress={handleLogin}>
          Login
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.switchToSignUp}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
