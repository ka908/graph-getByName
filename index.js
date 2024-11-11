const express = require("express");
const app = express();
const booking = require("./routes/bookingroutes.js");
app.use(express.json());
const { ApolloServer, gql } = require("apollo-server-express");
const db = require("./database.js");
const typeDefs = require("./schema.graphql/typeDef.js");
const resolvers = require("./schema.graphql/resolvers.js");

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  app.listen(4000, () =>
    console.log("Server running on http://localhost:4000/graphql")
  );
}
startServer();

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

//q1...You want to print out a list of all
// of the facilities and their cost to members.
//  How would you retrieve a list of only facility names and costs?

/*questions.............How can you produce a list of facilities that charge a fee to members,
 and that fee is less than 1/50th of the monthly maintenance cost? Return the facid,
  facility name, member cost, and monthly maintenance of the facilities in question.


How can you produce a list of all facilities with the word 'Tennis' in their name?

How can you retrieve the details of facilities with ID 1 and 5? Try to do it without using the OR operator.

How can you produce a list of facilities, with each labelled as 'cheap' or 'expensive' depending
 on if their monthly maintenance cost is more than $100? Return the name and monthly 
 maintenance of the facilities in question.


How can you produce a list of members who joined after the start of September 2012? Return
 the memid, surname, firstname, and joindate of the members in question.


How can you produce an ordered list of the first 10 surnames in the members 
   table? The list must not contain duplicates.
   
You, for some reason, want a combined list of all surnames and all facility names. Yes, this is a contrived example :-). Produce that list!
You'd like to get the signup date of your last member. How can you retrieve this information?
You'd like to get the first and last name of the last member(s) who signed up - not just the date. How can you do that?
*/
// app.use("/", require("./routes/dep"));
