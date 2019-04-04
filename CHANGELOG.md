# v3 (2019-04-03)

## Features

- Allow checking for updates on startup
- Implement core message pairing (so frontend will wait for backend on things like updates)
- Add checks for server executable/certificate existence, adjust GUI accordingly if they are missing
- Update icons to Intiface Placeholders
- Display some errors as alerts

# v2 (2019-04-01)

## Features

- Added in-app update abilities for app/engine/device file

# v1 (2019-03-30)

## Features

- Second First Release! Deleted 0.0.1 because it was horribly broken
- Moving to Major Version only releases, as app has no public facing API
- Added installer and executable signing for windows
- Updated to use new intiface-cli downloader and runner

# v0.0.1 (2019-03-16)

## Features

- First Release!
- Basically has same capabilities as Buttplug Server GUI, but now is
  cross platform (and roughly 50x the size. Thanks, Electron!)
- Has extremely basic setup flow.
- Can download engines and device files (but not update them yet).
- Can run buttplug JS (linux, macOS) and C# (windows) engines.
