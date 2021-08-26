import { NotePic } from "./note-pic.jsx";
import { NoteVideo } from "./note-video.jsx";
import { NoteTodo } from "./note-todo.jsx";

export class NoteAdd extends React.Component {
  state = {
      note:{
       title: null,
    txt: null  
      },
    
    isPicChosen: false,
    isVideoChosen: false,
    isTodoChosen: false,
  };

  onBtnAddNote(ev) {
    // if (!this.state.title && !this.state.txt ) return;
    ev.preventDefault();
    this.setState({ note: { ...this.state.note, [field]: value } }), () => {
      this.props.onAddNote(this.state,"note-txt");}
   
    console.log(this.state);
  }

  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    this.setState({ note: { ...this.state.note, [field]: value } })
  };

  onUploudPic = () => {
    this.setState({ isPicChosen: true });
  };

  onUploudVideo = () => {
    this.setState({ isVideoChosen: true });
  };

  onUploudTodo = () => {
    this.setState({ isTodoChosen: true });
  };

  onBack = () => {
    this.setState({ isPicChosen: false });
    this.setState({ isVideoChosen: false });
    this.setState({ isTodoChosen: false });
  };

  render() {
    return (
      <section className="add flex">
        {!this.state.isPicChosen &&
          !this.state.isVideoChosen &&
          !this.state.isTodoChosen && (
            <form
              className="add txt"
              onSubmit={(event) => this.onBtnAddNote(event)}
            >
              <input
                type="text"
                name="title"
                id="title-note"
                placeholder="title"
                onChange={this.handleChange}
              />
              <textarea
                name="txt"
                id="new-note"
                cols="30"
                rows="10"
                placeholder="write a note..."
                onChange={this.handleChange}
              ></textarea>
              <button>add</button>
            </form>
          )}
        {this.state.isPicChosen && <NotePic onAddNote={this.props.onAddNote} />}
        {this.state.isVideoChosen && <NoteVideo onAddNote={this.props.onAddNote} />}
        {this.state.isTodoChosen && <NoteTodo onAddNote={this.props.onAddNote} />}
        <div className="add-btn flex">
          <button onClick={this.onUploudPic}>📷</button>
          <button onClick={this.onUploudVideo}>📹</button>
          <button onClick={this.onUploudTodo}>📜</button>
          <button onClick={this.onBack}>Back</button>
        </div>
      </section>
    );
  }
}
