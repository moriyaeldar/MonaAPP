export class NoteVideo extends React.Component {
  state = {
    video: null,
  };

  onBtnAddvideo(ev) {
    ev.preventDefault();
    this.setState({ ...this.state }, () => {
      this.props.onAddNote(this.state, "note-video");
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
      <section className="note-video">
        <input
          onChange={this.handleChange}
          type="url"
          name="video"
          id="video"
          placeholder="Enter Video URL..."
        />
        <button onClick={(event) => this.onBtnAddvideo(event)} type="submit">
          add
        </button>
      </section>
    );
  }
}
