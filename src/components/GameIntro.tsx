import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

type GameIntroProps = {
    gameIdSetter: (id: string) => void
}

function GameIntro(props: GameIntroProps) {
    const gameClient = generateClient<Schema>().models.Game;

    async function createGame() {

        const createResult = await gameClient.create({})
        const id = createResult.data?.id
        if (id) {
            props.gameIdSetter(id)
        }
    }

    async function joinGame() {
        const gameId = window.prompt('gameId')
        if (gameId) {
            props.gameIdSetter(gameId)
        }
    }

    return (
        <main>
            <h1>Welcome to the cool X&0 game!</h1><br/>
            <button onClick={createGame}>Create game</button><br/>
            <button onClick={joinGame} >Join game</button><br/>

        </main>
    )

}

export default GameIntro;