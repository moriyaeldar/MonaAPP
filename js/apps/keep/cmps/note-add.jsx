export class NoteAdd extends React.Component {
  state = {
    title: null,
    txt: null,
  };

  onBtnAddNote(ev) {
    // if (!this.state.title && !this.state.txt ) return;
    ev.preventDefault();
    this.setState({ ...this.state }, () => {
      this.props.onAddNote(this.state);
    });
    console.log(this.state);
  }

  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    this.setState({ ...this.state, [field]: value });
  };


  render() {
    return (
      <form className="add flex" onSubmit={(event) => this.onBtnAddNote(event)}>
        <input
          type="text"
          name="title"
          id="title-note"
          placeholder="title"
          onChange={this.handleChange}
        />

        <textarea
          name="txt"
          id="new-note"
          cols="30"
          rows="10"
          placeholder="write a note..."
          onChange={this.handleChange}
        ></textarea>
        <button>add</button>
      </form>
    );
  }
}
