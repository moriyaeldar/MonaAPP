'use strict'

import { utilService } from "../../../services/util.service.js"
export const emailService = {
    getMails,
    addMail,
    deleteMail
}
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const gSentEmails = _createSentMails();
const gInboxEmails = _createInboxMails();

function getMails(boxType) {
    if (boxType === 'Inbox') {
        return Promise.resolve(gInboxEmails);
    }
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

function _createMail(to = 'momo@momo.com', body = utilService.makeLorem(20), from = 'user@appsus.com') {
    return {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: body,
        isRead: false,
        sentAt: 1551133930594,
        to: to,
        from: from
    }
}

function _createSentMails() {
    return [
        _createMail(),
        _createMail(),
        _createMail(),
        _createMail(),
        _createMail()
    ]
}

function _createInboxMails() {
    return [
        _createMail(loggedinUser.email, utilService.makeLorem(20), 'momo@momo.com'),
        _createMail(loggedinUser.email, utilService.makeLorem(20), 'momo@momo.com'),
        _createMail(loggedinUser.email, utilService.makeLorem(20), 'momo@momo.com'),
        _createMail(loggedinUser.email, utilService.makeLorem(20), 'momo@momo.com'),
        _createMail(loggedinUser.email, utilService.makeLorem(20), 'momo@momo.com')
    ]
}

