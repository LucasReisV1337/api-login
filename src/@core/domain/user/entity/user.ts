import Trainning from "../../trainning/entity/trainning";
import { randomUUID as uuid } from "crypto";
export default class User {
  private _id: string;
  private _nickname: string;
  private _email: string;

  private _password: string;
  private _emailVerified: boolean;
  private _trainings: Trainning[];

  constructor(
    nickname: string,
    email: string,

    password: string,
    trainings: Trainning[] = []
  ) {
    this._id = uuid();
    this._nickname = nickname;
    this._email = email;
 
    this._password = password;
    this._emailVerified = false;
    this._trainings = trainings;
  }

  get id(): string {
    return this._id;
  }

  get nickname(): string {
    return this._nickname;
  }

  get email(): string {
    return this._email;
  }

 
  get password(): string {
    return this._password;
  }

  get emailVerified(): boolean {
    return this._emailVerified;
  }

  login(email: string, password: string): void {
    if (this._email === email && this._password === password) {
      this._emailVerified = true;
    } else {
      throw new Error("Email ou senha incorretos");
    }
  }

  verifyEmail(email: string): void {
    if (this._email === email) {
      this._emailVerified = true;
    } else {
      console.log("Email inválido");
    }
  }

  createAccount(
    nickname: string,
    email: string,
   
    password: string
  ): void {
    if (this._email === email) {
      console.log("Usuário já cadastrado");
    }
    this._nickname = nickname;
    this._email = email;
    
    this._password = password;
  }

  deleteAccount(email: string, password: string): void {
    if (this._email === email && this._password === password) {
    } else {
      console.log("Email ou senha inválidos");
    }
  }

  updateAccount(
    nickname: string,
    email: string,
    
    password: string
  ): void {
    if (this._email === email ) {
      console.log("Usuário já cadastrado");
    }
    this._nickname = nickname;
    this._email = email;
    
    this._password = password;
  }

  changePassword(email: string, password: string, newPassword: string): void {
    if (this._email === email && this._password === password) {
      this._password = newPassword;
    }
  }

  addTraining(training: Trainning): void {
    this._trainings.push(training);
  }

  getTrainings(): Trainning[] {
    return this._trainings;
  }

  editTraining(training: Trainning, updatedTraining: Trainning): void {
    const index = this._trainings.indexOf(training);
    this._trainings[index] = updatedTraining;
  }

  deleteTraining(training: Trainning): void {
    const index = this._trainings.indexOf(training);
    this._trainings.splice(index, 1);
  }
}
