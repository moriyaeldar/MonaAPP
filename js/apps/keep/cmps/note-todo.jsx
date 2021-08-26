

export class NoteTodo extends React.Component{
    state={
        todo:null
    }
    
    onBtnAddTodo(ev) {
        ev.preventDefault();
        this.setState({ ...this.state }, () => {
          this.props.onAddNote(this.state,"note-todos");
        });
        console.log(this.state);
      }
      handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ ...this.state, [field]: value });
      };
    
    render(){
    return(
        <section className="note-todo">
        <input onChange={this.handleChange}
 type="text" name="todo" id="todo" placeholder="Enter Comma Separated list..."/>
            <button onClick={(event)=>this.onBtnAddTodo(event)} type="submit">add</button> 

</section>
        
    
    )
    }}