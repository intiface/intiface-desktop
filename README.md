# Intiface Desktop - END OF LIFE, NO LONGER UPDATED

[![Patreon donate button](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/qdot)
[![Github donate button](https://img.shields.io/badge/github-donate-ff69b4.svg)](https://www.github.com/sponsors/qdot)
[![Discord](https://img.shields.io/discord/353303527587708932.svg?logo=discord)](https://discord.buttplug.io)
[![Twitter](https://img.shields.io/twitter/follow/buttplugio.svg?style=social&logo=twitter)](https://twitter.com/buttplugio)

## INTIFACE DESKTOP IS DEAD. LONG LIVE INTIFACE CENTRAL.

<center><h3><a href="https://intiface.com/central">Visit https://intiface.com/central to download and install.</a></h3></center>

[Intiface Central](https://intiface.com/central) is now the new hub application for Buttplug. It
contains all of the functionality of Intiface Desktop, while also running on Android/iOS, and is
based on a platform I don't hate working on (flutter instead of electron/node). 

Intiface Central is available for download at
[https://intiface.com/central)](https://intiface.com/central).

You will need to download and install the new application, and manually uninstall
Intiface Desktop.

**MOST PROGRAMS THAT WORK WITH INTIFACE DESKTOP SHOULD ALSO WORK WITH INTIFACE
CENTRAL.** If they don't, contact the original author of the program or let us know via
the methods listed below.

If you need help with the upgrade, you can contact support via <a
href="https://twitter.com/buttplugio">Twitter</a>, <a
href="https://buttplug.zone/buttplugio">Mastodon</a>, or <a
href="https://discord.buttplug.io">Discord</a>. If these links do not work in the future,
check the <a href="https://buttplug.io">Buttplug.io website</a> for up-to-date contact
instructions.

<hr/>

Intiface Desktop is now discontinued. You can continue to use Desktop (and may still need
to for some older programs that used setups specific to Intiface Desktop), but it will no
longer receive device configuration or engine updates. Due to the way electron updates work,
I cannot have Desktop update automatically to Intiface Central, so this is the best way I
have to get the message out to users.      

In the future, update features for Desktop may break due to missing URLs. <u
style="color:#FF0000;">CHECK FOR UPDATES ON STARTUP IS NOW DISABLED AND WILL NOT
FUNCTION</u>, but you can continue to try updating via the settings panel if it brings you
some sort of emotional fulfillment. However, as long as the system still has an
intiface-cli-rs executable in the right place, Desktop should continue to install correctly
and function.

Good night, sweet application. You basically did your job ok enough. I guess.

## Old Introduction

Intiface is a set of applications and services for hosting sex toy
connections. Where [Buttplug](https://buttplug.io) is for developers,
Intiface is for users.

Intiface Desktop acts as a main hub for managing devices on the system. At some
point, it will also work as a installer/launcher for Buttplug apps, dev toolkit,
and who knows what else.

For those familiar with the development of
[Buttplug](https://buttplug.io) so far, you may have seen the
"Buttplug Server" and other programs. Intiface takes the place of the
Server program, and is the basis of UI/UX for Buttplug on both desktop
and mobile.

## Support The Project

If you find this project helpful, you
can
[support Nonpolynomial Labs projects via Patreon](http://patreon.com/qdot)!
Every donation helps us afford more hardware to reverse, document, and
write code for!

## Installation

Releases are available on the [Intiface Desktop Github Release
Site](https://github.com/intiface/intiface-desktop/releases).

Installers are available for:

- Windows 7-10 (Executable installer, tested on Windows 10)
- macOS (.Dmg file, Tested on 10.15)
- Linux (AppImage file, Tested on Debian 10)

The application will download the up-to-date device file and
engine for the operating system it is on.

## Linux Issues

To use Bluetooth LE on linux, you will need to run a couple of
commands after an engine is updated. Instructions here were adapted
from [https://github.com/noble/noble#running-without-rootsudo](https://github.com/noble/noble#running-without-rootsudo).

Run the following command:

```
sudo setcap cap_net_raw+eip ~/.config/Intiface/engine/IntifaceCLI
```

This grants the node binary cap_net_raw privileges, so it can start/stop BLE advertising.

Note: The above command requires setcap to be installed, it can be installed using the following:

- apt: `sudo apt-get install libcap2-bin`
- yum: `su -c \'yum install libcap2-bin\'`


## License

The Intiface Application is BSD 3-Clause licensed.

    Copyright (c) 2017-2020, Nonpolynomial Labs LLC
    All rights reserved.
    
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
    
    * Redistributions of source code must retain the above copyright notice, this
      list of conditions and the following disclaimer.
    
    * Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.
    
    * Neither the name of the project nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


