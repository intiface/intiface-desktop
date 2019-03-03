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
              "processended",
              "processlog",
              "bplog",
              "clientconnected",
              "clientdisconnected",
              "deviceconnected",
              "devicedisconnected",
              "configuration"
            ]
          }
        },
        fields: {
          processstarted: {
            type: "ProcessStarted",
            id: 1
          },
          processended: {
            type: "ProcessEnded",
            id: 2
          },
          processlog: {
            type: "ProcessLog",
            id: 3
          },
          bplog: {
            type: "ButtplugLog",
            id: 4
          },
          clientconnected: {
            type: "ClientConnected",
            id: 5
          },
          clientdisconnected: {
            type: "ClientDisconnected",
            id: 6
          },
          deviceconnected: {
            type: "DeviceConnected",
            id: 7
          },
          devicedisconnected: {
            type: "DeviceDisconnected",
            id: 8
          },
          configuration: {
            type: "Configuration",
            id: 9
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
              "updateconfig"
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
          }
        }
      }
    }
  }
});

module.exports = $root;
