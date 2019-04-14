# v12 (2019-04-14)

## Bugfixes

- Fixed issue with download dialog getting stuck on initial setup

# v11 (2019-04-10)

## Bugfixes

- Updates from v10 now actually seem to work, and now I know more
  about electron-builder's update system than I ever wanted. I can
  work on something else now. yay!

# v10 (2019-04-10)

## Features

- Add 32/64 bit downloads for windows.

## Bugfixes

- Continue trying to fix signing verficiation on app updates

# v9 (2019-04-09)

## Bugfixes

- Turn off update signing verification for now, until signing is fixed

# v8 (2019-04-09)

## Features

- Application updates now have download progress

## Bugfixes

- Hopefully application updates also actually work now.
- Fixed weird wording on update dialog

# v7 (2019-04-09)

## Features

- Update process arguments for C# CLI 0.4.3.2, including now using
  stayopen
- Add status icons to toolbar
- Add settings for server name, server ping time, log level, websocket
  ports
- Add settings form validation
- Add server ipc/ws settings readouts to server status page
  
## Bugfixes

- Actually check for updates on startup when option is chosen

# v6 (2019-04-07)

## Features

- Move app updates to shared modal dialog
- Added Log Panel and logging framework
- Moved all settings into settings panel
- Added status bar icons
- Removed simple mode (didn't work, can't tell if needed yet)

# v5 (2019-04-04)

## Features

- Promote insecure/secure websockets to being their own connection
  types, making selection more understandable for users.

## Bugfixes

- Server status no longer resets when moving off of server control
  component.
- Server can now use SSL.
- Simple mode disabled until it actually works.

# v4 (2019-04-03)

## Bugfixes

- App now actually quits and installs new version after download on
  app upgrade request.

# v3 (2019-04-03)

## Features

- Allow checking for updates on startup
- Implement core message pairing (so frontend will wait for backend on
  things like updates)
- Add checks for server executable/certificate existence, adjust GUI
  accordingly if they are missing
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
