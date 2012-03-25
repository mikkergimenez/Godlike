
#Map Space Types
# 1 - 9999 - Walls, other types of Closed Terrain
# 10000 - 19999 Mutable Objects(Doors, Traps, Etc.)
# 20000 - 29999 Open Terrain(Moveable Types)
# 30000 - 39999 - Items?
# 40000 - 49999 - Creatures

from numpy import zeros, ones
from dMap import dMap
from config import logging

class map():
    log = logging()
    litArr = []
    mapsquare = dMap()
    def __init__(self, x, y):
        self.max_x = x
        self.max_y = y
        self.litArr=zeros((self.max_x, self.max_y))
        self.mapsquare.makeMap(self.max_x,self.max_y,10,50,50)
        self.start_x = self.mapsquare.start_x
        self.start_y = self.mapsquare.start_y

    def sqopen(self, direction, player):
        if direction == "north":
            if self.mapsquare.mapArr[player.x][player.y - 1] in [0,3,6,7]:
                return True
        if direction == "northeast":
            if self.mapsquare.mapArr[player.x + 1][player.y - 1] in [0,3,6,7]:
                return True
        if direction == "east":
            if self.mapsquare.mapArr[player.x + 1][player.y] in [0,3,6,7]:
                return True
        if direction == "southeast":
            if self.mapsquare.mapArr[player.x + 1][player.y + 1 ] in [0,3,6,7]:
                return True
        if direction == "south":
            if self.mapsquare.mapArr[player.x][player.y + 1] in [0,3,6,7]:
                return True
        if direction == "southwest":
            if self.mapsquare.mapArr[player.x - 1][player.y + 1] in [0,3,6,7]:
                return True
        if direction == "west":
            if self.mapsquare.mapArr[player.x - 1][player.y] in [0,3,6,7]:
                return True
        if direction == "northwest":
            if self.mapsquare.mapArr[player.x - 1][player.y - 1] in [0,3,6,7]:
                return True

    def tileicon(self, x, y):
        if self.mapsquare.mapArr[x][y] == 0:
            return '.'
        elif self.mapsquare.mapArr[x][y] == 1:
            return ' '
        elif self.mapsquare.mapArr[x][y] == 2:
            return '#'
        elif self.mapsquare.mapArr[x][y] == 3:
            return '-'
        elif self.mapsquare.mapArr[x][y] == 4:
            return '#'
        elif self.mapsquare.mapArr[x][y] == 6:
            return '>'
        elif self.mapsquare.mapArr[x][y] == 7:
            return '<'
