import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
	const { state, addBlogPost } = useContext(Context);

	return (
		<View>
			<Text>IndexScreen </Text>
			<Button title="Add Post" onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={(current) => current.title}
				renderItem={({ item }) => {
					return (
						<View style={styles.row}>
							<Text style={styles.title}>{item.title}</Text>
							<Feather style={styles.icon} name="trash" />
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderColor: "gray",
		borderTopWidth: 1,
	},
	icon: {
		fontSize: 24,
	},
	title: {
		fontSize: 18,
	},
});

export default IndexScreen;
