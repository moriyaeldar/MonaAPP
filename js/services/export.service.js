export const exportService = {
    mailToNote,
    noteToMail
}

function mailToNote(mail) {
    const note =
    {
        id: mail.id,
        type: "note-txt",
        isPinned: true,
        info: {
            title: "from mail:" + mail.subject,
            txt: mail.body
        }
    };
    return Promise.resolve(note);

}

function noteToMail(note) {
    const mail =
    {
        id: note.id,
        subject: note.info.title,
        body: note.info.txt,
        isRead: false,
        sentAt: Date.now(),
        to: "user@appsus.com",
        from: "keepSys@appsus.com",
        nick: "keepInMona",
        status: "Inbox"
    };
    return Promise.resolve(mail);

}