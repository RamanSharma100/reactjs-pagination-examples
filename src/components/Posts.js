import React from 'react';

const Posts = (props) => {
  const { post } = props;
  return (
    <div className="col-md-3 card my-2" key={post.id}>
      <div className="card-body">
        <h5 className="card-title text-center">
          #{post.id} {post.title}
        </h5>
        <p className="card-text text-center">{post.body}</p>
      </div>
    </div>
  );
};

export default Posts;
