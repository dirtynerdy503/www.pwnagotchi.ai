---
title: "Plugins"
date: 2019-02-25T10:58:28+01:00
weight: 5
draft: false
pre: "<i class='fas fa-puzzle-piece' style='color:#b33636;'></i> "

---

Pwnagotchi has a simple plugins system that you can use to customize your unit and its behaviour. You can place your plugins anywhere
as python files and then edit the `config.yml` file (`main.plugins` value) to point to their containing folder. Check the [plugins folder](https://github.com/evilsocket/pwnagotchi/tree/master/pwnagotchi/plugins/default) for a list of default plugins and all the callbacks that you can define for your own customizations.

Here's as an example the GPS plugin:

```python
__author__ = 'evilsocket@gmail.com'
__version__ = '1.0.0'
__name__ = 'gps'
__license__ = 'GPL3'
__description__ = 'Save GPS coordinates whenever an handshake is captured.'

import logging
import json
import os

running = False
OPTIONS = dict()


def on_loaded():
    logging.info("gps plugin loaded for %s" % OPTIONS['device'])


def on_ready(agent):
    global running

    if os.path.exists(OPTIONS['device']):
        logging.info("enabling gps bettercap's module for %s" % OPTIONS['device'])
        try:
            agent.run('gps off')
        except:
            pass

        agent.run('set gps.device %s' % OPTIONS['device'])
        agent.run('set gps.speed %d' % OPTIONS['speed'])
        agent.run('gps on')
        running = True
    else:
        logging.warning("no GPS detected")


def on_handshake(agent, filename, access_point, client_station):
    if running:
        info = agent.session()
        gps = info['gps']
        gps_filename = filename.replace('.pcap', '.gps.json')

        logging.info("saving GPS to %s (%s)" % (gps_filename, gps))
        with open(gps_filename, 'w+t') as fp:
            json.dump(gps, fp)
```