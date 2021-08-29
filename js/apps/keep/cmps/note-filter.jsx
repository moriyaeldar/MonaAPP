export class NoteFilter extends React.Component {
  state = {
    filterBy: {
      title: "",
      type: "",
    }
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    this.setState(
      { filterBy: { ...this.state.filterBy, [field]: value } },
      () => {
        this.props.onSetFilter(this.state.filterBy);
      }
    );
  };

  onFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state.filterBy);
  };

  render() {
    const { title, type} = this.state.filterBy;
    return (
      <form className="note-filter flex" onSubmit={this.onFilter}>
        <label htmlFor="title"></label>
        <input
          name="title"
          type="text"
          id="title"
          placeholder="search"
          value={title}
          onChange={this.handleChange}
        />
        <label htmlFor="type"></label>
        <input
          name="type"
          type="text"
          id="type"
          placeholder="search by type"
          value={type}
          onChange={this.handleChange}
        />
        <button></button>
      </form>
    );
  }
}
