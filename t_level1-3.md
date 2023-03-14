### @hideIteration true
### @flyoutOnly true
# Missie 4 (v1.5)
```blocks
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    CodeCosmosEN.startingPosition(10,10,10)
    CodeCosmosEN.place(ItemsEN.Water)
})
```
```template
player.onChat("level1", function () {

})
player.onChat("level2", function () {

})
player.onChat("level3", function () {

})
```
## Building fields
Use the learning platform to solve the exercise.