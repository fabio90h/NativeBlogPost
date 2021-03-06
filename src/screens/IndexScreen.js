import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogPost, getBlogPost } = useContext(Context);

	useEffect(() => {
		getBlogPost();

		let listener = navigation.addListener("focus", () => {
			getBlogPost();
		});
		return () => {
			listener.remove;
		};
	}, []);

	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(current) => current.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
							<View style={styles.row}>
								<Text style={styles.title}>
									{item.title} - {item.content}
								</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<Feather style={styles.icon} name="trash" />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
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
