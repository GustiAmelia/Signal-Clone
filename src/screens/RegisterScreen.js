import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { auth } from '../../firebase';

const RegisterScreen = ({navigation}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect (() => {
    navigation.setOptions({
      headerBackTitle : 'Back to Login'
    })
  },[navigation]);

  const register = () => {
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((authUser) => {
      authUser.user.updateProfile({
        dispalyName : name,
        photoURL : imageUrl || 'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png',

      })
    })
    .catch((error) => alert(error,message))
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Text h3 style={{marginBottom:50}}>
        Create a signal account
      </Text>

      <View style={styles.ipnutContainer}>
        <Input placeholder='Full Name' autoFocus type='text' value={name} onChangeText={(text) => setName(text)}/>
        <Input placeholder='Email' type='email' value={email} onChangeText={(text) => setEmail(text)}/>
        <Input placeholder='Password' type='password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)}/>
        <Input placeholder='Profile picture URL (optional)'  type='text' value={imageUrl} onChangeText={(text) => setImageUrl(text)} onSubmitEditing={register}/>
      </View>

      <Button containerStyle={styles.button} raised onPress={register} title='Register'/>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    backgroundColor:'white'
  },
  ipnutContainer :{
    width:300,
  },
  button:{
    width:200,
    marginTop:10,
  },
})
