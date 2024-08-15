import * as Sentry from "@sentry/nextjs";
import { BrowserTracing } from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  release: process.env.SENTRY_RELEASE || "my-project-name@2.3.0",
});
