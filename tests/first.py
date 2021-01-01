#!/usr/bin/env python3
import json
import telegram

with open("config.json") as json_config_file:
    config = json.load(json_config_file)

player1 = telegram.Bot(token=config["players"][1])
player1.sendMessage(chat_id=config["chat_id"]["correct"], text="testing")
