import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
	const { editBlogPost } = useContext(Context);
	const { blogPost } = route.params;

	return (
		<BlogPostForm
			initial={blogPost}
			navigation={navigation}
			labels={{ title: "Edit Title", content: "Edit Content", button: "Save Edit" }}
			onSubmit={(title, content) =>
				editBlogPost(title, content, () => navigation.navigate("Index"), blogPost.id)
			}
		/>
	);
};

const styles = StyleSheet.create({});

export default EditScreen;
