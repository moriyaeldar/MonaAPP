import { emailService } from "../services/email.service.js"
import { EmailList } from "../cmps/email-list.jsx";
export class MailApp extends React.Component {
    state = {
        mails: []
    }

    componentDidMount() {
        this.loadMails();
    }

    loadMails = () => {
        debugger
        emailService.getMails().then((mails) => {
            console.log(mails);
            this.setState({ mails });
        })
    }

    render() {
        const { mails } = this.state;

        return (
            <section className="emailApp">
                <h1>welcome to email app</h1>
                <EmailList mails={mails} />
            </section>
        );
    }
}