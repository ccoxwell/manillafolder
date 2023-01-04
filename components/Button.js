import React from 'react';


class Button extends React.Component {

    clickedButton = () => {
        onclick(alert("gotcha bitch"))
    }
    render() {
        return (
            <div>
                <button onclick={clickedButton}>Click Me!</button>
            </div>
        )
    }

}
export default Button;