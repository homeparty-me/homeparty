import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		// put it more to the top
	},   
	inputField: {
		flex: 1,
		marginTop: 100,
	},
	input: {
		//make a solid border for the input
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#777",
		borderRadius: 10,
		padding: 8,
		margin: 10,
		width: 250,
	},
	button: {
		//make a solid border for the button and make the button blue
		// why does it not work?
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#777",
		borderRadius: 10,
		padding: 8,
		margin: 10,
		width: 200,
		backgroundColor: "blue",
	},
	
})