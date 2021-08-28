import { NotePreview } from "./note-preview.jsx";
import { NoteAdd } from "./note-add.jsx";

export function NotesList({
  notes,
  onDeleteNote,
  onAddNote,
  onEditNote,
  onPinNote,
  onCopyNote
}) {
  return (
    <div className="note-list flex main-layout">
      <section className="note-add">
        <NoteAdd onAddNote={onAddNote} />
      </section>
      <section className="note-prev flex">
        <p>Attached</p>
        {notes.map((note) => (
          <section className="notes-for-display flex">
            <div className="notes-pin flex">
              {note.isPinned && (
                <NotePreview
                  key={note.id}
                  note={note}
                  onDeleteNote={onDeleteNote}
                  onEditNote={onEditNote}
                  onPinNote={onPinNote}
                  onCopyNote={onCopyNote}
                />
              )}
            </div>

            <div className="notes-no-pin flex">
              {!note.isPinned && (
                <NotePreview
                  key={note.id}
                  note={note}
                  onDeleteNote={onDeleteNote}
                  onEditNote={onEditNote}
                  onPinNote={onPinNote}
                  onCopyNote={onCopyNote}
                />
              )}
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
