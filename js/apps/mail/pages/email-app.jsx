const { Link, Route, Switch } = ReactRouterDOM
import { emailService } from "../services/email.service.js"
import { EmailDetails } from "../cmps/email.details.jsx";
import { EmailCompose } from "../cmps/email-compose.jsx";
import { EmailFilter } from "../cmps/email-filter.jsx";
import { EmailSort } from "../cmps/email-sort.jsx";
import { EmailFolderList } from "../cmps/email-folder-list.jsx";
import { EmailList } from "../cmps/email-list.jsx";
import { eventBusService } from "../../../services/event-bus-service.js";

export class MailApp extends React.Component {
    state = {
        mails: [],
        unreadCount: null,
        isModalOpen: false,
        criteria: {
            status: 'Inbox',
            isRead: null,
            search: ''
        },
        sortBy: {
            field: null,
            order: null
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
            emailService.query(this.state.criteria, this.state.sortBy).then((mails) => {
                this.setState({ ...this.state, mails: mails });
            })
        )
    }

    onDeleteMail = (mail) => {
        emailService.deleteMail(mail).then(() => {
            this.loadMails();
        })
    }

    openComposeModal = () => {
        console.log('compose modal');
        this.setState({ ...this.state, isModalOpen: true })

    }

    onCloseModal = () => {
        this.setState({ ...this.state, isModalOpen: false })
    }

    onSetCriteria = (field, value) => {
        this.setState({ criteria: { ...this.state.criteria, [field]: value } }, this.loadMails);
    };

    onSortMails = (field, value) => {
        console.log('sorting mails');
        this.setState({ sortBy: { field: field, order: value } }, this.loadMails);
        console.log('state:', this.state);
    }

    render() {
        const { mails } = this.state;
        console.log(this.state.mails);
        return (
            <section className="email-app">
                <button onClick={this.openComposeModal} className="compose-btn">Compose ➕</button>
                {this.state.isModalOpen && <EmailCompose onCloseModal={this.onCloseModal} />}
                {/* <h3>Count of mail unread:{this.state.unreadCount}</h3> */}
                <div className="main-mail flex">
                    <div className="side flex">
                        <EmailFolderList onSetCriteria={this.onSetCriteria} />
                    </div>
                    <div className="mails-container flex auto">
                        <EmailFilter className="email-filter" onSetCriteria={this.onSetCriteria} />
                        <EmailSort className="email-sort" onSortMails={this.onSortMails} />
                        <section>
                            <Switch>
                                <Route path="/mail/:mailId" component={EmailDetails} />
                                <Route path="/mail"
                                    component={() => <EmailList mails={mails} onDeleteMail={this.onDeleteMail} />} />
                            </Switch>
                        </section>
                        {/* <EmailList mails={mails} onDeleteMail={this.onDeleteMail} /> */}
                    </div>
                </div>
            </section>
        );
    }
}