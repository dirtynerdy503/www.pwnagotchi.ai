---
title: "Usage"
date: 2019-02-25T10:58:28+01:00
weight: 4
draft: false
pre: "<i class='fas fa-brain' style='color:#b33636;'></i> "
---

- [**Modes**](/usage/#auto-ai-and-manu-modes)
  - [MANU](/usage/#manu)
  - [AUTO](/usage/#auto)
  - [AI](/usage/#ai)
- [**User Interface**](/usage/#user-interface)
  - [Viewing Pwnagotchi's face](/usage/#viewing-pwnagotchi-s-face)
     - [The web UI](/usage/#the-web-ui)
     - [The e-ink display](/usage/#the-e-ink-display-optional)
  - [Anatomy of a Pwnagotchi face](/usage/#anatomy-of-a-pwnagotchi-face)
- [**Files to know on your Pwnagotchi**](/usage/#files-to-know-on-your-pwnagotchi)
- [**Training the AI**](/usage/#training-the-ai)
    - [The reward function](/usage/#the-reward-function)
- [**bettercap's web UI**](/usage/#bettercap-s-web-ui)
- [**Update your Pwnagotchi**](/usage/#update-your-pwnagotchi)
- [**Backup your Pwnagotchi**](/usage/#backup-your-pwnagotchi)

## AUTO, AI and MANU Modes

Your unit can operate in one of three different "modes" that determines how it behaves:

#### MANU

If connected to the USB **data port** of your computer (or a tablet, phone, etc), your Pwnagotchi will start in MANUAL mode. 
This means it will read the log of the last session and report a few statistics on the screen. This is the mode  you should be
using your unit when you want to transfer data from/to it. Moreover, in MANU mode you'll be able to access bettercap's web ui 
from your computer by opening the http://pwnagotchi.local:8080/ page.

{{% notice tip %}}
<p>You can "force" the unit to always go in AUTO mode regardless of the USB ports by creating the <code>/root/.pwnagotchi-auto</code> file.</p>
{{% /notice %}}


#### AUTO

This is the default mode your unit will start if only connected to the USB **power port**, for instance when connected to a powerbank without any host computer on the data port. 
In AUTO mode, your unit will start operating, perform attacks and sniffing handshakes only by using the default `personality` configuration parameters.

#### AI

If AI is enabled in your configuration (as it is by default), AUTO mode will transition to AI mode after a few minutes (on average, about 30 minutes on a Rpi0W). This interval is required 
to load all the dependencies the AI module will be using and initialize the neural network. You can think about this as your Pwnagotchi waking up :D 
Once the dependencies are loaded and so the `/root/brain.nn` file, AI mode will pick the optimal set of parameters in real time, depending on how long 
it's been trained on the specific type of WiFi environment it's observing now.

Moreover, depending on the `laziness` configuration parameter, it will more or less frequently start to learn continuously for a given amount of time. 
While this is happening and the AI is "training", the algorithm tends to explore wider ranges of parameters in order to determine how those changes affect the reward. 
While during simple inference epochs (when the unit is not learning but just picking the parameters using previous knowledge), the AI tends to be more conservative and 
only use parameters in smaller ranges that are known to work in that situation.

Ideally, the `laziness` value should be very low at the beginning (say 0.1) and you should manually increase over time in order to reduce the amount of training vs inference epochs.

## User Interface

#### The web UI

Pwnagotchi's face—otherwise known as the UI—is available at a dedicated web interface located at `http://pwnagotchi.local:8080/` if you've already [connected to the unit](/configuration/#connect-to-your-pwnagotchi) via `usb0` (by using the RPi0W's data port) and set a static address on the network interface (see the `ui.video` section `config.yml`). You can think of this as a Pwnagotchi in "headless" mode.

- Obviously, change the `pwnagotchi` in `http://pwnagotchi.local:8080/` to the [new hostname](/configuration/#name-your-new-pwnagotchi) you've given your unit.
- You can also view [bettercap's webUI](/usage/#bettercap-s-web-ui) in your browser at `http://pwnagotchi.local:8080/` whenever your Pwnagotchi is set to MANUAL mode.


#### The e-ink display (optional)

If you've properly attached the optional [supported e-ink display](/installation/#display) to your Pwnagotchi's body and successfully [configured it](/configuration/#select-your-display) to use that display, you will also be able to see Pwnagotchi's UI displayed on that screen.


### Anatomy of a Pwnagotchi face

![ui](https://i.imgur.com/c7xh4hN.png)

* **CH**: This displays the current channel the unit is operating on. 
   - When the unit is performing recon and hopping on all channels, it will display `*` instead of a number. It is gathering the number of APs on each channel when it is conducting recon. Recon signals the start of a new epoch.
* **APS**: Number of access points on the current channel.
   - The total visible access points across all channels (according to the last recon) is displayed in parentheses.
* **UP**: The uptime of the unit, since its last reboot. It is displayed in hh:mm:ss format.
* **PWND**: Number of handshakes captured in this session. 
   - The number of unique networks your Pwnagotchi has eaten **at least one** handshake of, from the beginning of its life, is displayed in parentheses.
   - The SSID of the latest network handshake acquired is displayed in brackets.
* **MODE**: Mode indicates how Pwnagotchi is currently functioning.
   * **MANU:** This appears when the unit is running in MANUAL mode, which is triggered when you start up your unit with the [USB network cable connected](/configuration/#connect-to-your-pwnagotchi).
      - This mode is good for [updating](/usage/#update-your-pwnagotchi) and [backing up](/usage/#backup-your-pwnagotchi) your unit and using [bettercap's web UI](/usage/#bettercap-s-web-ui). 
      - Pwnagotchi does NOT sniff or capture handshakes when it is in MANUAL mode.
      - Stuck in MANUAL mode? Turn on the unit **without** the USB network cable connected.
   * **AUTO:** This indicates that the Pwnagotchi algorithm is running in AUTOMATIC mode, with AI disabled (or still loading).
      - Pwnagotchi will still sniff and capture handshakes in this mode; it is *mostly* functional—the primary difference between AUTO and AI mode is its actions are being determined by a static algorithm instead of the AI deciding what the Pwnagotchi should do for optimal pwnage.
      - This disappears once the AI dependencies have been bootstrapped and the neural network has finished loading. (On a RPi0W, this process takes about 20–30 minutes.)
      - If you are running your Pwnagotchi **without** the AI enabled, this is the mode you'll stay in.
   * **AI:** This appears once the AI dependencies have finished loading and the neural network is functional. 
      - Once this appears, your Pwnagotchi is all ready to begin learning from its pwnage! 🎉
* **FRIEND DETECTED!:** If another unit is nearby, its presence will be indicated between the bottom stats bar and your Pwnagotchi's status face.
  - **NOTE:** If more than one unit is nearby, only one—whichever has the stronger signal strength—will be displayed here.


------------------------------------------------------------------------------------------------------

## Files to know on your Pwnagotchi

- **Configuration**
   - `/etc/pwnagotchi/config.yml`: This is where you put your custom configurations.
       - Do NOT add customizations to `default.yml`! They will be overwritten whenever you [update your unit](/usage/#update-your-pwnagotchi)!
- **Handshakes**
   - All the [handshakes Pwnagotchi captures](/intro/#wifi-handshakes-101) are saved to `/root/handshakes/`
- **The AI**
   - The neural network is located at `/root/brain.nn`, while the information about its age at `/root/brain.json`. If you want to save your Pwnagotchi's memories, these are the files to [back up](/usage/#backup-your-pwnagotchi).

------------------------------------------------------------------------------------------------------

## Training the AI

{{% notice warning %}}
<p><strong>An important note about the AI:</strong> a network trained with a specific WiFi interface will ONLY work with another interface if it supports the <em>exact same</em> WiFi channels of the first one. For instance, you CANNOT use a neural network trained on a Raspberry Pi Zero W (which only supports 2.4GHz channels) with a 5GHz antenna; you will need to train one from scratch for those channels to be included. This means that if you swap out your SD card or neural network from, say, a RPi0W body into a RPi4 body, the neural network will NOT work.</p>
{{% /notice %}}

At its core Pwnagotchi is a very simple creature: we could summarize its main algorithm as:

```python
# main loop
while True:
    # ask bettercap for all visible access points and their clients
    aps = get_all_visible_access_points()
    # loop each AP
    for ap in aps:
        # send an association frame in order to grab the PMKID
        send_assoc(ap)
        # loop each client station of the AP
        for client in ap.clients:
            # deauthenticate the client to get its half or full handshake
            deauthenticate(client)

    wait_for_loot()
```

Despite its simplicity, this logic is controlled by several parameters that regulate the wait times, the timeouts, on which channels to hop and so on.

From `config.yml`:

```yaml
personality:
    # advertise our presence
    advertise: true
    # perform a deauthentication attack to client stations in order to get full or half handshakes
    deauth: true
    # send association frames to APs in order to get the PMKID
    associate: true
    # list of channels to recon on, or empty for all channels
    channels: []
    # minimum WiFi signal strength in dBm
    min_rssi: -200
    # number of seconds for wifi.ap.ttl
    ap_ttl: 120
    # number of seconds for wifi.sta.ttl
    sta_ttl: 300
    # time in seconds to wait during channel recon
    recon_time: 30
    # number of inactive epochs after which recon_time gets multiplied by recon_inactive_multiplier
    max_inactive_scale: 2
    # if more than max_inactive_scale epochs are inactive, recon_time *= recon_inactive_multiplier
    recon_inactive_multiplier: 2
    # time in seconds to wait during channel hopping if activity has been performed
    hop_recon_time: 10
    # time in seconds to wait during channel hopping if no activity has been performed
    min_recon_time: 5
    # maximum amount of deauths/associations per BSSID per session
    max_interactions: 3
    # maximum amount of misses before considering the data stale and triggering a new recon
    max_misses_for_recon: 5
    # number of active epochs that triggers the excited state
    excited_num_epochs: 10
    # number of inactive epochs that triggers the bored state
    bored_num_epochs: 15
    # number of inactive epochs that triggers the sad state
    sad_num_epochs: 25
```

There is no optimal set of parameters for every situation: when the unit is moving (during a walk for instance) smaller timeouts and RSSI thresholds might be preferred in order to quickly remove routers that are not in range anymore, while when stationary in high density areas (like an office) other parameters might be better. The role of the AI is to observe what's going on at the WiFi level, and adjust those parameters in order to maximize the cumulative reward of that loop / epoch.

### The reward function

After each iteration of the main loop (an `epoch`), the reward, a score that represents how well the parameters performed, is computed as (an excerpt from `pwnagotchi/ai/reward.py`):

```python
# state contains the information of the last epoch
# epoch_n is the number of the last epoch
tot_epochs = epoch_n + 1e-20 # 1e-20 is added to avoid a division by 0
tot_interactions = max(state['num_deauths'] + state['num_associations'], state['num_handshakes']) + 1e-20
tot_channels = wifi.NumChannels

# ideally, for each interaction we would have an handshake
h = state['num_handshakes'] / tot_interactions
# small positive rewards the more active epochs we have
a = .2 * (state['active_for_epochs'] / tot_epochs)
# make sure we keep hopping on the widest channel spectrum
c = .1 * (state['num_hops'] / tot_channels)
# small negative reward if we don't see aps for a while
b = -.3 * (state['blind_for_epochs'] / tot_epochs)
# small negative reward if we interact with things that are not in range anymore
m = -.3 * (state['missed_interactions'] / tot_interactions)
# small negative reward for inactive epochs
i = -.2 * (state['inactive_for_epochs'] / tot_epochs)

reward = h + a + c + b + i + m
```

By maximizing this reward value, the AI learns over time to find the set of parameters that better perform with the current environmental conditions.

------------------------------------------------------------------------------------------------------
## BetterCAP's Web UI

Whenever Pwnagotchi is pwning, it is being powered by [bettercap](https://www.bettercap.org/)! Conveniently, this means your Pwnagotchi can double as a portable WiFi penetration testing station when you access [bettercap's web UI](https://www.bettercap.org/usage/#web-ui) at `http://pwnagotchi.local/`.

- Obviously, change the `pwnagotchi` in `http://pwnagotchi.local/` to the [new hostname](/configuration/#name-your-new-pwnagotchi) you've given your unit.
- In order to use [bettercap's web UI](https://www.bettercap.org/usage/#web-ui), you will need to boot your Pwnagotchi in [MANUAL mode](http://localhost:1313/usage/#anatomy-of-a-pwnagotchi-face). 

![webui](https://raw.githubusercontent.com/bettercap/media/master/ui-events.png)

{{% notice info %}}
<p><b>Why can't I use bettercap's web UI while my Pwnagotchi is eating handshakes?</b> This is because when Pwnagotchi is running in AUTO or AI modes, it is basically instrumenting bettercap in order to sniff packets and capture and record handshakes. You and Pwnagotchi cannot BOTH use bettercap at the same time; for this reason, it is only when your Pwnagotchi <b>isn't</b> hunting for handshakes to eat—AKA, when it is in MANUAL mode—that you are free to use bettercap (and its web UI) yourself.</p>
{{% /notice %}}

------------------------------------------------------------------------------------------------------

<!--
## Update your Pwnagotchi

TODO

------------------------------------------------------------------------------------------------------
-->

## Backup your Pwnagotchi

You can use the `scripts/backup.sh` script to backup the important files of your unit.

```shell
usage: ./scripts/backup.sh HOSTNAME backup.zip
```

------------------------------------------------------------------------------------------------------

## Random Info

* **On a rpi0w, it'll take approximately 30 minutes to load the AI**.
* `/var/log/pwnagotchi.log` is your friend.
* if connected to a laptop via usb data port, with internet connectivity shared, magic things will happen.
* If you get `[FAILED] Failed to start Remount Root and Kernel File Systems.` while booting pwnagotchi, make sure the `PARTUUID`s for `rootfs` and `boot` partitions are the same in `/etc/fstab`. Use `sudo blkid` to find those values when you are using `create_sibling.sh`.