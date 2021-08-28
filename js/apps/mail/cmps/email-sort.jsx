export class EmailSort extends React.Component {
    onToggleDate = (ev) => {
        ev.preventDefault();
        console.log('toggle date');
        const value = ev.target.value;
        ev.target.value = ev.target.value === 'new' ? 'old' : 'new';
        this.onSort('date', value);
    }

    onToggleTitle = (ev) => {
        ev.preventDefault();
        console.log('toggle title');
        const value = ev.target.value;
        ev.target.value = ev.target.value === 'A' ? 'Z' : 'A';
        this.onSort('title', value);
    }
    onSort = (field, value) => {
        this.props.onSortMails(field, value)

    }
    render() {
        return (
            <form className="mail-sort">
                <button className="sortDate-btn" name="date" value="new" onClick={this.onToggleDate}>⇅</button>
                <button className="sortTitle-btn" name="title" value="A" onClick={this.onToggleTitle}>#</button>
            </form>
        )
    }
}