import { env } from '$env/dynamic/public';

/** True when the CAPTCHA is configured; forms then wait for a token before enabling submit. */
export const turnstileEnabled = Boolean(env.PUBLIC_TURNSTILE_SITE_KEY);
