import { StatusBar } from 'expo-status-bar'
import { React, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
	const [message, setMessage] = useState('')

	return (
		<View style={styles.container}>
			<Button
				onPress={() => setMessage('hi')}
				title="Click me"></Button>
			<Text>{message}</Text>
			<StatusBar style="auto" />
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
	button: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
		marginBottom: 10,
	},
})
