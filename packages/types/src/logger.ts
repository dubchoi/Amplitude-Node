/** Console logging verbosity for the SDK. */
export enum LogLevel {
  /** No logs will be generated. */
  None = 0,
  /** Only SDK internal errors will be logged. */
  Error = 1,
  /** Information useful for debugging the SDK will be logged. */
  Warn = 2,
  /** All SDK actions will be logged. */
  Verbose = 3,
}
