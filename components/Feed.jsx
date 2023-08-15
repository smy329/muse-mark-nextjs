'use client';

import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import Link from 'next/link';
import Loading from './ui/Loading';
import Tags from './Tags';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
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

  const handleTag = (title) => {
    setSelectedTag(title);
  };

  useEffect(() => {
    const searchedPost = posts.filter((post) => post.title.toLowerCase().includes(searchText.toLowerCase()));
    if (searchedPost) {
      setFilteredPost(searchedPost);
    } else {
      setFilteredPost(posts);
    }

    const taggedPosts = posts.filter((post) => post.tags.includes(selectedTag));
    if (taggedPosts.length > 1) {
      setFilteredPost(taggedPosts);
    } else {
      setFilteredPost(posts);
    }

    console.log(taggedPosts);
  }, [searchText, posts, selectedTag]);

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

      <Tags handleTag={handleTag} />

      {/* =========blog posts=========== */}
      {posts.length > 0 ? (
        <div className="mt-8 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
          {filteredPost.map((post) => (
            <Link key={post._id} href={`/posts/${post._id}`}>
              <PostCard post={post} />
            </Link>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Feed;
