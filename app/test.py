import numpy as np
from random import randint
from typing import List
import twint
import os
import sys

def main():
    res = []
    c = twint.Config()
    c.Username = "elonmusk"
    c.Search = "china"
    c.Hide_output = True
    c.User_id = 'randomstring'  # like this 
    c.Store_object = True
    twint.run.Search(c)

if __name__ == "__main__":
    main()