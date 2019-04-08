export class User {
  firstName: string;
  lastName: string;
  email: string;
  message: string;

  constructor(
    firstName?: string,
    lastName?: string,
    email?: string,
    message?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.message = message;
  }
}
