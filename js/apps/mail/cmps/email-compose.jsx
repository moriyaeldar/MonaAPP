import { emailService } from "../services/email.service.js";
export class EmailCompose extends React.Component {
    state = {
        mail: null
    }

    componentDidMount() {
        this.loadNewMail();
    }

    loadNewMail = () => {
        this.setState({ mail: { to: '',subject:'', body: '' } })
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ mail: { ...this.state.mail, [field]: value } });
    };

    onAdd = (ev) => {
        ev.preventDefault();
        emailService.addMail(this.state.mail)
            .then(() => this.props.history.push('/mail'))
    }

    render() {
        return (
            <section className="email-compose" onSubmit={this.onAdd}>
                <h4>Mail compose</h4>
                <form>
                    <label htmlFor="Des">to:</label>
                    <input
                        name="to"
                        id="des"
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Enter mail address"
                    />

                    <label htmlFor="subj"></label>
                    <input
                        name="subject"
                        id="subj"
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Mail subject"
                    />

                    <label htmlFor="mailCon"></label>
                    <input
                        name="body"
                        id="mailCon"
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Say what you want to say..."
                    />
                    <button>send</button>
                </form>
            </section>
        )
    }
}