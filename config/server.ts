import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => {
  const publicUrl = env('PUBLIC_URL', '').trim();
  const behindProxy = env.bool('BEHIND_PROXY', false);
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    ...(publicUrl ? { url: publicUrl } : {}),
    ...(behindProxy ? { proxy: true } : {}),
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
};

export default config;
