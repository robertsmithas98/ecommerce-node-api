//Todos os atributos/propriedades que um produto deve ter no sistema
//Auxilia na criação de invariantes e modelos ricos
interface IProduto {
    id?: string;
    nome: string;
    descricao: string;
    valor: number;
    categorias: number;
}

//Atributos que são necessários para criar um produto
//Garantir a integridade dos dados de um objeto
type CriarProdutoProps = Omit<IProduto, "id">;

//Atributos que são necessários para recuperar um produto
type RecuperarProdutoProps = Required<IProduto>;

export {
    IProduto , 
    CriarProdutoProps,
    RecuperarProdutoProps
}