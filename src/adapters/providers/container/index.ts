import { HealthProvider } from "../health/Health.provider";
import logger from "../../../infrastructure/logger/Logger";
import { WorkerProvider } from "../worker/Worker.provider";
import { AuthProvider } from "../auth/Auth.provider";
import { LogProvider } from "../log/Log.provider";
import kernel from "../../shared/kernel";

const CONTEXT = "ProviderContainer";

kernel.addSingleton(LogProvider.name, new LogProvider(logger));
kernel.addSingleton(
  AuthProvider.name,
  new AuthProvider(kernel.get<LogProvider>(CONTEXT, LogProvider.name)),
);
kernel.addSingleton(HealthProvider.name, new HealthProvider());
kernel.addSingleton(
  WorkerProvider.name,
  new WorkerProvider(kernel.get<LogProvider>(CONTEXT, LogProvider.name)),
);

export { LogProvider, AuthProvider, HealthProvider, WorkerProvider };
export default kernel;