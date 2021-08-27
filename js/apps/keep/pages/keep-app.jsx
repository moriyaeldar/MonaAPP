import { noteService } from "../services/note.service.js";
import { NotesList } from "../cmps/note-list.jsx";
import { NoteFilter } from "../cmps/note-filter.jsx";
export class KeepApp extends React.Component {
  state = {
    notes: [],
    filterBy: null,
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    noteService.query(this.state.filterBy).then((notes) => {
      this.setState({ notes });
    });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadNotes);
  };

  onDeleteNote = (note) => {
    noteService.deleteNote(note).then(() => {
      this.loadNotes();
    });
  };

  onPinNote = (note) => {
    noteService.pinNote(note).then(() => {
      this.loadNotes();
    });
  };

  onCopyNote = (note) => {
    noteService.copyNote(note).then(() => {
      this.loadNotes();
    });
  };

  onAddNote = (note, type) => {
    console.log(note);
    noteService.addNote(note, type).then(() => {
      this.loadNotes();
    });
  };
  onEditNote = (note, noteToEdit) => {
    noteService.updateNote(note, noteToEdit).then(() => {
      this.loadNotes();
    });
  };

  // onSetFilter = (filterBy) => {
  //   this.setState({ filterBy }, this.loadNotes);
  // };

  render() {
    const { notes } = this.state;
    return !notes || !notes.length ? (
      <p>loading...</p>
    ) : (
      <section className="keep-app flex roboto main-layout">
        <NoteFilter onSetFilter={this.onSetFilter} />
        <NotesList
          notes={notes}
          onDeleteNote={this.onDeleteNote}
          onAddNote={this.onAddNote}
          onEditNote={this.onEditNote}
          onPinNote={this.onPinNote}
          onCopyNote={this.onCopyNote}
        />
      </section>
    );
  }
}
