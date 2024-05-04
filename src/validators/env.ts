// Source: https://github.com/NiaAxern/discord-youtube-subscriber-count/blob/main/src/validators/env.ts

import { z } from 'zod';

const envVariables = z.object({
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
})

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof envVariables> { }
	}
}

console.log('Validating environment variables...');

const parsed = envVariables.safeParse(process.env);
if (parsed.success === false) {
	console.error(
		'❌ Invalid environment variables:',
		parsed.error.flatten().fieldErrors,
	);
	throw new SyntaxError('Invalid environment variables');
}

console.log('Environment variables seem to be correct...');