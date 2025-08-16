import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

let characters = JSON.parse(fs.readFileSync("./characters.json", "utf8")).characters;


app.get("/api/characters", (req, res) => {
  res.json(characters);
});


app.post("/api/characters", (req, res) => {
  let newId = 1;
  if (characters.length > 0) {
    const lastCharacter = characters[characters.length - 1];
    newId = lastCharacter.id + 1;
  }

  const newCharacter = { id: newId, ...req.body };
  characters.push(newCharacter);

  fs.writeFileSync("./characters.json", JSON.stringify({ characters }, null, 2));

  res.json(newCharacter);
});



app.put("/api/characters/:id", (req, res) => {
  const id = parseInt(req.params.id);
  characters = characters.map(c => c.id === id ? { ...c, ...req.body } : c);
  fs.writeFileSync("./characters.json", JSON.stringify({ characters }, null, 2));
  res.json({ message: "Updated" });
});


app.delete("/api/characters/:id", (req, res) => {
  const id = parseInt(req.params.id);
  characters = characters.filter(c => c.id !== id);
  fs.writeFileSync("./characters.json", JSON.stringify({ characters }, null, 2));
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));
