import express from "express";

const app = express(); // library express initialized

const PORT = 3302;
app.use("/", (req, res) => {
    res.status(200).json({
    message: "hello word",
    });
});

app.use("*", (req, res) => {
    res.status(404).json({
    message: "not found",
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});