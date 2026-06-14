export type BusinessCategory = 'food' | 'beauty' | 'home-services';

export interface Business {
	id: string;
	name: string;
	category: BusinessCategory;
	type: string;
	city: string;
	state: 'KS' | 'MO';
	address?: string;
	phone?: string;
	website?: string;
	booking?: string;
	hours?: string;
	description: string;
	languages: string[];
	freelance?: boolean;
}

export const businesses: Business[] = [
	{
		id: 'golden-coffee',
		name: 'Golden Coffee',
		category: 'food',
		type: 'Coffee Shop & Café',
		city: 'Olathe',
		state: 'KS',
		address: '2145 E 151st St, Olathe, KS 66062',
		phone: '(913) 283-2765',
		hours: 'Daily 7:00 AM – 11:00 PM',
		description: 'Algerian-owned coffee shop and café serving specialty coffee, homemade pastries, and light Mediterranean bites in Olathe.',
		languages: ['Berber', 'Arabic', 'French', 'English'],
	},
	{
		id: 'kanza-market',
		name: 'Kanza Mediterranean Market',
		category: 'food',
		type: 'Grocery Store',
		city: 'Olathe',
		state: 'KS',
		address: '116 N Clairborne Rd, Olathe, KS 66062',
		phone: '(913) 712-8664',
		hours: 'Daily 10:00 AM – 8:00 PM',
		description: 'Your one-stop Mediterranean and North African grocery store in Olathe. Fresh produce, halal meats, North African sausages, spices, and homemade cookies.',
		languages: ['Berber', 'Arabic', 'French', 'English'],
	},
	{
		id: 'algerian-delights',
		name: 'Algerian Delights',
		category: 'food',
		type: 'Bakery & Pastries',
		city: 'Lenexa',
		state: 'KS',
		address: '12108 W 87th St Pkwy, Lenexa, KS 66215',
		phone: '(913) 258-5034',
		website: 'https://www.algerian-delights.com',
		hours: 'Mon & Wed–Sat 7:30 AM – 7:00 PM · Closed Tuesday',
		description: 'Family-owned Algerian bakery specializing in traditional homemade cookies, pastries, cakes, and Algerian sweets made from scratch.',
		languages: ['Berber', 'Arabic', 'French', 'English'],
	},
	{
		id: 'sa-nails-barber',
		name: 'SA Nails & Barber',
		category: 'beauty',
		type: 'Nails & Barbering',
		city: 'Shawnee',
		state: 'KS',
		address: '10401 W 75th St, Shawnee, KS 66214',
		website: 'https://sa.bybluedigital.com',
		booking: 'https://www.vagaro.com/sanailsandbarber',
		description: 'Modern nail salon and precision barbering under one roof. Licensed technicians, online booking, and a welcoming atmosphere for the whole family.',
		languages: ['Berber', 'Arabic', 'French', 'English'],
	},
	{
		id: 'nextgen-hvac',
		name: 'Nextgen Heating and Cooling',
		category: 'home-services',
		type: 'HVAC',
		city: 'Olathe',
		state: 'KS',
		address: '14879 S Summit St, Olathe, KS 66062',
		phone: '(913) 368-4769',
		website: 'https://nextgenolathe.com',
		hours: 'Call for availability',
		description: 'Professional HVAC company serving the KC metro. Installation, repair, and maintenance for residential and commercial properties. 5-star rated on Angi.',
		languages: ['Berber', 'Arabic', 'French', 'English'],
	},
];

export const categoryMeta: Record<BusinessCategory, { label: string; icon: string; color: string }> = {
	food: { label: 'Food & Drinks', icon: 'fa-utensils', color: 'text-orange-500' },
	beauty: { label: 'Beauty & Care', icon: 'fa-scissors', color: 'text-pink-500' },
	'home-services': { label: 'Home Services', icon: 'fa-wrench', color: 'text-blue-500' },
};
