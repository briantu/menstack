const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
	{
		id: uuid(),
		username: "Todd",
		comment: "lol that is so funny"
	},
	{
		id: uuid(),
		username: "Skylar",
		comment: "Hi I am skylar"
	},
	{
		id: uuid(),
		username: "memelord",
		comment: "ur bad"
	},
	{
		id: uuid(),
		username: "dogbot",
		comment: "woof woof woof"
	}
];

app.get("/comments", (req, res) => {
	res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
	res.render("comments/new");
});

app.post("/comments", (req, res) => {
	const { username, comment } = req.body;
	comments.push({ id: uuid(), username, comment });
	res.redirect("/comments");
	console.log(comments);
});

app.get("/comments/:id", (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === id);
	res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
	const { id } = req.params;
	const comment = comments.find((c) => c.id === id);
	res.render("comments/edit", { comment });
});

app.patch("/comments/:id", (req, res) => {
	const { id } = req.params;
	const newCommentText = req.body.comment;
	const foundComment = comments.find((c) => c.id === id);
	foundComment.comment = newCommentText;
	res.redirect("/comments");
	console.log(req.params);
});

app.delete("/comments/:id", (req, res) => {
	const { id } = req.params;
	comments = comments.filter((c) => c.id !== id);
	res.redirect("/comments");
});

app.get("/tacos", (req, res) => {
	res.send("GET /TACOS RESPONSE");
});

app.post("/tacos", (req, res) => {
	const { meat, qty } = req.body;
	res.send(`OK here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
	console.log("LISTENING ON PORT 3000");
});
