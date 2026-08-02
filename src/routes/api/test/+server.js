import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function GET() {
	console.log('🧪 Testing environment variables...');
	
	const apiKey = env.XENDIT_API_KEY;
	const apiKeyExists = !!apiKey;
	const apiKeyPrefix = apiKey ? apiKey.substring(0, 25) + '...' : 'NONE';
	
	console.log('API Key exists:', apiKeyExists);
	console.log('API Key prefix:', apiKeyPrefix);
	
	return json({
		apiKeyLoaded: apiKeyExists,
		apiKeyPrefix: apiKeyPrefix,
		timestamp: new Date().toISOString()
	});
}
