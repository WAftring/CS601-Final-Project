import React from "react";
import { isMobile } from "react-device-detect";

class Player extends React.Component {
    constructor(props) {
        super(props)
        console.trace("Constructing player")
        let className = `desktop player${props.count}`;
        if(this.props.mobile) {
            className = `mobile`
        }
        
        let counters = [];
        for(let i = 0; i < this.props.playerCount; i++) {
            if(i != this.props.count) {
                counters.push(<CommanderCounter id={i}/>)
            }   
        }

        this.state = {
            life: props.life,
            key: props.count,
            commanderCounters: counters,
            poison: 0,
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
        this.setState({poison: event.target.value});
    }
    render() {
        return (
            <div className={this.state.class}>
                <div>
                    <div className="row3">
                        <div/>
                        <div><h1 className="bigText">Player {this.props.count}</h1></div>
                        <div/>
                    </div>
                    <div className="row1">
                        <div/>
                        <div className="playerLife">
                            <button onClick={() => this.decrementLife("5")}>-5</button>
                            <button onClick={() => this.decrementLife("1")}>-</button>
                            <span className="bigText">{String(this.state.life).padStart(2, 0)}</span>
                            <button onClick={() => this.incrementLife("1")}>+</button>
                            <button onClick={() => this.incrementLife("5")}>+5</button>
                        </div>
                        <div/>
                    </div>
                </div>
                <div className="lifeCounter row3">
                    <div/>
                    <div>
                        <ul className="nohelp">
                            {this.state.commanderCounters}
                        </ul>
                    </div>
                    <div/>
                </div>
                <div>
                    <label className="medText">Poison:</label><input className="medText" type="number" min="0" max="10" value={this.state.poison} onChange={this.updatePoison}></input>
                </div>
            </div>
        )
    }
}


class CommanderCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            damage: 0
        }
    }
    increment = () => {
        this.setState({
            damage: Math.min(21, this.state.damage+1)
        })
    }
    decrement = () => {
        this.setState({
            damage: Math.max(this.state.damage-1, 0)
        })
    }

    render() {
        return (
            <li className="nohelp">
                <button onClick={this.decrement}>-</button>
                <span className="medText">Player{this.props.id}: {this.state.damage}</span>
                <button onClick={this.increment}>+</button>
            </li>
        )
    }

}

export default Player;