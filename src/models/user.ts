import { IAddress } from "./address";

export interface IUser {
  id?: number;
  nome: string;
  cpf: string;
  email: string;
  endereco?: IAddress;
}
