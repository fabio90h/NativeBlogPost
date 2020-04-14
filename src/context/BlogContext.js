import React from "react";
import createDataContext from "./createDataContext";

//Reducer
const blogReducer = (state, action) => {
	switch (action.type) {
		case "add_blogpost":
			return [
				...state,
				{ id: Math.floor(Math.random() * 9999), title: `Blog Post #${state.length + 1}` },
			];
		case "delete_blogpost":
			return [...state].filter((current) => current.id !== action.payload);
		default:
			return [...state];
	}
};

//Actions
const addBlogPost = (dispatch) => {
	return () => {
		dispatch({ type: "add_blogpost" });
	};
};

const deleteBlogPost = (dispatch) => (id) => dispatch({ type: "delete_blogpost", payload: id });

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost },
	[]
);
