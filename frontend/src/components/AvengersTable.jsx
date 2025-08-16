export default function AvengersTable({ characters, onDelete, onUpdate }) {
  const handleEdit = (c) => {
    const name = prompt("Nom du héros:", c.name);
    const realName = prompt("Nom réel:", c.realName);
    const universe = prompt("Univers:", c.universe);
    if (name && realName && universe) {
      onUpdate(c.id, { name, realName, universe });
    }
  };

  return (
    <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr style={{ backgroundColor: "#ddd" }}>
          <th>ID</th>
          <th>Nom</th>
          <th>Nom Réel</th>
          <th>Univers</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {characters.map(c => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.realName}</td>
            <td>{c.universe}</td>
            <td>
              <button style={{ backgroundColor: "green", color: "white", marginRight: "5px" }} onClick={() => handleEdit(c)}>Modifier</button>
              <button style={{ backgroundColor: "red", color: "white" }} onClick={() => onDelete(c.id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
