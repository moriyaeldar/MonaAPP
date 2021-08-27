import { NotePreview } from "./note-preview.jsx";
import { NoteAdd } from "./note-add.jsx";

export function NotesList({ notes, onDeleteNote, onAddNote, onEditNote }) {
  console.log(notes);
  return (
    <div className="note-list flex">
      <section className="note-add">
        <NoteAdd onAddNote={onAddNote}/>
      </section>
      <section className="note-prev">
      {notes.map((note) => (
        <NotePreview
          key={note.id}
          note={note}
          onDeleteNote={onDeleteNote}
          onEditNote={onEditNote}
        />
      ))}
      </section>
    </div>
  );
}
