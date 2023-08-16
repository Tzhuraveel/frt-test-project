import { ConfigurationServiceStatic } from "../configuration.service-static";

export const appConfig = {
  APP_PORT: Number(ConfigurationServiceStatic.get("APP_PORT")),
  LAPHIL_API_URL: ConfigurationServiceStatic.get("LAPHIL_API_URL"),
};
