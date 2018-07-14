import mongoose from 'mongoose';

const Article = mongoose.model('Article', {
  author: String,
  content: String,
  excerpt: String,
  published: Boolean,
  tags: [String],
  title: String,
});

export default Article;