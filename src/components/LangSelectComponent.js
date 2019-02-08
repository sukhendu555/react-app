import React, { Component } from 'react';
import '../App.css';

export default class LangSelectComponent extends React.Component {
    render() {
        return <label>
            Language
            <select name="lang_opt" onChange={this.props.onChange}>
                <option value="blank"></option>
                <option value="en">ENGLISH</option>
                <option value="it">ITALIAN</option>
                <option value="sp">SPANISH</option>
            </select>
        </label>;
    }
}
