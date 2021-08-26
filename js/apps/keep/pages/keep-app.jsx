
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

    onAddNote=(note)=>{
        console.log(note);
        noteService.addNote(note).then(() => {
            this.loadNotes();
        })
    }
    onEditNote=(note,noteToEdit)=>{
        noteService.updateNote(note,noteToEdit).then(() => {
            this.loadNotes();
        })
    }
  
    // onSetFilter = (filterBy) => {
    //   this.setState({ filterBy }, this.loadNotes);
    // };
  
  
    render() {
      const { notes } = this.state;
      return (
        !notes||!notes.length ?<p>loading...</p>:
        <section className="keep-app">
         <NotesList notes={notes} onDeleteNote={this.onDeleteNote} onAddNote={this.onAddNote} onEditNote={this.onEditNote}/>
        </section>
      );
    }
  }
  