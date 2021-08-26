// const { Link } = ReactRouterDOM;
import { utilService } from "../../../services/util.service.js";

export class NotePreview extends React.Component {
  state = {
    note: null,
    isEdittedMode: false,
    noteToEdit: {
      title: null,
      txt: null,
      URL: null,
    },
  };

  componentDidMount() {
    this.setState({ note: this.props });
  }

  onClickEditNote(ev) {
    ev.preventDefault();
    this.setState({ ...this.state }, () => {
      this.props.onEditNote(this.state.note, this.state.noteToEdit);
    });
    console.log(this.state.note, this.state.noteToEdit);
  }

  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    this.setState({ noteToEdit: { ...this.state.noteToEdit, [field]: value } });
  };

  onClickDelete = () => {
    this.props.onDeleteNote(this.state);
  };

  onClickEdit = () => {
    this.setState({ isEdittedMode: true });
  };

  render() {
    const { note } = this.props;
    return (
      <article className="note-preview flex">
        <h3>{note.info.title}</h3>

       <div>{note.info.URL && <img src={note.info.URL} />}</div> 

       <div> {note.info.videoURL && <video src={note.info.videoURL}></video>}</div>

        {note.info.todos && (
          <div className="todos">
            {note.info.todos.map((todo) => (
              <li key={utilService.makeId()}>{todo.txt.split(",") }</li>
            ))}
          </div>
        )}

        <h3>{note.info.txt}</h3>
        <h4>
          {this.state.isEdittedMode && (
            <form
              className="note-edit"
              onSubmit={(event) => this.onClickEditNote(event)}
            >
              <label htmlFor="title">title</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="title"
                id="title"
              />
              <label htmlFor="note">note</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="txt"
                id="note"
              />
              <button>Save</button>
            </form>
          )}
        </h4>
        <button onClick={this.onClickEdit}>🖋</button>
        <button onClick={this.onClickDelete}>✖</button>
      </article>
    );
  }
}
