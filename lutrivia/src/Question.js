import React from 'react'

class Question extends React.Component {
    state={
        answered: false
    }

    evaluate = (e) =>{
        if (this.state.answered === false){
            let answer = this.props.data.answer ? 'true' : 'false'
            e.target.value === answer ? this.correct(e) : e.target.style.backgroundColor='red'
        }
        this.setState({answered: true})
    }

    correct = (e) => {
        e.target.style.backgroundColor='green'
        this.props.addOne()
    }

    render(){
        return(
            <div>
                <p>{this.props.data.text}</p><br />
                <button onClick={this.evaluate} value="true">True</button> 
                <button onClick={this.evaluate} value="false">False</button>
            </div>
        )
    }
}

export default Question