import express from 'express';
import fs from 'fs';
import path from 'path';

const postEndpoints = express.Router();
const postsPath = path.resolve(path.dirname(''), 'src', 'api', 'posts', 'posts.json');

const getPosts = () => {
  const jsonBuffer = fs.readFileSync(postsPath);
  return JSON.parse(jsonBuffer.toString());
};

postEndpoints.get('/get-posts', (req, res) => {
  res.send(getPosts());
});

export default postEndpoints;