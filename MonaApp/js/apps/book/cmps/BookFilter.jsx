export class BookFilter extends React.Component {
  state = {
    filterBy: {
      name: "",
      price: "",
    },
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    const value =
      ev.target.type === "number" ? +ev.target.value : ev.target.value;
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
    const { name, price } = this.state.filterBy;
    return (
      <form className="book-filter" onSubmit={this.onFilter}>
        <label htmlFor="name">By name:</label>
        <input
          name="name"
          type="text"
          id="name"
          placeholder="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="price">By price:</label>
        <input
          name="price"
          type="number"
          id="price"
          placeholder="price"
          value={price}
          onChange={this.handleChange}
        />
        <button>Filter</button>
      </form>
    );
  }
}
