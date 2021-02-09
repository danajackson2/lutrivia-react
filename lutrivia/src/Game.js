import React, {Component, Fragment} from 'react'
import Question from './Question'

class Game extends Component{
    state={
        correct: 0,
        name: ''
    }

    addOne = () => {
        this.setState(prevState => {return {correct: prevState.correct + 1}})
    }

    handleChange = (e) => {
        this.setState({name:e.target.value})
    }

    finish = () => {
        this.props.endGame(this.state)
        this.setState({correct: 0, name:''})
    }

    render(){
        return(
            <Fragment>
                <h2>Score: {this.state.correct}</h2>
                {this.props.questions.map(q => <Question data={q} addOne={this.addOne}/>)}
                <input onChange={this.handleChange} placeholder='Name'></input>
                <button onClick={this.finish}>Submit Score</button>
            </Fragment>
        )
    }
}

export default Game