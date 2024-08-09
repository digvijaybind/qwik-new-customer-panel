import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://f046e115b166a159f58232c34f3d55e9@o4507747141812224.ingest.de.sentry.io/4507747434823760",
  tracesSampleRate: 1.0,
  environment: "development",
  release: "my-project-name@2.3.0",
});
