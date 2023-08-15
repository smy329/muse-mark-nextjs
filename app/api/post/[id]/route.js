import Post from '@/models/post';
import { connectToDB } from '@/utils/database';

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const post = await Post.findById(params.id);
    console.log(params.id);
    if (!post) return new Response('Post Not Found', { status: 404 });

    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response('Internal Server Erroryyy', { status: 500 });
  }
};
