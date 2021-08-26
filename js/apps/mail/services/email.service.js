'use strict'
import { Mails } from "./data.mails.js"
import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"
export const emailService = {
    query,
    addMail,
    deleteMail,
    getMailById,
    mailRead,
    getUnreadCount
}
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const KEY = 'mailDB';
var gMails;
_loadMails();

function _loadMails() {
    gMails = storageService.loadFromStorage(KEY);
    if (!gMails || !gMails.length) {
        gMails = Mails;
        _saveMailsToStorage();
    }
}

function query(criteria) {
    debugger
    if (criteria) {
        let {status, search, isRead} = criteria;
        var mailsToShow = gMails.filter((mail) => {
            return mail.subject.includes(search)&&
            mail.status===status&&
            (mail.isRead===isRead||isRead===null)
        });
        return Promise.resolve(mailsToShow);
    }
    return Promise.resolve(gMails);
}

function getMailById(id) {
    var mail = gMails.find(mail => {
        return id === mail.id
    })
    return Promise.resolve(mail)
}

function getUnreadCount() {
    let unreadMails = gMails.filter(mail => {
        return mail.isRead === false;
    });
    return Promise.resolve(unreadMails.length);
}

function addMail({ to, body }) {
    const mail = _createMail(to, body);
    gMails.unshift(mail);
    _saveMailsToStorage()
    return Promise.resolve();
}

function deleteMail(mail) {
    const id = mail.id;
    const idx = gMails.findIndex(mail => mail.id === id)
    gMails.splice(idx, 1);
    _saveMailsToStorage();
    return Promise.resolve();
}

function mailRead(mail) {
    const id = mail.id;
    const idx = gMails.findIndex(mail => mail.id === id)
    gMails[idx].isRead = true;
    return Promise.resolve(gMails[idx]);
}

function _createMail(to = 'momo@momo.com', body = utilService.makeLorem(200), from = 'user@appsus.com') {
    return {
        id: utilService.makeId(),
        subject: 'My new mail',
        body: body,
        isRead: false,
        sentAt: 1551133930594,
        to: to,
        from: from
    }
}

function _saveMailsToStorage() {
    storageService.saveToStorage(KEY, gMails);
}

