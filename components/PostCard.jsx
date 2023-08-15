import Image from 'next/image';
import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit cursor-pointer mb-5">
      <Image
        src="/assets/images/postImage.jpg"
        alt="post-image"
        width={640}
        height={427}
        className="rounded-lg mb-3 object-contain"
      />
      <h1 className="text-2xl font-bold leading-[1.15] text-black sm:text-xl mb-3">{post.title}</h1>
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src="/assets/images/user.jpg"
            alt="user-image "
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-medium text-gray-900">Anastasiya Lobanovskaya</h3>
            <p className="font-inter text-sm text-gray-500">ana.lob12@pexels.com</p>
          </div>
        </div>
      </div>
      <p className="my-4 font-satoshi text-lg text-gray-700">
        {post.body.length ? `${post.body.slice(0, 100)} ...` : post.body}
      </p>
    </div>
  );
};

export default PostCard;
