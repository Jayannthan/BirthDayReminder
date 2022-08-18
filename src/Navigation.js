import React from "react";

const Navigation = ({ onRouteChange, date, onDateChange }) => {
    return (
        <nav className="dt w-100 border-box pa3 ph5-ns">
            <div className="dtc v-mid w-75 tr">
                <input onClick={() => onRouteChange('AddNewData')} className="b ph3 tc pv2 ba bg-transparent grow pointer" type="button" value="Add New Data" /><br /><br />
                <input onChange={onDateChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white" type="date" value={date} />
            </div>
        </nav>
    )
}

export default Navigation;