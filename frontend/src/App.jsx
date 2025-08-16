import { useState, useEffect } from "react";
import axios from "axios";
import AvengersTable from "./components/AvengersTable";
import AddAvengerForm from "./components/AddAvengerForm";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/characters");
    setCharacters(res.data);
  };

  const addCharacter = async (character) => {
    await axios.post("http://localhost:5000/api/characters", character);
    fetchData();
  };

  const updateCharacter = async (id, updated) => {
    await axios.put(`http://localhost:5000/api/characters/${id}`, updated);
    fetchData();
  };

  const deleteCharacter = async (id) => {
    await axios.delete(`http://localhost:5000/api/characters/${id}`);
    fetchData();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Avengers Manager</h1>
      <AvengersTable
        characters={characters}
        onDelete={deleteCharacter}
        onUpdate={updateCharacter}
      />
      <AddAvengerForm onAdd={addCharacter} />
    </div>
  );
}
