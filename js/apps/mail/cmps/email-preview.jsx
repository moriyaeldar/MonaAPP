const { Link } = ReactRouterDOM
import { utilService } from "../../../services/util.service.js"
export class EmailPreview extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        const mail = this.props.mail
        if (!mail) return
        this.setState({ mail })
    }

    isMailRead = () => {
        if (this.state.mail.isRead) {
            return 'unread'
        } else {
            return 'read'
        }
    }

    onClickDelete = () => {
        this.props.onDeleteMail(this.state.mail)
    }

    getEmailDate = () => {
        const date = (new Date(this.state.mail.sentAt)).toDateString()
        return utilService.getWords(date, 1, 2);
    }

    getNickContact = () => {
        if (this.state.mail.status === 'Inbox') return this.state.mail.nick
        else return 'to:' + this.state.mail.nick
    }

    getReadClassName = () => {
        let read = this.state.mail.isRead ? " read" : ""
        return "email-preview" + read;

    }

    render() {
        const mail = this.state.mail;
        if (!mail) return <p>Loading mail...</p>
        return (
            <Link to={`/mail/${mail.id}`} onClick={this.onMailRead}><article className={this.getReadClassName()}>
                <div className="contact">{this.getNickContact()}</div>
                {/* <div>{this.isMailRead()}</div> */}
                <div className="subject">{mail.subject}</div>
                <div className="date">{this.getEmailDate()}</div>
                <button className="delete-btn" onClick={this.onClickDelete}>🗑</button>
            </article></Link>
        )
    }
}