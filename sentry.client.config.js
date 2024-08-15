import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

console.log("This is client-side DSN:", process.env.NEXT_PUBLIC_SENTRY_DSN);
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [
    new Integrations.BrowserTracing({
      tracePropagationTargets: ["localhost", /^\//],
    }),
  ],
  tracesSampleRate: 1.0,
  environment: process.env.NEXT_PUBLIC_NODE_ENV,
  release: process.env.NEXT_PUBLIC_SENTRY_RELEASE || "my-project-name@2.3.0",
});
