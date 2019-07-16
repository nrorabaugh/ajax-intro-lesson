import React, { Component } from 'react'
import axios from 'axios'

export default class HelloWorld extends Component {

    state = {
        message: ''
    }

    componentDidMount() {
        axios.get('/api/ping')
            .then((res) => {
                console.log(res.data)
                this.setState({message: res.data})
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}
