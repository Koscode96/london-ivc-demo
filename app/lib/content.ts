// All content pulled from the live londonivc.com July 2026 calendar.

export const photos = {
  logo: '/london-ivc/logo.png',
  birdwatching: '/london-ivc/birdwatching.jpg',
  folk: '/london-ivc/folk.jpg',
  quiz: '/london-ivc/quiz.jpg',
  jazz: '/london-ivc/jazz.jpg',
  walks: '/london-ivc/walks.jpg',
  wine: '/london-ivc/wine.jpg',
  openmic: '/london-ivc/openmic.jpg',
  party: '/london-ivc/party.jpg',
};

export const categoryColors: Record<string, string> = {
  Music: '#7A3B2E',
  'Pub & Social': '#A8874E',
  'Keep Fit': '#3E5C4A',
  Nature: '#3E5C4A',
  Walking: '#3E5C4A',
  Dining: '#7A3B2E',
  Language: '#4A4A6A',
  Wine: '#7A3B2E',
  Quiz: '#4A4A6A',
  Theatre: '#4A4A6A',
  Parties: '#A8874E',
  'Arts & Culture': '#4A4A6A',
  Anniversary: '#A8874E',
};

export type IvcEvent = {
  id: number;
  day: number;
  dayName: string;
  month: string;
  time: string;
  endTime: string;
  title: string;
  category: string;
  location: string;
  host?: string;
  price: string;
  spots?: string;
  blurb: string;
  featured?: boolean;
};

// Real events, London IVC diary, July 2026.
export const events: IvcEvent[] = [
  { id: 42924, day: 1, dayName: 'Wed', month: 'Jul', time: '19:00', endTime: '22:30', title: 'Open Mic at The White Hart, Whitechapel', category: 'Music', location: 'The White Hart, Whitechapel', host: 'Member-run', price: 'Free entry', spots: 'Open to all', blurb: 'A member runs this friendly open mic, and IVC members are always welcome, whether you would like to perform or simply come along and watch. Always an enjoyable evening.' },
  { id: 42851, day: 1, dayName: 'Wed', month: 'Jul', time: '20:00', endTime: '23:00', title: 'Beckenham & Bromley MYN Pub Evening in Elmers End', category: 'Pub & Social', location: 'Elmers End', host: 'Beckenham & Bromley MYN', price: 'Pay as you go', spots: 'Open', blurb: 'We hold two pub evenings a month on the first and third Wednesdays, with the other Wednesdays being Zoom pub evenings. We also normally have a monthly quiz.' },
  { id: 42823, day: 2, dayName: 'Thu', month: 'Jul', time: '19:00', endTime: '20:00', title: 'Keep-Fit to Music', category: 'Keep Fit', location: 'Weekly class', host: 'Keep-Fit group', price: 'Class rate', spots: 'Open', blurb: 'Come along and try this weekly fitness class. You set your own level of intensity, so it stays comfortable whatever your fitness. A friendly, regular fixture in the diary.' },
  { id: 42955, day: 3, dayName: 'Fri', month: 'Jul', time: '10:45', endTime: '13:30', title: 'West Hampstead Nature Conservation', category: 'Nature', location: 'Westbere Copse Local Nature Reserve', host: 'IVC volunteers', price: 'Free', spots: 'Open', blurb: 'We carry out conservation work at Westbere Copse and Jane Evans nature reserves. IVC members have volunteered here for decades and have made a major contribution to the wildlife haven it is today.' },
  { id: 42741, day: 3, dayName: 'Fri', month: 'Jul', time: '19:00', endTime: '23:00', title: '80th Anniversary Dinner', category: 'Anniversary', location: "Browns, Covent Garden", host: 'The Committee', price: 'Members only', spots: 'Booking closed', blurb: "July 2026 is London IVC's 80th birthday. Eighty years ago this month, two Cambridge undergraduates founded what would become the longest-running social club of its kind in London. We are marking the occasion with a celebration dinner at Browns in Covent Garden.", featured: true },
  { id: 42886, day: 6, dayName: 'Mon', month: 'Jul', time: '19:00', endTime: '23:00', title: 'Dove Jones Jazz, Blues & Rock Jam', category: 'Music', location: 'Central London', host: 'Music group', price: 'Pay as you go', spots: 'Open', blurb: 'A regular Monday jam session bringing together jazz, blues and rock. Bring an instrument and join in, or come along to listen over a drink.' },
  { id: 42707, day: 7, dayName: 'Tue', month: 'Jul', time: '18:30', endTime: '21:00', title: 'Arts Group Monthly Meeting', category: 'Arts & Culture', location: "Members' home", host: 'Arts Group', price: 'Free', spots: 'Open', blurb: 'The Arts Group meets monthly to plan gallery visits, exhibitions and cultural outings across the capital, and to talk about what everyone has been to see.' },
  { id: 42957, day: 7, dayName: 'Tue', month: 'Jul', time: '19:00', endTime: '22:30', title: 'Enfield Pub Crawl', category: 'Pub & Social', location: 'Enfield', host: 'Social group', price: 'Pay as you go', spots: 'Open', blurb: 'An evening tour of some of Enfield\u2019s best pubs in good company. An easygoing wander with plenty of chances to sit down and catch up along the way.' },
  { id: 42848, day: 7, dayName: 'Tue', month: 'Jul', time: '20:00', endTime: '22:00', title: 'German Linguists Online', category: 'Language', location: 'Online, Zoom', host: "Members' group", price: 'Free', spots: 'Open', blurb: 'If you would like to brush up or practise your German, join other like-minded members for informal and not-too-serious German conversation over Zoom.' },
  { id: 42930, day: 10, dayName: 'Fri', month: 'Jul', time: '11:30', endTime: '23:00', title: 'Lower Thames Circular Jaunt', category: 'Walking', location: 'Lower Thames', host: 'Walking group', price: 'Travel + lunch', spots: 'Open', blurb: 'A riverside circular walk along the Lower Thames, ending, as our walks tend to, at a good pub for a well-earned meal and a drink.' },
  { id: 42951, day: 10, dayName: 'Fri', month: 'Jul', time: '19:30', endTime: '23:00', title: 'Open Mic at The Old White Lion', category: 'Music', location: 'East Finchley, N2', host: 'Paul Danson', price: '\u00a35', spots: 'Open', blurb: 'Up to 20 of us come along every month to this very friendly open mic at a cosy East Finchley pub. The IVC band plays here regularly.' },
  { id: 42836, day: 11, dayName: 'Sat', month: 'Jul', time: '19:00', endTime: '23:00', title: "Robert's Birthday Meal, Chinatown", category: 'Dining', location: 'Chinatown, Soho', host: 'Robert', price: 'Pay as you go', spots: 'Open', blurb: "Join Robert to celebrate his birthday with a group meal in the heart of Chinatown. All welcome, good food and good company guaranteed." },
  { id: 42959, day: 11, dayName: 'Sat', month: 'Jul', time: '19:30', endTime: '23:00', title: 'Already Legends Covers Disco, Walthamstow', category: 'Parties', location: 'Walthamstow Trades Hall', host: 'Social group', price: 'Ticketed', spots: 'Open', blurb: 'Live covers and a disco at the ever-popular Walthamstow Trades Hall. Our dance nights here have become something of a club institution, everyone ends up on the floor eventually.' },
  { id: 42922, day: 14, dayName: 'Tue', month: 'Jul', time: '20:00', endTime: '22:00', title: 'French Linguists Online', category: 'Language', location: 'Online, Zoom', host: "Members' group", price: 'Free', spots: 'Open', blurb: 'Brush up or practise your French with other members in an informal, not-too-serious conversation group over Zoom.' },
  { id: 42923, day: 22, dayName: 'Wed', month: 'Jul', time: '19:00', endTime: '21:00', title: "Readers' Group: The Proof of My Innocence", category: 'Arts & Culture', location: "Members' home", host: "Readers' Group", price: 'Free', spots: 'Open', blurb: "This month the Readers' Group discusses The Proof of My Innocence. Come whether or not you have finished the book, the conversation is always good." },
  { id: 42840, day: 22, dayName: 'Wed', month: 'Jul', time: '19:00', endTime: '22:00', title: "Dinner at Simpson's in the Strand", category: 'Dining', location: "Simpson's in the Strand", host: 'Dining group', price: 'Set menu', spots: 'Booking required', blurb: "A group dinner at one of London's most storied dining rooms. A chance to enjoy a proper occasion together in grand surroundings." },
  { id: 42846, day: 25, dayName: 'Sat', month: 'Jul', time: '19:00', endTime: '22:30', title: 'Open Mic Night at The Washington, Belsize Park', category: 'Music', location: 'The Washington, Belsize Park', host: 'Paul Danson', price: 'Free entry', spots: 'Open', blurb: 'Our much-loved monthly open mic at The Washington. Regulars, first-timers, singers, poets and players all welcome, with a buffet to round off the evening.' },
  { id: 42830, day: 29, dayName: 'Wed', month: 'Jul', time: '19:00', endTime: '22:00', title: 'IVC Nature Club: Bat Walk on Hampstead Heath', category: 'Nature', location: 'Hampstead Heath', host: 'Nature Club', price: 'Free', spots: 'Open', blurb: 'An evening walk on Hampstead Heath in search of bats as dusk falls, led by members who know the Heath and its wildlife well.' },
  { id: 42952, day: 30, dayName: 'Thu', month: 'Jul', time: '19:30', endTime: '22:30', title: 'The Woodman, Highgate: Pub Night', category: 'Pub & Social', location: 'The Woodman, Highgate', host: 'North London MYN', price: 'Pay as you go', spots: 'Open', blurb: 'Our regular, well-supported monthly meeting of the North London MYN (Meet Your Neighbours) group at The Woodman, with free bar snacks. We book a table.' },
];

export type Activity = {
  id: string;
  title: string;
  cadence: string;
  photo: string;
  blurb: string;
};

export const activities: Activity[] = [
  { id: 'music', title: 'Music & Open Mics', cadence: 'Several a month', photo: photos.openmic, blurb: 'Monthly open mics at The Washington and The Old White Lion, folk nights, jazz and blues jams, plus classical and opera outings including the Proms.' },
  { id: 'walking', title: 'Country Walking', cadence: 'Weekly', photo: photos.walks, blurb: 'Gentle countryside and riverside walks most weekends, from Wendover to the Lower Thames, usually finishing at a good pub for lunch.' },
  { id: 'pub', title: 'Pub & Social Evenings', cadence: '12+ a month', photo: photos.quiz, blurb: 'Meet Your Neighbours socials across London, pub crawls, quizzes and the long-running weekly Zoom social for members who prefer to stay in.' },
  { id: 'nature', title: 'Nature & Conservation', cadence: 'Monthly', photo: photos.birdwatching, blurb: 'Conservation work at West Hampstead nature reserves, bat walks on Hampstead Heath, birdwatching outings and nature rambles further afield.' },
  { id: 'wine', title: 'Wine Tasting', cadence: 'Monthly', photo: photos.wine, blurb: "Tastings hosted in members' homes, often led by a professional, with generous pours and a shared supper. Long regarded as some of the best value in London." },
  { id: 'dining', title: 'Dining Out', cadence: 'Several a month', photo: photos.jazz, blurb: "Group meals from Chinatown to Simpson's in the Strand, celebrating birthdays and marking occasions in some of London's best-loved dining rooms." },
  { id: 'arts', title: 'Arts, Readers & Culture', cadence: 'Monthly', photo: photos.folk, blurb: "A monthly Arts Group planning gallery and exhibition visits, a Readers' Group, theatre trips and cinema outings across the capital." },
  { id: 'language', title: 'Language Groups', cadence: 'Fortnightly', photo: photos.quiz, blurb: 'Informal French and German conversation groups over Zoom, for members who would like to keep a language ticking over in good company.' },
  { id: 'parties', title: 'Parties & Weekends Away', cadence: 'Year-round', photo: photos.party, blurb: 'Disco and covers nights at Walthamstow Trades Hall, summer gatherings, and weekends away in the UK and abroad throughout the year.' },
];

export const faqs = [
  { q: 'Do I need to be a graduate?', a: "No. The letters IVC stand for Inter-Varsity Club, which reflects the club's origins in 1946. Today we welcome anyone looking for a friendly social scene, whatever their background." },
  { q: 'What is the typical age range?', a: 'Most of our members are over 50, though we have members across a wide range of ages. What members share is a wish to get out, try things and meet people, rather than any particular age.' },
  { q: 'How does the trial work?', a: 'A three-month trial gives you full access to the events diary and the weekly bulletin, and you are welcome at any open event. At the end of the trial you decide whether to become a full member for the annual subscription.' },
  { q: 'Can I bring a partner or friend?', a: 'Yes. Guests are welcome at most events. After a visit or two we usually invite them to take up a trial of their own.' },
  { q: 'Are events London-only?', a: 'Most events are in and around London, but we run regular weekends away in the UK and abroad, and our sister clubs across the country welcome visiting London members.' },
  { q: 'How are events organised?', a: 'Members run the events themselves. Any member can propose one, and a committee member checks it over before it is published in the diary and the weekly bulletin.' },
];
