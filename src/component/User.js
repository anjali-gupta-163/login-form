import React, { Component } from "react";

class User extends Component{
    render(){
        return(
            <div className="user-item">
                <h4 className="user-text">{this.props.user.name.title+" "+this.props.user.name.first+" "+this.props.user.name.last}</h4>
                <img 
                    src={this.props.user.picture.medium} 
                    alt="profile"
                    className="user-img"
                />
            </div>
            
        )
    }
}

export default User;