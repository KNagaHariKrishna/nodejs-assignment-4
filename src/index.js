const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //http://&,& %-
const port = 3000;
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
  
});

app.post("/add", (req, res) => { //
  console.log(req.body);
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = num1 + num2;
  if (num1 > 1000000 || result > 1000000 || num2 > 1000000) {
    return res.status(400).json({
      status: "Error",
      message: "Overflow",
    });
  } else if (num1 < -1000000 || result < -1000000 || num2 < -1000000) {
    return res.status(400).json({
      status: "Error",
      message: "Underflow",
    });
  }

  if (isNaN(num1) || isNaN(num1)) {
    return res.status(400).json({
      status: "failure",
      message: "Inputs must be numeric",
    });
  }

  if (num1 === "" || num2 === "") {
    return res.status(400).json({
      status: "Error",
      message: "Invalid data types",
    });
  }
  res.status(200).json({
    status: "Sucess",
    message: "the sum of given two numbers",
    sum: result,
  });
});

app.post("/sub", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = num1 - num2;
  if (num1 > 1000000 || result > 1000000) {
    return res.status(400).json({
      status: "Error",
      message: "Overflow",
    });
  } else if (num1 < -1000000 || result < -1000000 || num2 < -1000000) {
    return res.status(400).json({
      status: "Error",
      message: "Underflow",
    });
  }

  if (isNaN(num1) || isNaN(num1)) {
    return res.status(400).json({
      status: "failure",
      message: "Inputs must be numeric",
    });
  }
  res.status(200).json({
    status: "Success",
    message: "the difference of given two numbers",
    difference: result,
  });
});

app.post("/multiply", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = num1 * num2;

  if (isNaN(num1) || isNaN(num1)) {
    return res.status(400).json({
      status: "failure",
      message: "Inputs must be numeric",
    });
  }
  if (num1 > 1000000 || result > 1000000) {
    return res.status(400).json({
      status: "Error",
      message: "Overflow",
    });
  } else if (num1 < -1000000 || result < -1000000 || num2 < -1000000) {
    return res.status(400).json({
      status: "Error",
      message: "Underflow",
    });
  }

  res.status(200).json({
    status: "Success",
    message: "The product of given numbers",
    result: result,
  });
});
app.post("/divide", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = num1 / num2;

  if (num2 == 0) {
    return res.status(400).json({
      status: "Error",
      message: "Cannot divide by zero",
    });
  }

  if (num1 > 1000000 || result > 1000000) {
    return res.status(400).json({
      status: "Error",
      message: "Overflow",
    });
  } else if (num1 < -1000000 || result < -1000000 || num2 < -1000000) {
    return res.status(400).json({
      status: "Error",
      message: "Underflow",
    });
  }

  if (isNaN(num1) || isNaN(num1)) {
    return res.status(400).json({
      status: "failure",
      message: "Inputs must be numeric",
    });
  }
  res.status(200).json({
    ststus: "Success",
    message: "The division of given numbers",
    result: result,
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
