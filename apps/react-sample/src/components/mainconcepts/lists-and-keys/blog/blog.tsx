import React from 'react';

import styled from 'styled-components';

type Post = {
  id: number;
  title: string;
  content: string;
};

const posts: Post[] = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
];

/* eslint-disable-next-line */
export interface BlogProps {
  posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const sidebar = (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
};

/* eslint-disable-next-line */
export interface BlogWrapperProps {}

const StyledBlog = styled.div`
  color: pink;
`;

export const BlogWrapper = (props: BlogWrapperProps) => {
  return (
    <StyledBlog>
      <Blog posts={posts} />
    </StyledBlog>
  );
};

export default BlogWrapper;
