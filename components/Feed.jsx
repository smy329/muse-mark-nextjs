'use client';

import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import Link from 'next/link';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredPost, setFilteredPost] = useState(posts);

  useEffect(() => {
    fetch('/api/post')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.value;
    setSearchText(searchInput);
  };

  useEffect(() => {
    const searchedPost = posts.filter((post) => post.title.toLowerCase().includes(searchText.toLowerCase()));
    if (searchedPost) {
      setFilteredPost(searchedPost);
    } else {
      setFilteredPost(posts);
    }
  }, [searchText, posts]);

  return (
    <section className="mt-10 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2">
      {/* =====searchbar====== */}

      <input
        type="text"
        placeholder="Search blog post with title"
        value={searchText}
        onChange={handleSearch}
        className="block w-full rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-lg shadow-lg font-medium focus:border-rose-500 focus:outline-none focus:ring-0"
      />

      {/* =========blog posts=========== */}
      <div className="mt-8 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
        {filteredPost.map((post) => (
          <Link key={post._id} href={`/posts/${post._id}`}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Feed;
