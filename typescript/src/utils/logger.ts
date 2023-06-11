import { Response } from 'express';
import { Logger } from './../models/logger';
import { error } from 'console';

/**
 * funcao para formatacao de resposta e log de resposta
 *
 * @param  {[string]} rota rota acessada
 * @param  {[string]} metodo metodo acessado
 * @param  {[number]} status codigo de status
 * @param  {[any]} response resposta enviada ao usuario
 * @param  {[Response]} res response do express sendo usada
 */
function logger(rota: string, metodo: string, status: number, response: any, res: Response) {

  const logger: Logger = {
    rota: rota,
    metodo: metodo,
    code: status,
    response: response
  }

  res.status(logger.code).json({
    msg: response
  })

  console.log(`{Rota: ${logger.rota}; Metodo: ${logger.metodo}; Code: ${logger.code}; Response: ${logger.response} }`)
}

export default logger;