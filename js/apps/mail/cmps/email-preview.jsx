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


    render() {
        const mail = this.state.mail;
        if (!mail) return <p>Loading mail...</p>
        return (
            <Link to={`/mail/${mail.id}`} onClick={this.onMailRead}><article className="email-preview">
                <div>to: {mail.to}</div>
                <div>{this.isMailRead()}</div>
                <div>subject:{mail.subject}</div>
                <div>body: {mail.body}</div>
                <button onClick={this.onClickDelete}>Delete</button>
            </article></Link>
        )
    }
}