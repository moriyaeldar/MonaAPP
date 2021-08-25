export function EmailPreview({ mail }) {
    return (
        <section className="email-preview">
            <div>to: {mail.to}</div>
            <div>body: {mail.body}</div>
        </section>
    )
}