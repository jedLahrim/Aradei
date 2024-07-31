export class AppError {
  code: string;
  error?: {};

  constructor(code: string, error?: {}) {
    this.code = code;
    this.error = error;
  }
}
