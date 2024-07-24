import "@/app/config/load-env-vars";

import { connect } from "@/app/config/database";
import { Server } from "@/app/server";

connect().catch(handleError);
new Server().start().catch(handleError);

function handleError(error: unknown) {
  // eslint-disable-next-line no-console
  console.error(error);
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}

process.on("uncaughtException", handleError);
