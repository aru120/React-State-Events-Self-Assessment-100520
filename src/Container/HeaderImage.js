import React from 'react'
import {yes, no} from '../objects'

class HeaderImage extends React.Component {

    constructor(){
        super();
       
        this.state = { text: no["no-statement"], image: no["no-image"], status: false}
    }

    changeState = () => {
        
        if (this.state.status === false){
            this.setState({ text: yes["yes-statement"], image:yes["yes-image"], status: true})

        }else
        {
            this.setState({ text: no["no-statement"], image: no["no-image"], status: false})
        }
    }

render(){
    return (
        <>
        <h1>{this.state.text}</h1>
        <img onClick={this.changeState} alt="drake" src={this.state.image} />
        </>
    )
}


}

export default HeaderImage