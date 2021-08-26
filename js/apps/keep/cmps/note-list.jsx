import { NotePreview } from "./note-preview.jsx";
import { NoteAdd } from "./note-add.jsx";

export function NotesList({ notes, onDeleteNote, onAddNote, onEditNote }) {
  console.log(notes);
  return (
    <div className="note-list">
      <section className="note-add">
        <NoteAdd onAddNote={onAddNote}/>

      </section>
      {notes.map((note) => (
        <NotePreview
          key={note.id}
          note={note}
          onDeleteNote={onDeleteNote}
          onEditNote={onEditNote}
        />
      ))}
    </div>
  );
}
