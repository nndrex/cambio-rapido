import http from "node:http";
import { AddressInfo } from "node:net";

import express, { Express } from "express";

import { config } from "@/app/config/config";
import { healthRouter } from "@/app/health/api/health-router";

import { ConsoleLogger } from "@/shared/logger/console-logger";
import { Logger } from "@/shared/logger/logger";

import { exchangeRouter } from "../contexts/exchange/infrastructure/rest-api/Exchange.router";
import { rateRouter } from "../contexts/rates/infrastructure/rest-api/Rate.router";
import { authRouter } from "../contexts/Users/infrastructure/rest-api/AuthUser.router";
import { userRouter } from "../contexts/Users/infrastructure/rest-api/User.router";

export class Server {
  private readonly app: Express;
  private httpServer?: http.Server;
  private readonly logger: Logger;

  constructor() {
    this.logger = new ConsoleLogger();
    this.app = express();
    this.app.use(express.json());
    this.app.use("/api/health", healthRouter);
    this.app.use("/api/users", userRouter);
    this.app.use("/api/auth", authRouter);
    this.app.use("/api/exchanges", exchangeRouter);
    this.app.use("/api/config/rates", rateRouter);
  }

  async start(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.app.listen(config.server.port, () => {
        const { port } = this.httpServer?.address() as AddressInfo;
        this.logger.info(`App is ready and listening on port ${port} 🚀`);
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }

  getHttpServer(): http.Server | undefined {
    return this.httpServer;
  }
}
