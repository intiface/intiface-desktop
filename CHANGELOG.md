# v22 (2021-06-16)

## Bugfixes

- Cap device step ticks at 100
- Make device and server panels persist
- Device panel should connect to the port in settings, not just 12345

# v21 (2021-06-09)

## Features

- Add Device Panel
  - Basically a built-in version of Buttplug Playground, allows users to test devices in program
    versus requiring website use.
- Remove secure certificate capabilities
  - If users want this they can run their own proxy
- Add ability to select device comm managers
- Add Lovense Connect Service capabilities
- Add ability to open log directory in file explorer for support

## Bugfixes

- Fix issues with log panel layout.
- Make errors pop up under main content window, but don't always reserve space for them.

# v20 (2021-03-20)

## Bugfixes

- Remove C# engine support (which was broken anyways)
- Remove Log panel buttons (which were broken anyways)
- Reduce number of log messages frontend panel will show
- Fix issue with stdout buffering causing process shutdown

# v19 (2020-09-13)

## Features

- Output log messages from engine to log panel.

## Bugfixes

- Reword Insecure/Secure to Regular/SSL to reduce wording severity
- Fix port number checking methods in settings panel
- Fix protobufjs errors with delimited message decoding by building our own
  delimited decoder.

# v18 (2020-09-11)

## Features

- Added Reset Configuration button for support needs.

## Bugfixes

- Move configuration files to new location to reset everyone's setup.
- Remove IPC choices since they don't actually work and never have.
- Fixed cert generation to generate certs that rustls doesn't hate (> 1024bit).
- Added dialogs for cert acceptances so users don't get trapped in flow or have
  server issues.
- Yell if it looks like the server process crashed. Still need to implement log
  output on buttplug/intiface-cli to make it more useful.

# v17 (2020-09-07)

## Features

- Make buttplug-rs the default engine for all platforms, allowing windows to
  fall back to C# if needed.
- Update to newest electron, vuetify, and other dependencies
- Add connected device listing on server panel
- Add help panel
- Lots of build fixes and simplifications

## Bugfixes

- System tries to be smarter in cases where engine is missing or requires
  upgrade.
- Setup flow hopefully sucks less.

# v16 (2019-08-04)

## Features

- Added setting to allow server start on intiface desktop startup
- Server Name setting now actually does something
- Device Config files now loaded from file system, allowing for easier
  updates.

## Bugfixes

- Don't allow updates while server is running
- "Get Updates" button cleared after successful update

# v15 (2019-06-02)

## Bugfixes

- Secure websockets no longer always disabled on first run

# v14 (2019-05-09)

## Features

- Added home panel
- Added content to about page
- Downloads now cancellable
- Downloads now signify when finished

## Bugfixes

- Download dialog no longer dismissable by clicking outside dialog
- Trying updates while not online actually errors out now
- Only check for updates once GUI is up
- Mac/Linux auto-updates should work after this release

# v13 (2019-04-20)

## Features

- Brought Node CLI engine and Mac/Linux support back in
- Added mac application signing on CI
- Added more logging messages for debugging purposes

## Bugfixes

- Shutdown now actually calls intiface's shutdown in electron

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
