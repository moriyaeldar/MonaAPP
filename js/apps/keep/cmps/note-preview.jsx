// const { Link } = ReactRouterDOM;
import { noteService } from "../services/note.service.js";
import { NoteEdit } from "./note-edit.jsx";

export class NotePreview extends React.Component {
 state={
   note:null
 }

 componentDidMount() {
 this.setState({note: this.props })

}

  
  onSaveNote = (ev) => {
    ev.preventDefault()
    noteService.saveNote(this.state)
      .then(() => this.props.history.push('/note'))

  }

  onClickDelete = () => {
    this.props.onDeleteNote(this.state)
}
  
  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    this.setState(prevState => ({ note: { ...prevState.note, [field]: value } }))
  }

  render(){
   const { note } = this.props
  return (
    <article className="note-preview">
    
      {/* <img src={note.info.url} /> */}
      <h3>{note.info.title}</h3>
      <h3>{note.info.txt}</h3>
      <button onClick={this.onSaveNote}>
           🖋
        </button>
      <button onClick={this.onClickDelete}>
           ✖
        </button>
    
    </article>
  ) };
}