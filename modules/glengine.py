#!/usr/bin/env python

import glcurses as screen
from activemap import map
from action import action
from config import *

class Object:
    #This is a generic object: the player, a monster, an item, the stairs, etc...
    #Always represented by a character on the screen.
    def __init__(self, x, y, char, screen):
        self.screen = screen
        self.x = x
        self.y = y
        self.char = char
        #self.color = color
    
    def move(self, dx, dy):
        #move by the given amount
        self.x += dx
        self.y += dy
    
    def draw(self):
        if self.char == '@': 
            self.screen.wr_player(self.x, self.y)
        else: 
            self.screen.wr_map(self.x, self.y, self.char)

    def clear(self):
        self.screen.write(self.x, self.y, ' ')

class glengine:
    logging = logging()
    def __init__(self, screen):
        self.action = action()
        self.screen = screen
        self.map = map(100, 100)
        self.screen.create_map_screen(self.map.max_x, self.map.max_y) 
        #self.screen.bold(12, 40, "@")
        self.logging.log('Player starting at: ' + str(self.map.start_x) + ' ' + str(self.map.start_y))
        self.player = Object(self.map.start_x, self.map.start_y, '@', screen)

    def lightarea(self):
        for x in range(-3,3):
            for y in range(-3,3):
                if x == 0 and y == 0:
                    pass
                else:
                    if self.player.y + y >= 0 and self.player.x + x >= 0:
                        self.map.litArr[self.player.x + x][self.player.y + y] = 1

    def printall(self, x, y):
        for x in range(self.map.max_y):
            for y in range(self.map.max_x):
                try:
                    if self.map.litArr[x][y]:
                        self.screen.wr_map(x, y, self.map.tileicon(x, y))
                except:
                    break

    def passturn(self):
        self.lightarea()
        self.printall(self.player.x, self.player.y)
        self.player.draw()
        self.screen.redraw()
        self.screen.redraw_map(self.player.x, self.player.y)
        self.logging.log('Redrawing Map At:' + str(self.player.x) + ' ' + str(self.player.y))

    def get_key(self, key):
        if self.action.move(key, self.player, self.map):
            self.logging.log('The player moved')
        else:
            self.logging.log('The player did not move')
                
