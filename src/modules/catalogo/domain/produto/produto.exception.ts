import { DomainException } from "@shared/domain/domain.exception";

class ProdutoException extends DomainException {
    constructor(message:string = '⚠️ Exceção de Domínio Genérica da Entidade Produto') {
        super(message);
        this.name = 'ProdutoException'
        this.message = message;
    }
}

class NomeProdutoTamanhoMinimoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O nome do produto não possui um tamanho mínimo válido.') {
        super(message);
        this.name = 'NomeProdutoTamanhoMinimoInvalido'
        this.message = message;
    }
}

class NomeProdutoTamanhoMaximoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O nome do produto não possui um tamanho máximo válido.') {
        super(message);
        this.name = 'NomeProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMinimoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ A descrição do produto não possui um tamanho mínimo válido') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMinimoInvalido'
        this.message = message;
    }
}

class DescricaoProdutoTamanhoMaximoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ A descrição do produto não possui um tamanho máximo válido') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class PrecoProdutoValorMinimoInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O preço do produto não possui um valor mínimo válido') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMaximoInvalido'
        this.message = message;
    }
}

class ProdutoNumeroMinimoCategoriaInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O produto não tem um número mínimo válido de categorias') {
        super(message);
        this.name = 'ProdutoNumeroMinimoCategoriaInvalido'
        this.message = message;
    }
}

class ProdutoNumeroMaximoCategoriaInvalido extends ProdutoException {
    public constructor(message:string = '⚠️ O produto não tem um número máximo válido de categorias') {
        super(message);
        this.name = 'ProdutoNumeroMaximoCategoriaInvalido'
        this.message = message;
    }
}

export {
    ProdutoException,
    NomeProdutoTamanhoMinimoInvalido,
    NomeProdutoTamanhoMaximoInvalido,
    DescricaoProdutoTamanhoMinimoInvalido,
    DescricaoProdutoTamanhoMaximoInvalido,
    PrecoProdutoValorMinimoInvalido,
    ProdutoNumeroMinimoCategoriaInvalido,
    ProdutoNumeroMaximoCategoriaInvalido
};
