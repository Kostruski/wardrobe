import React, { Component } from 'react';

export default class ColorsCheckBox extends Component {
    render() {

        return (
            <div>
                <div className="colorSmallBox" style={{background : this.props.color}}>
                {this.props.color==="black" ? <input type="checkbox" name="color" defaultChecked value={this.props.color}/> :
                <input type="checkbox" name="color" value={this.props.color}/>            }
                </div>
            </div>
        )
    }
}
