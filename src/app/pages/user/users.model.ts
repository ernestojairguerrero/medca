export interface usuariosModel {
  status: boolean;
  data: usersModel[];
}

export interface usersModel {
  id: number;
  name: string;
  email: string;
  email_verified_at?: any;
  role: string;
  created_at: string;
  updated_at: string;
}