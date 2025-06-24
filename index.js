import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.get("/", async(req, res) => {
    try {
        const response = await axios.get("https://api.jikan.moe/v4/random/anime");
    res.render("index.ejs", {
         title: response.data.data.title,
        episodes: response.data.data.episodes
    });
    }
    catch (error){
        console.log(error.response.data);
        res.status(500);
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})




