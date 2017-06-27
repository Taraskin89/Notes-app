import React from 'react';

export default class SelectColor extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: false
        };
    }

    handleClickOnColor() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn

        }));
        console.log(this.props.colors);
    }

    render(){
        const style = { backgroundColor: this.props.colors };
        return(
            <div onClick={ ::this.handleClickOnColor } >
                <li onClick={ this.props.onAddColor } >
                    <div
                        className="color"
                        style={ style }
                        id={ this.props.colors }
                    >
                        <div >
                            {
                                this.state.isToggleOn
                                    ? <span className='checked'>✔</span>
                                    : null
                            }
                        </div>
                    </div>
                </li>
            </div>

        );
    }
}