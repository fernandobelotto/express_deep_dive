import express from "express";

const app = express();

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "up",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}/health`)
}) 