#!/usr/bin/env python
# Notes to Self:
#   Think About Encoding, UTF-8 or ISO-8859-15 to extend available characters

import sys
import curses

# Sets the Search Path for Modules
sys.path.extend(['modules', 'classes'])

from glcurses import glcurses
from glengine import glengine
import config

class Godlike():
    def __init__(self):
        self.screen = glcurses()
        self.screen.bold(25, 12, "Welcome to Godlike")
        self.screen.write(25, 13, "  -->By Mik")
        self.screen.write(0, 24, " Press any key to continue ...")
        self.screen.getch()
        self.screen.clear()
        self.engine = glengine(self.screen)

    def main(self):
        self.screen.redraw()
        
        while 1:
            self.screen.clear() 
            self.engine.passturn()
            self.screen.msg("Waiting For Key Press....")
            key = self.screen.getch()
            if key == ord('q'): break
            elif self.engine.get_key(key): pass

def main(self):
    a = Godlike()
    a.main()

curses.wrapper(main)
