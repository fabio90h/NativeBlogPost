import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useContext(Context);

	return (
		<BlogPostForm
			labels={{ title: "Blog Post Title", content: "Blog Content", button: "Create Blog Post" }}
			onSubmit={(title, content) => addBlogPost(title, content, () => navigation.navigate("Index"))}
		/>
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
