const { Link } = ReactRouterDOM
import { emailService } from "../services/email.service.js"
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

    getDate = () => {
        const date=new Date(this.state.mail.sentAt)
        return date.toDateString()
    }

    getMailAddress = () => {
        if (this.state.mail.status === 'Inbox')return this.state.mail.nick
        else return 'to:'+this.state.mail.to
    }

    render() {
        const mail = this.state.mail;
        if (!mail) return <p>Loading mail...</p>
        return (
            <Link to={`/mail/${mail.id}`} onClick={this.onMailRead}><article className="email-preview flex space-between">
                <div>{this.getMailAddress()}</div>
                {/* <div>{this.isMailRead()}</div> */}
                <div className="subject-mail">{mail.subject}</div>
                <div>{this.getDate()}</div>
                <button onClick={this.onClickDelete}>🗑</button>
            </article></Link>
        )
    }
}