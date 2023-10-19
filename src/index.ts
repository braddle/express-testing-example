
const port = process.env.PORT;

const dotenv = require('dotenv');
const app = require("./app")

dotenv.config();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});