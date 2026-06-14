export type ListingCategory = 'housing' | 'jobs' | 'furniture' | 'cars' | 'services' | 'other';

export interface Listing {
	id: string;
	category: ListingCategory;
	title: string;
	description: string;
	city: string;
	price?: string;
	postedDate: string;
	expiresDate: string;
	contactSubject: string;
}

export const listings: Listing[] = [];

export const listingCategoryMeta: Record<ListingCategory, { label: string; icon: string; color: string; bgColor: string }> = {
	housing: { label: 'Housing', icon: 'fa-house', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
	jobs: { label: 'Jobs', icon: 'fa-briefcase', color: 'text-blue-600', bgColor: 'bg-blue-50' },
	furniture: { label: 'Furniture', icon: 'fa-couch', color: 'text-amber-600', bgColor: 'bg-amber-50' },
	cars: { label: 'Cars', icon: 'fa-car', color: 'text-red-600', bgColor: 'bg-red-50' },
	services: { label: 'Services', icon: 'fa-screwdriver-wrench', color: 'text-purple-600', bgColor: 'bg-purple-50' },
	other: { label: 'Other', icon: 'fa-tag', color: 'text-gray-600', bgColor: 'bg-gray-50' },
};

export function isActive(listing: Listing, now = new Date()): boolean {
	return new Date(listing.expiresDate) >= now;
}

export function daysLeft(listing: Listing, now = new Date()): number {
	const ms = new Date(listing.expiresDate).getTime() - now.getTime();
	return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}
