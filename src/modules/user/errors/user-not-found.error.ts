export class UserNotFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}
