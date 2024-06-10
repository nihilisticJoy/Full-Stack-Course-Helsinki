const _ = require('lodash');

const dummy = (blogs) => {
    return 1;
};

const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) return null;
  
    const favorite = blogs.reduce((prev, current) => {
      return (prev.likes > current.likes) ? prev : current;
    });
  
    return {
      title: favorite.title,
      author: favorite.author,
      likes: favorite.likes
    };
};

const mostBlogs = (blogs) => {
    if (blogs.length === 0) return null;
  
    const authorBlogCounts = _.countBy(blogs, 'author');
    const topAuthor = _.maxBy(_.keys(authorBlogCounts), (author) => authorBlogCounts[author]);
  
    return {
      author: topAuthor,
      blogs: authorBlogCounts[topAuthor]
    };
  };

  const mostLikes = (blogs) => {
    if (blogs.length === 0) return null;
  
    const authorLikes = blogs.reduce((acc, blog) => {
      acc[blog.author] = (acc[blog.author] || 0) + blog.likes;
      return acc;
    }, {});
  
    const topAuthor = _.maxBy(_.keys(authorLikes), (author) => authorLikes[author]);
  
    return {
      author: topAuthor,
      likes: authorLikes[topAuthor]
    };
  };
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
};
  