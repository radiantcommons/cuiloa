FROM docker.io/library/node:20-alpine
LABEL maintainer="team@penumbralabs.xyz"
ARG PNPM_VERSION="9.1.1"

# Create docroot as normal user.
RUN mkdir -p /home/node/app/ && chown -R node:node /home/node/app
WORKDIR /home/node/app
RUN npm install -g pnpm@${PNPM_VERSION}
COPY --chown=node:node . .
USER node

# Install project.
RUN pnpm config set @buf:registry  https://buf.build/gen/npm/v1/
RUN pnpm install
RUN pnpm build

# Run.
EXPOSE 3000
CMD [ "pnpm", "dev" ]
