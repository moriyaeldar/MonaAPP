import { emailService } from "../services/email.service.js";
export class EmailPreview extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        const mail = this.props.mail
        if (!mail) return
        this.setState({ mail })
    }

    onClickDelete = () => {
        this.props.onDeleteMail(this.state.mail)
    }

    render() {
        const mail = this.state.mail;
        if (!mail) return <p>Loading mail...</p>
        return (
            <section className="email-preview">
                <div>to: {mail.to}</div>
                <div>body: {mail.body}</div>
                <button onClick={this.onClickDelete}>Delete</button>
            </section>
        )
    }
}