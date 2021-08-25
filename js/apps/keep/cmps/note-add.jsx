export class NoteAdd extends React.Component {
  state = {
    title: null,
    txt: null,
  };

  sendDataOfTitle(ev) {
    this.setState({ title: ev.target.title });
  }
  sendDataOfTxt(ev) {
    this.setState({ txt: ev.target.txt });
  }
  render() {
    return (
      <form className="add flex" onSubmit={() => this.props.onAddNote(this.state)}>
        <input
          onInput={(event) => this.sendDataOfTitle(event)}
          type="text"
          name="title-note"
          id="title-note"
          placeholder="title"
          title={this.state.title}
        />
        <textarea
          onInput={(event) => this.sendDataOfTxt(event)}
          name="new-note"
          id="new-note"
          cols="30"
          rows="10"
          placeholder="write a not..."
          txt={this.state.txt}
        ></textarea>
        <button >add</button>
      </form>
    );
  }
}
