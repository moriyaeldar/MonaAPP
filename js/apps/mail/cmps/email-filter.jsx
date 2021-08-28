export class EmailFilter extends React.Component {

    state = {
        isOpenRead: false
    }

    onToggleOpenRead = (ev) => {
        ev.preventDefault();
        if (this.state.isOpenRead) {
            this.setState({ isOpenRead: false })
            this.props.onSetCriteria('isRead', null)
        } else {
            this.setState({ isOpenRead: true })
            this.props.onSetCriteria('isRead', false)
        }
    }

    onToggleRead = (ev) => {
        ev.preventDefault();
        if (ev.target.innerHTML==='📖') {
            ev.target.value = false;
            ev.target.innerHTML = '📘';
            this.props.onSetCriteria('isRead', false)

        } else {
            ev.target.value = true;
            ev.target.innerHTML = '📖';
            this.props.onSetCriteria('isRead', true)
        }
    }

    handlechange = (ev) => {
        const field = ev.target.name;
        let value = ev.target.value;
        this.props.onSetCriteria(field, value)

    }
    render() {
        return (
            <form className="mail-filter">
                <input
                    className="search-input"
                    name="search"
                    id="bySearch"
                    type="search"
                    placeholder="🔎 Search mail"
                    onChange={this.handlechange}
                />
                <button className="isReadOpen-btn" onClick={this.onToggleOpenRead}>Read?</button>
                {this.state.isOpenRead && <button className="toggle-read" value={false} onClick={this.onToggleRead}>📘</button>}
            </form>
        )
    }
}