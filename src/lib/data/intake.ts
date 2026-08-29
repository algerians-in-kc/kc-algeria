// Shared option lists for the volunteer sign-up and newcomer help-request forms.
// Kept in one place so the forms, the server routes, and (later) the Airtable
// select fields all agree on the same wording.

export const LANGUAGES = ['Tamazight (Berber)', 'French', 'Arabic', 'English'];

export const INTAKE_CITIES = [
	'Olathe',
	'Overland Park',
	'Gardner',
	'Lawrence',
	'Kansas City, MO',
	'Lenexa',
	'Shawnee',
	"Lee's Summit",
	'Independence',
	'Other / not sure yet',
];

// What a volunteer can offer / what a newcomer needs — one shared vocabulary.
export const HELP_TYPES = [
	'Airport pickup',
	'Paperwork & documents (SSN, license…)',
	'Translation / interpreting',
	'Orientation & area tours',
	'Housing search',
	'Job search & resume',
	'Driving / rides',
	'School enrollment',
	'General questions',
];

export const AVAILABILITY = ['Weekdays', 'Evenings', 'Weekends', 'Flexible'];

export const ARRIVAL_STATUS = [
	'Arriving soon',
	'Just arrived (less than 1 month)',
	'Here 1–6 months',
	'Here 6+ months',
];

export const URGENCY = ['As soon as possible', 'Within a week', 'No rush'];
