
export class IntifaceUtils {
  public static MakePromise<T>(): [Promise<T>, () => T, (err: Error) => void] {
    let res;
    let rej;
    const p = new Promise<T>((r, e) => { res = r; rej = e; });
    return [p, res, rej];
  }
  
  public static Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}