import React from 'react';
import Lottie from 'lottie-react-native';

export default function Loader() {
  return (
    <Lottie useNativeLooping={true} source={require('../../assets/animation/loader.json')} autoPlay loop />
  );
}