'use client';
import Image from 'next/image';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const PostDetail = () => {
  const params = useParams();
  const postId = params.postId;
  const [postDetail, setPostDetail] = useState({});

  // const postId = router.query;
  useEffect(() => {
    fetch(`/api/post/${postId}`)
      .then((res) => res.json())
      .then((data) => setPostDetail(data));
  }, []);

  console.log(postId, postDetail);
  return (
    <section className="w-full flex flex-col justify-center items-start">
      <h1 className="mt-5 text-2xl font-bold leading-[1.15] text-black sm:text-5xl text-left mb-8">
        {postDetail.title}
      </h1>
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src="/assets/images/user.jpg"
            alt="user-image "
            width={60}
            height={60}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-medium text-gray-900">Anastasiya Lobanovskaya</h3>
            <p className="font-inter text-gray-500">ana.lob12@pexels.com</p>
          </div>
        </div>
      </div>

      <Image
        src="/assets/images/postImage.jpg"
        alt="post-image"
        width={1200}
        height={800}
        className="rounded-lg mb-3 w-full h-[500px] object-cover my-10"
      />
      <p className="my-4 font-satoshi text-lg sm:text-2xl text-gray-700">{postDetail.body}</p>
    </section>
  );
};

export default PostDetail;
