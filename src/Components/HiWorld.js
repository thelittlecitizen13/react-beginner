import React from 'react'

class HiWorld extends React.Component{
    render(){
        return(
            <h1>Hello {this.props.name}!</h1>
        )
    }
}

export default HiWorld
