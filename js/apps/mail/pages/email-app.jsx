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

    onChangeBoxType = (ev) => {
        console.log('button clicked');
        const boxType = ev.target.value;
        console.log('box type:', boxType);
        this.setState({ boxType });
        console.log('set state box type:', this.state.boxType);
        this.loadMails();
    }

    loadMails = () => {
        console.log('loading mails');
        emailService.getMails(this.state.boxType).then((mails) => {
            console.log('after getting mails:', mails);
            this.setState({ mails });
            console.log('after set state mails:', this.state.mails);
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
                <button onClick={this.onChangeBoxType} value="Inbox">Inbox</button>
                <button value="Sent" onClick={this.onChangeBoxType}>Sent</button>
                <EmailList mails={mails} onDeleteMail={this.onDeleteMail} />
            </section>
        );
    }
}