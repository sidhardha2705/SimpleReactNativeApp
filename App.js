import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/header'
import AlbumList from './src/components/lobby/albumlist'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <Header />
        <AlbumList />

      </View>
      
    )
  }
}
