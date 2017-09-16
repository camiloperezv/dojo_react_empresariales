import React, {Component} from 'react'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputText :'',
            outputText : ''
        };
        this.textChanged = this.textChanged.bind(this);
    }
    textChanged(event){
        var name = event.target.value;
        this.setState({outputText:name});
        this.setState({inputText:name});
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.textChanged} value={this.state.inputText} />
                <br/>
                <span>
                    Hola {this.state.outputText}
                </span>
            </div>
        )
    }
}

export default App