import { StyleSheet } from 'react-native';

const SignUpScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    card: {
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    textInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
        width: '100%',
        padding: 10,
        marginVertical: 5,
        height: '100%',
        backgroundColor: '#fff',
    },
    eyeIcon: {
        paddingHorizontal: 5,
    },
    pickerContainer: {
        width: '100%',
        marginVertical: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderRadius: 5,
    },
    switchToLogin: {
        marginTop: 15,
        fontSize: 16,
        color: '#007bff',
        textAlign: 'center',
        textDecorationLine: 'underline',
      },
});

export default SignUpScreenStyle;
