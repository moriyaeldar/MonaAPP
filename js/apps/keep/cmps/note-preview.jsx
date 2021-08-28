// const { Link } = ReactRouterDOM;
import { utilService } from "../../../services/util.service.js";
import { exportService } from "../../../services/export.service.js";
import { NoteStyle } from "./note-style.jsx";
import { emailService } from "../../mail/services/email.service.js";
export class NotePreview extends React.Component {
  state = {
    note: null,
    isEdittedMode: false,
    noteToEdit: {
      title: null,
      txt: null,
      URL: null,
    },
    style: null
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
  ChangeNoteStyle(style) {
    this.setState({ style: style });
  }
  onChangeNoteStyle = (style) => {
    this.ChangeNoteStyle(style)
  }
  onClickNotePin = () => {
    this.props.onPinNote(this.props.note)

  }

  onClickNoteCopy = () => {
    this.props.onCopyNote(this.props.note)

  }

  onExportToMail = () => {
    console.log('note to export:', this.state.note.note);
    exportService.noteToMail(this.state.note.note).then(mail => emailService.addMail(mail, "noteExport"));
  }

  render() {
    const { note } = this.props;
    return (
      <article className="note-preview grid main-layout" style={this.state.style}
      >
        <p>{note.info.title}</p>

        <div>{note.info.URL && <img src={note.info.URL} />}</div>

        <div> {note.info.videoURL && <video src={note.info.videoURL}></video>}</div>

        {note.info.todos && (
          <div className="todos">
            {note.info.todos.map((todo) => (
              <li key={utilService.makeId()}>{todo.txt.split(",")}</li>
            ))}
          </div>
        )}

        <p>{note.info.txt}</p>
        <h4>
          {this.state.isEdittedMode && (
            <form
              className="note-edit"
              onSubmit={(event) => this.onClickEditNote(event)}
            >
              <label htmlFor="title"></label>
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="title"
                name="title"
                id="title"
              />
              <label htmlFor="note"></label>
              <input
                onChange={this.handleChange}
                placeholder="write your note here.."
                type="text"
                name="txt"
                id="note"
              />
              <button>Save</button>
            </form>
          )}
        </h4>
        <button onClick={this.onClickNotePin}>📌</button>
        <button onClick={this.onClickNoteCopy}>❐</button>
        <button onClick={this.onClickEdit}>🖋</button>
        <button onClick={this.onClickDelete}>✖</button>
        <button onClick={this.onExportToMail}>➱</button>
        <NoteStyle onChangeNoteStyle={this.onChangeNoteStyle} />
      </article>
    );
  }
}
