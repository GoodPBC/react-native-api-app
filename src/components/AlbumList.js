//react library
import React, { Component } from 'react';
//react native library
import { ScrollView } from 'react-native';
//axios for HTTP request
import axios from 'axios';
//import list album detail child component
import AlbumDetail from './AlbumDetail';


//create Class based Component
class AlbumList extends Component {
	//init state to empty albums object(empty array)
	state = { albums: [] };

	//makes component self-aware of render
	componentWillMount() {
		//HTTP request to fetch API data
		//https://rallycoding.herokuapp.com/api/music_albums
		axios.get('https://randomuser.me/api/?inc=gender,name,nat')
			//sets state of component to update with http data
      .then(response => this.setState({ albums: response.data }));
	}

	//helper function to help build a list of album details
	renderAlbums() {
		//map over list of albums. this is a loop of sorts
		return this.state.albums.map(album =>
				//'key' property is used by react to check which item it is updating at a given time.
				//we are displaying the title of each album displayed
				//we use the child component AlbumDetail
				<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		//checks the render of our HTTP request
		console.log(this.state);

		//gets rendered to device
		return (
				<ScrollView>
					{this.renderAlbums()}{/*we are referencing our helper function*/}
				</ScrollView>
		);
	}
}
//exports AlbumList
export default AlbumList;
