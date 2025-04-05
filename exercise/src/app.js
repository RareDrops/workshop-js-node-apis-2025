import express from "express";
import cors from "cors";
import morgan from "morgan";
import testRouter from "./routes/test-routes.js";
import contactRouter from "./routes/contacts-routes.js";

// Set's our port to the PORT environment variable, or 3000 by default if the env is not configured.
var PORT = process.env.PORT ?? 3000;

// TODO Create the Express server
var app = express()

// TODO Configure middleware with app.use() (CORS support, JSON parsing support, static files support)
app.use(cors())
app.use(express.json())
app.use("/assets/",express.static("public")) // Allows the server to serve static files(images, etc.) that is inside the "public" folder.
app.use(morgan("combined"))

// TODO Your application routes here
app.get("/", (req, res) => {
	return res.json({
		message: "Hello World!"
	});
})

// Example: http://localhost:3000/api/people/John
app.get("/api/people/:name", (req, res) => {
	const name = req.params.name;
	res.send(`Hi, your name  is ${name}`);
})

// Example: http://localhost:3000/api/people?name=John
app.get("/api/people", (req, res) => {
	const name = req.query.name;
	res.send(`Hi, your name  is ${name}`);
})

// check the status of the server, only sends status code than a content.
app.get("/api/check-status", (req, res) => {
	return res.sendStatus(200);
})


app.post("/test3", (req, res) => {
	console.log("this is the data from client", req.body)
	return res.sendStatus(200);
})

app.use("/my-routes",testRouter);
app.use("/api/contacts/", contactRouter);

// TODO Start the server
app.listen(PORT, () => {
	console.log(`Express server listening on port : ${PORT}`)
})