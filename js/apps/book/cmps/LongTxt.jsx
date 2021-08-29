export class LongTxt extends React.Component {

    state = {
        // isLongTxtShown: this.props.isLongTxtShown,
        isLongTxtShown: false,

    }

    getTextToShow = (text) => {
        const { isLongTxtShown } = this.state
        if (isLongTxtShown) return text;
        return text.substring(0, 100);
    }

    onToggleText = () => {
        // const newIsLongTxtShown = !this.state.isLongTxtShown;
        this.setState((prevState) => ({ isLongTxtShown: !prevState.isLongTxtShown }));
    }

    render() {
        const { isLongTxtShown } = this.state
        const { text } = this.props

        return <p className="book-desc">
            About this book: {this.getTextToShow(text)}
            {text.length > 100 && <span onClick={() => this.onToggleText()}>
                {isLongTxtShown ? 'Less...' : 'More...'}</span>}
        </p>
    }

}

