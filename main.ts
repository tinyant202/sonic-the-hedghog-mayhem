function Make_Sonic () {
    Animations = [
    img`
        ................
        ................
        ................
        ...999998.......
        .899999998......
        88888888aa8.....
        ..99899a118.....
        .99989199aa.....
        88888a11f99.....
        8.99fda1f1a.....
        .999fadddddfa...
        89ff8faaaa......
        f8....889.......
        ...f88d9ad......
        ..fffd8add......
        ....a1a9ad9.....
        ....a1188aa.....
        ....9aa.898.....
        ......8.f.......
        .....a119a......
        .....9aa89......
        .....e212ae.....
        ....ce1ee222ee..
        `,
    img`
        ................
        ................
        ...999998.......
        .899999998......
        88888888aa8.....
        ..99899a118.....
        .99989199aa.....
        88888a11f99.....
        8.99fda1f1a.....
        .999fadddddfa...
        89ff8faaaa......
        f8....889.......
        ...f88d9ad......
        ..fffd8add......
        ....a1a9ad9.....
        ....a1188aa.....
        ....9aa.898.....
        .....9...9aa....
        .....8...899....
        ....a11..ceae...
        ....9aa.ccacccce
        ....e212........
        ...ce1eeee2.....
        `,
    img`
        ................
        ................
        ................
        ...999998.......
        .899999998......
        88888888aa8.....
        ..99899a118.....
        .99989199aa.....
        88888a11f99.....
        8.99fda1f1a.....
        .999fadddddfa...
        89ff8faaaa......
        f8....889.......
        ...f88d9ad......
        ..fffd8add......
        ....a1a9ad9.....
        ....a1188aa.....
        ..a.9aa.898.....
        ..91......8a..e.
        ..ea1....9a9eec.
        .ce2a....89acc..
        ..e112...cec....
        ...2eeee2ca.....
        `,
    img`
        ................
        ................
        ................
        ...999998.......
        .899999998......
        88888888aa8.....
        ..99899a118.....
        .99989199aa.....
        88888a11f99.....
        8.99fda1f1a.....
        .999fadddddfa...
        89ff8faaaa......
        f8....889.......
        ...f88d9ad......
        ..fffd8add......
        ....a1a9ad9.....
        ....a1188aa.....
        ....9aa.898.....
        .....91a.e......
        ....9ea1ec......
        ....ce2ac.......
        ....ce112.......
        ...2ca2eeee.....
        `,
    img`
        ................
        ................
        ...999998.......
        .899999998......
        88888888aa8.....
        ..99899a118.....
        .99989199aa.....
        88888a11f99.....
        8.99fda1f1a.....
        .999fadddddfa...
        89ff8faaaa......
        f8....889.......
        ...f88d9ad......
        ..fffd8add......
        ....a1a9ad9.....
        ....a1188aa.....
        ....9aa..9......
        ....8....8......
        ....f...a11.....
        ...9aa..9aa.....
        ...899..e212....
        ...ceae.e1eeee2.
        ..ccacccce......
        `,
    img`
        ................
        ................
        ................
        ...999998.......
        .899999998......
        88888888aa8.....
        ..99899a118.....
        .99989199aa.....
        88888a11f99.....
        8.99fda1f1a.....
        .999fadddddfa...
        89ff8faaaa......
        f8....889.......
        ...f88d9ad......
        ..fffd8add......
        ....a1a9ad9.....
        ...8a1188aa....2
        ..f.9aa..898..22
        .9a........112e.
        .89a......aaa2e.
        .ce9......921e..
        fcaae....ee1e...
        ...cccc..ee.....
        `,
    img`
        ................
        ................
        ...999998.......
        .899999998......
        88888888aa8.....
        ..99899a118.....
        .99989199aa.....
        88888a11f99.....
        8.99fda1f1a.....
        .999fadddddfa...
        89ff8faaaa......
        f8....889.......
        ...f88d9ad......
        ..fffd8add......
        ....a1a9ad9.....
        ....a1188aa.....
        .....aa.898.....
        .....f....2.....
        ....9a9..22.....
        ....89112e......
        ....caaa2e......
        ...fc921e.......
        .....e1ec.......
        `
    ]
}
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
    Green_hill()
    Make_Sonic()
}
function Green_hill () {
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
}
let Num = 0
let Point: Image = null
let _2 = 0
let _1 = 0
let Tiles: Image[] = []
let list: string[] = []
let Animations: Image[] = []
Start()
let Number2 = -5
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Frame = 0
let Speed = 400
let Mode = [1, 1]
game.onUpdateInterval(Speed, function () {
    if (Frame <= Animations.length - 1) {
        mySprite.setImage(Animations[Frame])
        Frame += 1
    } else {
        Frame = 0
        mySprite.setImage(Animations[Frame])
    }
})
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
