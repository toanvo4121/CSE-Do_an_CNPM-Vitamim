const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mimSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Account',
    },
    user_name: {
      type: String,
    },
    avatar:String,
    mim_src: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: ''
    },
    hashtag:{
      type: String,
    },
    categ: {
      type: String,
      required: true,
    },
    likers:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        default: null,
      },
    ],
    haters:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        default: null,
      },
    ],
    isAccept: {
      type: Number,
      default: 0,
    },
    comments: {
      numOfComments: {
        type: Number,
        default: 0,
      },
      cmts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          default: null,
          ref: 'Comment',
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Mim', mimSchema);
