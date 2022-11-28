# Missie 4 (v1.2)
### @hideIteration true
### @flyoutOnly true
```blocks
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    CodeCosmos.startingPositionLevel2(10,10,10)
    CodeCosmos.place(Items.Water)
})
```
```template
player.onChat("level2", function () {

})
```
## Level 2
Volg de instructies op het leerplatform om de opdracht op te lossen.