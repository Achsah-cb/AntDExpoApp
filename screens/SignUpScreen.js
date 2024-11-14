import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Provider, InputItem, Button, WhiteSpace } from '@ant-design/react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/SignUpStyle';

const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const handleSignUp = async () => {
        if (!name || !email || !password || !gender) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('https://dating2-theta.vercel.app/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    gender,
                }),
            });

            const contentType = response.headers.get("content-type");

            console.log("Response Status:", response.status);
            console.log("Response Headers:", response.headers);

            if (response.ok) {
                if (contentType && contentType.includes("application/json")) {
                    const data = await response.json();
                    Alert.alert('Success', 'Account created successfully!');
                    navigation.navigate('BasicInfoScreen');
                } else {
                    Alert.alert('Error', 'Unexpected response format. Please try again later.');
                    console.log("Unexpected Response:", await response.text());
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
            Alert.alert('Error', 'Unable to register. Please try again later.');
            console.error("Sign up error:", error);
        }
    };

    return (
        <Provider>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>Create an Account</Text>
                    <WhiteSpace size="lg" />
                    <View style={styles.pickerContainer}>
                        <InputItem
                            value={name}
                            onChange={(value) => setName(value)}
                            placeholder="Enter your Username"
                        />
                    </View>
                    <WhiteSpace size="lg" />
                    <View style={styles.pickerContainer}>
                        <InputItem
                            value={email}
                            onChange={(value) => setEmail(value)}
                            placeholder="Enter your Email"
                        />
                    </View>
                    <WhiteSpace size="lg" />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            secureTextEntry={!isPasswordVisible}
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            placeholder="Enter your Password"
                            style={[styles.textInput]}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                            <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                    <WhiteSpace size="lg" />
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)}
                            style={{ width: '100%' }}
                        >
                            <Picker.Item label="Select Gender" value="select_gender" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Other" value="other" />
                            <Picker.Item label="Prefer not to say" value="prefer_not_to_say" />
                        </Picker>
                    </View>
                    <WhiteSpace size="lg" />
                    <Button type="primary" onPress={handleSignUp} style={styles.button}>Sign Up</Button>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.switchToLogin}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </Provider>
    );
};

export default SignUpScreen;
