// import AsyncStorage from '@react-native-async-storage/async-storage';
// import NetInfo from "@react-native-community/netinfo";
// import React, { useRef } from 'react';
// import { Platform } from "react-native";
// import publicIP from 'react-native-public-ip';
// import RBSheet from "react-native-raw-bottom-sheet";
import Snackbar from 'react-native-snackbar';
// import { API_KEY, LocalstorageKey } from "../../API/APIUrl";
// import { Color } from "../constant/constant";


export function showerrormsg(message, iserror) {
    
    let color = 'red';
    if (iserror == true) {
        color = 'green';
    }
    else if (iserror == false) {
        color = 'red';
    }
    Snackbar.show({
        text: message,
        backgroundColor:'white',
        textColor: color,
        duration: Snackbar.LENGTH_LONG,
    })
}
// export default function Rbsheet() {
//     const refRBSheet = useRef();
//     return (
//         <RBSheet
//             ref={refRBSheet}
//             closeOnDragDown={true}
//             closeOnPressMask={false}
//             customStyles={{
//                 wrapper: { backgroundColor: "transparent" },
//                 container: { height: 400, borderTopRightRadius: 30, borderTopLeftRadius: 30 },
//                 draggableIcon: { backgroundColor: "#000", }
//             }}>
//         </RBSheet>
//     )
// }
// //console log
// export function PrintLog(key, value) {
//     return console.log(key, value);
// }

// //Async storage
// export const Setdata = async (key, value) => {
//     try {
//         await AsyncStorage.setItem(key, JSON.stringify(value))
//     }
//     catch (error) {
//         PrintLog(error)
//     }
// }

// //Async getdata 

// export const ReadData = async (key) => {
//     try {
//         const value = await AsyncStorage.getItem(key)

//         if (value !== null) {
//             PrintLog(value)
//         }
//         return value;
//     } catch (error) {
//         PrintLog(error)
//     }
// }

// // Async getall keys

// export const getAllData = async () => {
//     AsyncStorage.getAllKeys().then((keys) => {
//         return AsyncStorage.multiGet(keys)
//             .then((result) => {
//                 PrintLog(result);
//             }).catch((error) => {
//                 PrintLog(error)
//             });
//     });
// }

// // Async delete one item
// export async function removeItem(key) {
//     return await AsyncStorage.removeItem(key)
// }

// // Async all delete
// export const clearData = async (key) => {
//     try {
//         AsyncStorage.clear();
//         props.navigation.reset({
//             index: 0,
//             routes: [{ name: key }],
//         });
//     } catch (error) {
//     }
// }

// //Get IP address
// export const GetIpAddress = () => {
//     publicIP()
//         .then(ip => {
//             PrintLog(ip);
//             Setdata("IpAddress==>", LocalstorageKey.IpAddress)

//         })
//         .catch(error => {
//             PrintLog(error);

//         });
// }

// //Check internet function
// export const checkinternetfun = async => {
//     NetInfo.fetch().then(state => {
//         // PrintLog("Connection type", state.type);
//         // PrintLog("Is connected?", state.isConnected);
//         return state.isConnected;
//     });

//     return false;

// }


// //Ckeck DeviceType
// export const getDeviceType = () => {
//     let msg = ''
//     if (Platform.OS === 'android') {
//         msg = 'A'
//     } else if (Platform.OS === 'ios') {
//         msg = 'I'
//     }
//     else {
//         msg = '';
//     }
//     return msg
// }

// //get APIHeader
// export const getAPIHeader = async (ismultipart = false) => {

//     let data = {};
//     const ipAdd = await ReadData("IpAddress==>").then((val) => {
//         var value = JSON.parse(val);
//         if(value!== null){

//             return value;
//         }
//     })
//     const Logintoken = await ReadData("UserDetails").then((val) => {
//         var value = JSON.parse(val);
//         return value !== null ? value.LoginToken : "";
//     })

//     // const userid = await ReadData("UserDetails").then((val) => {
//     //     var value = JSON.parse(val);
//     //     return value.UserId;    
//     // })


//     data['api-key'] = API_KEY;
//     data['clientip'] = ipAdd;
//     data['Logintoken'] = Logintoken;
//     //data['UserId']=userid
//    // console.log(data.LoginToken);
//     if (ismultipart) {
//         data['Content-Type'] = 'multipart/form-data';
//         data['Accept'] = '*/*';
//     }
   

//     PrintLog('header===>', data)
//     return data;
// }