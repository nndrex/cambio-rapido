/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from "express";

import { DeleteExchangeRequest } from "../../application/DeleteExchangeRequest";
import { DetailExchangeRequest } from "../../application/DetailExchangeRequest";
import { GenerateExchangeRequest } from "../../application/GenerateExchangeRequest";
import { GetRate } from "../../application/GetRate";
import { ListExchangeRequests } from "../../application/ListExchangeRequests";

export class ExchangeController {
  constructor(
    private readonly listExchangeRequests: ListExchangeRequests,
    private readonly generateExchangeRequest: GenerateExchangeRequest,
    private readonly detailExchangeRequest: DetailExchangeRequest,
    private readonly deleteExchangeRequest: DeleteExchangeRequest,
    private readonly getrate: GetRate,
  ) {}

  async list(req: Request, res: Response) {
    const exchanges = await this.listExchangeRequests.listExchangeRequests();
    res.status(200).send(exchanges.map(exchange => exchange.toPrimitive()));
  }

  async generate(req: Request, res: Response) {
    const exchangeRate = await this.getrate.getRate();
    await this.generateExchangeRequest.generateExchangeRequest(
      req.body.tipoDeCambio,
      exchangeRate,
      req.body.montoEnviar,
      req.body.idUsuario,
    );
    res.status(201).send();
  }

  async detail(req: Request, res: Response) {
    const exchange = await this.detailExchangeRequest.detailExchangeRequest(
      req.params.id,
    );
    res.status(200).send(exchange.toPrimitive());
  }

  async delete(req: Request, res: Response) {
    await this.deleteExchangeRequest.deleteExchangeRequest(req.params.id);
    res.status(204).send();
  }
}
