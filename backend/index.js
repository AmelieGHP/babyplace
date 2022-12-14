const app = require("./src/app");

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on port ${port}`);
  }
});