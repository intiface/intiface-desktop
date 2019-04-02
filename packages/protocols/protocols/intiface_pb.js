/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  IntifaceProtocols: {
    nested: {
      ServerControlMessage: {
        oneofs: {
          msg: {
            oneof: [
              "stop"
            ]
          }
        },
        fields: {
          stop: {
            type: "Stop",
            id: 1
          }
        },
        nested: {
          Stop: {
            fields: {}
          }
        }
      },
      ServerProcessMessage: {
        oneofs: {
          msg: {
            oneof: [
              "processStarted",
              "processError",
              "processEnded",
              "processLog",
              "buttplugLog",
              "clientConnected",
              "clientDisconnected",
              "deviceConnected",
              "deviceDisconnected"
            ]
          }
        },
        fields: {
          processStarted: {
            type: "ProcessStarted",
            id: 1
          },
          processError: {
            type: "ProcessError",
            id: 2
          },
          processEnded: {
            type: "ProcessEnded",
            id: 3
          },
          processLog: {
            type: "ProcessLog",
            id: 4
          },
          buttplugLog: {
            type: "ButtplugLog",
            id: 5
          },
          clientConnected: {
            type: "ClientConnected",
            id: 6
          },
          clientDisconnected: {
            type: "ClientDisconnected",
            id: 7
          },
          deviceConnected: {
            type: "DeviceConnected",
            id: 8
          },
          deviceDisconnected: {
            type: "DeviceDisconnected",
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
          }
        }
      },
      IntifaceBackendMessage: {
        oneofs: {
          msg: {
            oneof: [
              "ok",
              "error",
              "configuration",
              "updatesAvailable",
              "downloadProgress",
              "certificateAcceptanceServerRunning",
              "certificateGenerated",
              "serverProcessMessage"
            ]
          }
        },
        fields: {
          index: {
            type: "uint32",
            id: 1
          },
          ok: {
            type: "Ok",
            id: 2
          },
          error: {
            type: "Error",
            id: 3
          },
          configuration: {
            type: "Configuration",
            id: 4
          },
          updatesAvailable: {
            type: "UpdatesAvailable",
            id: 5
          },
          downloadProgress: {
            type: "DownloadProgress",
            id: 6
          },
          certificateAcceptanceServerRunning: {
            type: "CertificateAcceptanceServerRunning",
            id: 7
          },
          certificateGenerated: {
            type: "CertificateGenerated",
            id: 8
          },
          serverProcessMessage: {
            type: "ServerProcessMessage",
            id: 9
          }
        },
        nested: {
          Ok: {
            fields: {}
          },
          Error: {
            fields: {
              reason: {
                type: "string",
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
          CertificateGenerated: {
            fields: {}
          },
          CertificateAcceptanceServerRunning: {
            fields: {
              insecurePort: {
                type: "uint32",
                id: 1
              }
            }
          }
        }
      },
      IntifaceFrontendMessage: {
        oneofs: {
          msg: {
            oneof: [
              "ok",
              "error",
              "ready",
              "startProcess",
              "stopProcess",
              "startProxy",
              "stopProxy",
              "updateConfig",
              "checkForUpdates",
              "updateEngine",
              "updateDeviceFile",
              "updateApplication",
              "generateCertificate",
              "runCertificateAcceptanceServer",
              "stopCertificateAcceptanceServer"
            ]
          }
        },
        fields: {
          index: {
            type: "uint32",
            id: 1
          },
          ok: {
            type: "Ok",
            id: 2
          },
          error: {
            type: "Error",
            id: 3
          },
          ready: {
            type: "Ready",
            id: 4
          },
          startProcess: {
            type: "StartProcess",
            id: 5
          },
          stopProcess: {
            type: "StopProcess",
            id: 6
          },
          startProxy: {
            type: "StartProxy",
            id: 7
          },
          stopProxy: {
            type: "StopProxy",
            id: 8
          },
          updateConfig: {
            type: "UpdateConfig",
            id: 9
          },
          checkForUpdates: {
            type: "CheckForUpdates",
            id: 10
          },
          updateEngine: {
            type: "UpdateEngine",
            id: 11
          },
          updateDeviceFile: {
            type: "UpdateDeviceFile",
            id: 12
          },
          updateApplication: {
            type: "UpdateApplication",
            id: 13
          },
          generateCertificate: {
            type: "GenerateCertificate",
            id: 14
          },
          runCertificateAcceptanceServer: {
            type: "RunCertificateAcceptanceServer",
            id: 15
          },
          stopCertificateAcceptanceServer: {
            type: "StopCertificateAcceptanceServer",
            id: 16
          }
        },
        nested: {
          Ok: {
            fields: {}
          },
          Error: {
            fields: {
              reason: {
                type: "string",
                id: 1
              }
            }
          },
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
          UpdateApplication: {
            fields: {}
          },
          GenerateCertificate: {
            fields: {}
          },
          RunCertificateAcceptanceServer: {
            fields: {}
          },
          StopCertificateAcceptanceServer: {
            fields: {}
          }
        }
      }
    }
  }
});

module.exports = $root;
