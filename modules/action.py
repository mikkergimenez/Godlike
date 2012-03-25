#!/usr/bin/env python

import curses
import action
from config import *

class action():
    log = logging()
    def move(self, key, player, map):
            if key == curses.KEY_UP or key == ord('k'): 
                if map.sqopen("north", player):
                    self.log.log('Square Open to the North')
                    player.move(0, -1)
                else: 
                    self.log.log('Square Not Open to the North')
            elif key == curses.KEY_DOWN or key == ord('j'):
                if map.sqopen("south", player):
                    self.log.log('Square Open to the South')
                    player.move(0, 1)
                else: 
                    self.log.log('Square Not Open to the South')
            elif key == curses.KEY_LEFT or key == ord('h'):
                if map.sqopen("west", player):
                    self.log.log('Square Open to the West')
                    player.move(-1, 0)
                else: 
                    self.log.log('Square Not Open to the West')
            elif key == curses.KEY_RIGHT or key == ord('l'):
                if map.sqopen("east", player):
                    self.log.log('Square Open to the East')
                    player.move(1, 0)
                else: 
                    self.log.log('Square Not Open to the East')
            else:
                return False 

    def process(key):
        if move(key): pass
        return True
