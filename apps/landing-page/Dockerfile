FROM node:24.12.0-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app


FROM base AS prepare

ENV TURBO_TELEMETRY_DISABLED=1

COPY . .
RUN yarn dlx turbo@^2 prune landing-page --docker


FROM base AS build

ENV NEXT_TELEMETRY_DISABLED=1
ENV TURBO_TELEMETRY_DISABLED=1

COPY .yarn .yarn
COPY --from=prepare /app/out/json/ .
RUN yarn install --immutable

COPY --from=prepare /app/out/full/ .
RUN yarn build


FROM gcr.io/distroless/nodejs24-debian13:nonroot AS runner
LABEL maintainer="Hewo / Ville Nupponen <ville.nupponen@hewo.fi>"

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=build --chown=nonroot:nonroot /app/apps/landing-page/.next/standalone ./
COPY --from=build --chown=nonroot:nonroot /app/apps/landing-page/.next/static ./apps/landing-page/.next/static
COPY --from=build --chown=nonroot:nonroot /app/apps/landing-page/public ./apps/landing-page/public

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["apps/landing-page/server.js"]
