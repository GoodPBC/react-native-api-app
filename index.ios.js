/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import React Component library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


//create a react component
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'SanoMind'} />
		<AlbumList />
	</View>
);


//this is the only time we will use the AppRegistry. it is our Parent
AppRegistry.registerComponent('AwesomeProject', () => App);
