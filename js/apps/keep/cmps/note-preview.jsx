// const { Link } = ReactRouterDOM;

export class NotePreview extends React.Component {
  state = {
    note: null,
    isEdittedMode: false,
    title: null,
    txt: null
  };

  componentDidMount() {
    this.setState({ note: this.props });
  }

  onClickEditNote = (ev) => {
    this.setState({ title: ev.target.title })
    this.setState({ txt: ev.target.txt })

    this.props.onEditNote(this.state);
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
        {/* <img src={note.info.url} /> */}
        <h3>{note.info.title}</h3>
        <h3>{note.info.txt}</h3>
        <h4>
          {this.state.isEdittedMode && (
            <form className="note-edit" onSubmit={event => this.onClickEditNote(event)}>
              <label htmlFor="title">title</label>
              <input
                type="text"
                name="title"
                id="title"
               title={this.state.title}
              />
              <label htmlFor="note">note</label>
              <input
                type="text"
                name="note"
                id="note"
                txt={this.state.txt}
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
