import { emailService } from "../services/email.service.js"
import { EmailList } from "../cmps/email-list.jsx";

export class MailApp extends React.Component {
    state = {
        boxType: 'Inbox',
        mails: []
    }

    componentDidMount() {
        this.loadMails();
    }

    onChangeInputType = ({ target }) => {
    
      }

    loadMails = () => {
        emailService.getMails().then((mails) => {
            console.log(mails);
            this.setState({ mails });
        })
    }

    onDeleteMail = (mail) => {
        emailService.deleteMail(mail).then(() => {
            this.loadMails();
        })
    }

    render() {
        const { mails } = this.state;

        return (
            <section className="emailApp">
                <h1>welcome to email app</h1>
                <div><button>Inbox</button><button>Sent</button></div>
                <EmailList mails={mails} onDeleteMail={this.onDeleteMail} />
            </section>
        );
    }
}