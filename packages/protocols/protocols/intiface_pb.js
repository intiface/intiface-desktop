/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  IntifaceProtocols: {
    options: {
      csharp_namespace: "Buttplug.Server.CLI"
    },
    nested: {
      ServerBackendMessage: {
        oneofs: {
          msg: {
            oneof: [
              "processstarted",
              "processerror",
              "processended",
              "processlog",
              "bplog",
              "clientconnected",
              "clientdisconnected",
              "deviceconnected",
              "devicedisconnected",
              "configuration",
              "updatesavailable",
              "downloadprogress",
              "certserverrunning"
            ]
          }
        },
        fields: {
          processstarted: {
            type: "ProcessStarted",
            id: 1
          },
          processerror: {
            type: "ProcessError",
            id: 2
          },
          processended: {
            type: "ProcessEnded",
            id: 3
          },
          processlog: {
            type: "ProcessLog",
            id: 4
          },
          bplog: {
            type: "ButtplugLog",
            id: 5
          },
          clientconnected: {
            type: "ClientConnected",
            id: 6
          },
          clientdisconnected: {
            type: "ClientDisconnected",
            id: 7
          },
          deviceconnected: {
            type: "DeviceConnected",
            id: 8
          },
          devicedisconnected: {
            type: "DeviceDisconnected",
            id: 9
          },
          configuration: {
            type: "Configuration",
            id: 10
          },
          updatesavailable: {
            type: "UpdatesAvailable",
            id: 11
          },
          downloadprogress: {
            type: "DownloadProgress",
            id: 12
          },
          certserverrunning: {
            type: "CertServerRunning",
            id: 13
          }
        },
        nested: {
          ProcessLog: {
            fields: {
              message: {
                type: "string",
                id: 1
              }
            }
          },
          ProcessStarted: {
            fields: {}
          },
          ProcessError: {
            fields: {
              message: {
                type: "string",
                id: 1
              }
            }
          },
          ProcessEnded: {
            fields: {}
          },
          ButtplugLog: {
            fields: {
              message: {
                type: "string",
                id: 1
              }
            }
          },
          ClientConnected: {
            fields: {
              clientName: {
                type: "string",
                id: 1
              }
            }
          },
          ClientDisconnected: {
            fields: {}
          },
          DeviceConnected: {
            fields: {
              deviceName: {
                type: "string",
                id: 1
              },
              deviceId: {
                type: "uint32",
                id: 2
              }
            }
          },
          DeviceDisconnected: {
            fields: {
              deviceId: {
                type: "uint32",
                id: 1
              }
            }
          },
          Configuration: {
            fields: {
              configuration: {
                type: "string",
                id: 1
              }
            }
          },
          UpdatesAvailable: {
            fields: {
              application: {
                type: "bool",
                id: 1
              },
              deviceFile: {
                type: "bool",
                id: 2
              },
              engine: {
                type: "bool",
                id: 3
              }
            }
          },
          DownloadProgress: {
            fields: {
              bytesReceived: {
                type: "uint32",
                id: 1
              },
              bytesTotal: {
                type: "uint32",
                id: 2
              },
              error: {
                type: "string",
                id: 3
              }
            }
          },
          CertServerRunning: {
            fields: {
              insecurePort: {
                type: "uint32",
                id: 1
              }
            }
          }
        }
      },
      ServerFrontendMessage: {
        oneofs: {
          msg: {
            oneof: [
              "ready",
              "startprocess",
              "stopprocess",
              "startproxy",
              "stopproxy",
              "updateconfig",
              "checkforupdates",
              "updateengine",
              "updatedevicefile",
              "generatecerts",
              "runcertserver",
              "stopcertserver"
            ]
          }
        },
        fields: {
          ready: {
            type: "Ready",
            id: 1
          },
          startprocess: {
            type: "StartProcess",
            id: 2
          },
          stopprocess: {
            type: "StopProcess",
            id: 3
          },
          startproxy: {
            type: "StartProxy",
            id: 4
          },
          stopproxy: {
            type: "StopProxy",
            id: 5
          },
          updateconfig: {
            type: "UpdateConfig",
            id: 6
          },
          checkforupdates: {
            type: "CheckForUpdates",
            id: 7
          },
          updateengine: {
            type: "UpdateEngine",
            id: 8
          },
          updatedevicefile: {
            type: "UpdateDeviceFile",
            id: 9
          },
          generatecerts: {
            type: "GenerateCerts",
            id: 10
          },
          runcertserver: {
            type: "RunCertServer",
            id: 11
          },
          stopcertserver: {
            type: "StopCertServer",
            id: 12
          }
        },
        nested: {
          Ready: {
            fields: {}
          },
          StartProcess: {
            fields: {}
          },
          StopProcess: {
            fields: {}
          },
          StartProxy: {
            fields: {}
          },
          StopProxy: {
            fields: {}
          },
          UpdateConfig: {
            fields: {
              configuration: {
                type: "string",
                id: 1
              }
            }
          },
          CheckForUpdates: {
            fields: {}
          },
          UpdateEngine: {
            fields: {}
          },
          UpdateDeviceFile: {
            fields: {}
          },
          GenerateCerts: {
            fields: {}
          },
          RunCertServer: {
            fields: {}
          },
          StopCertServer: {
            fields: {}
          }
        }
      }
    }
  }
});

module.exports = $root;
