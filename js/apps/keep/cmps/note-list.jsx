import { NotePreview } from "./note-preview.jsx";
import { NoteAdd } from "./note-add.jsx";

export function NotesList({ notes,onDeleteNote,onAddNote,onEditNote}) {
  return (
    <div className="note-list">
       <NoteAdd onAddNote={onAddNote}/>
      {notes.map((note) => (
        <NotePreview key={note.id} note={note} onDeleteNote={onDeleteNote} onEditNote={onEditNote}  />
      ))}
    </div>
  );
}


