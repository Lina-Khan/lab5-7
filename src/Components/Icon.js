import React from 'react';

class Icon extends React.Component{
    render(){
        let classname = "fa "+"fa-" + this.props.icon;
        return <i className={classname} onClick={this.props.onclick}/>
    }

}

export default Icon;