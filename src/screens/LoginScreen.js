import React, { useEffect, useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Input, Image, Button } from 'react-native-elements';
import { auth } from '../../firebase';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        navigation.replace('Home')
      }
    });

    return unsubscribe;
  },[])

  const signIn = ()=> {
    auth
    .signInWithEmailAndPassword(email,password)
    .catch((error) => alert(error))
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Image source={{uri:'http://assets.stickpng.com/images/6002f8aa51c2ec00048c6c68.png'}}
      style={{width:200, height:200}}
      />

      <View style={styles.inputContainer}>
        <Input 
        placeholder='Email' 
        autoFocus 
        type='email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        />
        <Input 
        placeholder='Password' 
        secureTextEntry 
        type='password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button containerStyle={styles.button} onPress={signIn} title='Login'/>
      <Button containerStyle={styles.button} onPress={() => navigation.navigate('Register')} type='outline' title='Register'/>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems :'center',
    justifyContent :'center',
    padding :10,
    backgroundColor:'white'
  },
  inputContainer : {
    width:300,
  },
  button :{
    width:200,
    marginTop :10,
  },
})
