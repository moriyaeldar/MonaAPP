import { emailService } from "../services/email.service.js";
export class EmailCompose extends React.Component {
    state = {
        mail: null
    }
    removeEventBus;

    componentDidMount() {
        this.loadNewMail();
        console.log(this.state.mail);
    }

    loadNewMail = () => {
        this.setState({ mail: { to: '', subject: '', body: '' } })
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ mail: { ...this.state.mail, [field]: value } });
    };

    onAdd = (ev) => {
        ev.preventDefault();
        emailService.addMail(this.state.mail)
            .then(() => this.props.onCloseModal())
    }

    render() {
        return (
            <section className="email-compose flex" onSubmit={this.onAdd}>
                <h4 className="compose-head">New message
                    <button className="close-modal-btn" onClick={this.props.onCloseModal}>✖</button></h4>

                <form>
                    <input
                        className="to-input"
                        name="to"
                        id="des"
                        type="text"
                        onChange={this.handleChange}
                        placeholder="To"
                    />

                    <label htmlFor="subj"></label>
                    <input
                        className="subject-input"
                        name="subject"
                        id="subj"
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Subject"
                    />

                    <label htmlFor="mailCon"></label>
                    <input
                        className="body-input"
                        name="body"
                        id="mailCon"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <button>send</button>
                </form>
            </section>
        )
    }
}