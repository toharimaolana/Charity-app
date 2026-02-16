// src/lib/data/campaigns.js

export const campaigns = [
	{
		id: 1,
		slug: 'help-gaza',
		title: 'Help Gaza',
		description:
			'Help provide quality education and learning materials for children in Gaza.',
		image: '/images/campaign1.jpg',
		raised: 15000000,
		target: 30000000,
		donors: 234,
		daysLeft: 15,
		category: 'Education',
		location: 'Gaza',
		shortDescription:
			'Support children in Gaza with access to quality education and safe learning spaces.',
		longDescription:
			'Many children in Gaza are facing limited access to education due to conflict and infrastructure damage. This campaign focuses on providing school supplies, rebuilding learning spaces, and supporting teachers so that children can continue their education in a safe and supportive environment.',
		highlights: [
			'1,000+ school kits distributed',
			'5 learning centers supported',
			'Teacher assistance and training programs'
		],
		usageBreakdown: [
			{ label: 'School Supplies & Books', percent: 45 },
			{ label: 'Infrastructure & Facilities', percent: 30 },
			{ label: 'Teacher Support', percent: 15 },
			{ label: 'Operations & Admin', percent: 10 }
		],
		organizer: {
			name: 'Global Education Relief',
			verified: true,
			totalCampaigns: 10,
			totalRaised: 350000000
		}
	},
	{
		id: 2,
		slug: 'education-sudan-children',
		title: 'Education for Sudan Children',
		description:
			'Support underprivileged children with access to education and school supplies.',
		image: '/images/campaign2.jpg',
		raised: 22000000,
		target: 40000000,
		donors: 456,
		daysLeft: 22,
		category: 'Education',
		location: 'Sudan',
		shortDescription:
			'Provide school supplies, uniforms, and learning support for children in Sudan.',
		longDescription:
			'Children in Sudan often struggle to stay in school due to economic challenges and lack of resources. Your donation helps provide school kits, uniforms, and community-based learning programs so that children can continue their studies and build a better future.',
		highlights: [
			'2,000+ students supported',
			'Scholarships for high-performing students',
			'Community learning hubs established'
		],
		usageBreakdown: [
			{ label: 'School Supplies & Uniforms', percent: 50 },
			{ label: 'Scholarships', percent: 20 },
			{ label: 'Community Programs', percent: 20 },
			{ label: 'Operations & Admin', percent: 10 }
		],
		organizer: {
			name: 'Sudan Children Foundation',
			verified: true,
			totalCampaigns: 7,
			totalRaised: 210000000
		}
	},
	{
		id: 3,
		slug: 'clean-water-project',
		title: 'Clean Water for Rural Communities',
		description:
			'Build water wells and sanitation facilities for communities without access to clean water.',
		image: 'https://placehold.co/800x500/3b82f6/ffffff?text=Clean+Water+Project',
		raised: 35000000,
		target: 50000000,
		donors: 789,
		daysLeft: 8,
		category: 'Environment',
		location: 'East Java, Indonesia',
		shortDescription:
			'Provide sustainable access to clean water and sanitation for rural communities.',
		longDescription:
			'Millions of people still lack access to safe drinking water and proper sanitation. This project builds wells, installs water filtration systems, and educates communities on hygiene practices to ensure long-term access to clean water.',
		highlights: [
			'50+ water wells planned',
			'10,000+ people to benefit',
			'Water management and hygiene training'
		],
		usageBreakdown: [
			{ label: 'Well Construction', percent: 50 },
			{ label: 'Sanitation Facilities', percent: 25 },
			{ label: 'Training & Education', percent: 15 },
			{ label: 'Maintenance Fund', percent: 10 }
		],
		organizer: {
			name: 'Water For Life Indonesia',
			verified: true,
			totalCampaigns: 8,
			totalRaised: 180000000
		}
	},
	{
		id: 4,
		slug: 'food-security-program',
		title: 'Food Security Program',
		description:
			'Distribute nutritious meals and food packages to families in need across Indonesia.',
		image: 'https://placehold.co/800x500/10b981/ffffff?text=Food+Security+Program',
		raised: 18000000,
		target: 25000000,
		donors: 345,
		daysLeft: 30,
		category: 'Relief',
		location: 'Indonesia',
		shortDescription:
			'Provide food assistance and nutrition support for vulnerable families.',
		longDescription:
			'Rising food prices and economic challenges make it difficult for many families to meet their daily nutritional needs. This program distributes food packages, supports community kitchens, and runs nutrition awareness campaigns.',
		highlights: [
			'5,000+ food packages distributed',
			'Community kitchens in multiple cities',
			'Nutrition workshops for families'
		],
		usageBreakdown: [
			{ label: 'Food Packages', percent: 60 },
			{ label: 'Community Kitchens', percent: 20 },
			{ label: 'Nutrition Programs', percent: 10 },
			{ label: 'Operations & Admin', percent: 10 }
		],
		organizer: {
			name: 'Food Care Indonesia',
			verified: true,
			totalCampaigns: 5,
			totalRaised: 120000000
		}
	}
];

// Helper untuk dapat 1 campaign by slug
export function getCampaignBySlug(slug) {
	return campaigns.find((c) => c.slug === slug);
}
