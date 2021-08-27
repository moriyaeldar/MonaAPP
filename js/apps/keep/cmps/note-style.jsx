import { ColorInput } from "../dynamicInputs/ColorInput.jsx";
import { FontSizeInput } from "../dynamicInputs/FontSizeInput.jsx";

export class NoteStyle extends React.Component {
  state = {
    inputType: "color",
    noteStyle: {},
  };

  onChangeInputType = ({ target }) => {
    this.setState({ inputType: target.value });
  };

  onChangeStyle = (field, value) => {
    console.log("field", field);
    this.setState((prevState) => ({
      noteStyle: { ...prevState.noteStyle, [field]: value },
    }));
  };
  onSetStyle = () => {
    this.props.onChangeNoteStyle(this.state.noteStyle);
    console.log(this.state.noteStyle);
  };
  render() {
    const { inputType, noteStyle: noteStyle } = this.state;
    const DynamicCmp = (props) => {
      switch (props.type) {
        case "color":
          return <ColorInput {...props} />;
        case "fontSize":
          return <FontSizeInput {...props} />;
        default:
          break;
      }
    };

    return (
      <section style={noteStyle} className="note-style">

        <DynamicCmp
          onChangeStyle={this.onChangeStyle}
          type={inputType}
          name="style"
        />
        <button onClick={this.onSetStyle}>👍</button>

        <select value={inputType} onChange={this.onChangeInputType}>
          <option value="color">🎨</option>
          <option value="fontSize">🅰</option>
        </select>
      </section>
    );
  }
}
