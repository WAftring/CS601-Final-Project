import React from "react";

class MobileView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starting_life: 40
        }
    }
    updateStartingLife = (event) => {
        this.setState({starting_life: event.target.value})
    }
    render() {
        return (
            <div className="mobile">
                <label>Life:</label><input type="number" min="0" max="40" value={this.state.starting_life} onChange={this.updateStartingLife}/>
                <button>Start</button>
            </div>
        )
    }
}

export default MobileView;