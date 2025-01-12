import React, { useState } from 'react';
import { BlogCard } from './BlogCard';
import { BlogModal } from './BlogModal';
import { blogPosts } from './blogData';

export function BlogGrid() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostClick = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard 
            key={post.id} 
            post={post} 
            onClick={() => handlePostClick(post)}
          />
        ))}
      </div>

      <BlogModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}