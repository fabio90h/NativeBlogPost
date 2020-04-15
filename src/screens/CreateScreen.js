import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ route }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<View>
			<Text style={styles.titleStyle}>Enter Title</Text>
			<TextInput style={styles.contentStyle} value={title} onChangeText={setTitle} />
			<Text style={styles.titleStyle}>Enter Content</Text>
			<TextInput style={styles.contentStyle} value={content} onChangeText={setContent} />
			<Button title="Create Blog Post" />
		</View>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 20,
		marginLeft: 10,
		marginTop: 15,
	},
	contentStyle: {
		borderWidth: 1,
		borderColor: "black",
		marginHorizontal: 10,
		fontSize: 18,
	},
});

export default CreateScreen;
