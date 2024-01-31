import prisma from "@/lib/prisma";

const URL = `${process.env.URL}`;

const getPosts = async () => {
  const posts = await prisma.post.findMany()
  return posts
};

export default getPosts;
