import React, { useEffect, useState } from 'react';

const Tags = ({ handleTag }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch('/api/tag')
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, []);

  return (
    <div className="flex">
      {tags.map((tag) => (
        <div
          key={tag._id}
          className="px-4 py-2 border border-gray-300 rounded-full mx-1 cursor-pointer"
          onClick={() => handleTag(tag.title)}
        >
          {tag.title}
        </div>
      ))}
    </div>
  );
};

export default Tags;
