import { json } from '@sveltejs/kit';
import { XENDIT_API_KEY } from '$env/static/private';

export async function GET() {
	console.log('🧪 Testing environment variables...');
	
	const apiKeyExists = !!XENDIT_API_KEY;
	const apiKeyPrefix = XENDIT_API_KEY?.substring(0, 25) + '...';
	
	console.log('API Key exists:', apiKeyExists);
	console.log('API Key prefix:', apiKeyPrefix);
	
	return json({
		apiKeyLoaded: apiKeyExists,
		apiKeyPrefix: apiKeyPrefix,
		timestamp: new Date().toISOString()
	});
}
