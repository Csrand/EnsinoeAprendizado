// Se eu pedir uma interface para você, provavelmente sua resposta sera algo parecido com isso:
export interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    createdAt: Date;
    updateAt: Date;
}
/*
O código esta correto
Mas imagina que quiséssemos criar um Usuario no nosso sistema e que para isso, iríamos escrever uma função para isso.
Se tivéssemos algo assim:
*/
function createUser(user: User): User {
    return user;
}
/*
Seríamos obrigados a ter que passar todas as propriedades como paramêtro ou criar outra interface além dessa
somente para auxiliar essa função.
Para evitar isso, podemos utilizar de um mecanismo de tipo nativo do próprio TS
Vamos imaginar que eu so preciso apenas do nome e da idade
*/
type CreateUserInput = Pick<User, "name" | "age" | "email">;


function updateUser(user: User): User {
    // Se quero só mudar o email, ainda preciso passar name, age, etc.
    // Isso gera código verboso e propenso a erros
    return user;
}

// ❌ PROBLEMA: Renderização expõe dados internos que deveriam ser encapsulados
function render(user: User): void {
    console.log(`Nome: ${user.name}`);
    console.log(`Email: ${user.email}`);
    // Mas também tenho acesso a createdAt/updateAt — e se não quiser exibir?
}
