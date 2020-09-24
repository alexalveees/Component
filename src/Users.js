import React, {Component} from 'react'

export class Users extends Component {
    state = {
        usersList: [
            'Samuel Martins',
            'Elon Musk',
            'Steve Jobs'
        ],
        givenPropsIsAnUser: undefined,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchFor != this.props.searchFor) {
            console.log('props is changed!')
            if(this.state.usersList.includes(this.props.searchFor)) {
                this.setState({
                    givenPropsIsAnUser: true
                })
            } else {
                this.setState({
                    givenPropsIsAnUser: false 
                })    
            }
        }
    }

    render() {
        if (this.state.givenPropsIsAnUser === true){
            return (
                <h1>User is found!</h1>
            )
        }

        if (this.state.givenPropsIsAnUser === false){
            return (
                <h1>User is not found!</h1>
            )
        }

        return (
            <h1>We don't have user yet</h1>
        )
    }

}