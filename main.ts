// 37;orange floor
// 
// 38;orange ground
// 
// 39;brown floor 40;brown grass 41; orange grasss corner(right
// 
// 42 orange grass corner (left)
// 
// 43 brown grass corner (right)
// 
// 44brown grass coner(left)
// 
// 45brown slope
function Start () {
    list = [
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "3846470000000000000000000000000000000000",
    "3937433840384038403840384038403840384038",
    "3739373937393739373937393739373937393739",
    "3937393739373937393739373937393739373937",
    "3739373937393739373937393739373937393739",
    "3937393739373937393739373937393739373937",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000",
    "0000000000000000000000000000000000000000"
    ]
    Tiles = [
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `,
    img`
        . . f f f . . . 
        . f 5 5 5 f . . 
        . f 5 f 5 f . . 
        . f 5 f 5 f . . 
        . f 5 f 5 f . . 
        . f 5 f 5 f . . 
        . f 5 5 5 f . . 
        . . f f f . . . 
        `,
    img`
        . . . f f . . . 
        . f f 5 5 f . . 
        . . . f 5 f . . 
        . . . f 5 f . . 
        . . . f 5 f . . 
        . . . f 5 f . . 
        . . . f 5 f . . 
        . . f f f f f . 
        `,
    img`
        . . f f f f . . 
        . f 5 5 5 5 f . 
        . f 5 f f 5 f . 
        . . f f 5 5 f . 
        . . f 5 f f . . 
        . f 5 f f f . . 
        . f 5 5 5 5 f . 
        . . f f f f f . 
        `,
    img`
        . . f f f f . . 
        . f 5 5 5 5 f . 
        . . f f 5 5 f . 
        . f 5 5 5 f . . 
        . . f f 5 5 f . 
        . . f f f 5 f . 
        . f 5 5 5 5 f . 
        . . f f f f . . 
        `,
    img`
        . . . . f f . . 
        . . . f 5 5 f . 
        . . f 5 f 5 f . 
        . f 5 f f 5 f . 
        . f 5 5 5 5 f . 
        . . f f f 5 f . 
        . . . . f 5 f . 
        . . . . f f . . 
        `,
    img`
        . . f f f f . . 
        . f 5 5 5 5 f . 
        . f 5 f f f . . 
        . f 5 5 5 f . . 
        . . f f 5 5 f . 
        . . f f 5 5 f . 
        . f 5 5 5 f f . 
        . . f f f f . . 
        `,
    img`
        . . f f f f . . 
        . f 5 5 5 5 f . 
        . f 5 f f f . . 
        . f 5 f f f . . 
        . f 5 5 5 5 f . 
        . f 5 f f 5 f . 
        . f 5 5 5 5 f . 
        . . f f f f . . 
        `,
    img`
        . f f f f f f . 
        f 5 5 5 5 5 f . 
        . f f f 5 5 f . 
        . . f 5 5 f . . 
        . . f 5 f . . . 
        . . f 5 f . . . 
        . . f 5 f . . . 
        . . . f . . . . 
        `,
    img`
        . . f f f f . . 
        . f 5 5 5 5 f . 
        . f 5 f f 5 f . 
        . . f 5 5 f . . 
        . f 5 f f 5 f . 
        . f 5 f f 5 f . 
        . f 5 5 5 5 f . 
        . . f f f f . . 
        `,
    img`
        . . f f f f . . 
        . f 5 5 5 5 f . 
        . f 5 f f 5 f . 
        . f 5 5 5 5 f . 
        . . f f f 5 f . 
        . . . f f 5 f . 
        . . f 5 5 5 f . 
        . . . f f f . . 
        `,
    img`
        . . . f f f . . 
        . . f 5 5 5 f . 
        . f 5 5 f 5 5 f 
        . f 5 f f f 5 f 
        . f 5 5 5 5 5 f 
        . f 5 f f f 5 f 
        . f 5 f . f 5 f 
        . . f . . . f . 
        `,
    img`
        . . f f f f . . 
        . f 5 5 5 5 f . 
        . f 5 f f 5 f . 
        . f 5 5 5 f . . 
        . f 5 5 5 f . . 
        . f 5 f f 5 f . 
        . f 5 5 5 5 f . 
        . . f f f f . . 
        `,
    img`
        . . f f f f f . 
        . f 5 5 5 5 5 f 
        . f 5 f f f 5 f 
        . f 5 f . . f . 
        . f 5 f . . . . 
        . f 5 f f f f . 
        . f 5 5 5 5 5 f 
        . . f f f f f . 
        `,
    img`
        . f f f f . . . 
        . f 5 5 5 f . . 
        . f 5 f f 5 f . 
        . f 5 f f 5 f . 
        . f 5 f f 5 f . 
        . f 5 f f 5 f . 
        . f 5 5 5 f . . 
        . f f f f . . . 
        `,
    img`
        . . f f f . . . 
        . f 5 5 5 f . . 
        . f 5 f f . . . 
        . f 5 5 5 f . . 
        . f 5 f f . . . 
        . f 5 5 5 f . . 
        . f 5 5 5 f . . 
        . . f f f . . . 
        `,
    img`
        . f f f f . . . 
        . f 5 5 5 f . . 
        . f 5 f f . . . 
        . f 5 5 5 f . . 
        . f 5 f f . . . 
        . f 5 f . . . . 
        . f 5 f . . . . 
        . . f . . . . . 
        `,
    img`
        . . f f f . . . 
        . f 5 5 5 f . . 
        f 5 5 f f . . . 
        f 5 f f f . . . 
        f 5 f 5 5 f . . 
        f 5 f f 5 f . . 
        . f 5 5 5 f . . 
        . . f f f . . . 
        `,
    img`
        . . f . . f . . 
        . f 5 f f 5 f . 
        . f 5 f f 5 f . 
        . f 5 5 5 5 f . 
        . f 5 5 5 5 f . 
        . f 5 f f 5 f . 
        . f 5 f f 5 f . 
        . . f . . f . . 
        `,
    img`
        . . . f . . . . 
        . . f 5 f . . . 
        . . f 5 f . . . 
        . . f 5 f . . . 
        . . f 5 f . . . 
        . . f 5 f . . . 
        . . f 5 f . . . 
        . . . f . . . . 
        `,
    img`
        . . . f f f . . 
        . . f 5 5 5 f . 
        . . . f 5 f . . 
        . . . f 5 f . . 
        . . f f 5 f . . 
        . f 5 f 5 f . . 
        . f 5 5 5 f . . 
        . . f f f . . . 
        `,
    img`
        . f f . . . . . 
        . f 5 f f . . . 
        . f 5 f 5 f . . 
        . f 5 5 f f . . 
        . f 5 5 f . . . 
        . f 5 f 5 f . . 
        . f 5 f 5 5 f . 
        . f f . f f . . 
        `,
    img`
        . . f . . . . . 
        . f 5 f . . . . 
        . f 5 f . . . . 
        . f 5 f . . . . 
        . f 5 f . . . . 
        . f 5 f f f . . 
        . f 5 5 5 5 f . 
        . . f f f f . . 
        `,
    img`
        . f . f . f . . 
        f 5 f 5 f 5 f . 
        f 5 5 5 5 5 f . 
        f 5 f 5 f 5 f . 
        f 5 f 5 f 5 f . 
        f 5 f 5 f 5 f . 
        f 5 f 5 f 5 f . 
        . f . f . f . . 
        `,
    img`
        . . f . . f . . 
        . f 5 f f 5 f . 
        . f 5 f f 5 f . 
        . f 5 5 f 5 f . 
        . f 5 f 5 5 f . 
        . f 5 f f 5 f . 
        . f 5 f f 5 f . 
        . . f . . f . . 
        `,
    img`
        . . f f f . . . 
        . f 5 5 5 f . . 
        f 5 5 f 5 5 f . 
        f 5 f . f 5 f . 
        f 5 f . f 5 f . 
        f 5 5 f 5 5 f . 
        . f 5 5 5 f . . 
        . . f f f . . . 
        `,
    img`
        . . f f f f . . 
        . f 5 5 5 5 f . 
        . f 5 f f 5 f . 
        . f 5 5 5 5 f . 
        . f 5 f f f . . 
        . f 5 f . . . . 
        . f 5 f . . . . 
        . . f . . . . . 
        `,
    img`
        . . f f f f . . 
        . f 5 5 5 5 f . 
        . f 5 f f 5 f . 
        . f 5 f f 5 f . 
        . f 5 f 5 f f . 
        . f 5 5 f 5 f . 
        . . f f f f 5 f 
        . . . . . . f . 
        `,
    img`
        . . f f f f . . 
        . f 5 5 5 5 f . 
        . f 5 f f 5 f . 
        . f 5 5 5 5 f . 
        . f 5 5 f f . . 
        . f 5 f 5 f . . 
        . f 5 f f 5 f . 
        . . f . . f f . 
        `,
    img`
        . . f f f f . . 
        . f 5 5 5 5 f . 
        . f 5 f f f . . 
        . f 5 5 f f . . 
        . . f f 5 5 f . 
        . . f f f 5 f . 
        . f 5 5 5 5 f . 
        . . f f f f . . 
        `,
    img`
        . f f f f f . . 
        f 5 5 5 5 5 f . 
        . f f 5 f f . . 
        . . f 5 f . . . 
        . . f 5 f . . . 
        . . f 5 f . . . 
        . . f 5 f . . . 
        . . . f . . . . 
        `,
    img`
        . f . . . f . . 
        f 5 f . f 5 f . 
        f 5 f . f 5 f . 
        f 5 f . f 5 f . 
        f 5 f . f 5 f . 
        f 5 f f f 5 f . 
        . f 5 5 5 f . . 
        . . f f f . . . 
        `,
    img`
        . f . . . f . . 
        f 5 f . f 5 f . 
        f 5 f . f 5 f . 
        f 5 f . f 5 f . 
        . f 5 f 5 f . . 
        . f 5 5 5 f . . 
        . . f 5 f . . . 
        . . . f . . . . 
        `,
    img`
        . f . f . f . . 
        f 5 f 5 f 5 f . 
        f 5 f 5 f 5 f . 
        f 5 f 5 f 5 f . 
        f 5 f 5 f 5 f . 
        f 5 5 5 5 5 f . 
        f 5 f 5 f 5 f . 
        . f . f . f . . 
        `,
    img`
        f f . . . . f f 
        f 5 f . . f 5 f 
        . f 5 f f 5 f . 
        . . f 5 5 f . . 
        . . f 5 5 f . . 
        . f 5 f f 5 f . 
        f 5 f . . f 5 f 
        f f . . . . f f 
        `,
    img`
        . f f . . . f f 
        . f 5 f f f 5 f 
        . f 5 5 f 5 5 f 
        . . f f 5 f f . 
        . . . f 5 f . . 
        . . . f 5 f . . 
        . . . f 5 f . . 
        . . . . f . . . 
        `,
    img`
        . . f f f f f . 
        . f 5 5 5 5 5 f 
        . . f f f 5 f . 
        . . . f 5 f . . 
        . . f 5 f . . . 
        . . f 5 f f f . 
        . f 5 5 5 5 5 f 
        . . f f f f f . 
        `,
    img`
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        `,
    img`
        6 7 5 5 7 6 7 5 
        8 e 6 6 7 e 6 e 
        e e 8 e 6 e 8 e 
        4 4 e 4 8 4 e 4 
        4 4 4 4 e 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        `,
    img`
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        `,
    img`
        6 7 5 5 7 6 7 5 
        8 c 6 6 7 c 6 c 
        c c 8 c 6 c 8 c 
        e e c e 8 e c e 
        e e e e c e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        `,
    img`
        4 4 4 4 4 4 6 6 
        4 4 4 4 4 4 4 8 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        `,
    img`
        6 6 4 4 4 4 4 4 
        8 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        `,
    img`
        e e e e e e 6 6 
        e e e e e e e 8 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        `,
    img`
        6 6 e e e e e e 
        8 e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e e e e e e e 
        `,
    img`
        6 7 . . . . . . 
        8 e 5 5 . . . . 
        e e 6 6 7 6 . . 
        4 4 8 e 7 e 7 5 
        4 4 e 4 6 e 6 e 
        4 4 4 4 8 4 8 e 
        4 4 4 4 e 4 e 4 
        4 4 4 4 4 4 4 4 
        `,
    img`
        6 7 . . . . . . 
        8 c 5 5 . . . . 
        c c 6 6 7 6 . . 
        e e 8 c 7 c 7 5 
        e e c e 6 c 6 c 
        e e e e 8 e 8 c 
        e e e e c e c e 
        e e e e e e e e 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        6 7 . . . . . . 
        8 e 5 5 . . . . 
        e e 6 6 7 6 . . 
        4 4 8 e 7 e 7 5 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        6 7 . . . . . . 
        8 c 5 5 . . . . 
        c c 6 6 7 6 . . 
        e e 8 c 7 c 7 5 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . 7 6 
        . . . . 5 5 c 8 
        . . 6 7 6 6 c c 
        5 7 c 7 c 8 e e 
        `,
    img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . 7 6 
        . . . . 5 5 e 8 
        . . 6 7 6 6 e e 
        5 7 e 7 e 8 4 4 
        `,
    img`
        . . . . . . 7 6 
        . . . . 5 5 c 8 
        . . 6 7 6 6 c c 
        5 7 c 7 c 8 e e 
        c 6 c 6 e c e e 
        c 8 e 8 e e e e 
        e c e c e e e e 
        e e e e e e e e 
        `,
    img`
        . . . . . . 7 6 
        . . . . 5 5 e 8 
        . . 6 7 6 6 e e 
        5 7 e 7 e 8 4 4 
        e 6 e 6 4 e 4 4 
        e 8 4 8 4 4 4 4 
        4 e 4 e 4 4 4 4 
        4 4 4 4 4 4 4 4 
        `
    ]
    Y = 4
    X = 0
    Move_right = true
    PlayerX = 13
}
let Num = 0
let Point: Image = null
let _2 = 0
let _1 = 0
let PlayerX = 0
let Move_right = false
let X = 0
let Y = 0
let Tiles: Image[] = []
let list: string[] = []
Start()
let Number2 = -5
game.onUpdateInterval(100, function () {
    scene.setBackgroundColor(1)
    for (let value = 0; value <= 23; value++) {
        for (let index3 = 0; index3 <= 19; index3++) {
            if (list[value].charCodeAt(index3 * 2) < 90) {
                _1 = list[value].charCodeAt(index3 * 2) - 48
            } else {
                _1 = list[value].charCodeAt(index3 * 2) - 87
            }
            if (list[value].charCodeAt(index3 * 2 + 1) < 90) {
                _2 = list[value].charCodeAt(index3 * 2 + 1) - 48
            } else {
                _2 = list[value].charCodeAt(index3 * 2 + 1) - 87
            }
            Point = Tiles[_1 * 10 + _2]
            Num = (value + index3 * 2) * (index3 * 2) + (_1 + _2 * 2) + 1
            while (Num > Tiles.length - 1) {
                Num += Number2
            }
            while (Num < 0) {
                Num += 1
            }
            for (let V = 0; V <= 7; V++) {
                for (let index = 0; index <= 7; index++) {
                    if (_1 * 10 + _2 <= Tiles.length - 1) {
                        scene.backgroundImage().setPixel(index3 * 8 + index, value * 8 + V, Point.getPixel(index, V))
                    } else {
                        scene.backgroundImage().setPixel(index3 * 8 + index, value * 8 + V, Tiles[Num].getPixel(index, V))
                    }
                }
            }
        }
    }
})
