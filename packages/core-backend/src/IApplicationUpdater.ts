import { EventEmitter } from "events";

export interface IApplicationUpdater extends EventEmitter {
  DownloadUpdate: () => Promise<void>;
  CheckForUpdate: () => Promise<boolean>;
  QuitAndInstall: () => void;
  CancelUpdate: () => void;
}
