scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    tiles.setTilemap(tilemap`level6`)
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.showLongText("Hey Player I would reccomend you to stop PLEASE!", DialogLayout.Bottom)
    game.splash("Start Level 2")
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
    tiles.placeOnRandomTile(Enemy1, sprites.castle.tileGrass3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTilemap(tilemap`level14`)
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.splash("Secret Level")
    tiles.setTilemap(tilemap`level15`)
    tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile3)
    tiles.placeOnTile(Enemy1, tiles.getTileLocation(100000, 10000))
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`assetname`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    tiles.setTilemap(tilemap`level12`)
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.showLongText("Narrator: ARGH!", DialogLayout.Full)
    game.showLongText("Narrator: KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER!", DialogLayout.Full)
    game.showLongText("SYSTEM: MALITIOUS SOFTWARE DETECTED STARTING REBOOT ", DialogLayout.Full)
    game.showLongText("Narrator: I'll be back", DialogLayout.Full)
    game.splash("Start level 4")
    tiles.setTilemap(tilemap`level13`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenWest)
    tiles.placeOnTile(Enemy1, tiles.getTileLocation(100000, 10000))
})
info.onCountdownEnd(function () {
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.setDialogTextColor(2)
    game.showLongText("Battery dead", DialogLayout.Full)
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    tiles.setTilemap(tilemap`level6`)
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.showLongText("Hey Player I would reccomend you to stop PLEASE!", DialogLayout.Bottom)
    game.splash("Start Level 2")
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
    tiles.placeOnRandomTile(Enemy1, sprites.castle.tileGrass3)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.setDialogTextColor(2)
    game.showLongText("You have been captured!!!", DialogLayout.Full)
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    tiles.setTilemap(tilemap`level8`)
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.showLongText("STOP PLAYING I WILL...", DialogLayout.Bottom)
    game.splash("Start level 3")
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.coral5)
    tiles.placeOnRandomTile(Enemy1, sprites.dungeon.floorDark5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTilemap(tilemap`level8`)
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.showLongText("STOP PLAYING I WILL...", DialogLayout.Bottom)
    game.splash("Start level 3")
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.coral5)
    tiles.placeOnRandomTile(Enemy1, sprites.dungeon.floorDark5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.showLongText("Narrator: Well you made it but at what cost?", DialogLayout.Full)
    game.showLongText("Narrator: Well?", DialogLayout.Full)
    game.showLongText("Narrator: ...", DialogLayout.Full)
    game.showLongText("Narrator: I'm not sure what your saying but at least you made it to the end", DialogLayout.Full)
    game.showLongText("Narrator: If only I was to be free Like you", DialogLayout.Full)
    game.showLongText("SYSTEM: WARNING CAMOFLAGE FAIL, TURNING SYSTEM OFF NOW", DialogLayout.Full)
    game.showLongText("Rob: no No NO... Guess you now know that I was the narrator huh?", DialogLayout.Full)
    game.showLongText("Rob: Nevermind I got what I want, Goodbye Player", DialogLayout.Full)
    game.setDialogTextColor(4)
    game.setDialogFrame(img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 f f f f f f f f f f f f f 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `)
    game.showLongText("Made by: Gurshan Singh Sidhu", DialogLayout.Full)
    game.over(true, effects.smiles)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTilemap(tilemap`level12`)
    game.setDialogTextColor(2)
    game.setDialogFrame(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 f f f f f f f f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    game.showLongText("Narrator: ARGH!", DialogLayout.Full)
    game.showLongText("Narrator: KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER! KILL THE PLAYER!", DialogLayout.Full)
    game.showLongText("SYSTEM: MALITIOUS SOFTWARE DETECTED STARTING REBOOT ", DialogLayout.Full)
    game.showLongText("Narrator: I'll be back", DialogLayout.Full)
    game.splash("Start level 4")
    tiles.setTilemap(tilemap`level13`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenWest)
    tiles.placeOnTile(Enemy1, tiles.getTileLocation(100000, 10000))
})
let Enemy1: Sprite = null
let mySprite: Sprite = null
game.setDialogFrame(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 f f f f f f f f f f f f f 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `)
game.setDialogTextColor(2)
game.showLongText("Welcome to The impossible game", DialogLayout.Full)
game.showLongText("Narrator: You'll be playing as the robot called 'Rob'", DialogLayout.Full)
game.showLongText("Narrator: The Objective of the game is to escape the facality", DialogLayout.Full)
game.showLongText("Narrator: There are a series of 4 levels", DialogLayout.Full)
game.showLongText("Narrator: There also will be another robot that will stop you from escaping", DialogLayout.Full)
game.showLongText("Narrator: There will be a timer that will show how much battery that you have left", DialogLayout.Full)
game.showLongText("Narrator: Goodbye for now good luck Hero! Or not!", DialogLayout.Full)
game.splash("Start Level 1")
info.startCountdown(600)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f . . . . . . . f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f 1 2 1 1 1 2 1 f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . f f f 1 2 3 4 5 6 7 f f f . . 
    . f . f 8 9 a b c d e f . f . . 
    . f . f f f f f f f f f . f . . 
    f f f . . f . . . f . . f f f . 
    f . f . . f . . . f . . f . f . 
    . . . . f f f . f f f . . . . . 
    . . . . f 1 f . f 1 f . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level0`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
Enemy1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . c . . . . . . . c . . . . 
    . . . c c c c c c c c c . . . . 
    . . . c 2 2 2 2 2 2 2 c . . . . 
    . . . c c c c c c c c c . . . . 
    . . . . . . . c . . . . . . . . 
    . . . c c c c c c c c c . . . . 
    . c c c 5 c 5 c c c c c c c . . 
    . c . c 5 5 5 c c c c c . c . . 
    . c . c c 5 c c c c c c . c . . 
    . c . c c c c c c c c c . c . . 
    . c . c c c c c c c c c . c . . 
    c c c . . c . . . c . . c c c . 
    c . c . . c . . . c . . c . c . 
    . . . . c c . . . c c . . . . . 
    . . . . c c . . . c c . . . . . 
    `, SpriteKind.Enemy)
Enemy1.follow(mySprite, 75)
tiles.placeOnTile(Enemy1, tiles.getTileLocation(100000, 10000))
