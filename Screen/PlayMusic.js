import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image,
    Share,
    ImageBackground

} from 'react-native';
import IconBack from 'react-native-vector-icons/Ionicons';
import { Icon } from '../src/common/constant/constant';
import IconHeart from 'react-native-vector-icons/AntDesign';
import IconPlayPause from 'react-native-vector-icons/AntDesign';
import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {useTrackPlayerProgress} from 'react-native-track-player/lib/hooks';
import { useNavigation } from '@react-navigation/native';

export default function PlayMusic(data){
  const navigation = useNavigation();
    var songName=data.route.params.songName;
    var images=data.route.params.images
    var likes=data.route.params.Likes
    var share=data.route.params.share
    const [songDetail,setSongDetail] = useState([
        {
            id:1,
            src:require('../assets/PlayButton.png'),
            name:'Same as Saying',
            artist:'Through shrin from Toll',
            Time:3.29,

        },
        {
            id:2,
            src:require('../assets/PlayButton.png',),
            name:'Omins Volupts',
            artist:'Omins Dolor Repellen',
            Time:3.29,

        },
        {
            id:3,
            src:require('../assets/PlayButton.png',),
            name:'Temporibus Autem',
            artist:'Officiis Debitis Aut',
            Time:3.29,

        } ,
         {
            id:4,
            src:require('../assets/PlayButton.png',),
            name:'Eveniet Voluptates',
            artist:'Itaque Earum Rerum',
            Time:3.29,

        },
        {
            id:5,
            src:require('../assets/PlayButton.png',),
            name:'Same as Saying',
            artist:'Through shrin from Toll',
            Time:3.29,

        }
    ])  
    
    const [selectedIndex, setSelectedIndex] = useState([]);
    const [sliderValue, setSliderValue] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const {position, duration} = useTrackPlayerProgress(290);

    useEffect(() => {
        if (!isSeeking && position && duration) {
          setSliderValue(position / duration);
        }
        console.log('slidervalue',sliderValue)
      }, []);
      
      const slidingStarted = () => {
        setIsSeeking(true);
        console.log('hsi',isSeeking)
      };
      //this function is called when the user stops sliding the seekbar
      const slidingCompleted = async value => {
        await TrackPlayer.seekTo(value * duration);
        setSliderValue(value);
        setIsSeeking(false);
      };
      
    const selectItem = (index) => {
        if(selectedIndex.indexOf(index)>-1){
          let newArray = selectedIndex.filter((indexObject)=>{
            if(indexObject == index){
                return false;
            }
            return true;
        })
        setSelectedIndex(newArray);
        }else{
        setSelectedIndex([
            ...selectedIndex,index
          ]);
        }
        
        };
        const [playMusic, setPlayMusic] = useState(false);
       
        const[selectValue,setSelectValue]=useState([])
        const selectMusic = (index) => {
            if(selectValue.indexOf(index)>-1){
              let newArray = selectValue.filter((indexObject)=>{
                if(indexObject == index){
                  // onButtonPressed()
                    return false;
                }
                onButtonPressed()
                return true;
                
            })
              
            setSelectValue(newArray);
            }else{
              // onButtonPressed()
                setSelectValue([
                ...selectValue,index
              ]);
            }
            
            };
            var track = {
                url: 'https://firebasestorage.googleapis.com/v0/b/music-986a0.appspot.com/o/song%2FPsycho%20Saiyaan%20-%20Saaho%20-%20Hindi.mp3?alt=media&token=420796d4-aa0d-44f1-bc23-cad678aedb10', // Load media from the network
                title: 'Avaritia',
                artist: 'deadmau5',
                album: 'while(1<2)',
               genre: 'Progressive House, Electro House',
               date: '2014-05-20T07:00:00+00:00', // RFC 3339
                artwork: "https://pagalworld.bar/thumbs2/27549-is-qadar.jpg", // Load artwork from the network
             duration: 402 // Duration in seconds
            };
            var track1 = {
              url: 'https://firebasestorage.googleapis.com/v0/b/music-986a0.appspot.com/o/song%2FPsycho%20Saiyaan%20-%20Saaho%20-%20Hindi.mp3?alt=media&token=420796d4-aa0d-44f1-bc23-cad678aedb10', // Load media from the network
              title: 'is Qadar',
              artist: 'Darshan Raval',
              album: 'while(1<2)',
             genre: 'Progressive House, Electro House',
             date: '2014-05-20T07:00:00+00:00', // RFC 3339
              artwork: "https://pagalworld.bar/thumbs2/27549-is-qadar.jpg", // Load artwork from the network
           duration: 402 // Duration in seconds
          };
            const start = async () => {
                // Set up the player
                await TrackPlayer.setupPlayer();

                // TrackPlayer.registerPlaybackService(() => require('../Screen/Service'));
            
                // Add a track to the queue
                await TrackPlayer.add([track,track1]);
                TrackPlayer.updateOptions({
                    capabilities: [
                      TrackPlayer.CAPABILITY_PLAY,
                      TrackPlayer.CAPABILITY_PAUSE,
                      TrackPlayer.CAPABILITY_STOP,
                    ],
                    compactCapabilities: [
                      TrackPlayer.CAPABILITY_PLAY,
                      TrackPlayer.CAPABILITY_PAUSE,
                      TrackPlayer.CAPABILITY_STOP
                    ]
                  });   
            
                // Start playing it
                await TrackPlayer.play();
               
            };
            useEffect(() => {
                const startPlayer = async () => {
                   let isInit =  await start();
                   setPlayMusic(isInit);
                }
                startPlayer()
              }, []);
              const onButtonPressed = () => {
                if (!playMusic) {
                    TrackPlayer.play();
                    setPlayMusic(true);
                  } else {
                    TrackPlayer.pause();
                    setPlayMusic(false);
                  }
                
              };
             
            // useEffect(() => {
            //     start()
            // })



    return(
        <SafeAreaView style={{flex:1}}>
         
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ScrollView style={{flex:1,width:'100%'}} contentContainerStyle={{marginBottom:20}}>
                <ImageBackground source={{uri:images}} style={{height:'100%',width:'100%',flex:1}}
                imageStyle={{borderBottomLeftRadius:40}}
                blurRadius={9}
                >
                    <IconBack name={Icon.Back} size={23} style={{backgroundColor:'white',width:'9%',height:'9%',marginTop:15,marginLeft:10,borderRadius:5,paddingTop:5,paddingLeft:7}}></IconBack>
                    <Text style={{fontFamily:'SF-Pro-Text-Bold',fontSize:15,color:'white',paddingLeft:13,paddingTop:25,}}>Every Pleasure is to be Welcome</Text>
                    <Text style={{fontFamily:'SF-Pro-Text-Regular',fontSize:15,color:'white',paddingLeft:13,paddingTop:25,}}>{songName}</Text>
                    <Text style={{fontFamily:'SF-Pro-Text-Regular',fontSize:15,color:'white',paddingLeft:13}}>Blues</Text>
                    <Text style={{fontFamily:'SF-Pro-Text-Regular',fontSize:15,color:'white',paddingLeft:13}}>Jazz</Text>
                
                    <View style={{flexDirection:'row'}}>
                        
                        <Image source={{uri:images}} style={{marginLeft:55,marginTop:20,height:'170%',width:'45%'}}></Image>
                       <View style={{padding:10,paddingTop:60,paddingLeft:20}}>
                        <Text style={{color:'white',fontFamily:'SF-Pro-Text-Regular',fontSize:13}}>Likes</Text>
                        <Text style={{color:'white',fontFamily:'SF-Pro-Text-Regular',fontSize:13}}>{likes}</Text>

                        </View>
                        <View style={{padding:10,paddingTop:60}}>
                        <Text style={{color:'white',fontFamily:'SF-Pro-Text-Regular',fontSize:13}}>Sharing</Text>
                        <Text style={{color:'white',fontFamily:'SF-Pro-Text-Regular',fontSize:13}}>{share}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{paddingTop:130}}>
                <View>
                    <Text style={{fontFamily:'SF-Pro-Text-Regular',fontSize:18,paddingLeft:18}}>Popular Music Brand</Text>
                </View>
               
                <View style={{paddingBottom:10}}>
                   
                        <FlatList
                            data={songDetail}
                            keyExtractor={item => item.id}
                            renderItem={({item,index}) => (
                                <View style={{flexDirection:'row',alignItems:'center',paddingTop:15}}>
                         {/* <Image source={item.src} style={{height:30,width:30,alignItems:'center',marginLeft:15}} ></Image> */}
                       <TouchableOpacity onPress={() => navigation.navigate('PlayScreenformusic',{title:item.name,artist:item.artist})}>
                       <IconPlayPause name='play' size={35} style={{color:'#F69B30',paddingLeft:20}}></IconPlayPause>
                       </TouchableOpacity>         
                                    <View style={{flexDirection:'column',width:'75%'}}>
                                        <Text style={{fontFamily:'SF-Pro-Text-Bold',alignItems:'center',paddingLeft:25}}>{item.name}</Text>
                                        <View style={{flexDirection:'row'}}>
                                        <Text style={{fontFamily:'SF-Pro-Text-Regular',paddingLeft:25,color:'grey'}}>{item.artist}</Text>
                                        <Text style={{fontFamily:'SF-Pro-Text-Regular',paddingLeft:25,color:'grey'}}>{item.Time}</Text>
                                       
                                        </View>
                                       </View>
                                    <TouchableOpacity onPress={() => selectItem(index)}>
                                        <IconHeart name='heart' size={22} color={selectedIndex.indexOf(index)>-1 ? '#FD6F08' : 'grey'}  ></IconHeart>
                                        </TouchableOpacity>
                                </View>
                            )}>

                        </FlatList>
                   
                </View>
                </View>
                </ScrollView>
            </View>
           
        </SafeAreaView>
    )
}