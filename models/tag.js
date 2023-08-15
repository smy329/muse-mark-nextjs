const { models, model, Schema } = require('mongoose');

const TagSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Tag title is required'],
  },
});

// checking already a model name 'Post' || creating a new model name 'Post'
const Tag = models.Tag || model('Tag', TagSchema);

export default Tag;
