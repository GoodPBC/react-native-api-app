//we import our react library
import React from 'react';
//we destructure the import of react native
import { Text, TouchableOpacity } from 'react-native';

//we create our boiler plate component for our button
const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;
  return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};
//we add our styles to make this look like a button
const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#f66',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fd5',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0007aff',
    marginLeft: 5,
    marginRight: 5
  }
};
//we export our button component
export default Button;
