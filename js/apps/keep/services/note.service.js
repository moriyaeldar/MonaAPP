export const noteService ={
    query,
    getNoteById 
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
     type: "note-img",
     info: {
     url: "http://some-img/me",
     title: "Bobi and Me"
     },
     style: {
     backgroundColor: "#00d"
     }
    },
    {
     id: "n103",
     type: "note-todos",
     info: {
     label: "Get my stuff together",
     todos: [
     { txt: "Driving liscence", doneAt: null },
     { txt: "Coding power", doneAt: 187111111 }
     ]
     }
    }
    ];

    function query() {
        return Promise.resolve(notes)
    }

    function getNoteById(noteId) {
        var note = notes.find(function (note) {
            return noteId ===note.id
        })
        return Promise.resolve(note)
    }

    function _saveNotesToStorage() {
        storageService.saveToStorage(KEY, notes)
      }
    
    
    