enum Items {
    //% block="Water"
    //% block.loc.nl="Water"
    Water,
    //% block="Farmland"
    //% block.loc.nl="Aarde"
    Farmland
}

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {

    //% block="startingPosition x:$x y:$y z:$z"
    //% block.loc.nl="zetKlaar x:$x y:$y z:$z"
    export function startingPosition(x:number, y:number, z:number) {
        agent.teleport(world(x,y,z), SOUTH)
        player.execute(`execute @a[scores={level=1}] ~ ~ ~ function levels/level1/reset`);
        player.execute(`execute @a[scores={level=2}] ~ ~ ~ function levels/level2/reset`);
        player.execute(`execute @a[scores={level=3}] ~ ~ ~ function levels/level3/reset`);
    }

    //% block="place $item"
    //% block.loc.nl="plaats $item"
    export function place(item:Items) {
        blocks.place(item === 0 ? WATER : FARMLAND, world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z)))
    }


}