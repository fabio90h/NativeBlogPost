import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ initial, onSubmit, labels }) => {
	const [title, setTitle] = useState(initial.title);
	const [content, setContent] = useState(initial.content);

	return (
		<View>
			<Text style={styles.titleStyle}>{labels.title}</Text>
			<TextInput style={styles.contentStyle} value={title} onChangeText={setTitle} />
			<Text style={styles.titleStyle}>{labels.content}</Text>
			<TextInput style={styles.contentStyle} value={content} onChangeText={setContent} />
			<Button title={labels.button} onPress={() => onSubmit(title, content)} />
		</View>
	);
};

BlogPostForm.defaultProps = {
	initial: { title: "", content: "" },
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

export default BlogPostForm;
