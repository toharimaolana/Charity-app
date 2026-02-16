import Xendit from 'xendit-node';

// Check if API key exists
if (!process.env.XENDIT_API_KEY) {
	console.error('❌ XENDIT_API_KEY is missing in .env file');
	throw new Error('Xendit API Key is required');
}

const xenditClient = new Xendit({
	secretKey: process.env.XENDIT_API_KEY
});

export const { Invoice } = xenditClient;
