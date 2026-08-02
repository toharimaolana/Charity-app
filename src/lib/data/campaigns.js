export const categories = [
	{ id: 'all', name: 'Semua Kategori', icon: '✨' },
	{ id: 'bencana', name: 'Tanggap Bencana', icon: '🌋' },
	{ id: 'pendidikan', name: 'Pendidikan Anak', icon: '🎒' },
	{ id: 'kesehatan', name: 'Bantuan Medis', icon: '🏥' },
	{ id: 'panti', name: 'Panti Asuhan & Lansia', icon: '👴' },
	{ id: 'lingkungan', name: 'Konservasi Alam', icon: '🌱' }
];

export const campaigns = [
	{
		id: 'c1',
		title: 'Bantu Pak Mamat Bangun Kembali Rumah Pasca Banjir Bandar Lampung',
		slug: 'bantu-pak-mamat-bangun-rumah',
		description: 'Banjir bandang menghanyutkan seluruh tempat tinggal Pak Mamat dan 14 keluarga lansia lainnya. Mari gotong royong bangun hunian layak.',
		target: 150000000,
		raised: 112500000,
		category: 'bencana',
		image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&auto=format&fit=crop&q=80',
		location: 'Bandar Lampung',
		daysLeft: 12,
		isUrgent: true
	},
	{
		id: 'c2',
		title: 'Beasiswa Alat Tulis & Seragam untuk 500 Anak Rimba Jambi',
		slug: 'beasiswa-anak-rimba-jambi',
		description: 'Memberikan akses pendidikan inklusif, buku bacaan, dan perlengkapan sekolah untuk anak-anak di pedalaman hutan Jambi.',
		target: 85000000,
		raised: 54200000,
		category: 'pendidikan',
		image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
		location: 'Sarolangun, Jambi',
		daysLeft: 24,
		isUrgent: false
	},
	{
		id: 'c3',
		title: 'Operasi Pemulihan Jantung Dik Kenzo (Usia 2 Tahun)',
		slug: 'operasi-jantung-dik-kenzo',
		description: 'Kenzo berjuang melawan kelainan jantung bawaan. Ayahnya seorang buruh tani yang tak mampu membiayai operasi di RS Harapan Kita.',
		target: 200000000,
		raised: 182000000,
		category: 'kesehatan',
		image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
		location: 'Garut, Jawa Barat',
		daysLeft: 5,
		isUrgent: true
	},
	{
		id: 'c4',
		title: 'Sajikan 1.000 Porsi Makan Sehat untuk Kakek-Nenek Panti Jompo',
		slug: 'makan-sehat-panti-jompo',
		description: 'Menjamin kecukupan gizi dan nutrisi harian untuk lansia terlantar di 5 panti jompo wilayah Jabodetabek.',
		target: 45000000,
		raised: 39800000,
		category: 'panti',
		image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&auto=format&fit=crop&q=80',
		location: 'Bogor, Jawa Barat',
		daysLeft: 18,
		isUrgent: false
	}
];

export function getCampaignBySlug(slug) {
	return campaigns.find((c) => c.slug === slug || c.id === slug);
}
