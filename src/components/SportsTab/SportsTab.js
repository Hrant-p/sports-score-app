import React, {Component} from 'react';
import './SportsTab.scss';
import TypeButton from "../TypeButton/TypeButton";

class SportsTab extends Component {
    render() {
        return (
            <div className="sports-tab">
                    <TypeButton label="Football" type='Football' />
                    <TypeButton label="Basketball" type='' />
                    <TypeButton label="Tennis" type='' />
                    <TypeButton label="Rugby" type='' />
            </div>
        );
    }
}

export default SportsTab;