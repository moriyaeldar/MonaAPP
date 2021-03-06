export class NotePic extends React.Component {
  state = {
    pic: null,
  };

  onBtnAddpic(ev) {
    ev.preventDefault();
    this.setState({ ...this.state }, () => {
      this.props.onAddNote(this.state, "note-img");
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
      <section className="note-choose-pic">
        <input
          onChange={this.handleChange}
          type="url"
          name="pic"
          id="pic"
          placeholder="Enter Picture URL..."
        />
        <button onClick={(event) => this.onBtnAddpic(event)} type="submit">
          add
        </button>
      </section>
    );
  }
}
