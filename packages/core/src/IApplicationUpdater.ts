export interface IApplicationUpdater {
  DownloadUpdate: () => Promise<void>;
  CheckForUpdate: () => Promise<boolean>;
  QuitAndInstall: () => void;
}
