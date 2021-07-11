import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';

class UserList extends Component{
    render(){
        console.log('this.props',this.props);

        return(
            <div>
                {this.props.details.map((detail,index) =>{
                    return(
                        <User key={index} user={detail}/>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, null)(UserList);