import { utilService } from "../../../services/util.service.js"
export const emailService = {
    getMails
}

const gEmails = _createMails();

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


function getMails() {
    debugger
    console.log(gEmails);
    return Promise.resolve(gEmails);
}

function _createMail() {
    return {
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: utilService.makeLorem(20),
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    }
}

function _createMails() {
    return [
        _createMail(),
        _createMail(),
        _createMail(),
        _createMail(),
        _createMail()
    ]
}

