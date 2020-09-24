import { posts } from "./index";

const fetchPosts = () => posts.get("/");

const fetchPost = (postId) => posts.get(postId);

const createPost = (postData) => posts.post("/", postData);

const deletePost = (postId) => posts.delete(postId);

const editPost = (postId, postData) => posts.put(postId, postData);

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
