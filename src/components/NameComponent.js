import React, { Component } from 'react';
import '../App.css';

export default class NameComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <label>
                NAME
                 <input type="text" name="name" onChange={this.props.onChange}/>
               </label>;
    }
}
