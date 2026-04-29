import { useState } from "react";

function NoteItem({ note, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");

  function startEditing() {
    setIsEditing(true);
    setEditingText(note.text);
  }

  function saveEdit() {
    onEdit(note.id, editingText);
    setIsEditing(false);
    setEditingText("");
  }

  function cancelEdit() {
    setIsEditing(false);
    setEditingText("");
  }

  return (
    <li>
      {isEditing ? (
        <input
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              saveEdit();
            }

            if (e.key === "Escape") {
              cancelEdit();
            }
          }}
          autoFocus
        />
      ) : (
        <span onDoubleClick={startEditing}>{note.text}</span>
      )}

      <button onClick={() => onDelete(note.id)}>❌</button>
    </li>
  );
}

export default NoteItem;
