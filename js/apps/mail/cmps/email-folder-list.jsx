export class EmailFolderList extends React.Component {
    onChangeBox = (ev) => {
        const value = ev.target.value;
        this.props.onSetCriteria('status', value)
    }
    render() {
        return (
            <form className="mail-filter">
                <button onClick={this.onChangeBox} value='Inbox'>Inbox</button>
                <button onClick={this.onChangeBox} value='Sent'>Sent</button>
            </form>
        )
    }
}