class Configuration {
    constructor() {
        this.players = []
    }
    showNewGame() {
        return (
            <label>Players: </label>
        )
    }
    display() {
        return (
            <div>
                <h2>Configuration Debug</h2>
                { this.players.length == 0 ? (
                    <h2>No players</h2>
                ) : (
                    this.players
                )
                }
                <button onClick={this.showNewGame}>New Game</button>
            </div>
        )
    }
}

export default Configuration;