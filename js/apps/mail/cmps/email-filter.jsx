export class EmailFilter extends React.Component {

    handlechange = (ev) => {
        const field = ev.target.name
        let value = ev.target.value
        if (value === 'true') value = true
        else if (value === 'false') value = false
        this.props.onSetCriteria(field, value)

    }
    render() {
        return (
            <form className="mail-filter">
                <label htmlFor="bySearch">Search</label>
                <input
                    name="search"
                    id="bySearch"
                    type="text"
                    placeholder="Mail search"
                    onChange={this.handlechange}
                />
                <label htmlFor="byRead">Search</label>
                <select name="isRead" onChange={this.handlechange}>
                    <option value="true">Read</option>
                    <option value="false">Unread</option>
                </select>
            </form>
        )
    }
}