import { Post } from "@prisma/client";
import axios from "axios";

const URL = `${process.env.URL}`;

const getPosts = async (): Promise<Post[]> => {
  const res = await axios.get(`${URL}/api/posts`);
  const { data } = res.data;
  return data;
};

export default getPosts;
