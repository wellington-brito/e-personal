//representa o usuário
export class User {
    nome: string;
    senha: string;
    cpf: string;
    email: string;
    perfil: string;
    role: string;
    token?: string;
}

/*export interface ResponseUsers {
    page: number;
    per_page: number;
    total: number;
    total_page: number;
    data: User[];
}*/