// @ts-nocheck
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");
const cors = require("cors");

const app = express();
const port = 4000;

// allow cross-origin request
app.use(cors());

// Connect to mongoose db
mongoose.connect(
  "mongodb+srv://thanhlam:thanhlam@cluster0.ddxsn.mongodb.net/GraphList?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to mongodb");
    }
  }
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
