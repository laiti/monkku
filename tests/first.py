#!/usr/bin/env python3
"""
Script for pushing the initial participation for Monkku
"""

import json
import telegram

with open(file="config.json", encoding="utf-8") as json_config_file:
    config = json.load(json_config_file)

# Set up all players
players = {}
for player in config["players"]:
    players[player] = telegram.Bot(token=config["players"][player])

for player, playerbot in players.items():
    playerbot.sendMessage(chat_id=config["chat_id"]["correct"], text="/monkku")
