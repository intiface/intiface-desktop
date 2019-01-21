// package: intiface_protocol
// file: intiface.proto

import * as jspb from "google-protobuf";

export class ServerProcessMessage extends jspb.Message {
  hasProcessstarted(): boolean;
  clearProcessstarted(): void;
  getProcessstarted(): ServerProcessMessage.ProcessStarted | undefined;
  setProcessstarted(value?: ServerProcessMessage.ProcessStarted): void;

  hasProcessended(): boolean;
  clearProcessended(): void;
  getProcessended(): ServerProcessMessage.ProcessEnded | undefined;
  setProcessended(value?: ServerProcessMessage.ProcessEnded): void;

  hasProcesslog(): boolean;
  clearProcesslog(): void;
  getProcesslog(): ServerProcessMessage.ProcessLog | undefined;
  setProcesslog(value?: ServerProcessMessage.ProcessLog): void;

  hasBplog(): boolean;
  clearBplog(): void;
  getBplog(): ServerProcessMessage.ButtplugLog | undefined;
  setBplog(value?: ServerProcessMessage.ButtplugLog): void;

  hasClientconnected(): boolean;
  clearClientconnected(): void;
  getClientconnected(): ServerProcessMessage.ClientConnected | undefined;
  setClientconnected(value?: ServerProcessMessage.ClientConnected): void;

  hasClientdisconnected(): boolean;
  clearClientdisconnected(): void;
  getClientdisconnected(): ServerProcessMessage.ClientDisconnected | undefined;
  setClientdisconnected(value?: ServerProcessMessage.ClientDisconnected): void;

  hasDeviceconnected(): boolean;
  clearDeviceconnected(): void;
  getDeviceconnected(): ServerProcessMessage.DeviceConnected | undefined;
  setDeviceconnected(value?: ServerProcessMessage.DeviceConnected): void;

  hasDevicedisconnected(): boolean;
  clearDevicedisconnected(): void;
  getDevicedisconnected(): ServerProcessMessage.DeviceDisconnected | undefined;
  setDevicedisconnected(value?: ServerProcessMessage.DeviceDisconnected): void;

  getMsgCase(): ServerProcessMessage.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerProcessMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ServerProcessMessage): ServerProcessMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerProcessMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerProcessMessage;
  static deserializeBinaryFromReader(message: ServerProcessMessage, reader: jspb.BinaryReader): ServerProcessMessage;
}

export namespace ServerProcessMessage {
  export type AsObject = {
    processstarted?: ServerProcessMessage.ProcessStarted.AsObject,
    processended?: ServerProcessMessage.ProcessEnded.AsObject,
    processlog?: ServerProcessMessage.ProcessLog.AsObject,
    bplog?: ServerProcessMessage.ButtplugLog.AsObject,
    clientconnected?: ServerProcessMessage.ClientConnected.AsObject,
    clientdisconnected?: ServerProcessMessage.ClientDisconnected.AsObject,
    deviceconnected?: ServerProcessMessage.DeviceConnected.AsObject,
    devicedisconnected?: ServerProcessMessage.DeviceDisconnected.AsObject,
  }

  export class ProcessLog extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessLog.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessLog): ProcessLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessLog;
    static deserializeBinaryFromReader(message: ProcessLog, reader: jspb.BinaryReader): ProcessLog;
  }

  export namespace ProcessLog {
    export type AsObject = {
      message: string,
    }
  }

  export class ProcessStarted extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessStarted.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessStarted): ProcessStarted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessStarted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessStarted;
    static deserializeBinaryFromReader(message: ProcessStarted, reader: jspb.BinaryReader): ProcessStarted;
  }

  export namespace ProcessStarted {
    export type AsObject = {
    }
  }

  export class ProcessEnded extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessEnded.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessEnded): ProcessEnded.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessEnded, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessEnded;
    static deserializeBinaryFromReader(message: ProcessEnded, reader: jspb.BinaryReader): ProcessEnded;
  }

  export namespace ProcessEnded {
    export type AsObject = {
    }
  }

  export class ButtplugLog extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ButtplugLog.AsObject;
    static toObject(includeInstance: boolean, msg: ButtplugLog): ButtplugLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ButtplugLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ButtplugLog;
    static deserializeBinaryFromReader(message: ButtplugLog, reader: jspb.BinaryReader): ButtplugLog;
  }

  export namespace ButtplugLog {
    export type AsObject = {
      message: string,
    }
  }

  export class ClientConnected extends jspb.Message {
    getClientName(): string;
    setClientName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientConnected.AsObject;
    static toObject(includeInstance: boolean, msg: ClientConnected): ClientConnected.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientConnected, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientConnected;
    static deserializeBinaryFromReader(message: ClientConnected, reader: jspb.BinaryReader): ClientConnected;
  }

  export namespace ClientConnected {
    export type AsObject = {
      clientName: string,
    }
  }

  export class ClientDisconnected extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientDisconnected.AsObject;
    static toObject(includeInstance: boolean, msg: ClientDisconnected): ClientDisconnected.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientDisconnected, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientDisconnected;
    static deserializeBinaryFromReader(message: ClientDisconnected, reader: jspb.BinaryReader): ClientDisconnected;
  }

  export namespace ClientDisconnected {
    export type AsObject = {
    }
  }

  export class DeviceConnected extends jspb.Message {
    getDeviceName(): string;
    setDeviceName(value: string): void;

    getDeviceId(): number;
    setDeviceId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceConnected.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceConnected): DeviceConnected.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceConnected, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceConnected;
    static deserializeBinaryFromReader(message: DeviceConnected, reader: jspb.BinaryReader): DeviceConnected;
  }

  export namespace DeviceConnected {
    export type AsObject = {
      deviceName: string,
      deviceId: number,
    }
  }

  export class DeviceDisconnected extends jspb.Message {
    getDeviceId(): number;
    setDeviceId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceDisconnected.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceDisconnected): DeviceDisconnected.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceDisconnected, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceDisconnected;
    static deserializeBinaryFromReader(message: DeviceDisconnected, reader: jspb.BinaryReader): DeviceDisconnected;
  }

  export namespace DeviceDisconnected {
    export type AsObject = {
      deviceId: number,
    }
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    PROCESSSTARTED = 1,
    PROCESSENDED = 2,
    PROCESSLOG = 3,
    BPLOG = 4,
    CLIENTCONNECTED = 5,
    CLIENTDISCONNECTED = 6,
    DEVICECONNECTED = 7,
    DEVICEDISCONNECTED = 8,
  }
}

export class ServerFrontendMessage extends jspb.Message {
  hasStartprocess(): boolean;
  clearStartprocess(): void;
  getStartprocess(): ServerFrontendMessage.StartProcess | undefined;
  setStartprocess(value?: ServerFrontendMessage.StartProcess): void;

  hasStopprocess(): boolean;
  clearStopprocess(): void;
  getStopprocess(): ServerFrontendMessage.StopProcess | undefined;
  setStopprocess(value?: ServerFrontendMessage.StopProcess): void;

  hasStartproxy(): boolean;
  clearStartproxy(): void;
  getStartproxy(): ServerFrontendMessage.StartProxy | undefined;
  setStartproxy(value?: ServerFrontendMessage.StartProxy): void;

  hasStopproxy(): boolean;
  clearStopproxy(): void;
  getStopproxy(): ServerFrontendMessage.StopProxy | undefined;
  setStopproxy(value?: ServerFrontendMessage.StopProxy): void;

  hasUpdateconfig(): boolean;
  clearUpdateconfig(): void;
  getUpdateconfig(): ServerFrontendMessage.UpdateConfig | undefined;
  setUpdateconfig(value?: ServerFrontendMessage.UpdateConfig): void;

  getMsgCase(): ServerFrontendMessage.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerFrontendMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ServerFrontendMessage): ServerFrontendMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerFrontendMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerFrontendMessage;
  static deserializeBinaryFromReader(message: ServerFrontendMessage, reader: jspb.BinaryReader): ServerFrontendMessage;
}

export namespace ServerFrontendMessage {
  export type AsObject = {
    startprocess?: ServerFrontendMessage.StartProcess.AsObject,
    stopprocess?: ServerFrontendMessage.StopProcess.AsObject,
    startproxy?: ServerFrontendMessage.StartProxy.AsObject,
    stopproxy?: ServerFrontendMessage.StopProxy.AsObject,
    updateconfig?: ServerFrontendMessage.UpdateConfig.AsObject,
  }

  export class StartProcess extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartProcess.AsObject;
    static toObject(includeInstance: boolean, msg: StartProcess): StartProcess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartProcess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartProcess;
    static deserializeBinaryFromReader(message: StartProcess, reader: jspb.BinaryReader): StartProcess;
  }

  export namespace StartProcess {
    export type AsObject = {
    }
  }

  export class StopProcess extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopProcess.AsObject;
    static toObject(includeInstance: boolean, msg: StopProcess): StopProcess.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopProcess, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopProcess;
    static deserializeBinaryFromReader(message: StopProcess, reader: jspb.BinaryReader): StopProcess;
  }

  export namespace StopProcess {
    export type AsObject = {
    }
  }

  export class StartProxy extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartProxy.AsObject;
    static toObject(includeInstance: boolean, msg: StartProxy): StartProxy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartProxy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartProxy;
    static deserializeBinaryFromReader(message: StartProxy, reader: jspb.BinaryReader): StartProxy;
  }

  export namespace StartProxy {
    export type AsObject = {
    }
  }

  export class StopProxy extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopProxy.AsObject;
    static toObject(includeInstance: boolean, msg: StopProxy): StopProxy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopProxy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopProxy;
    static deserializeBinaryFromReader(message: StopProxy, reader: jspb.BinaryReader): StopProxy;
  }

  export namespace StopProxy {
    export type AsObject = {
    }
  }

  export class UpdateConfig extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateConfig.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateConfig): UpdateConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateConfig;
    static deserializeBinaryFromReader(message: UpdateConfig, reader: jspb.BinaryReader): UpdateConfig;
  }

  export namespace UpdateConfig {
    export type AsObject = {
    }
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    STARTPROCESS = 1,
    STOPPROCESS = 2,
    STARTPROXY = 3,
    STOPPROXY = 4,
    UPDATECONFIG = 5,
  }
}

