
import { EmailPreview } from "./email-preview.jsx"
export function EmailList({ mails, onDeleteMail }) {
    if (!mails) {
        return <h4>Loading...</h4>
    }
    return (
        <section className="email-list">
            {mails.map(mail =>
                <EmailPreview key={mail.id} mail={mail} onDeleteMail={onDeleteMail} />
            )}
        </section>
    )
}