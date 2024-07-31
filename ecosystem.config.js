module.exports = {
  apps: [
    {
      name: 'SQFT_API',
      script: 'pnpm run start:debug',
      watch: false,
    },
  ],

  deploy: {
    dev: {
      user: 'root',
      host: 'api2.squarefeet.cloud',
      ref: 'origin/v3-mvp',
      repo: 'git@gitlab.com:_squarefeet/api_aradei.git',
      path: '/var/www/sqft/v3/beta',
      'pre-deploy-local': '',
      'post-deploy':
        'rm -rf node_modules && pnpm install --force && pnpm deploy-migration:dev && pm2 start',
      'pre-setup': '',
    },
    v2: {
      user: 'root',
      host: 'api2.squarefeet.cloud',
      ref: 'origin/test',
      repo: 'git@gitlab.com:_squarefeet/api_aradei.git',
      path: '/var/www/aradei/api',
      'pre-deploy-local': '',
      'post-deploy':
        'rm -rf node_modules && pnpm install --force && npx prisma migrate deploy && pm2 start',
      'pre-setup': '',
    },
  },
};
