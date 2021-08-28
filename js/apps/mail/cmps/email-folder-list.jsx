const { Link } = ReactRouterDOM
export class EmailFolderList extends React.Component {
    state = {
        status: 'Inbox'
    }
    onChangeBox = (ev) => {
        const value = ev.target.value;
        this.props.onSetCriteria('status', value)
        this.setState({ status: value })
    }

    getClassName = (box) => {
        if (this.state.status === box) return 'folder active'
        else return 'folder'
    }

    render() {
        return (
            <section className="folder-list">
                <div>
                    <Link to="/mail">
                    <button className={this.getClassName('Inbox')} onClick={this.onChangeBox} value='Inbox'>✉ Inbox</button>
                    </Link>
                </div>
                <div>
                    <Link to="/mail">
                    <button className={this.getClassName('Sent')} onClick={this.onChangeBox} value='Sent'>✈ Sent</button>
                    </Link>
                </div>
            </section>
        )
    }
}