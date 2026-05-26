export interface CityInfo {
	name: string;
	state: 'KS' | 'MO';
	tagline: string;
	intro: string;
	algerianNote: string;
	housing: { avg2br: string; tip: string };
	commute: string;
	neighborhoods: { name: string; note: string }[];
	worship: { name: string; type: 'mosque' | 'church' | 'both'; note?: string }[];
	schools: { name: string; rating: string; note: string }[];
	amenities: string[];
	whatsappGroup: boolean;
}

export const cities: Record<string, CityInfo> = {
	olathe: {
		name: 'Olathe',
		state: 'KS',
		tagline: 'The heart of the KC Algerian community',
		intro: 'Olathe is the largest city in Johnson County (~145,000 residents) and the most popular destination for Algerians arriving in KC. It combines affordable housing, top-rated schools, and strong highway connections — all within 30–40 minutes of downtown Kansas City.',
		algerianNote: 'The largest concentration of Algerians in the KC metro lives in or near Olathe. You\'ll find Arabic-speaking neighbors, familiar faces at the mosque, and a growing network of established families who are happy to help newcomers navigate the area.',
		housing: {
			avg2br: '$1,200–$1,600 / month',
			tip: 'Most affordable major suburb in Johnson County. Areas near 119th Street and Black Bob Road offer the best value. Look at Santa Fe Commons and Sunflower Ridge for family-friendly apartments.'
		},
		commute: '30–40 min to downtown KC via I-35. Easy access to K-7 for Gardner / Lenexa.',
		neighborhoods: [
			{ name: 'Black Bob Road corridor', note: 'Highest Algerian density — close to ISOC mosque, halal groceries, and community' },
			{ name: 'Santa Fe Commons / Sunflower Ridge', note: 'Newer apartments, family-friendly, good price-to-quality ratio' },
			{ name: 'Lake Olathe area', note: 'Quieter residential areas near parks, good for families with children' },
			{ name: 'Stonebridge (north Olathe)', note: 'More upscale, close to Johnson County Community College' },
		],
		worship: [
			{ name: 'Islamic Society of Johnson County (ISOC)', type: 'mosque', note: 'Largest and most active mosque in the area — Friday prayers well-attended by Algerians' },
			{ name: 'Noor Event Center / Community Mosque', type: 'mosque', note: 'Smaller, community-run mosque with Arabic classes' },
			{ name: 'Church of the Resurrection (nearby Leawood)', type: 'church', note: 'Largest church in KC metro, very welcoming, strong international outreach' },
			{ name: 'St. Thomas More Catholic Parish', type: 'church', note: 'French-speaking community members attend' },
		],
		schools: [
			{ name: 'Olathe USD 233', rating: 'A / Excellent', note: 'One of the best public school districts in Kansas. Strong ESL programs for newcomer children.' },
			{ name: 'Olathe South / North / East / Northwest HS', rating: 'Very Good', note: 'All four high schools are well-rated with AP programs and international student support.' },
		],
		amenities: [
			'Halal meat at International Market on 151st St',
			'Arabic/International grocery at Global Foods',
			'JCCC (Johnson County Community College) — affordable English and vocational courses',
			'Olathe Medical Center (hospital)',
			'Multiple parks including Lake Olathe and Prairie Center Athletic Complex',
			'Costco, Walmart Supercenter, Target nearby',
		],
		whatsappGroup: true,
	},

	'overland-park': {
		name: 'Overland Park',
		state: 'KS',
		tagline: 'Upscale living with the KC metro\'s top schools',
		intro: 'Overland Park is the second-largest city in Kansas (~200,000) and home to numerous Fortune 500 companies (T-Mobile, Sprint legacy offices, Black & Veatch). It offers premium amenities, exceptional schools, and a safe, well-maintained suburban environment.',
		algerianNote: 'A smaller but growing number of Algerian families live here, typically professionals attracted by tech/business jobs. The higher cost of living is offset by career opportunities and the Blue Valley school district.',
		housing: {
			avg2br: '$1,500–$2,100 / month',
			tip: 'More expensive than Olathe but strong investment in housing value. South OP near Corbin Park is pricier; east OP near Metcalf is more affordable. Check Lionsgate and Hawthorne Hills apartments.'
		},
		commute: '25–35 min to downtown KC via I-35 / US-69. Many employers are in OP itself — no commute needed for tech workers.',
		neighborhoods: [
			{ name: 'East Overland Park (Metcalf corridor)', note: 'More affordable entry into OP, good access to highways and amenities' },
			{ name: 'South OP near 135th–151st St', note: 'Newer developments, excellent schools, close to JCCC' },
			{ name: 'Town Center area', note: 'Walkable, shops, restaurants, urban feel within OP' },
			{ name: 'Lenexa/OP border area', note: 'Good value, accesses both city amenities' },
		],
		worship: [
			{ name: 'ISOC (Olathe — 10 min away)', type: 'mosque', note: 'Most Algerians in OP drive to ISOC in Olathe for Friday prayers' },
			{ name: 'Dar Al-Noor Islamic Center', type: 'mosque', note: 'Closer option for OP residents' },
			{ name: 'Church of the Resurrection', type: 'church', note: 'Located on Roe Ave in Leawood — top-rated welcoming church in KC' },
		],
		schools: [
			{ name: 'Blue Valley USD 229', rating: 'A+ / Top 1% in KS', note: 'Consistently ranked among the best school districts in the nation. Very strong academics and extracurriculars.' },
			{ name: 'Shawnee Mission USD 512 (some OP areas)', rating: 'A / Excellent', note: 'Also high-performing, with strong international student support programs.' },
		],
		amenities: [
			'Corporate hub: T-Mobile, Cerner, Black & Veatch, Garmin HQ nearby',
			'Town Center Plaza — upscale shopping and dining',
			'Corbin Park — major retail center',
			'Overland Park Arboretum and Botanical Gardens',
			'Many gyms, sports facilities, and parks',
			'Multiple international restaurants',
		],
		whatsappGroup: false,
	},

	gardner: {
		name: 'Gardner',
		state: 'KS',
		tagline: 'Small town feel, affordable prices, growing community',
		intro: 'Gardner is a smaller, rapidly growing city (~25,000) on the southwest edge of the KC metro. It offers some of the most affordable housing in the area while maintaining good schools and a safe, quiet environment. Many young Algerian families choose Gardner for the space and cost.',
		algerianNote: 'A small but growing cluster of Algerian families have moved to Gardner for the lower rents and peaceful environment. Neighbors are typically welcoming. It\'s a 15-minute drive to the Algerian community in Olathe.',
		housing: {
			avg2br: '$950–$1,300 / month',
			tip: 'Most affordable in the KC metro. New apartment complexes have opened in recent years. Houses rent for $1,200–$1,600/month — excellent value for families needing more space.'
		},
		commute: '40–50 min to downtown KC via I-35. 15 min to Olathe (where most community resources are). Plan to own a car — no public transit.',
		neighborhoods: [
			{ name: 'Downtown Gardner area', note: 'Close to shops, schools, easy highway access' },
			{ name: 'Cedar Niles Estates', note: 'Family-friendly, newer homes and apartments' },
			{ name: 'West Gardner near Moonlight Rd', note: 'Quieter, rural feel, larger properties' },
		],
		worship: [
			{ name: 'ISOC Olathe (15 min drive)', type: 'mosque', note: 'Gardner residents typically drive to Olathe for Friday prayers and community events' },
			{ name: 'Gardner Christian Church', type: 'church', note: 'Active, welcoming local church with community programs' },
		],
		schools: [
			{ name: 'Gardner Edgerton USD 231', rating: 'B+ / Good', note: 'Good public schools, growing with the city. ESL support available. Smaller class sizes than Olathe or OP.' },
		],
		amenities: [
			'Walmart Supercenter and basic shopping',
			'Gardner Community Center with pool and gym',
			'Multiple city parks',
			'15 min to all Olathe amenities (halal food, ISOC, JCCC)',
			'New commercial development underway near I-35',
		],
		whatsappGroup: false,
	},

	lawrence: {
		name: 'Lawrence',
		state: 'KS',
		tagline: 'University city with a welcoming international community',
		intro: 'Lawrence is a vibrant university city (~100,000) home to the University of Kansas (KU). It\'s one of the most diverse and international cities in Kansas, with a long history of welcoming people from all over the world. About 35–40 minutes west of Olathe on K-10.',
		algerianNote: 'Several Algerian families live in Lawrence, many connected to KU (students, researchers, or faculty). The international community is large and well-organized, making integration easier. Non-KU families appreciate the culture and affordability.',
		housing: {
			avg2br: '$900–$1,400 / month',
			tip: 'More affordable than KC suburbs, especially if you\'re not near the university core. Areas on the west side near K-10 are quieter and family-friendly. Avoid peak student season for better landlord flexibility.'
		},
		commute: '35–40 min to Olathe via K-10. 50 min to downtown KC. Commuting to KC daily is doable but tiring — better suited for those working in Lawrence or with remote work.',
		neighborhoods: [
			{ name: 'West Lawrence (near Wakarusa Dr)', note: 'Quieter, family-oriented, close to good schools and shopping' },
			{ name: 'North Lawrence', note: 'More affordable, older homes, close to downtown' },
			{ name: 'University area (central)', note: 'Lively, walkable, diverse — great for students or young professionals' },
		],
		worship: [
			{ name: 'Islamic Center of Lawrence', type: 'mosque', note: 'Active mosque serving the Muslim community, connected to KU Muslim Student Association' },
			{ name: 'KU Muslim Student Association (MSA)', type: 'mosque', note: 'Prayer spaces and community events on campus — welcoming to all Muslims including non-students' },
			{ name: 'Plymouth Congregational Church', type: 'church', note: 'Very inclusive, social-justice oriented, welcoming of diverse backgrounds' },
		],
		schools: [
			{ name: 'Lawrence USD 497', rating: 'A- / Very Good', note: 'Well-regarded district with experience handling international families. Strong ESL program. Proximity to KU brings diverse, educated teachers.' },
		],
		amenities: [
			'University of Kansas — affordable continuing education and language classes',
			'International community center with resources for newcomers',
			'Diverse restaurants (Middle Eastern, African, Asian)',
			'Prairie Band Potawatomi events and multicultural festivals',
			'Lawrence Public Library (free resources, language support)',
			'Free T-Ride bus system within Lawrence',
		],
		whatsappGroup: false,
	},

	'kansas-city-mo': {
		name: 'Kansas City, MO',
		state: 'MO',
		tagline: 'Urban living with KC\'s most diverse neighborhoods',
		intro: 'Kansas City, Missouri is the urban core of the metro area — a diverse, culturally rich city with distinct neighborhoods ranging from historic jazz districts to modern developments. More affordable than many cities its size, with a vibrant food scene and growing tech economy.',
		algerianNote: 'Algerian families in KCMO tend to cluster in the Westside, Midtown, and Raytown/Grandview areas. The city is more diverse than Johnson County suburbs, which many Algerians appreciate. Islamic community resources are strong on the Missouri side.',
		housing: {
			avg2br: '$900–$1,400 / month',
			tip: 'Most affordable major city option. Midtown offers good value near I-35. Avoid some areas east of Troost — research neighborhoods carefully before signing a lease. Brookside and Waldo are popular but slightly pricier.'
		},
		commute: 'Depends heavily on neighborhood. Midtown is 10–15 min to downtown. Johnson County (KS side) is 30–40 min via I-35 or US-169.',
		neighborhoods: [
			{ name: 'Westside', note: 'Historic, diverse, walkable — strong Latin and international community' },
			{ name: 'Midtown / Brookside', note: 'Popular, safer, close to restaurants and amenities. Good for professionals.' },
			{ name: 'Raytown / Grandview (south suburbs)', note: 'More affordable, suburban feel within KCMO limits, closer to MO Algerian families' },
			{ name: 'Lee\'s Summit adjacent (south)', note: 'Newer developments, good for families wanting suburban feel with KC address' },
		],
		worship: [
			{ name: 'MAS (Muslim American Society) Kansas City', type: 'mosque', note: 'Active mosque serving a large and diverse Muslim community — families and singles welcome' },
			{ name: 'Islamic Center of Greater Kansas City', type: 'mosque', note: 'One of the oldest mosques in KC, broad community programs' },
			{ name: 'Troost Community of Christ', type: 'church', note: 'Inclusive church with active social services and community outreach' },
			{ name: 'The Gathering (Midtown)', type: 'church', note: 'Diverse, urban congregation — welcoming to people of all backgrounds' },
		],
		schools: [
			{ name: 'KCMO Public Schools', rating: 'C / Variable', note: 'Quality varies significantly by school. Research individual schools at GreatSchools.org before choosing a neighborhood.' },
			{ name: 'Pembroke Hill / private options', rating: 'A', note: 'Strong private schools exist but are expensive ($15k+/year). Charter school options are available as a middle ground.' },
			{ name: 'North Kansas City USD 74 (NKC area)', rating: 'B+ / Good', note: 'If you live in North KC proper, NKCSD is much stronger than KCMO proper schools.' },
		],
		amenities: [
			'More diverse food scene — Middle Eastern, African, halal restaurants',
			'Arabia Steamboat Museum, Nelson-Atkins Museum (world-class art)',
			'City Market for fresh produce and international goods',
			'Price Chopper and international grocers with halal sections',
			'Major hospitals: KU Medical Center, St. Luke\'s, Research Medical Center',
			'KC Streetcar (free downtown/midtown transit)',
		],
		whatsappGroup: false,
	},

	lenexa: {
		name: 'Lenexa',
		state: 'KS',
		tagline: 'Growing suburb with parks, trails, and family life',
		intro: 'Lenexa is a growing city (~60,000) in Johnson County, KS, known for its excellent parks, trails, and family-friendly atmosphere. It sits between Olathe and Shawnee, with easy access to both communities. Lenexa has been consistently ranked among the best cities to live in Kansas.',
		algerianNote: 'A smaller number of Algerian families live in Lenexa, typically those who work in the Johnson County business corridor or want proximity to Olathe without paying Overland Park prices. The Shawnee Mission school district is a strong draw.',
		housing: {
			avg2br: '$1,200–$1,700 / month',
			tip: 'Prices are between Gardner and OP. The Lenexa City Center area (new development) has modern apartments. South Lenexa near 95th Street is more established and affordable.'
		},
		commute: '25–35 min to downtown KC via I-35. 10 min to Olathe. Good access to K-7 North.',
		neighborhoods: [
			{ name: 'Lenexa City Center', note: 'Brand-new walkable development with modern apartments and green spaces' },
			{ name: 'South Lenexa (87th–95th Street)', note: 'Established neighborhood, more affordable, close to Olathe community resources' },
			{ name: 'Northgate / Heritage Hills', note: 'Quiet residential, good schools, close to Shawnee Mission Park' },
		],
		worship: [
			{ name: 'ISOC Olathe (10 min away)', type: 'mosque', note: 'Lenexa residents easily reach ISOC in Olathe — the primary mosque for Johnson County Algerians' },
			{ name: 'Shawnee Mission UMC', type: 'church', note: 'Large welcoming church with community outreach programs' },
		],
		schools: [
			{ name: 'Shawnee Mission USD 512', rating: 'A / Excellent', note: 'Strong academic programs across all schools. ESL support available. Good option for Algerian families.' },
		],
		amenities: [
			'Shawnee Mission Park (1,600+ acres — fishing, trails, sports)',
			'Lenexa Rec Center with pool and fitness',
			'Black Hoof Park',
			'Central Park neighborhood park',
			'SureStay Hotel area retail corridor',
			'15 min to all Olathe halal and community resources',
		],
		whatsappGroup: false,
	},

	shawnee: {
		name: 'Shawnee',
		state: 'KS',
		tagline: 'Established suburb with community roots and good value',
		intro: 'Shawnee (~70,000) is one of Johnson County\'s most established cities, sitting just west of Lenexa and south of I-70. It offers a stable, family-friendly environment with some of the more affordable housing options in the Shawnee Mission school district.',
		algerianNote: 'Some Algerian families have settled in Shawnee for the balance of affordability and quality within Johnson County. It\'s close enough to Olathe for community connection without being in a high-density area.',
		housing: {
			avg2br: '$1,100–$1,600 / month',
			tip: 'More affordable than Lenexa or OP. Older housing stock but well-maintained neighborhoods. Clear Creek area has newer developments at good prices.'
		},
		commute: '25–35 min to downtown KC via I-435 or US-56. 15 min to Olathe.',
		neighborhoods: [
			{ name: 'Clear Creek area (east Shawnee)', note: 'Newer developments, family-friendly, closer to Lenexa amenities' },
			{ name: 'Central Shawnee (Midland area)', note: 'Established, affordable, close to parks and schools' },
			{ name: 'West Shawnee near K-7', note: 'More rural feel, larger lots, quiet environment' },
		],
		worship: [
			{ name: 'ISOC Olathe (15 min)', type: 'mosque', note: 'Primary mosque for the area — Shawnee families regularly attend' },
			{ name: 'Westside Family Church', type: 'church', note: 'Large, diverse church with active community programs and international outreach' },
		],
		schools: [
			{ name: 'Shawnee Mission USD 512', rating: 'A / Excellent', note: 'Same strong district as Lenexa. Multiple award-winning schools. Good ESL support.' },
		],
		amenities: [
			'Shawnee Mission Park — huge outdoor recreation area',
			'Wonderscope Children\'s Museum',
			'Multiple trail systems for running and cycling',
			'Colonial Square and Nieman Road shopping',
			'10–15 min to Olathe and Lenexa amenities',
		],
		whatsappGroup: false,
	},

	'lees-summit': {
		name: "Lee's Summit",
		state: 'MO',
		tagline: 'Missouri\'s growing suburb with top-tier MO schools',
		intro: "Lee's Summit (~100,000) is one of Missouri's fastest-growing cities, located about 20 miles southeast of downtown KC. It has a strong reputation for safety, good schools, and a pleasant suburban atmosphere — making it a popular choice for Missouri-side families.",
		algerianNote: "A small but growing Algerian presence exists in Lee's Summit, primarily among families who work in the south KC or Lee's Summit corridor. The community is smaller than on the Kansas side, but the quality of life is high.",
		housing: {
			avg2br: '$1,100–$1,600 / month',
			tip: "More affordable than Johnson County KS equivalents. The Summit area near downtown LS has charm. Newer developments in the south and east sides offer modern units."
		},
		commute: "20–25 min to downtown KCMO via MO-291 or I-470. 40+ min to Olathe — plan car travel carefully.",
		neighborhoods: [
			{ name: 'Downtown Lee\'s Summit', note: 'Charming, walkable historic downtown with restaurants and community events' },
			{ name: 'Summit Fair area (west LS)', note: 'Shopping corridor, newer apartments, family-friendly' },
			{ name: 'East LS near Lake Jacomo', note: 'Scenic, quieter, close to Longview Lake outdoor recreation' },
		],
		worship: [
			{ name: 'Islamic Society of Greater Kansas City (30 min north)', type: 'mosque', note: 'Nearest major mosque — some Lee\'s Summit families drive to KCMO for prayers' },
			{ name: 'Summit Woods Christian Church', type: 'church', note: 'Large, active church with community programs and diverse membership' },
			{ name: 'Church of the Resurrection (Leawood — 30 min)', type: 'church', note: 'Worth the drive for the programming and international community' },
		],
		schools: [
			{ name: "Lee's Summit R-7 School District", rating: 'A / Excellent', note: 'One of the best school districts in Missouri. Consistently high test scores and graduation rates. Strong support for diverse learners.' },
		],
		amenities: [
			'Longview Lake and Longview Farm Park (beautiful outdoor recreation)',
			'Summit Fair Mall and shopping',
			'Lee\'s Summit Medical Center',
			'John Knox Village (major employer)',
			"Excellent highway access: I-470, MO-50, US-40",
		],
		whatsappGroup: false,
	},

	independence: {
		name: 'Independence',
		state: 'MO',
		tagline: 'Affordable, historic city on the eastern edge of KC',
		intro: 'Independence (~120,000) is a historic city directly east of Kansas City, MO — birthplace of President Harry Truman and the starting point of the Oregon, California, and Santa Fe Trails. It offers some of the most affordable housing in the KC metro while maintaining good highway access.',
		algerianNote: 'Independence has a small Algerian presence, generally among families attracted by low housing costs. The city is less connected to the main KC Algerian community (centered in Olathe), but highway access allows participation in community events.',
		housing: {
			avg2br: '$800–$1,200 / month',
			tip: 'Among the most affordable in the KC metro. Quality varies significantly by neighborhood — research specific areas carefully. The Pleasant Hill Road and Little Blue Parkway corridors are safer and more desirable.'
		},
		commute: '15–20 min to downtown KCMO via I-70. 50–60 min to Olathe — not ideal for daily community connections on the Kansas side.',
		neighborhoods: [
			{ name: 'Fairmount area (south Independence)', note: 'Cleaner, more residential, good for families' },
			{ name: 'Little Blue Valley', note: 'Newer suburban development, safer, growing area' },
			{ name: 'Near MO-291 corridor', note: 'Good access to both KCMO and Lee\'s Summit amenities' },
		],
		worship: [
			{ name: 'MAS Kansas City (20 min west)', type: 'mosque', note: 'Independence Muslims typically drive to KCMO mosques for Friday prayers' },
			{ name: 'Community of Christ World Headquarters', type: 'church', note: 'Historic church headquartered in Independence — beautiful building, open to all' },
		],
		schools: [
			{ name: 'Independence School District', rating: 'C+ / Average', note: 'Quality is mixed. Some schools are good; research individual schools at GreatSchools.org before choosing a specific neighborhood.' },
			{ name: 'Fort Osage R-1 (eastern Independence area)', rating: 'B / Good', note: 'Smaller, more focused district with a stronger reputation.' },
		],
		amenities: [
			'Harry S. Truman Presidential Library (national landmark)',
			'Truman Courthouse and historic downtown',
			'Independence Center Mall',
			'Affordable grocery options including international stores',
			'Missouri Valley Medical Center',
			'Easy I-70 access west to downtown KC and east to Columbia',
		],
		whatsappGroup: false,
	},
};

export function getCityBySlug(slug: string): CityInfo | null {
	return cities[slug] ?? null;
}

export const cityOrder = [
	'olathe',
	'overland-park',
	'gardner',
	'lenexa',
	'shawnee',
	'lawrence',
	'kansas-city-mo',
	'lees-summit',
	'independence',
];
