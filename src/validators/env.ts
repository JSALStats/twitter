// Source: https://github.com/NiaAxern/discord-youtube-subscriber-count/blob/main/src/validators/env.ts

import { z } from 'zod';

// Custom type guard function to handle nullable string values
function isNullableString(value: unknown): value is string | undefined {
	return typeof value === 'string' || value === null || value === undefined;
}

const envVariablesSchema = z.object({
	YT_API_KEY: z.string().refine((str): str is string => str !== 'YOUR_KEY_HERE', {
		message: 'YT_API_KEY must be specified',
	}),
	TWITTER_API_KEY: z.string().refine((str): str is string => str !== 'YOUR_KEY_HERE', {
		message: 'TWITTER_API_KEY ID must be specified',
	}),
	TWITTER_API_SECRET_KEY: z.string().refine((str): str is string => str !== 'YOUR_KEY_HERE', {
		message: 'TWITTER_API_SECRET_KEY must be specified',
	}),
	TWITTER_BEARER_TOKEN: z.string().refine((str): str is string => str !== 'YOUR_KEY_HERE', {
		message: 'TWITTER_BEARER_TOKEN token must be specified',
	}),
	TWITTER_ACCESS_TOKEN: z.string().refine((str): str is string => str !== 'YOUR_KEY_HERE', {
		message: 'TWITTER_ACCESS_TOKEN must be specified',
	}),
	TWITTER_ACCESS_TOKEN_SECRET: z.string().refine((str): str is string => str !== 'YOUR_KEY_HERE', {
		message: 'TWITTER_ACCESS_TOKEN_SECRET must be specified',
	}),
	DISCORD_WEBHOOK_URL: z.string().nullable().optional(),
	DISCORD_WEBHOOK_NAME: z.string().nullable().optional(),
	DISCORD_WEBHOOK_AVATAR: z.string().nullable().optional(),
	DISCORD_WEBHOOK_NOTIFY_USER: z.string().nullable().optional(),
});

// Validate the environment variables
const parsedEnv = envVariablesSchema.safeParse(process.env);
if (!parsedEnv.success) {
	console.error('❌ Invalid environment variables:', parsedEnv.error.flatten().fieldErrors);
	throw new Error('Invalid environment variables');
}

// Extend the environment variables to ensure nullable strings
const env: NodeJS.ProcessEnv = Object.fromEntries(
	Object.entries(parsedEnv.data).map(([key, value]) => {
		return [key, isNullableString(value) ? value ?? '' : ''];
	})
);

console.log('Environment variables seem to be correct...');
