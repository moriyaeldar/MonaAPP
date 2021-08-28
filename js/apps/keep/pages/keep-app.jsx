import { noteService } from "../services/note.service.js";
import { NotesList } from "../cmps/note-list.jsx";
import { NoteFilter } from "../cmps/note-filter.jsx";
import { eventBusService } from "../../../services/event-bus-service.js";
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
      <section className="keep-app flex roboto">
        <NoteFilter onSetFilter={this.onSetFilter} />
        <NotesList
          notes={notes}
          onDeleteNote={this.onDeleteNote}
          onAddNote={this.onAddNote}
          onEditNote={this.onEditNote}
        />
      </section>
    );
  }
}
