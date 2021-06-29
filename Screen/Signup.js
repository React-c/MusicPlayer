import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Iconmail from 'react-native-vector-icons/MaterialCommunityIcons';
import { showerrormsg } from '../src/common/utility/utility';



export default function signUp(){
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function isValid(){
        let emailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let message = '';
        let iserror = false;
        if(email == ''){
            message='Email is required'
        }else if(emailvalid.test(email) === false){
            message='Please Enter Valid Email'
        }else if(password == ''){
            message='Password is Required'
        }else if(passwordPattern.test(password) === false){
            message='Please Enter capital,small character,legnth is 8,special charactre,digital'
        }else{
            iserror = true
          
            UserData(email,password)
           
        }showerrormsg(message,iserror)
    }
    const UserData = async(email,password) => {
        try {
            let response = await auth().createUserWithEmailAndPassword(
              email,
              password
            )
            if (response && response.user) {
              Alert.alert("Success ✅", "Account created successfully")
              navigation.navigate('tab')
            }
          } catch (e) {
            console.error(e.message)
          }
        
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}> 
               
                <View style={{alignItems:'center',justifyContent:'center',paddingTop:150}}>
                    <Text style={{fontSize:24,color:'#2e54c2', fontFamily: 'SF-Pro-Text-Bold',}}>Create Account</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:50,alignItems:'center',justifyContent:'center'}}>
                    <Iconmail name='email'size={28} style={{marginTop:10,color:'#2e54c2'}} ></Iconmail>
                    <TextInput 
                    placeholder='Email'
                    value={email}
                    returnKeyType = {'next'}
                    onChangeText={(text) =>setEmail(text)} 
                    style={{borderBottomWidth:1,width:250,marginLeft:10,borderBottomColor:'lightgrey',color:'black',fontSize:17}}
                    >

                    </TextInput>
                </View>
                <View style={{flexDirection:"row",marginTop:50,alignItems:'center',justifyContent:'center'}}>
                    <Iconmail name='lock'size={28} style={{marginTop:10,color:'#2e54c2'}} ></Iconmail>
                    <TextInput 
                    placeholder='Passwsord'
                    value={password} 
                    secureTextEntry={true}
                    onChangeText={(text) =>setPassword(text)}  
                    returnKeyType = {'next'}  
                maxLength={8}
                minLength={8}
                    style={{borderBottomWidth:1,width:250,marginLeft:10,borderBottomColor:'lightgrey',color:'black',fontSize:17}}
                    >

                    </TextInput>
                </View>
                <View style={{  padding:10,
        //marginTop: 105,
        //marginBottom:110,
        marginLeft:50,
        marginRight:50,
        marginTop:45,
        alignItems: 'center' ,
        backgroundColor:'#2e54c2',
        borderRadius:5}}>
                        <TouchableOpacity onPress={() => isValid()}>
                        <Text style={{color:'white',fontSize:18,fontFamily: 'SF-Pro-Text-Bold'}}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}