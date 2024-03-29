import express, { Application } from "express";
import { afterEach, beforeAll, describe, expect, test, vi } from "vitest";
import { MockProxy, mock, mockReset } from "vitest-mock-extended";
import { RecuperarCategoriaPorIdExpressController } from "./controllers/recuperar-categoria-por-id/recuperar-categoria-por-id.express.controller";
import { InserirCategoriaExpressController } from "./controllers/inserir-categoria/inserir-categoria.express.controller";
import { CriarCategoriaProps, ICategoria } from "@modules/catalogo/domain/categoria/categoria.types";
import request from 'supertest';

let appMock: Application;
let recuperarCategoriaPorIdControllerMock: MockProxy<RecuperarCategoriaPorIdExpressController>;
let inserirCategoriaControllerMock: MockProxy<InserirCategoriaExpressController>;

describe('[REST] Rotas Express: Categoria', () => {

    beforeAll(async () => {
        appMock = express();
        recuperarCategoriaPorIdControllerMock = mock<RecuperarCategoriaPorIdExpressController>();
        inserirCategoriaControllerMock = mock<InserirCategoriaExpressController>();
    });

    afterEach(() => {
        vi.restoreAllMocks();
        mockReset(recuperarCategoriaPorIdControllerMock);
        mockReset(inserirCategoriaControllerMock);
    });

    describe('GET api/v1/categorias/:id', () => {

        test('Deve Retornar Status 200 e um Objeto do Tipo ICategoria no formato JSON', async () => {
            
            //Dado (Given)
			const categoriaInputDTO: ICategoria = {
                id: "f7fa603c-d7eb-4861-ba58-6b27d2b9efb6",
                nome: "Cama"
            }

            recuperarCategoriaPorIdControllerMock.recuperar.mockImplementation(async (request, response, next) => {
                response.status(200).json(categoriaInputDTO);
            });

            appMock.use('/api/v1/categorias/:id', recuperarCategoriaPorIdControllerMock.recuperar);

            //Quando (When)
			const response = await request(appMock)
                .get('/api/v1/categorias/f7fa603c-d7eb-4861-ba58-6b27d2b9efb6')

            //Então (Then
			expect(response.status).toEqual(200);
            expect(response.headers["content-type"]).toMatch(/json/);
            expect(response.body).toEqual(categoriaInputDTO);

        });

    });

    describe('POST api/v1/categorias', () => {

        test('Deve Retornar Status 200 e um Objeto do Tipo ICategoria no formato JSON', async () => {

            //Dado (Given)
            const categoriaInputDTO: CriarCategoriaProps = {
                nome: "Cama"
            };

            const categoriaOutputDTO: ICategoria = {
                id: "f7fa603c-d7eb-4861-ba58-6b27d2b9efb6",
                nome: "Cama"
            }

            inserirCategoriaControllerMock.inserir.mockImplementation(async (request, response, next) => {
                response.status(200).json(categoriaOutputDTO);
            });

            appMock.use('/api/v1/categorias', inserirCategoriaControllerMock.inserir); // Cast to any for mocking purposes

			//Quando (When)
			const response = await request(appMock)
                .post('/api/v1/categorias')
                .send(categoriaInputDTO)

            //Então (Then
			expect(response.status).toEqual(200);
            expect(response.headers["content-type"]).toMatch(/json/);
            expect(response.body).toEqual(categoriaOutputDTO);

        });	

    });

});