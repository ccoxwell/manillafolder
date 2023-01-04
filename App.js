import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Alert, Button } from 'react-native'
// import Button from './components/Button'

export default function App() {
	// const clickedButton = () => {
	// 	Alert.alert('Title Bitch', 'Message Bitch', [
	// 		{
	// 			text: 'OK',
	// 			onPress: () => console.log('OK Pressed'),
	// 		},
	// 	])
	// }

	return (
		<View>
			<Button
				onPress={() => alert('COME ON')}
				title="handling touches"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
