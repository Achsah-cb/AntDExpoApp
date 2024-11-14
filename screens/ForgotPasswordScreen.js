import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Button, WhiteSpace, Icon } from '@ant-design/react-native';
import styles from '../styles/ForgotPasswordStyle';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://dating2-theta.vercel.app/user/forget-password', {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok && data.success) {
        console.log('Password reset');
        Alert.alert('Success', 'Password reset link sent! Please check your email.');
      }
       else {
        Alert.alert('Error', data.message || 'Failed to send password reset link.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Password Reset Error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="left" size="md" color="#1890ff" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Icon name="lock" size="lg" style={styles.icon} />
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>Enter your email to receive a reset link</Text>
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <WhiteSpace size="lg" />

      <Button
        type="primary"
        onPress={handlePasswordReset}
        loading={loading}
        style={styles.button}
      >
        Send Reset Link
      </Button>
    </View>
  );
};

export default ForgotPasswordScreen;
