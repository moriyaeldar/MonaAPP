import { storageService } from '../../../services/storage.service.js'

export const noteService ={
    query,
    getNoteById,
    deleteNote 
}

const KEY = 'Notes'
const notes = [
    {
     id: "n101",
     type: "note-txt",
     isPinned: true,
     info: {
     txt: "Fullstack Me Baby!"
     }
    },
    {
     id: "n102",
     type: "note-txt",
     isPinned: true,
     info: {
     txt: "Shopping"
     }
    },
    {
     id: "n103",
     type: "note-txt",
     isPinned: true,
     info: {
     txt: "Go to to the dentist"
     }
    },
    // {
    //  id: "n104",
    //  type: "note-img",
    //  info: {
    //  url: "http://some-img/me",
    //  title: "Bobi and Me"
    //  },
    //  style: {
    //  backgroundColor: "#00d"
    //  }
    // },
    // {
    //  id: "n105",
    //  type: "note-todos",
    //  info: {
    //  label: "Get my stuff together",
    //  todos: [
    //  { txt: "Driving liscence", doneAt: null },
    //  { txt: "Coding power", doneAt: 187111111 }
    //  ]
    //  }
    // }
    ];

    function query() {
        return Promise.resolve(notes)
    }

console.log(notes);

    function getNoteById(noteId) {
        var note = notes.find(function (note) {
            return noteId ===note.id
        })
        return Promise.resolve(note)
    }

    function deleteNote(noteId) {
        var noteIdx = notes.findIndex(function (note) {
            return noteId === note.id
        })
        notes.splice(noteIdx, 1)
        _saveNotesToStorage();
        return Promise.resolve()
    }
    
    function _addNote(noteToEdit) {
        var note = _createNote(noteToEdit)
        notes.unshift(note)
        _saveCarsToStorage();
        return Promise.resolve()
    }
    
function _createNote(noteToEdit) {
 return note.info.txt=noteToEdit
}


    function _saveNotesToStorage() {
        storageService.saveToStorage(KEY, notes)
      }
    
    
    