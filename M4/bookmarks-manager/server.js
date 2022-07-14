const app = require("./app");
const dotenv = require("dotenv");
dotenv.config(); // loads envvars from .env file into our environment

const PORT = process.env.OUR_PORT || 3008;

app.listen(PORT, () => {
  console.log(`listening for traffic on port ${PORT}`);
});
