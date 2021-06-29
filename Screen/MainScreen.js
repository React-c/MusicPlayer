import React, { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image,
    Share

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNFetchBlob from 'react-native-fetch-blob'
import Iconm from 'react-native-vector-icons/Feather';
import Iconmusic from 'react-native-vector-icons/Ionicons';
import IconDownload from 'react-native-vector-icons/AntDesign';
import IconHeart from 'react-native-vector-icons/AntDesign';
import Iconshare from 'react-native-vector-icons/Ionicons';
import firestore, { firebase } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import TrackPlayer from 'react-native-track-player';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Async } from '@react-native-async-storage/async-storage'



export default function MainPage(songs) {
    const [title, settitle] = useState([
        { name: 'Playlist' },
        { name: 'Artists' },
        { name: 'Folders' },
        { name: 'Geners' },
        { name: 'Album' },

    ]);
    const navigation = useNavigation();
    const [image, setImage] = useState([])
    const [SongList, SetSongList] = useState([
        {
            title: 'Death Bed',
            artist: 'Powfu',
            artwork: "https://i1.sndcdn.com/artworks-000527696409-carom3-t500x500.jpg",
            url: "https://samplesongs.netlify.app/Death%20Bed.mp3",
            id: "1"
        },
        {
            title: 'Bad Liar',
            artist: "Imagine Dragons",
            artwork: "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
            url: "https://samplesongs.netlify.app/Bad%20Liar.mp3",
            id: "2"
        },
        {
            title: "Faded",
            artist: "Alan Walker",
            artwork: "https://samplesongs.netlify.app/album-arts/faded.jpg",
            url: "https://samplesongs.netlify.app/Faded.mp3",
            id: "3"
        },
        {
            title: "Hate Me",
            artist: "Ellie Goulding",
            artwork: "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
            url: "https://samplesongs.netlify.app/Hate%20Me.mp3",
            id: "4"
        },
        {
            title: "Solo",
            artist: "Clean Bandit",
            artwork: "https://samplesongs.netlify.app/album-arts/solo.jpg",
            url: "https://samplesongs.netlify.app/Solo.mp3",
            id: "5"
        },
        {
            title: "Without Me",
            artist: "Halsey",
            artwork: "https://samplesongs.netlify.app/album-arts/without-me.jpg",
            url: "https://samplesongs.netlify.app/Without%20Me.mp3",
            id: "6"
        }])

    const [indexChecked, setIndexChecked] = useState('Playlist');
    const [isLiked, setIsLiked] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState([]);
    const selectItem = (index) => {
        if (selectedIndex.indexOf(index) > -1) {
            let newArray = selectedIndex.filter((indexObject) => {
                if (indexObject == index) {
                    return false;
                }
               
                return true;
                
            })
            setSelectedIndex(newArray);
        } else {
            setSelectedIndex([
                ...selectedIndex, index
            ]);
        }

    };
    // function onPressOfHeart() {
    //     // any Api calls
    //     setIsLiked(!isLiked); // Update heart to be true
    // }

    //     const likePost = (item,index) => {
    //         const [post,setPost] = useState();
    //         let targetPost = post[index];
    //         targetPost.liked = !targetPost.liked
    //         post[index] = targetPost;
    //         setPost(post)
    //     }
    //     const [like, setLike] = useState(false);
    //   const setdata = () => {
    //         setLike(like == !like);

    //         if(like == true){
    //             console.log('true')
    //         }
    //         console.log('false')
    //   }
    //   const getdata = () => {
    //     setLike(true);

    //   }
    function onShare(device) {

        if (device == 'android') {
            Share.share({
                message: 'https://play.google.com/store/apps/details?id=com.login'
            });
        }
        else if (device == "ios") {
            Share.share({
                message: 'http://apps.apple.com/<country>/app/<app–name>/id<login-ID>'
            });
        }

    }
    function urldata() {
        const get = storage().ref().getDownloadURL().then((res) => { console.log(res) })


    }
    // 
    function url(urldata) {
        // const get = storage().ref('song/Psycho Saiyaan - Saaho - Hindi.mp3').getDownloadURL().then((res) => {console.log(res)})

        RNFetchBlob
            .config({
                //  path : dirs.DCIMDir + '/music.mp3',
                addAndroidDownloads: {
                    useDownloadManager: true, // <-- this is the only thing required
                    // Optional, override notification setting (default to true)
                    notification: true,
                    title: 'Great ! Download Success ! :O ',
                    // Optional, but recommended since android DownloadManager will fail when
                    // the url does not contains a file extension, by default the mime type will be text/plain
                    mime: 'audio/mpeg',
                    description: 'File downloaded by download manager.'
                }
            })
            .fetch('GET', urldata)
            .then((resp) => {
                // the path of downloaded file
                // const get = storage().ref('song/Psycho Saiyaan - Saaho - Hindi.mp3').getDownloadURL().then((res) => {console.log(res)})

                alert('Song Successfull dowolad')
                resp.path();

            })
        // storage().ref('song/Psycho Saiyaan - Saaho - Hindi.mp3').getDownloadURL().then((res) => console.log(res));
    }
    const songDetail = async () => {
        await firestore()
            .collection('Song')
            .onSnapshot((querySnapshot) => {
                let temp = [];
                console.log('Total users: ', querySnapshot.size);


                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    let userDetails = {};
                    userDetails = documentSnapshot.data();
                    // All the document related data
                    userDetails['id'] = documentSnapshot.id;
                    temp.push(userDetails);
                    console.log('sms', userDetails)
                    console.log('sms', documentSnapshot.data().banner)
                    // setImage( documentSnapshot.data())
                    setImage(temp)

                    console.log('detail: ', image);

                })



            });



    }
    // const songFullDetail = async () => {
    //     await firestore()
    //           .collection('Song')
    //           .onSnapshot((querySnapshot) => {
    //               let temp = [];
    //               console.log('Total users: ', querySnapshot.size);


    //               querySnapshot.forEach(documentSnapshot => {
    //                   console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //                   let songDetails = {};
    //                   songDetails = documentSnapshot.data();
    //                   // All the document related data
    //                   songDetails['id'] = documentSnapshot.id;
    //                   temp.push(songDetails);
    //                   console.log('sms', songDetails)
    //                   console.log('sms', documentSnapshot.data().banner)
    //                   // setImage( documentSnapshot.data())
    //                   SetSongList(temp)

    //                   console.log('detail: ', SongList);

    //               })



    //   });


    //   }
    
    const changeEvents = useRef(TrackPlayer).current;
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect((id) => {
        var index = SongList.findIndex(x => x.id == id)
        changeEvents.addEventListener('playback-state', async ({ state }) => {
            const idSong = await TrackPlayer.getCurrentTrack();
            if (idSong == SongList[index]) {
                switch (state) {
                    case 3:
                        setIsPlaying(true);
                        break;
                    case 2:
                        setIsPlaying(false);
                        break;
                    default:
                        setIsPlaying(false);
                        break;
                }
            }
        });

        // changeEvents.addEventListener('playback-track-changed', async () => {
        //     setIsPlaying(false);
        //     await TrackPlayer.pause();
        //     await TrackPlayer.play();
        // });

        // return () => {
        //     changeEvents.remove();
        // };
    }, []);
    const onLikePress = (id) => {
      const userPosts =  firebase.firestore()
            .collection("Song")
            .doc(id);
            userPosts.collection("likes")
             .doc(firebase.auth().currentUser.uid)
             .set({})
             .then(() => {
                 selectItem(index)
                 userPosts.update({
                     likesCont: firebase.firestore.FieldValue.increment(1)
                   
                 });
             })
    }
    const handlePlayPauseBtn = async () => {
        if (isPlaying) {
          await TrackPlayer.pause();
          setIsPlaying(false);
        } else {
        //   await TrackPlayer.skip(id);
          await TrackPlayer.play();
        }
      };
    useEffect(() => {
        songDetail()
    }, [])

    
   
    return (
        <SafeAreaView style={styles.safeview}>

            <View style={styles.container}>
                <View style={styles.Mainview} >
                    <Iconm style={styles.Menuicon} name="menu" size={28}></Iconm>
                    <Text style={styles.headerText}>Music Player</Text>
                    <Iconmusic style={styles.MusicIcon} size={28} name="ios-musical-notes-outline"></Iconmusic>
                </View>

                <View style={{ alignItems: 'center', height: 50, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                        stickyHeaderIndices={[0]}
                        showsHorizontalScrollIndicator={false}>
                        <FlatList
                            horizontal
                            data={title}
                            keyExtractor={(item) => item.name}
                            style={styles.flatlistview}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={{
                                        backgroundColor:
                                            indexChecked === item.name
                                                ? styles.flatlisttxt
                                                : styles.flatlisttxt2,
                                        // borderRadius: 30,
                                    }}
                                    onPress={() => setIndexChecked(item.name)}>
                                    <Text
                                        style={
                                            indexChecked === item.name
                                                ? styles.flatlisttxt
                                                : styles.flatlisttxt2
                                        }>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            )}></FlatList>
                    </ScrollView>

                </View>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ paddingVertical: 20 }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 20, fontFamily: 'SF-Pro-Text-Bold', paddingLeft: 20, }}>Most Listened</Text>
                        </View>
                        <View style={{
                            paddingTop: 20,
                            paddingRight: 7,
                            //height: '50%',


                        }}>

                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={image}
                                extraData={selectedIndex}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item, index }) => (
                                    <View>
                                        <TouchableOpacity onPress={() => navigation.navigate('PlayMusic', {
                                            songName: item.songName,
                                            images: item.banner,
                                            Likes: item.like,
                                            share: item.share
                                        })}>
                                            <Image
                                                source={{ uri: item.banner }}
                                                style={{
                                                    height: 240,
                                                    width: 175,
                                                    borderRadius: 20,
                                                    // marginTop:20,
                                                    marginLeft: 20
                                                }}>

                                            </Image>
                                            <View style={{ backgroundColor: 'pink' }}>
                                                <Image source={{ uri: item.playButton }}
                                                    style={{
                                                        marginTop: -140,
                                                        marginLeft: 95,
                                                        backgroundColor: 'pink'
                                                    }}>


                                                </Image>
                                            </View>
                                        </TouchableOpacity>
                                        <View>
                                            <Text style={{ color: 'white', marginTop: -40, marginLeft: 40, fontFamily: 'SF-Pro-Text-Bold' }}>{item.songName}</Text>
                                        </View>

                                        <View style={{
                                            flexDirection: 'row',
                                            // width: '87%',
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',
                                            marginTop: -8,
                                            paddingTop: 10,
                                            marginLeft: 22,
                                            backgroundColor: '#fff',
                                            shadowColor: '#000',
                                            shadowOffset: { width: 1, height: 1 },
                                            shadowOpacity: 0.4,
                                            shadowRadius: 3,
                                            elevation: 5,
                                            borderBottomRightRadius: 5,
                                            borderBottomLeftRadius: 5,
                                            //  height: '20%'


                                        }}>
                                            <View>
                                                <TouchableOpacity onPress={() => url(item.songUrl)} >

                                                    <IconDownload name="download" size={22} style={{ color: '#77838F' }}></IconDownload>
                                                </TouchableOpacity>
                                                <Text style={{ fontFamily: 'SF-Pro-Text-Regular', color: '#77838F', paddingTop: 4 }}>{item.download}</Text>
                                            </View>
                                            <View style={{
                                                height: '70%',
                                                width: 1,
                                                backgroundColor: 'lightgrey',
                                            }}></View>
                                            <View>
                                                {/* {like == item.isLike ?
                                              <TouchableOpacity onPress={setdata}>
                                                <IconHeart name='heart' size={22} style={{ color:'red',paddingLeft: 9 }} ></IconHeart>
                                                </TouchableOpacity>
                                               
                                                :
                                                <TouchableOpacity onPress={getdata} >
                                               <IconHeart name='hearto' size={22} style={{ color:'red',paddingLeft: 9 }}></IconHeart>
                                               </TouchableOpacity>
                                               
                                            } */}
                                                <TouchableOpacity onPress={() => selectItem(index)}>
                                                    <IconHeart name='heart' size={22} color={selectedIndex.indexOf(index) > -1 ? 'red' : 'grey'} style={{ paddingLeft: 9 }} ></IconHeart>
                                                </TouchableOpacity>
                                                <Text style={{ fontFamily: 'SF-Pro-Text-Regular', color: '#77838F', paddingTop: 4, paddingLeft: 4,textAlign:'center' }}>{item.likesCont}</Text>
                                            </View>
                                            <View style={{
                                                height: '70%',
                                                width: 1,
                                                backgroundColor: 'lightgrey',
                                            }}></View>
                                    <View>
                                                <Iconshare name="ios-share-social-outline" size={22} style={{ color: '#77838F', paddingLeft: 9 }} onPress={() => onShare('android', item.songUrl)} ></Iconshare>
                                                <Text style={{ fontFamily: 'SF-Pro-Text-Regular', color: '#77838F', paddingLeft: 4, paddingTop: 4 }}>{item.share}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )} >
                            </FlatList>
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'SF-Pro-Text-Bold', fontSize: 20, paddingLeft: 20, paddingTop: 30 }}>My Favorites</Text>
                        </View>

                        <View style={{ flex: 1 }}>

                            <FlatList
                                data={SongList}
                                renderItem={({ item }) => (
                                    <View style={styles.secondFlatlist}>
                                        <TouchableOpacity onPress={() => navigation.navigate('PlayScreen',{id:item.id,
                                                                                                            artwork: item.artwork ,
                                                                                                            title:item.title,   
                                                                                                            artist:item.artist,
                                                                                                            songUrl:item.url})} >
                                            <Image source={{ uri: item.artwork }} style={{ height: 100, width: 100, marginTop: 30, marginLeft: 20, marginBottom: 30 }}></Image>
                                        </TouchableOpacity>
                                        <View style={{ paddingLeft: 20, width: '60%' }}>
                                            <Text style={{ fontFamily: 'SF-Pro-Text-Bold' }}>{item.title}</Text>
                                            <Text style={{ fontFamily: 'SF-Pro-Text-Regular', paddingTop: 10, color: 'grey' }}>{item.artist}</Text>
                                            <Text style={{ fontFamily: 'SF-Pro-Text-Regular', color: 'orange' }}>{item.Time}</Text>
                                        </View>
                                        {/* <View>
                                            <TouchableOpacity  onPress={handlePlayPauseBtn}>

                                          
                                            {isPlaying ? (
                                                <MaterialCommunityIcons
                                                    name="pause"
                                                    color={'rgb(232, 50, 60)'}
                                                    size={30}
                                                />
                                            ) : (
                                                <MaterialCommunityIcons
                                                    name="play"
                                                    color={'rgb(232, 50, 60)'}  
                                                    size={30}
                                                />
                                            )}
                                              </TouchableOpacity>
                                        </View> */}
                                    </View>
                                )}
                            >
                            </FlatList>

                        </View>

                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>

    )
}
const styles = StyleSheet.create(
    {
        safeview: {
            flex: 1
        },
        container: {
            flex: 1
        },
        Mainview: {
            height: 50,
            flexDirection: 'row',

        },
        headerText: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            textAlign: 'center',
            fontFamily: 'SF-Pro-Text-Bold',
            fontSize: 20,
            paddingTop: 5
        },
        Menuicon: {
            color: 'black',
            paddingTop: 10,
            paddingLeft: 10
        },
        MusicIcon: {
            color: 'black',
            paddingTop: 10,
            paddingRight: 10
        },
        flatlistview: {
            // marginLeft: 20,
            // paddingVertical: 20,

            paddingHorizontal: 10,
        },
        flatlisttxt2: {
            alignItems: 'center',
            padding: 10,
            width: '100%',
            // paddingLeft: 30,
            fontFamily: 'SF-Pro-Text-Bold',
            color: 'darkgrey',
            fontSize: 15,
            textShadowColor: 'lightgrey',
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 13
        },
        flatlisttxt: {
            alignItems: 'center',
            padding: 10,
            paddingLeft: 10,
            // paddingRight: 20,
            fontFamily: 'SF-Pro-Text-Bold',
            color: 'orange',
            width: '100%',
            borderBottomColor: 'orange',
            borderBottomWidth: 2,
            position: 'relative',
            justifyContent: 'space-between',
            fontSize: 15
        },
        secondFlatlist: {
            flexDirection: 'row',
            height: 100,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 10,
            width: '100%',
        }
    }
)