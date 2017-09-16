import React, {Component} from 'react'
import axios from 'axios'
const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

class Nasa extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgUrl:''
        }
        this.getImage = this.getImage.bind(this)
    }
    getImage(event){
        axios.get(url)
            .then(success=>{
                this.setState({imgUrl:success.data.url})
            })
            .catch(error=>{
                console.error('there is an error',error)
            })
    }
    render(){
        return(
            <div>
                <img src={this.state.imgUrl} alt=""/>
                <br/>
                <button type="button" className="btn btn-large btn-block btn-default" onClick={this.getImage}>CLICK</button>
            </div>
        )
    }
}

export default Nasa