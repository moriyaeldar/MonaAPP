import { noteService } from "../services/note.service.js"

export class NoteEdit extends React.Component {

  state = {
    note: null
    }


    componentDidMount() {
      this.setState({note: this.props })
     
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
    const { note } = this.props
    return (
      <form className="note-edit" onSubmit={this.onSaveNote}>
        <h6>{note.id ? 'Edit' : 'Add'} note</h6>
        <label htmlFor="note" >note</label>
        <input type="text" name="note" id="note" value={note} onChange={this.handleChange} />
        <button>Save</button>
      </form>
    )
  }
}
