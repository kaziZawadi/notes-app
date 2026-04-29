import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onEdit }) {
  if (notes.length === 0) {
    return <p>Aucune note pour le moment.</p>;
  }

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default NotesList;
