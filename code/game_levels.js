var GAME_LEVELS = [
  [" x          v v         v v            v      v                                 ",
   " x           v v         v v                                                    ",
   " x          v v         v v                                                     ",
   " x           v v         v v                                                    ",
   " x                                                                              ",
   " x @                           o                                                ",
   " xxxxx                         xxxxxxxxxxxxxxxxxxxxxxxx      xxx                ",
   "     x      !!!!        !!!!                                         xxxx       ",
   "     x      !xx!        !xx!                                         xvvx       ",
   "     x      vxxv        vxxv                                                   x",
   "     x                                                                          ",
   "     x                                                                          ",
   "     x                                                    o          o  o       ",
   "     x       oo          oo                          o   xx                   xx",
   "     x                                          o   xx    x                    v",
   "     x                                     o   xx         x                     ",
   "     x                                o   xx              x     xxxx      xxxx  ",
   "     x  p                            xx                   x                     ",
   "     xxxxxx      xxxxxx      xxxxxx!!!!!!!!!!!!!!!!!!!!!!!x                     ",
   "     x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!",
   "     x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!",
   "     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                        v      v      v        v  ",
   " !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                                              ",
   " !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx!x                                                              ",
   " !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x       !x    xxxxxxxxxxxxxxxxxxxxxxx                                   ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx        !x    x                                                         ",
   "       |          |          |                    !x    x                                                         ",
   "                                                  !x    x                                                   o     ",
   "                                                  !x    x                       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "                                                  !x =  x                       xv                                ",
   "                                 xxxxxxxxxx       !x    x                       x                                 ",
   "                                 x             o  !x    x  =  xxxxxxxxxxxxxxxxxxx                                 ",
   "                                 x                !x    x                                                         ",
   "                                ox             o  !x    x                                                         ",
   "                              xxxx                !x    x                                                         ",
   "                              x                o  !x    xxxxxxxxxxxxxxxxxxxxxxxxxxxxx      o          o        o  ",
   "                              x                   !x        |        |              |     xxx        xxx      xxx ",
   "                   o         ox                o  !x o                                                            ",
   "                           xxxx                   !xxxxx                                                          ",
   "                           x                xxxxxxxx                                                              ",
   "                           x                x                                                  xxx       xxx      ",
   "     @        p           ox    =   xxxxxxxxx                                                                     ",
   "    xxx      xxx       xxxxx        v       v                                                                     ",
   "    x x      x x   =   x!!!x                                                              o          o         o  ",
   "!!!!x x!!!!!!x x=      x!!!x                                                             xxx    =   xxx   =   xxx ",
   "!!!!x x!!!!!!x x      =x!!!x                                o           o                                         ",
   "!!!!x x!!!!!!x x=      x!!!x                     xx    =  xxxx     = xxxx       xxxxv  v  v  v  v  v  v  v  v  v  ",
   "!!!!x x!!!!!!x x      =x!!!x                     x!!!!!!!!xxxx!!!!!!!xxxx!!!!!!!xxxx  v  v  v  v  v  v  v  v  v  v",
   "!!!!x x!!!!!!x x  =    x!!!x                     x!!!!!!!!xxxx!!!!!!!xxxx!!!!!!!xxxx v  v  v  v  v  v  v  v  v  v ",
   "!!!!x x!!!!!!x x     = x!!!x                     x!!!!!!!!xxxx!!!!!!!xxxx!!!!!!!xxxx                              ",
   "!!!!x x!!!!!!x x       x!!!xxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                                              ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   " x                                              x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                           ",
   " x                                              x                       !!!!!!!!!!!                           ",
   " x                    o       o      o          x                         !!!v!!!                             ",
   " x                xxxxxxxxxxxxxxxxxxxxxx    =   x                                                             ",
   " x                x!!!!!!!!x                    x                                                  o      o   ",
   " x                x!!!!x!!!x                    x                                           xxxxxxxxxxxxxxxxxx",
   " x            xxxxx!!!!xx!!x                    x                                                             ",
   " x            x!!!!!xxxxxx!x        xxxxxxxxxxxxxo                        o     o                             ",
   " x            x!!!!!!!!xx!!x        v    v      vxxx                   xxxxxxxxxxxxxxx              =         ",
   " x      xxxxxxxxx!!!!!!x!!!x                                                                                  ",
   " x              x!!!!!!!!!!x                                                                                  ",
   " xo             x!!!!xx!!!!x                                                                                  ",
   " xxx            x!!!xxxx!!!xo         o   o   o        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx =              ",
   " x              x!!xxxxxx!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxvxxxxvxxxxxvxxxxxxxxvxxxxvxxxxvxxxxvxxx           =    ",
   " x              x!!!!xx!!!!!!!!!!!!!!!!!!x                            ||                                      ",
   " xo             xv!!vxxv!!v!!!!!!!!!!!!!!x                                                                    ",
   " xxxx           x !! !! !! !!!!!!!!!!!!!!x                                                                    ",
   "vx              x xx xx xx xxxxxxxxxxxxxxx                                                                    ",
   " x                                       x                                                                    ",
   " xo                                      x                                                                    ",
   " xxxxx                                   x                                                                    ",
   " x                                       x                o      o   o         o        o                     ",
   " x                                       x     =     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   " x                                       x           x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxx           ox           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxvxvvxvxvxvxvxxvv",
   " xv                                   xxxx               |            |                                         ",
   " x                                      vx                                                                    ",
   "vx                                       x                                 oo                 xvxxvxvxvxvxvvxx",
   " x                               xxx     x                                 oo                                 ",
   " x                                       x                                 oo                                 ",
   " x                        o              x                                 xx                                 ",
   " x                       xxx             x                                 xx                 vxvvxvxvxvxvxxvv",
   " x                                       x                                 xx                                 ",
   " x                                       x                               xxxxxx                               ",
   " xo                                      x                               xxxxxx                               ",
   "vxxxxxxxxx   =   xxxx                    x                               xxxxxx                               ",
   " x                                       x                           xxxxxxxxxxxxxx           xvxxvxvxvxvxvvxx",
   " x                        xxx     o o    x                           xxxxxxxxxxxxxx           v vv            ",
   " x                                       x                      xxxxxxxxxxxxxxxxxxxxxxxx                    v ",
   " x                                xxx    x                      xxxxxxxxxxxxxxxxxxxxxxxx           v          ",
   " x                                       x               xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx           v    ",
   " x  @                                    x               xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["          v            v             xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                          v      v        v    v  v   v   v     v     v   v         v         ",
   "                                           v       v    v                            v        v               ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                             o",
   "                                                                                                            xx",
   "              o                                                                                            xxx",
   "                 xxxxxxxxxxxx                                                                             xxxx",
   "                                                 o             o           o           o            o   xxxxxx",
   "                                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "        xxxx                                                       v                                          ",
   "o                                                                                                             ",
   "xxx                                                                                                           ",
   "                                                                                                              ",
   "         o         oo          o                                                                              ",
   "       xxxxx  =  xxxxxx =   xxxxxxx                                                                           ",
   "                                             o                                                                ",
   "xxx  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  xxxxxxxxxxxxx   =   xxxxxxxxxxxxxxxxxxo                                ",
   "!!x  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  x                           =         xxx                              ",
   "!!x                                    x                                                                      ",
   "!!x   o   o    o     o     o    o      x                                                 o   o                ",
   "!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                             xxxxxxxxxxxxxxx          ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                                                      ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                                                   oo ",
   "!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                                 xxxxx",
   "!!x                                                                                                      xxxxx",
   "!!x                                                                                                      xxxxx",
   "!!x  @        o     o     o     o     o         p                       o                                xxxxx",
   "!!xxxxxxx                                     xxxxx       xxxx       xxxxx      xxxxx       xxxxxxxxxxxxxxxxxx",
   "!!x =               =                  =     =x!!!x=                        =                 =    =     =    ",
   "!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "  =             =    =                 =  =   =   x      =   =        =               =            =    =  =  "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
