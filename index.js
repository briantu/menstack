const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
//Keeps /views in the right directory so u can run node at diff directories
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
	res.render("home");
});

app.get("/rand", (req, res) => {
	const num = Math.floor(Math.random() * 10) + 1;
	res.render("random", { rand: num }); // or just { num }
});

app.get("/r/:subreddit", (req, res) => {
	const { subreddit } = req.params;
	const data = redditData[subreddit];
	if (data) {
		res.render("subreddit", { ...data });
	} else {
		res.render("notfound", { subreddit });
	}
});

app.get("/cats", (req, res) => {
	const cats = ["Blue", "Rocket", "Montey", "Stephanie", "Winston"];
	res.render("cats", { cats });
});

app.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`);
});
