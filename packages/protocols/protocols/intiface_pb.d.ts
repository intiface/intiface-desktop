import * as $protobuf from "protobufjs";
/** Namespace intiface_protocol. */
export namespace intiface_protocol {

    /** Properties of a ServerProcessMessage. */
    interface IServerProcessMessage {

        /** ServerProcessMessage processstarted */
        processstarted?: (intiface_protocol.ServerProcessMessage.IProcessStarted|null);

        /** ServerProcessMessage processended */
        processended?: (intiface_protocol.ServerProcessMessage.IProcessEnded|null);

        /** ServerProcessMessage processlog */
        processlog?: (intiface_protocol.ServerProcessMessage.IProcessLog|null);

        /** ServerProcessMessage bplog */
        bplog?: (intiface_protocol.ServerProcessMessage.IButtplugLog|null);

        /** ServerProcessMessage clientconnected */
        clientconnected?: (intiface_protocol.ServerProcessMessage.IClientConnected|null);

        /** ServerProcessMessage clientdisconnected */
        clientdisconnected?: (intiface_protocol.ServerProcessMessage.IClientDisconnected|null);

        /** ServerProcessMessage deviceconnected */
        deviceconnected?: (intiface_protocol.ServerProcessMessage.IDeviceConnected|null);

        /** ServerProcessMessage devicedisconnected */
        devicedisconnected?: (intiface_protocol.ServerProcessMessage.IDeviceDisconnected|null);

        /** ServerProcessMessage configuration */
        configuration?: (intiface_protocol.ServerProcessMessage.IConfiguration|null);
    }

    /** Represents a ServerProcessMessage. */
    class ServerProcessMessage implements IServerProcessMessage {

        /**
         * Constructs a new ServerProcessMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: intiface_protocol.IServerProcessMessage);

        /** ServerProcessMessage processstarted. */
        public processstarted?: (intiface_protocol.ServerProcessMessage.IProcessStarted|null);

        /** ServerProcessMessage processended. */
        public processended?: (intiface_protocol.ServerProcessMessage.IProcessEnded|null);

        /** ServerProcessMessage processlog. */
        public processlog?: (intiface_protocol.ServerProcessMessage.IProcessLog|null);

        /** ServerProcessMessage bplog. */
        public bplog?: (intiface_protocol.ServerProcessMessage.IButtplugLog|null);

        /** ServerProcessMessage clientconnected. */
        public clientconnected?: (intiface_protocol.ServerProcessMessage.IClientConnected|null);

        /** ServerProcessMessage clientdisconnected. */
        public clientdisconnected?: (intiface_protocol.ServerProcessMessage.IClientDisconnected|null);

        /** ServerProcessMessage deviceconnected. */
        public deviceconnected?: (intiface_protocol.ServerProcessMessage.IDeviceConnected|null);

        /** ServerProcessMessage devicedisconnected. */
        public devicedisconnected?: (intiface_protocol.ServerProcessMessage.IDeviceDisconnected|null);

        /** ServerProcessMessage configuration. */
        public configuration?: (intiface_protocol.ServerProcessMessage.IConfiguration|null);

        /** ServerProcessMessage msg. */
        public msg?: ("processstarted"|"processended"|"processlog"|"bplog"|"clientconnected"|"clientdisconnected"|"deviceconnected"|"devicedisconnected"|"configuration");

        /**
         * Creates a new ServerProcessMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerProcessMessage instance
         */
        public static create(properties?: intiface_protocol.IServerProcessMessage): intiface_protocol.ServerProcessMessage;

        /**
         * Encodes the specified ServerProcessMessage message. Does not implicitly {@link intiface_protocol.ServerProcessMessage.verify|verify} messages.
         * @param message ServerProcessMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: intiface_protocol.IServerProcessMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerProcessMessage message, length delimited. Does not implicitly {@link intiface_protocol.ServerProcessMessage.verify|verify} messages.
         * @param message ServerProcessMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: intiface_protocol.IServerProcessMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerProcessMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerProcessMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerProcessMessage;

        /**
         * Decodes a ServerProcessMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerProcessMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerProcessMessage;

        /**
         * Verifies a ServerProcessMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerProcessMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerProcessMessage
         */
        public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerProcessMessage;

        /**
         * Creates a plain object from a ServerProcessMessage message. Also converts values to other types if specified.
         * @param message ServerProcessMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: intiface_protocol.ServerProcessMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerProcessMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ServerProcessMessage {

        /** Properties of a ProcessLog. */
        interface IProcessLog {

            /** ProcessLog message */
            message?: (string|null);
        }

        /** Represents a ProcessLog. */
        class ProcessLog implements IProcessLog {

            /**
             * Constructs a new ProcessLog.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerProcessMessage.IProcessLog);

            /** ProcessLog message. */
            public message: string;

            /**
             * Creates a new ProcessLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessLog instance
             */
            public static create(properties?: intiface_protocol.ServerProcessMessage.IProcessLog): intiface_protocol.ServerProcessMessage.ProcessLog;

            /**
             * Encodes the specified ProcessLog message. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ProcessLog.verify|verify} messages.
             * @param message ProcessLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerProcessMessage.IProcessLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessLog message, length delimited. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ProcessLog.verify|verify} messages.
             * @param message ProcessLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerProcessMessage.IProcessLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerProcessMessage.ProcessLog;

            /**
             * Decodes a ProcessLog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerProcessMessage.ProcessLog;

            /**
             * Verifies a ProcessLog message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessLog message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessLog
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerProcessMessage.ProcessLog;

            /**
             * Creates a plain object from a ProcessLog message. Also converts values to other types if specified.
             * @param message ProcessLog
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerProcessMessage.ProcessLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessLog to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProcessStarted. */
        interface IProcessStarted {
        }

        /** Represents a ProcessStarted. */
        class ProcessStarted implements IProcessStarted {

            /**
             * Constructs a new ProcessStarted.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerProcessMessage.IProcessStarted);

            /**
             * Creates a new ProcessStarted instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessStarted instance
             */
            public static create(properties?: intiface_protocol.ServerProcessMessage.IProcessStarted): intiface_protocol.ServerProcessMessage.ProcessStarted;

            /**
             * Encodes the specified ProcessStarted message. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ProcessStarted.verify|verify} messages.
             * @param message ProcessStarted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerProcessMessage.IProcessStarted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessStarted message, length delimited. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ProcessStarted.verify|verify} messages.
             * @param message ProcessStarted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerProcessMessage.IProcessStarted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessStarted message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerProcessMessage.ProcessStarted;

            /**
             * Decodes a ProcessStarted message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerProcessMessage.ProcessStarted;

            /**
             * Verifies a ProcessStarted message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessStarted message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessStarted
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerProcessMessage.ProcessStarted;

            /**
             * Creates a plain object from a ProcessStarted message. Also converts values to other types if specified.
             * @param message ProcessStarted
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerProcessMessage.ProcessStarted, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessStarted to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProcessEnded. */
        interface IProcessEnded {
        }

        /** Represents a ProcessEnded. */
        class ProcessEnded implements IProcessEnded {

            /**
             * Constructs a new ProcessEnded.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerProcessMessage.IProcessEnded);

            /**
             * Creates a new ProcessEnded instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessEnded instance
             */
            public static create(properties?: intiface_protocol.ServerProcessMessage.IProcessEnded): intiface_protocol.ServerProcessMessage.ProcessEnded;

            /**
             * Encodes the specified ProcessEnded message. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ProcessEnded.verify|verify} messages.
             * @param message ProcessEnded message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerProcessMessage.IProcessEnded, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessEnded message, length delimited. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ProcessEnded.verify|verify} messages.
             * @param message ProcessEnded message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerProcessMessage.IProcessEnded, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessEnded message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerProcessMessage.ProcessEnded;

            /**
             * Decodes a ProcessEnded message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerProcessMessage.ProcessEnded;

            /**
             * Verifies a ProcessEnded message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessEnded message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessEnded
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerProcessMessage.ProcessEnded;

            /**
             * Creates a plain object from a ProcessEnded message. Also converts values to other types if specified.
             * @param message ProcessEnded
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerProcessMessage.ProcessEnded, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessEnded to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ButtplugLog. */
        interface IButtplugLog {

            /** ButtplugLog message */
            message?: (string|null);
        }

        /** Represents a ButtplugLog. */
        class ButtplugLog implements IButtplugLog {

            /**
             * Constructs a new ButtplugLog.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerProcessMessage.IButtplugLog);

            /** ButtplugLog message. */
            public message: string;

            /**
             * Creates a new ButtplugLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ButtplugLog instance
             */
            public static create(properties?: intiface_protocol.ServerProcessMessage.IButtplugLog): intiface_protocol.ServerProcessMessage.ButtplugLog;

            /**
             * Encodes the specified ButtplugLog message. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ButtplugLog.verify|verify} messages.
             * @param message ButtplugLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerProcessMessage.IButtplugLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ButtplugLog message, length delimited. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ButtplugLog.verify|verify} messages.
             * @param message ButtplugLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerProcessMessage.IButtplugLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ButtplugLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ButtplugLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerProcessMessage.ButtplugLog;

            /**
             * Decodes a ButtplugLog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ButtplugLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerProcessMessage.ButtplugLog;

            /**
             * Verifies a ButtplugLog message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ButtplugLog message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ButtplugLog
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerProcessMessage.ButtplugLog;

            /**
             * Creates a plain object from a ButtplugLog message. Also converts values to other types if specified.
             * @param message ButtplugLog
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerProcessMessage.ButtplugLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ButtplugLog to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ClientConnected. */
        interface IClientConnected {

            /** ClientConnected clientName */
            clientName?: (string|null);
        }

        /** Represents a ClientConnected. */
        class ClientConnected implements IClientConnected {

            /**
             * Constructs a new ClientConnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerProcessMessage.IClientConnected);

            /** ClientConnected clientName. */
            public clientName: string;

            /**
             * Creates a new ClientConnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientConnected instance
             */
            public static create(properties?: intiface_protocol.ServerProcessMessage.IClientConnected): intiface_protocol.ServerProcessMessage.ClientConnected;

            /**
             * Encodes the specified ClientConnected message. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ClientConnected.verify|verify} messages.
             * @param message ClientConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerProcessMessage.IClientConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientConnected message, length delimited. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ClientConnected.verify|verify} messages.
             * @param message ClientConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerProcessMessage.IClientConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientConnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerProcessMessage.ClientConnected;

            /**
             * Decodes a ClientConnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerProcessMessage.ClientConnected;

            /**
             * Verifies a ClientConnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientConnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientConnected
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerProcessMessage.ClientConnected;

            /**
             * Creates a plain object from a ClientConnected message. Also converts values to other types if specified.
             * @param message ClientConnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerProcessMessage.ClientConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientConnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ClientDisconnected. */
        interface IClientDisconnected {
        }

        /** Represents a ClientDisconnected. */
        class ClientDisconnected implements IClientDisconnected {

            /**
             * Constructs a new ClientDisconnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerProcessMessage.IClientDisconnected);

            /**
             * Creates a new ClientDisconnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientDisconnected instance
             */
            public static create(properties?: intiface_protocol.ServerProcessMessage.IClientDisconnected): intiface_protocol.ServerProcessMessage.ClientDisconnected;

            /**
             * Encodes the specified ClientDisconnected message. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ClientDisconnected.verify|verify} messages.
             * @param message ClientDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerProcessMessage.IClientDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientDisconnected message, length delimited. Does not implicitly {@link intiface_protocol.ServerProcessMessage.ClientDisconnected.verify|verify} messages.
             * @param message ClientDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerProcessMessage.IClientDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientDisconnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerProcessMessage.ClientDisconnected;

            /**
             * Decodes a ClientDisconnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerProcessMessage.ClientDisconnected;

            /**
             * Verifies a ClientDisconnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientDisconnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientDisconnected
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerProcessMessage.ClientDisconnected;

            /**
             * Creates a plain object from a ClientDisconnected message. Also converts values to other types if specified.
             * @param message ClientDisconnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerProcessMessage.ClientDisconnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientDisconnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeviceConnected. */
        interface IDeviceConnected {

            /** DeviceConnected deviceName */
            deviceName?: (string|null);

            /** DeviceConnected deviceId */
            deviceId?: (number|null);
        }

        /** Represents a DeviceConnected. */
        class DeviceConnected implements IDeviceConnected {

            /**
             * Constructs a new DeviceConnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerProcessMessage.IDeviceConnected);

            /** DeviceConnected deviceName. */
            public deviceName: string;

            /** DeviceConnected deviceId. */
            public deviceId: number;

            /**
             * Creates a new DeviceConnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceConnected instance
             */
            public static create(properties?: intiface_protocol.ServerProcessMessage.IDeviceConnected): intiface_protocol.ServerProcessMessage.DeviceConnected;

            /**
             * Encodes the specified DeviceConnected message. Does not implicitly {@link intiface_protocol.ServerProcessMessage.DeviceConnected.verify|verify} messages.
             * @param message DeviceConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerProcessMessage.IDeviceConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeviceConnected message, length delimited. Does not implicitly {@link intiface_protocol.ServerProcessMessage.DeviceConnected.verify|verify} messages.
             * @param message DeviceConnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerProcessMessage.IDeviceConnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceConnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerProcessMessage.DeviceConnected;

            /**
             * Decodes a DeviceConnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeviceConnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerProcessMessage.DeviceConnected;

            /**
             * Verifies a DeviceConnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeviceConnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeviceConnected
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerProcessMessage.DeviceConnected;

            /**
             * Creates a plain object from a DeviceConnected message. Also converts values to other types if specified.
             * @param message DeviceConnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerProcessMessage.DeviceConnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeviceConnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeviceDisconnected. */
        interface IDeviceDisconnected {

            /** DeviceDisconnected deviceId */
            deviceId?: (number|null);
        }

        /** Represents a DeviceDisconnected. */
        class DeviceDisconnected implements IDeviceDisconnected {

            /**
             * Constructs a new DeviceDisconnected.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerProcessMessage.IDeviceDisconnected);

            /** DeviceDisconnected deviceId. */
            public deviceId: number;

            /**
             * Creates a new DeviceDisconnected instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceDisconnected instance
             */
            public static create(properties?: intiface_protocol.ServerProcessMessage.IDeviceDisconnected): intiface_protocol.ServerProcessMessage.DeviceDisconnected;

            /**
             * Encodes the specified DeviceDisconnected message. Does not implicitly {@link intiface_protocol.ServerProcessMessage.DeviceDisconnected.verify|verify} messages.
             * @param message DeviceDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerProcessMessage.IDeviceDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeviceDisconnected message, length delimited. Does not implicitly {@link intiface_protocol.ServerProcessMessage.DeviceDisconnected.verify|verify} messages.
             * @param message DeviceDisconnected message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerProcessMessage.IDeviceDisconnected, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceDisconnected message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerProcessMessage.DeviceDisconnected;

            /**
             * Decodes a DeviceDisconnected message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeviceDisconnected
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerProcessMessage.DeviceDisconnected;

            /**
             * Verifies a DeviceDisconnected message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeviceDisconnected message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeviceDisconnected
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerProcessMessage.DeviceDisconnected;

            /**
             * Creates a plain object from a DeviceDisconnected message. Also converts values to other types if specified.
             * @param message DeviceDisconnected
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerProcessMessage.DeviceDisconnected, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeviceDisconnected to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Configuration. */
        interface IConfiguration {

            /** Configuration configuration */
            configuration?: (string|null);
        }

        /** Represents a Configuration. */
        class Configuration implements IConfiguration {

            /**
             * Constructs a new Configuration.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerProcessMessage.IConfiguration);

            /** Configuration configuration. */
            public configuration: string;

            /**
             * Creates a new Configuration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Configuration instance
             */
            public static create(properties?: intiface_protocol.ServerProcessMessage.IConfiguration): intiface_protocol.ServerProcessMessage.Configuration;

            /**
             * Encodes the specified Configuration message. Does not implicitly {@link intiface_protocol.ServerProcessMessage.Configuration.verify|verify} messages.
             * @param message Configuration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerProcessMessage.IConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Configuration message, length delimited. Does not implicitly {@link intiface_protocol.ServerProcessMessage.Configuration.verify|verify} messages.
             * @param message Configuration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerProcessMessage.IConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Configuration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Configuration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerProcessMessage.Configuration;

            /**
             * Decodes a Configuration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Configuration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerProcessMessage.Configuration;

            /**
             * Verifies a Configuration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Configuration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Configuration
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerProcessMessage.Configuration;

            /**
             * Creates a plain object from a Configuration message. Also converts values to other types if specified.
             * @param message Configuration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerProcessMessage.Configuration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Configuration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ServerFrontendMessage. */
    interface IServerFrontendMessage {

        /** ServerFrontendMessage startprocess */
        startprocess?: (intiface_protocol.ServerFrontendMessage.IStartProcess|null);

        /** ServerFrontendMessage stopprocess */
        stopprocess?: (intiface_protocol.ServerFrontendMessage.IStopProcess|null);

        /** ServerFrontendMessage startproxy */
        startproxy?: (intiface_protocol.ServerFrontendMessage.IStartProxy|null);

        /** ServerFrontendMessage stopproxy */
        stopproxy?: (intiface_protocol.ServerFrontendMessage.IStopProxy|null);

        /** ServerFrontendMessage updateconfig */
        updateconfig?: (intiface_protocol.ServerFrontendMessage.IUpdateConfig|null);
    }

    /** Represents a ServerFrontendMessage. */
    class ServerFrontendMessage implements IServerFrontendMessage {

        /**
         * Constructs a new ServerFrontendMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: intiface_protocol.IServerFrontendMessage);

        /** ServerFrontendMessage startprocess. */
        public startprocess?: (intiface_protocol.ServerFrontendMessage.IStartProcess|null);

        /** ServerFrontendMessage stopprocess. */
        public stopprocess?: (intiface_protocol.ServerFrontendMessage.IStopProcess|null);

        /** ServerFrontendMessage startproxy. */
        public startproxy?: (intiface_protocol.ServerFrontendMessage.IStartProxy|null);

        /** ServerFrontendMessage stopproxy. */
        public stopproxy?: (intiface_protocol.ServerFrontendMessage.IStopProxy|null);

        /** ServerFrontendMessage updateconfig. */
        public updateconfig?: (intiface_protocol.ServerFrontendMessage.IUpdateConfig|null);

        /** ServerFrontendMessage msg. */
        public msg?: ("startprocess"|"stopprocess"|"startproxy"|"stopproxy"|"updateconfig");

        /**
         * Creates a new ServerFrontendMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerFrontendMessage instance
         */
        public static create(properties?: intiface_protocol.IServerFrontendMessage): intiface_protocol.ServerFrontendMessage;

        /**
         * Encodes the specified ServerFrontendMessage message. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.verify|verify} messages.
         * @param message ServerFrontendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: intiface_protocol.IServerFrontendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerFrontendMessage message, length delimited. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.verify|verify} messages.
         * @param message ServerFrontendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: intiface_protocol.IServerFrontendMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerFrontendMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerFrontendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerFrontendMessage;

        /**
         * Decodes a ServerFrontendMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerFrontendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerFrontendMessage;

        /**
         * Verifies a ServerFrontendMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerFrontendMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerFrontendMessage
         */
        public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerFrontendMessage;

        /**
         * Creates a plain object from a ServerFrontendMessage message. Also converts values to other types if specified.
         * @param message ServerFrontendMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: intiface_protocol.ServerFrontendMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerFrontendMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ServerFrontendMessage {

        /** Properties of a StartProcess. */
        interface IStartProcess {
        }

        /** Represents a StartProcess. */
        class StartProcess implements IStartProcess {

            /**
             * Constructs a new StartProcess.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerFrontendMessage.IStartProcess);

            /**
             * Creates a new StartProcess instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartProcess instance
             */
            public static create(properties?: intiface_protocol.ServerFrontendMessage.IStartProcess): intiface_protocol.ServerFrontendMessage.StartProcess;

            /**
             * Encodes the specified StartProcess message. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.StartProcess.verify|verify} messages.
             * @param message StartProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerFrontendMessage.IStartProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartProcess message, length delimited. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.StartProcess.verify|verify} messages.
             * @param message StartProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerFrontendMessage.IStartProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartProcess message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerFrontendMessage.StartProcess;

            /**
             * Decodes a StartProcess message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerFrontendMessage.StartProcess;

            /**
             * Verifies a StartProcess message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartProcess message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartProcess
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerFrontendMessage.StartProcess;

            /**
             * Creates a plain object from a StartProcess message. Also converts values to other types if specified.
             * @param message StartProcess
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerFrontendMessage.StartProcess, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartProcess to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StopProcess. */
        interface IStopProcess {
        }

        /** Represents a StopProcess. */
        class StopProcess implements IStopProcess {

            /**
             * Constructs a new StopProcess.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerFrontendMessage.IStopProcess);

            /**
             * Creates a new StopProcess instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopProcess instance
             */
            public static create(properties?: intiface_protocol.ServerFrontendMessage.IStopProcess): intiface_protocol.ServerFrontendMessage.StopProcess;

            /**
             * Encodes the specified StopProcess message. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.StopProcess.verify|verify} messages.
             * @param message StopProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerFrontendMessage.IStopProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StopProcess message, length delimited. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.StopProcess.verify|verify} messages.
             * @param message StopProcess message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerFrontendMessage.IStopProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopProcess message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerFrontendMessage.StopProcess;

            /**
             * Decodes a StopProcess message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StopProcess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerFrontendMessage.StopProcess;

            /**
             * Verifies a StopProcess message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StopProcess message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StopProcess
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerFrontendMessage.StopProcess;

            /**
             * Creates a plain object from a StopProcess message. Also converts values to other types if specified.
             * @param message StopProcess
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerFrontendMessage.StopProcess, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StopProcess to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StartProxy. */
        interface IStartProxy {
        }

        /** Represents a StartProxy. */
        class StartProxy implements IStartProxy {

            /**
             * Constructs a new StartProxy.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerFrontendMessage.IStartProxy);

            /**
             * Creates a new StartProxy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartProxy instance
             */
            public static create(properties?: intiface_protocol.ServerFrontendMessage.IStartProxy): intiface_protocol.ServerFrontendMessage.StartProxy;

            /**
             * Encodes the specified StartProxy message. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.StartProxy.verify|verify} messages.
             * @param message StartProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerFrontendMessage.IStartProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartProxy message, length delimited. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.StartProxy.verify|verify} messages.
             * @param message StartProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerFrontendMessage.IStartProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartProxy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerFrontendMessage.StartProxy;

            /**
             * Decodes a StartProxy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerFrontendMessage.StartProxy;

            /**
             * Verifies a StartProxy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartProxy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartProxy
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerFrontendMessage.StartProxy;

            /**
             * Creates a plain object from a StartProxy message. Also converts values to other types if specified.
             * @param message StartProxy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerFrontendMessage.StartProxy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartProxy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StopProxy. */
        interface IStopProxy {
        }

        /** Represents a StopProxy. */
        class StopProxy implements IStopProxy {

            /**
             * Constructs a new StopProxy.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerFrontendMessage.IStopProxy);

            /**
             * Creates a new StopProxy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StopProxy instance
             */
            public static create(properties?: intiface_protocol.ServerFrontendMessage.IStopProxy): intiface_protocol.ServerFrontendMessage.StopProxy;

            /**
             * Encodes the specified StopProxy message. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.StopProxy.verify|verify} messages.
             * @param message StopProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerFrontendMessage.IStopProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StopProxy message, length delimited. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.StopProxy.verify|verify} messages.
             * @param message StopProxy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerFrontendMessage.IStopProxy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StopProxy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StopProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerFrontendMessage.StopProxy;

            /**
             * Decodes a StopProxy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StopProxy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerFrontendMessage.StopProxy;

            /**
             * Verifies a StopProxy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StopProxy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StopProxy
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerFrontendMessage.StopProxy;

            /**
             * Creates a plain object from a StopProxy message. Also converts values to other types if specified.
             * @param message StopProxy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerFrontendMessage.StopProxy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StopProxy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UpdateConfig. */
        interface IUpdateConfig {

            /** UpdateConfig configuration */
            configuration?: (string|null);
        }

        /** Represents an UpdateConfig. */
        class UpdateConfig implements IUpdateConfig {

            /**
             * Constructs a new UpdateConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: intiface_protocol.ServerFrontendMessage.IUpdateConfig);

            /** UpdateConfig configuration. */
            public configuration: string;

            /**
             * Creates a new UpdateConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateConfig instance
             */
            public static create(properties?: intiface_protocol.ServerFrontendMessage.IUpdateConfig): intiface_protocol.ServerFrontendMessage.UpdateConfig;

            /**
             * Encodes the specified UpdateConfig message. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.UpdateConfig.verify|verify} messages.
             * @param message UpdateConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: intiface_protocol.ServerFrontendMessage.IUpdateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateConfig message, length delimited. Does not implicitly {@link intiface_protocol.ServerFrontendMessage.UpdateConfig.verify|verify} messages.
             * @param message UpdateConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: intiface_protocol.ServerFrontendMessage.IUpdateConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): intiface_protocol.ServerFrontendMessage.UpdateConfig;

            /**
             * Decodes an UpdateConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): intiface_protocol.ServerFrontendMessage.UpdateConfig;

            /**
             * Verifies an UpdateConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateConfig
             */
            public static fromObject(object: { [k: string]: any }): intiface_protocol.ServerFrontendMessage.UpdateConfig;

            /**
             * Creates a plain object from an UpdateConfig message. Also converts values to other types if specified.
             * @param message UpdateConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: intiface_protocol.ServerFrontendMessage.UpdateConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
