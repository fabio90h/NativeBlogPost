import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
	let { state } = useContext(Context);

	let blogPost = state.find((current) => current.id === route.params.id);

	return (
		<View>
			<Text>
				{blogPost.title} - {blogPost.content}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ShowScreen;
