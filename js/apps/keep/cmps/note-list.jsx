import { NotePreview } from "./note-preview.jsx";
import { NoteEdit } from "./note-edit.jsx";

export function NotesList({ notes,onDeleteNote}) {
  return (
    <div className="note-list">
        {/* <NoteEdit note={note}/> */}
      {notes.map((note) => (
        <NotePreview key={note.id} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  );
}


