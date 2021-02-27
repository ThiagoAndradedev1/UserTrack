import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/user";
import { IViaCep } from "../models/via-cep";

axios.defaults.baseURL = "http://localhost:5000";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}, config: object) =>
    axios.post(url, body, config).then(responseBody),
  put: (url: string, body: {}, config: object) =>
    axios.put(url, body, config).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const Users = {
  list: (): Promise<IUser[]> => requests.get("/usuarios"),
  create: (user: IUser) => requests.post("/usuarios", user, config),
  update: (user: IUser) => requests.put(`/usuarios/${user.id}`, user, config),
  delete: (id: number) => requests.del(`/usuarios/${id}`),
  getEndereco: (cep: string): Promise<IViaCep> =>
    requests.get(`https://viacep.com.br/ws/${cep}/json/`),
};

export default Users;
