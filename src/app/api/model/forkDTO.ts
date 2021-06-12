import {UserDTO} from "./userDTO";

export interface ForkDTO {
  created_at: Date;
  owner: UserDTO;
}
