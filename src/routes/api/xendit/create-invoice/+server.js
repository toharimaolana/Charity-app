import { json } from '@sveltejs/kit';
import { XENDIT_API_KEY } from '$env/static/private';

export async function POST({ request, url }) {
	try {
		console.log('=== XENDIT CREATE INVOICE (REST API) ===');

		// Check API key
		if (!XENDIT_API_KEY) {
			console.error('❌ API Key not found');
			return json({ error: 'API Key tidak tersedia' }, { status: 500 });
		}

		console.log('✅ API Key loaded');

		// Parse request body
		const body = await request.json();
		const { amount, campaignSlug, campaignTitle, donorName, donorEmail } = body;

		console.log('📨 Request data:', {
			amount,
			campaignSlug,
			campaignTitle,
			donorEmail
		});

		// Validation
		if (!amount || amount < 10000) {
			return json({ error: 'Minimal donasi Rp 10.000' }, { status: 400 });
		}

		if (!donorEmail || !donorEmail.includes('@')) {
			return json({ error: 'Email tidak valid' }, { status: 400 });
		}

		// Generate unique external ID
		const externalId = `DONATE-${campaignSlug}-${Date.now()}`;
		const baseUrl = url.origin;

		console.log('🔄 Creating invoice with external ID:', externalId);

		// Prepare invoice data for Xendit API
		const invoicePayload = {
			external_id: externalId,
			amount: Number(amount),
			payer_email: donorEmail,
			description: `Donation for: ${campaignTitle}`,
			currency: 'IDR',
			invoice_duration: 86400, // 24 hours in seconds
			success_redirect_url: `${baseUrl}/donation/success?external_id=${externalId}`,
			failure_redirect_url: `${baseUrl}/donation/failed?external_id=${externalId}`
		};

		// Add customer info if name provided
		if (donorName && donorName.trim() !== '') {
			invoicePayload.customer = {
				given_names: donorName,
				email: donorEmail
			};
		}

		console.log('📤 Sending to Xendit API...');

		// Create Basic Auth header (API_KEY:)
		const authString = XENDIT_API_KEY + ':';
		const base64Auth = Buffer.from(authString).toString('base64');

		// Call Xendit REST API directly
		const xenditResponse = await fetch('https://api.xendit.co/v2/invoices', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Basic ${base64Auth}`
			},
			body: JSON.stringify(invoicePayload)
		});

		const responseData = await xenditResponse.json();

		console.log('📥 Xendit response status:', xenditResponse.status);

		// Check if request was successful
		if (!xenditResponse.ok) {
			console.error('❌ Xendit API error:', responseData);
			throw new Error(responseData.message || 'Xendit API error');
		}

		console.log('✅ Invoice created successfully');
		console.log('Invoice ID:', responseData.id);
		console.log('Invoice URL:', responseData.invoice_url);

		// Return success response
		return json({
			success: true,
			invoiceId: responseData.id,
			externalId: responseData.external_id,
			invoiceUrl: responseData.invoice_url,
			status: responseData.status,
			expiryDate: responseData.expiry_date
		});

	} catch (error) {
		console.error('❌ Error creating invoice:');
		console.error('Message:', error.message);
		console.error('Stack:', error.stack);

		return json(
			{
				error: 'Gagal membuat invoice',
				detail: error.message
			},
			{ status: 500 }
		);
	}
}
