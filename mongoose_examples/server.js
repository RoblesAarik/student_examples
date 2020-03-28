// Dependencies
const mongoose = require("mongoose");
const Tweet = require("./tweet.js");

// global configuration
const mongoURI = "mongodb://localhost:27017/tweets";

const db = mongoose.connection;

// connects to mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// connection error/success
// define callback functions for various event
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// Opens connection
db.on("open", () => {
  console.log("Connection made!");
});

// Tweet.create(
//   {
//     title: "Deep Thoughts",
//     body: "A peanut is neither a pea nor a nut",
//     author: "Zeb",
//   },
//   (error, tweet) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(tweet);
//     }

//     db.close();
//   }
// );

const manyTweets = [
  {
    title: "Deep Thoughts",
    body: "A peanut is neither a pea nor a nut",
    author: "Zeb",
  },
  {
    title: "Sage Advice",
    body: "Friends, I am vegan and so should you",
    author: "Karolin",
    likes: 20,
  },
  {
    title: "Whole Reality",
    body:
      "I shall deny friendship to anyone who does not exclusively shop at Whole Foods",
    author: "Karolin",
    likes: 40,
  },
  {
    title: "Organic",
    body:
      "Friends, I have spent $2300 to be one of the first people to own an organic smartphone",
    author: "Karolin",
    likes: 162,
  },
  {
    title: "Confusion",
    body:
      "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
    likes: 1,
  },
  {
    title: "Vespa",
    body:
      "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
    author: "Karolin",
    likes: 2,
  },
  {
    title: "Licensed",
    body:
      "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
    author: "Karolin",
    likes: 3,
  },
  {
    title: "Water",
    body:
      "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
    author: "Karolin",
  },
];

// Tweet.insertMany(manyTweets, (error, tweets) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(tweets);
//   }
//   db.close();
// });

// finds all tweets
// Tweet.find((err, tweets) => {
//   console.log(tweets);
//   db.close();
// });

// searches only title and body
// Tweet.find({}, "title body", (err, tweets) => {
//   console.log(tweets);
//   db.close();
// });

// find a specific tweet
// Tweet.find({ title: "Water" }, (err, tweet) => {
//   console.log(tweet);
//   db.close();
// });

// finds tweets with likes greater than or equal to 20
// Tweet.find({ likes: { $gte: 20 } }, (err, tweets) => {
//   console.log(tweets);
//   db.close();
// });

// Tweet.findOneAndRemove({ title: "Deep Thoughts" }, (err, tweet) => {
//   db.close();
// });

Tweet.findOneAndUpdate(
  { title: "Vespa" },
  { deleted: true },
  { new: true },
  (err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tweet);
    }
    db.close();
  }
);
