import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    LoginView: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },

    LoginCard:{
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
    
    LoginTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    LoginInput: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    forgotPassword: {
      color: '#1890ff',
      marginTop: 15,
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
    switchToSignUp: {
      marginTop: 15,
      fontSize: 16,
      color: '#007bff',
      textAlign: 'center',
      textDecorationLine: 'underline'
    },
  });  

export default styles;