import "./MenuNav.css";
import React from "react";

export default class MenuNav extends React.Component {

    state = {
        size: 500,
    };

    openNav = () => {
        this.setState({ size: (this.state.size == 500) ? 0 : 500 })
    }
    render() {
        return (
            <div>
                <button onClick={this.openNav}> aa </button>
                <div className="sidenav" style={{ width: this.state.size }}>
                    <button onClick={this.openNav}> aa </button>

                    {this.props.children}
                </div>
            </div>
        );
    }
}
