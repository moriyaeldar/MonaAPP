
import { noteService } from "../services/note.service.js";

export class BookApp extends React.Component {
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
  
    // onSetFilter = (filterBy) => {
    //   this.setState({ filterBy }, this.loadNotes);
    // };
  
  
    render() {
      const { notes } = this.state;
      return (
        <section className="keep-app">
              <NotesList notes={notes}  />
        </section>
      );
    }
  }
  