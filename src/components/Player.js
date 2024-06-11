import React from "react";
import { isMobile } from "react-device-detect";

class Player extends React.Component {
    constructor(props) {
        super(props)
        console.trace("Constructing player")
        let className = `desktop player${props.count}`;
        if(isMobile) {
            className = `mobile`
        }
        this.state = {
            life: props.life,
            key: props.count,
            poison_dmg: 0,
            commander_damage: [0, 0, 0],
            class: className
        };
    }
    incrementLife = (amount) => {
        let i = parseInt(amount);
        this.setState({life: this.state.life+i});
    };
    decrementLife = (amount) => {
        let i = parseInt(amount);
        this.setState({life: this.state.life-i});
    }
    updateCmdDmg = (event, index) => {
        let values = this.state.commander_damage;
        values[index] = event.target.value;
        this.setState({commander_damage: values});
    }
    updatePoison = (event) => {
        this.setState({poison_dmg: event.target.value});
    }
    render() {
        return (
            <div className={this.state.class}>
                <div>
                <button onClick={() => this.decrementLife("5")}>-5</button>
                <button onClick={() => this.decrementLife("1")}>-</button>
                <span>{String(this.state.life).padStart(2, 0)}</span>
                <button onClick={() => this.incrementLife("1")}>+</button>
                <button onClick={() => this.incrementLife("5")}>+5</button>
                </div>
                <div>
                <label className="cmder">Cmder:</label>
                {this.state.commander_damage.map((number, index) => (
                    <input onChange={(event) => this.updateCmdDmg(event, index)} className="cmder" type="number" min="0" max="21" value={number}></input>
                ))}
                <label className="cmder">P:</label><input className="cmder" type="number" min="0" max="10" value={this.state.poison_dmg} onChange={this.updatePoison}></input>
                </div>
            </div>
        )
    }
}

export default Player;