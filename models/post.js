const { models, model, Schema } = require('mongoose');

const PostSchema = new Schema({
  body: {
    type: String,
    required: [true, 'Post body is required'],
  },

  title: {
    type: String,
    required: [true, 'Post title is required'],
  },
});

// checking already a model name 'Post' || creating a new model name 'Post'
const Post = models.Post || model('Post', PostSchema);

export default Post;
