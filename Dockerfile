FROM node:20.10-slim AS base
ENV NEXT_TELEMETRY_DISABLED=1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN pnpm run build

FROM base

RUN groupadd --gid 10001 nextapp && useradd --uid 10001 -g nextapp nextapp

COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build --chown=nextapp:nextapp /app/.next /app/.next
COPY --from=build --chown=nextapp:nextapp /app/public /app/public
COPY --from=build --chown=nextapp:nextapp /app/next.config.js /app/next.config.js

USER nextapp

EXPOSE 3000
CMD [ "pnpm", "start" ]
