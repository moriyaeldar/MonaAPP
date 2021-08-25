
import { noteService } from "../services/note.service.js";
import { NotesList } from "../cmps/note-list.jsx";
export class KeepApp extends React.Component {
    state = {
      notes: [],
    };
  
    componentDidMount() {
      this.loadNotes();
    }
  
    loadNotes = () => {
        noteService.query(this.state.filterBy).then((notes) => {
        this.setState({ notes });
      });
    };

    onDeleteNote = (note) => {
        noteService.deleteNote(note).then(() => {
            this.loadNotes();
        })
    }
  
    // onSetFilter = (filterBy) => {
    //   this.setState({ filterBy }, this.loadNotes);
    // };
  
  
    render() {
      const { notes } = this.state;
      return (
        <section className="keep-app">
              <NotesList notes={notes} onDeleteNote={this.onDeleteNote} />
        </section>
      );
    }
  }
  