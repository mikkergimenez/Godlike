# This is a config file for Godlike

import time

class Godlike_Config:
    def config(self):
        debug = 1 
        self.begin_x = 0
        self.begin_y = 0
        self.height = 25
        self.width = 100

class logging:
    def __init__(self):
        try:
            self.f = open('godlike.log', 'a')
        except:
            self.f = open('godlike.log', 'w')

    def log(self, message):
        self.localtime = time.localtime(time.time()) 
        self.f = open('godlike.log', 'a')
        self.f.write(str(time.strftime("%d %b %Y %H:%M:%S", self.localtime) + ' : ' + message + "\n"))
        self.f.close()


# Screen Size


