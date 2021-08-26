// const { Link } = ReactRouterDOM;
export class NotePreview extends React.Component {
  state = {
    note: null,
    isEdittedMode: false,
    noteToEdit: {
      title: null,
      txt: null,
    },
  };

  componentDidMount() {
    this.setState({ note: this.props });
  }

  onClickEditNote(ev) {
    ev.preventDefault();
    this.setState({ ...this.state}, () => {
      this.props.onEditNote(this.state.note,this.state.noteToEdit);

    });
    console.log(this.state.note,this.state.noteToEdit);
  }

  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    this.setState({noteToEdit: { ...this.state.noteToEdit, [field]: value }  });
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
      <article className="note-preview">
        {note.info.pic&&
        <img src={note.info.pic} />
        }
      
        <h3>{note.info.title}</h3>
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
