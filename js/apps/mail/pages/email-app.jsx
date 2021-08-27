const { Link } = ReactRouterDOM
import { emailService } from "../services/email.service.js"
import { EmailCompose } from "../cmps/email-compose.jsx";
import { EmailFilter } from "../cmps/email-filter.jsx";
import { EmailFolderList } from "../cmps/email-folder-list.jsx";
import { EmailList } from "../cmps/email-list.jsx";

export class MailApp extends React.Component {
    state = {
        mails: [],
        unreadCount: null,
        criteria: {
            status: 'Inbox',
            isRead: null,
            search: ''
        }
    }

    componentDidMount() {
        this.loadMails();
    }

    unreadNum = () => {
        emailService.getUnreadCount().then(count => {
            this.setState({ ...this.state, unreadCount: count })
        })
        return Promise.resolve();
    }

    loadMails = () => {
        console.log('loading mails');
        this.unreadNum().then(
            emailService.query(this.state.criteria).then((mails) => {
                this.setState({ ...this.state, mails: mails });
            })
        )
    }

    onDeleteMail = (mail) => {
        emailService.deleteMail(mail).then(() => {
            this.loadMails();
        })
    }

    onSetCriteria = (field, value) => {
        this.setState({ criteria: { ...this.state.criteria, [field]: value } }, this.loadMails);
    };

    render() {
        const { mails } = this.state;
        console.log(this.state.mails);
        return (
            <section className="email-app">
                <h1>welcome to email app</h1>
                <h3>Count of mail unread:{this.state.unreadCount}</h3>
                <div className="main-mail flex">
                    <div className="side flex">
                        <Link to={'/mail/mail-compose'}><button >Compose new mail</button></Link>
                        <EmailFolderList onSetCriteria={this.onSetCriteria} />
                    </div>
                    <div className="mails-container flex auto">
                        <EmailFilter onSetCriteria={this.onSetCriteria} />
                        <EmailList mails={mails} onDeleteMail={this.onDeleteMail} />
                    </div>
                </div>
            </section>
        );
    }
}