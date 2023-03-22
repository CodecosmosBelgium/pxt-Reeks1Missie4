enum ItemsEN {
    //% block="Water"
    Water,
    //% block="Farmland"
    Farmland
}

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmosEN {

    //% block="startingPosition x:$x y:$y z:$z"
    export function startingPosition(x: number, y: number, z: number) {
        agent.teleport(world(x, y, z), SOUTH)
        player.execute(`execute @a[scores={level=1}] ~ ~ ~ function levels/level1/reset`);
        player.execute(`execute @a[scores={level=2}] ~ ~ ~ function levels/level2/reset`);
        player.execute(`execute @a[scores={level=3}] ~ ~ ~ function levels/level3/reset`);
    }

    //% block="place $item"
    export function place(item: ItemsEN) {
        blocks.place(item === 0 ? WATER : FARMLAND, world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z)))
    }


}