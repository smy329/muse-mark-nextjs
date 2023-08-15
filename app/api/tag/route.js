import Tag from '@/models/tag';
import { connectToDB } from '@/utils/database';

export const GET = async (request) => {
  try {
    await connectToDB();

    const tags = await Tag.find({});

    return new Response(JSON.stringify(tags), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch tags', { status: 500 });
  }
};
