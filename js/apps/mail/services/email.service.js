import { utilService } from "../services/utilService.js"
export const emailService = {
    getMails
}

const email = {
    id: utilService.makeId(),
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


function getMails() {
    return gEmails;
}

function _createMail(){
return {
    id: utilService.makeId(),
    subject: 'Miss you!',
    body: utilService.makeLorem(20),
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
}
}

