import React from 'react'
import './Display.css'

class AddItem extends React.Component{

    state= {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
            id: Date.now()
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addItem(this.state);
    }

    render(){
        return(
            <form className="form-element" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add Todo" onChange={this.handleChange} className="waiting" value={this.state.text} />
            </form>
        )
    }
}

export default AddItem