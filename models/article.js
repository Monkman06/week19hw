var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  createdAt:{
     type:Date,
     default:Date.now()
  },
  NTYTitle: {
    type:String
  },
  NTYDate: {
    type:String
  },
  NYTUrl: {
    type: String
  },
  NYTId: {
  	type: String 
  }
});

var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
