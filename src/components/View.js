import React from "react";
import Player from './Player'

const AppState = Object.freeze(
    {
        NewGame: 0,
        Running: 1
    }
)
class View extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mode: AppState.NewGame,
            players: [],
            new_player_counter: 4,
            starting_life: 40,
        }
    }
    updateNewPlayerCount = (event) => {
        this.setState({ new_player_counter: event.target.value });
    }
    updateStartingLife = (event) => {
        this.setState({ starting_life: event.target.value });
    }
    startNewGame = (event) => {
        console.debug("Starting new game");
        let players = parseInt(document.getElementById("playerCount").value);
        let life = parseInt(document.getElementById("life").value);
        console.debug(`Players: ${players} Life: ${life}`);
        let new_players = []
        for (let i = 0; i < players; i++) {
            new_players.push(<Player life={life} key={i} count={i} playerCount={players} />)
        }
        this.setState({
            players: new_players,
            mode: AppState.Running
        });
    }
    render() {
        return (
            <div>
                {this.state.players.length === 0 ? (
                    <div className="newgame">
                        <div className="row3">
                            <div/>
                            <div><h1>New Game Configuration</h1></div>
                            <div/>
                        </div>
                        <div className="row3">
                            <div/>
                            <div>
                                <label htmlFor="playerCount">Players: </label><input id="playerCount" type="number" min="2" value={this.state.new_player_counter} onChange={this.updateNewPlayerCount} /><br />
                                <label htmlFor="life">Life: </label><input id="life" type="number" min="1" value={this.state.starting_life} onChange={this.updateStartingLife} /><br />
                                <div className="row3">
                                    <div/>
                                    <div><button onClick={this.startNewGame}>Start</button></div>
                                    <div/>
                                </div>
                            </div>
                            <div/>
                        </div>
                    </div>
                ) : (
                    <div className="playerContainer">
                        {this.state.players}
                    </div>
                )}
            </div>
        )
    }
}

export default View;