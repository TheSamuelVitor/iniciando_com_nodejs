"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * funcao para formatacao de resposta e log de resposta
 *
 * @param  {[string]} rota rota acessada
 * @param  {[string]} metodo metodo acessado
 * @param  {[number]} status codigo de status
 * @param  {[any]} response resposta enviada ao usuario
 * @param  {[Response]} res response do express sendo usada
 */
function logger(rota, metodo, status, response, res) {
    const logger = {
        rota: rota,
        metodo: metodo,
        code: status,
        response: response
    };
    res.status(logger.code).json({
        msg: response
    });
    console.log(`{Rota: ${logger.rota}; Metodo: ${logger.metodo}; Code: ${logger.code}; Response: ${logger.response} }`);
}
exports.default = logger;
