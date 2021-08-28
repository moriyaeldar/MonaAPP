import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js';
export const noteService ={
    query,
    getNoteById,
    deleteNote,
    updateNote,
    addNote,
    pinNote,
    copyNote,
    changeStyleNote 
}

const KEY = 'Notes'
var notes;

    function query(filterBy) {
        notes=storageService.loadFromStorage(KEY)
        if (!notes || !notes.length) {
           notes =[
            {
             id: "n101",
             type: "note-txt",
             isPinned: false,
             info: {
                 title: 'this is it!',
             txt: "Fullstack Me Baby!"
             },
             style: {
                backgroundColor: "white"
                }
            },
            {
             id: "n102",
             type: "note-txt",
             isPinned: false,
             info: {
                 title:'need to buy something',
             txt: "Shopping"
             },
             style: {
                backgroundColor:"white"
                }
            },
            {
             id: "n103",
             type: "note-txt",
             isPinned: false,
             info: {
                 title:'its relly urgent',
             txt: "Go to to the dentist"
             },
             style: {
                backgroundColor: "white"
                }
            },
            {
             id: "n104",
             type: "note-img",
             isPinned: false,
             info: {
             URL: "https://picsum.photos/200/300",
             title: "Bobi and Me"
             },
             style: {
             backgroundColor:"white"
             }
            },
            {
             id: "n105",
             type: "note-todos",
             isPinned: false,
             info: {
             title: "Get my stuff together",
             todos: ["Driving liscence","Coding power"
             ]
             },
             style: {
                backgroundColor: "white"
                }
            }
            ];
            
        }
        if(filterBy) {
            let {title, type} = filterBy
            const notesToShow = notes.filter(note => note.info.title.includes(title) && note.type.includes(type))
            return Promise.resolve(notesToShow)
        }
        _saveNotesToStorage
    console.log(notes);
        return Promise.resolve(notes)
        console.log(notes);

    }


    function getNoteById(noteId) {
        var note = notes.find(function (note) {
            return noteId ===note.id
        })
        return Promise.resolve(note)
    }


    function pinNote(note) {
       let currNote=getNoteById(note.id)
       .then((currNote)=> {
        currNote.isPinned=true
        _saveNotesToStorage()
       return Promise.resolve()  
       
    })
       
        _saveNotesToStorage();       
        return Promise.resolve()
    }

    function copyNote(note) {
       let currNote=getNoteById(note.id)
       .then((currNote)=> {
        notes.push(currNote)  
        _saveNotesToStorage()
       return Promise.resolve()  
       
    })
       
        _saveNotesToStorage();       
        return Promise.resolve()
    }
    function changeStyleNote(note,style) {
       let currNote=getNoteById(note.id)
       .then((currNote)=> {
        currNote.style=style 
        _saveNotesToStorage()
       return Promise.resolve()  
       
    })
       
        _saveNotesToStorage();       
        return Promise.resolve()
    }

    function deleteNote(noteId) {
        var noteIdx = notes.findIndex(function (note) {
            return noteId === note.id
        })
        notes.splice(noteIdx, 1)
        _saveNotesToStorage();
        return Promise.resolve()
    }

    
    function addNote(noteToEdit,type) {
        var note = _createNote(noteToEdit,type)
        notes.push(note)  
          console.log(noteToEdit);
console.log(note);
        _saveNotesToStorage();
        return Promise.resolve()
    }

    
    function updateNote(note,noteToEdit) {
        console.log(note,noteToEdit);
        let currNote =  getNoteById(note.note.id)   
             .then((currNote)=> {
         currNote.info.txt = noteToEdit.txt
        currNote.info.title = noteToEdit.title
        console.log(currNote);  
         _saveNotesToStorage()
        return Promise.resolve()  
        
     })
   console.log(notes);
 return Promise.resolve(notes) 
    }
    

function _createNote(noteToEdit,type) {
    console.log(noteToEdit,type);
    if(type==="note-txt"){
 return {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        info: {
            title:noteToEdit.title,
       txt:noteToEdit.txt
},
style: {
   backgroundColor: "white"
   }
} }
  else if (type==="note-img"){
 return {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        info: {
            title:utilService.makeLorem(),
       URL:noteToEdit.pic
},
style: {
   backgroundColor: "white"
   }
} }
   else if(type==="note-todos"){
    
 return {
        id: utilService.makeId(),
        type: "note-todos",
        isPinned: false,
        info: {
       title:utilService.makeLorem(),
         todos:noteToEdit.todo.split(",")
        },
        style: {
           backgroundColor: "white"
           }
 
   } }else{
 return {
        id: utilService.makeId(),
        type: "note-video",
        isPinned: true,
        info: {
            title:utilService.makeLorem(),
       videoURL:noteToEdit.video
},
style: {
   backgroundColor: "white"
   }
} }


}

    function _saveNotesToStorage() {
        storageService.saveToStorage(KEY, notes)
      }
    
    
