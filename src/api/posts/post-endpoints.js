import express from 'express';
import fs from 'fs';
import path from 'path';

const postEndpoints = express.Router();
const postsPath = path.resolve(path.dirname(''), 'src', 'api', 'posts', 'posts.json');

const getPosts = () => {
  const jsonBuffer = fs.readFileSync(postsPath);
  return JSON.parse(jsonBuffer.toString());
};

const postIsValid = (post) => {
  let {title, author, body} = post;
  if ([title, body].contains('')) return false;
  if (author === '') author = 'Anonymous'
  post.createdOn = Date.now();
  return true;
}

const postIsNew = (post, existingPosts) => {
  console.log('new post: ', post);
  return !existingPosts.some((ep) => ep.title === post.title
      && ep.body === post.body
      && ep.author === post.author
      && ep.createdOn === post.createdOn
  );
}

const savePost = (post) => {
  try {
    const existingPosts = getPosts();
    if (postIsValid(post) && postIsNew(post, existingPosts)) {
      let newWritableData = JSON.stringify(existingPosts.push(post));
      fs.writeFileSync(postsPath, newWritableData);
      return true;
    }
    return false;
  } catch(err) {
    return false;
  }
};

postEndpoints.get('/get-posts', (req, res) => {
  res.send(getPosts());
});

postEndpoints.post('/save-post', (req, res) => {
  console.log(req);
  res.send(true);
});

export default postEndpoints;