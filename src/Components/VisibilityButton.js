import React from 'react';
import CaughtVisibilityButton from '../containers/CaughtVisibilityButton'
function VisibilityButton({handleClick, label}) {
    return (
            <button onClick={handleClick}>{label}</button>
    );
}
export default VisibilityButton;