#!/usr/bin/env python
# This script should contain all the curses references we need.

import curses

class glcurses():
    def __init__(self):
        self.mpxy = 100
        self.mpxx = 100
        #Initialize the Screen
        self.glscr = curses.initscr()
        #Create a Message Bar at the top of the screen
        self.msgbar = self.glscr.subwin(1, 80, 0, 0)
        #Create an Info Bar at the bottom of the screen
        self.infobar = self.glscr.subwin(1, 80, 24, 0)
        self.map_pad = curses.newpad(100, 100)
        self.max_y, self.max_x = self.glscr.getmaxyx()
        curses.noecho()
        self.glscr.refresh()
        self.glscr.keypad(1)
        curses.cbreak()
        self.glscr.clear

    def wr_map(self, x, y, text):
        if y < 0:
            pass
        elif x < 0:
            pass
        elif y > self.mpxy:
            pass
        elif y > self.mpxx:
            pass
        else:
            self.map_pad.addch(y, x, text)
    
    def wr_player(self, x, y):
        self.map_pad.addch(y, x, '@', curses.A_BOLD)

    def msg(self, text):
        self.glscr.addstr(0, 0, str(text), curses.A_STANDOUT)

    def write(self, x, y, text):
        self.glscr.addstr(y, x, text)

    def create_map_screen(self, x, y):
        self.map_pad = curses.newpad(y, x)
        self.mpxy = y
        self.mpxx = x
        for y in range(0, 100):
            for x in range(0, 100):
                try: self.map_pad.addch(y, x, ' ')
                except curses.error: pass

    def bold(self, x, y, text):
        self.glscr.addstr(y, x, text, curses.A_BOLD)

    def redraw(self):
        self.glscr.refresh()
    
    def redraw_map(self, x, y):
        yr = y - 12
        xr = x - 40
        if yr < 0:
            yr = 0
        if xr < 0:
            xr = 0
        self.map_pad.refresh(yr,xr, 1,10, self.max_y - 1,self.max_x)

    def getch(self):
        return self.glscr.getch()

    def clear(self):
        return self.glscr.clear()
