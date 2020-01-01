import React from 'react';
import Button from 'react-bootstrap/Button';

export default class Base extends React.Component{
    render() {
        return(
        <Button variant={this.props.bgcolor} style={this.props.style}>{this.props.text}</Button>
        );
    }
}