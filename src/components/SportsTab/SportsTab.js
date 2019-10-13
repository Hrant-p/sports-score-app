import React, { Component } from 'react';
import './SportsTab.scss';
import TypeButton from "../TypeButton/TypeButton";


class SportsTab extends Component {

    handle = () => {
        this.props.getFootballRequest()
    };

    render() {
        return (
            <div className="sports-tab">
                <TypeButton label="Football"  />
                <TypeButton label="Basketball" />
                <TypeButton label="Rugby" />
                <TypeButton label="Valleyball" />
            </div>
        );
    }
}

export default SportsTab;

