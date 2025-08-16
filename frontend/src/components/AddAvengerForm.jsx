import { useState } from "react";

export default function AddAvengerForm({ onAdd }) {
  const [name, setName] = useState("");
  const [realName, setRealName] = useState("");
  const [universe, setUniverse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && realName && universe) {
      onAdd({ name, realName, universe });
      setName(""); setRealName(""); setUniverse("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input placeholder="Nom du héros" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Nom réel" value={realName} onChange={e => setRealName(e.target.value)} />
      <input placeholder="Univers" value={universe} onChange={e => setUniverse(e.target.value)} />
      <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>Ajouter</button>
    </form>
  );
}
