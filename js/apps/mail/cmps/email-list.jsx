
import { EmailPreview } from "./email-preview.jsx"
export function EmailList(mails) {
    return (
        <section className="email-list">
            <h3>welcome to email list</h3>
            {mails.map(mail =>
                <EmailPreview key={mail.id} mail={mail} />
            )}
        </section>
    )
}