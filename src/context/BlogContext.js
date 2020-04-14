import React from "react";
import createDataContext from "./createDataContext";

//Reducer
const blogReducer = (state, action) => {
	switch (action.type) {
		case "add_blogpost":
			return [...state, { title: `Blog Post #${state.length + 1}` }];
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

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);
