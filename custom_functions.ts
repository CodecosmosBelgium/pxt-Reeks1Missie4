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
    export function startingPositionLevel1(x:number, y:number, z:number) {
        agent.teleport(world(x,y,z), SOUTH)
        player.execute(`function levels/level1/reset`);
    }

    //% block="startingPosition x:$x y:$y z:$z"
    //% block.loc.nl="zetKlaar x:$x y:$y z:$z"
    export function startingPositionLevel2(x: number, y: number, z: number) {
        agent.teleport(world(x, y, z), SOUTH)
        player.execute(`function levels/level2/reset`);
    }

    //% block="startingPosition x:$x y:$y z:$z"
    //% block.loc.nl="zetKlaar x:$x y:$y z:$z"
    export function startingPositionLevel3(x: number, y: number, z: number) {
        agent.teleport(world(x, y, z), SOUTH)
        player.execute(`function levels/level2/reset`);
    }



    //% block="place $item"
    //% block.loc.nl="plaats $item"
    export function place(item:Items) {
        agent.setItem(FARMLAND, 64, 1);
        agent.setItem(WATER, 64, 1);
        agent.setSlot(item+1);
      
        blocks.place(item === 0 ? WATER : FARMLAND, world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z)))
    }


}