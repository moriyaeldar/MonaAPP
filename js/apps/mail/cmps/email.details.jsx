import { emailService } from "../services/email.service.js"
export class EmailDetails extends React.Component {

    state = {
        mail: null
    }

    componentDidMount() {
        this.loadMail().then(() => {
            this.onMailRead();
        })
    }

    loadMail() {
        const id = this.props.match.params.mailId
        const mail = emailService.getMailById(id).then(mail => {
            if (!mail) this.props.history.push('/mail')
            this.setState({ mail })
        })
        return Promise.resolve();
    }

    onMailRead = () => {
        emailService.mailRead(this.state.mail).then(mail => {
            this.setState({ mail })
        });
    }

    render() {
        const mail = this.state.mail
        if (!mail) return <h1>Loading mail..</h1>
        return (
            <section className="mail-details">
                <h2>{mail.subject}</h2>
                <h4>{mail.to}</h4>
                <p>{mail.body}</p>
            </section>
        )
    }
}