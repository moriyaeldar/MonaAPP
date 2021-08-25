'use strict'

import { utilService } from "../../../services/util.service.js"
export const emailService = {
    getMails,
    addMail,
    deleteMail
}

const gSentEmails = _createSentMails();
// const gInboxEmails = _createInboxMails();

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


function getMails() {
    console.log(gSentEmails);
    return Promise.resolve(gSentEmails);
}

function addMail({ to, body }) {
    const mail = _createMail(to, body);
    gSentEmails.push(mail)
    return Promise.resolve();
}

function deleteMail(mail) {
    const id = mail.id;
    const idx = gSentEmails.findIndex(mail => mail.id === id)
    gSentEmails.splice(idx, 1);
    return Promise.resolve();
}

function _createSentMail(to = 'momo@momo.com', body = utilService.makeLorem(20)) {
    return {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: body,
        isRead: false,
        sentAt: 1551133930594,
        to: to
    }
}

function _createSentMails() {
    return [
        _createSentMail(),
        _createSentMail(),
        _createSentMail(),
        _createSentMail(),
        _createSentMail()
    ]
}

