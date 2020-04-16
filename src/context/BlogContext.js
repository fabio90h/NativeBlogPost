import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

//Reducer
const blogReducer = (state, action) => {
	switch (action.type) {
		case "get_blogpost":
			return action.payload;
		case "edit_blogpost":
			return state.map((current) => {
				if (current.id === action.payload.id) return action.payload;
				else return current;
			});
		case "delete_blogpost":
			return [...state].filter((current) => current.id !== action.payload);
		default:
			return [...state];
	}
};

//Actions
const getBlogPost = (dispatch) => async () => {
	let response = await jsonServer.get("blogpost");
	dispatch({ type: "get_blogpost", payload: response.data });
};
const addBlogPost = (dispatch) => {
	return async (title, content, callback) => {
		jsonServer.post("/blogpost", { title, content });
		callback();
	};
};
const editBlogPost = (dispatch) => async (title, content, callback, id) => {
	await jsonServer.put(`/blogpost/${id}`, { title, content });
	dispatch({ type: "edit_blogpost", payload: { title, content, id } });
	callback();
};
const deleteBlogPost = (dispatch) => async (id) => {
	await jsonServer.delete(`/blogpost/${id}`);
	dispatch({ type: "delete_blogpost", payload: id });
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
	[]
);
