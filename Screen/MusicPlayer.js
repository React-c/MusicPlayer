import React, { useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Animated,
  Easing,
  TouchableOpacity,

}
  from 'react-native';
import Slider from '@react-native-community/slider';
import DropShadow from 'react-native-drop-shadow';
import IconPlay from 'react-native-vector-icons/FontAwesome';
import { useTrackPlayerProgress } from 'react-native-track-player/lib/hooks';
import TrackPlayer from 'react-native-track-player';

export default function PlayerScreen(data) {
  var songartwork = data.route.params.artwork;
  var songtitle = data.route.params.title;
  var songartist = data.route.params.artist;
  var songURL = data.route.params.songUrl;

  let rotateValueHolder = new Animated.Value(0);
  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startImageRotateFunction());
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    startImageRotateFunction();
  });
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const { position, duration } = useTrackPlayerProgress(290);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
    console.log('slidervalue', sliderValue)
  }, []);

  const slidingStarted = () => {
    setIsSeeking(true);
    console.log('hsi', isSeeking)
  };
  //this function is called when the user stops sliding the seekbar
  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };
  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // TrackPlayer.registerPlaybackService(() => require('../Screen/Service'));

    // Add a track to the queue
    //await TrackPlayer.add([songURL]);
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
      let isInit = await start();
      setPlayMusic(isInit);
    }
    startPlayer()
  }, []);
  const [isPlaying, setIsPlaying] = useState(false);
  const playPauseBtnClick = async () => {
    console.log('click');
    if (isPlaying) {
      await TrackPlayer.pause();
      setIsPlaying(false);
    } else {
      await TrackPlayer.play();
      setIsPlaying(true);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ alignItems: 'center', paddingTop: 20, height: '10%' }}>
          <Text style={{ fontSize: 25, color: 'grey' }}>Playlist</Text>
        </View>
        <View>
          <DropShadow style={{
            shadowColor: '#aaa',
            shadowOffset: {
              width: 3,
              height: 10,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
          }}>
            <Animated.Image style={{
              height: 250,
              width: 250,
              marginTop: 50,
              borderRadius: 125,
              transform: [{ rotate: RotateData }],
            }} source={{ uri: songartwork }}>

            </Animated.Image>
          </DropShadow>
        </View>
        <View style={{ alignItems: 'center', height: '13%', paddingTop: 20 }}>
          <Text style={{ fontSize: 20 }}>{songtitle}</Text>
          <Text style={{ color: 'grey', paddingTop: 10 }}>{songartist}</Text>
        </View>
        <View style={{ paddingTop: 15, height: '10%' }}>
          <Slider
            style={{ width: 260, height: 40 }}
            minimumValue={0}
            onSlidingStart={slidingStarted}
            onSlidingComplete={slidingCompleted}
            minimumTrackTintColor="rgb(232, 71, 59)"
            maximumTrackTintColor="rgb(232, 50, 60)"
            thumbTintColor="rgb(232, 71, 59)">

          </Slider>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, height: '17%', width: '100%' }}>
          <TouchableOpacity>
            <IconPlay name="fast-backward" size={32} color='black'></IconPlay>
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: '#FFFF',
            borderColor: '#d7dbe0',
            borderWidth: 17,
            height: 125,
            width: 125,

            borderRadius: 65,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 23,
            shadowColor: 'rgba(93,63,106,0.2)',
            shadowRadius: 10,
            elevation: 20,
            shadowOpacity: 3.5
          }} onPress={() => playPauseBtnClick()}>

            <IconPlay name={isPlaying ? 'pause' : 'play'} size={30} color='black' style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 2 }}></IconPlay>
          </TouchableOpacity>
          <TouchableOpacity>
            <IconPlay name="fast-forward" size={32} color='black'></IconPlay>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}