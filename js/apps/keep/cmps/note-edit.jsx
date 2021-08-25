import { noteService } from "../services/note.service.js"
export class NoteEdit extends React.Component {

  state = {
    note: null
    }


  componentDidMount() {
    const id = this.props.match.params.noteId
    if (!id) return
    noteService.getNoteById(id)
      .then(note => {
        this.setState({ note })
      })
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    this.setState(prevState => ({ car: { ...prevState.car, [field]: value } }))
  }

  onSaveCar = (ev) => {
    ev.preventDefault()
    carService.saveNote(this.state.car)
      .then(() => this.props.history.push('/note'))

  }

  render() {
    const { note } = this.state.note
    return (
      <form className="note-edit" onSubmit={this.onSaveNote}>
        <h1>{id ? 'Edit' : 'Add'} note</h1>
        <label htmlFor="note" >note</label>
        <input type="text" name="note" id="note" value={note} onChange={this.handleChange} />
        <button>Save Note</button>
      </form>
    )
  }
}
