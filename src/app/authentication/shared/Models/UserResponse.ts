import { User } from "./user"

export class UserResponse {
  token?: string;
  responseData?: Array<User>;
  messages?: Array<string>;
}