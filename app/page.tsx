'use client';

import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, MapPin, Wine, Music, Mountain, Film, Plane, Beer,
  Check, Mail, Phone, X, Info, Calendar, Users, Clock,
  ChevronRight, ChevronLeft, Bird, Brain, Mic, PartyPopper
} from 'lucide-react';

const photos = {
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

export default function LondonIVCLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);
  const [activeModal, setActiveModal] = useState<any>(null);
  const [signupStep, setSignupStep] = useState(0);
  const [signupData, setSignupData] = useState({ name: '', email: '', interests: [] as string[] });
  const [calendarMonth, setCalendarMonth] = useState(0);
  const [heroFeature, setHeroFeature] = useState(0);
  const heroIntervalRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    heroIntervalRef.current = setInterval(() => {
      setHeroFeature((p) => (p + 1) % recentHighlights.length);
    }, 6000);
    return () => clearInterval(heroIntervalRef.current);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeModal]);

  const fontStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,400;1,9..144,500;1,9..144,600&family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Caveat:wght@500;700&display=swap');
    .font-display { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
    .font-body { font-family: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-hand { font-family: 'Caveat', cursive; }
    .grain { background-image: radial-gradient(rgba(26, 22, 20, 0.05) 1px, transparent 1px); background-size: 3px 3px; }
    .photo-warm img { filter: saturate(0.95) contrast(1.03); }
    .marquee { animation: marquee 60s linear infinite; }
    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .fade-in { animation: fadeIn 0.5s ease-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .modal-enter { animation: modalEnter 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
    @keyframes modalEnter { from { opacity: 0; transform: scale(0.96) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
    details summary::-webkit-details-marker { display: none; }
    .hover-zoom img { transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1); }
    .hover-zoom:hover img { transform: scale(1.05); }
    .squiggle {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 8'><path d='M0 4 Q 10 0, 20 4 T 40 4 T 60 4 T 80 4 T 100 4' stroke='%23722F37' stroke-width='2' fill='none'/></svg>");
      background-repeat: repeat-x;
      background-position: bottom;
      background-size: 100px 6px;
      padding-bottom: 6px;
    }
    .ticker-dot::before { content: '●'; color: #C5872A; margin-right: 0.5rem; animation: pulse 2s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    .tape { position: absolute; width: 80px; height: 22px; background: rgba(197, 135, 42, 0.4); backdrop-filter: blur(2px); transform: rotate(-3deg); box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  `;

  const recentHighlights = [
    { id: 'open-mic-jan', photo: photos.openmic, tag: 'Music', date: 'Sat 31 Jan 2026', title: "IVC's Got Talent — Open Mic at The Washington", blurb: "Around 35 members and guests packed The Washington in Belsize Park for a fabulous Open Mic night. Joy Jewson sang with Thomas Eros, Frank Harrison played the new IVC keyboard, Sacha on flute, Nigel Dansy on guitar, Barry Piggot on saxophone, Mark on percussion, with poetry from Sylvia Browning. An excellent buffet rounded off the evening." },
    { id: 'wine-pinot', photo: photos.wine, tag: 'Wine Tasting', date: 'Sat 7 Mar 2026', title: "English Pinot Noir at Caroline's", blurb: "15 of us enjoyed a brilliant tasting of the full range of English wines made from Pinot Noir, hosted by Pauline Reith of wines4all. Sparkling white, white, sparkling rosé, still rosé and red — all of excellent quality, starting with an English Pinot Noir gin. Held in Caroline's beautiful flat with a generous vegan supper. £25 a head — an absolute bargain." },
    { id: 'birdwatching-southend', photo: photos.birdwatching, tag: 'Nature', date: 'Sun 23 Feb 2026', title: 'Southend Pier — Birdwatching & Fish & Chips', blurb: "A dozen members spent the day on Southend pier enjoying the area's bird life. Highlights included a large colony of Turnstones living under the pier and a Black-headed gull looking handsome as its breeding plumage developed. And of course we had to enjoy Southend's famous fish and chips." },
    { id: 'folk-windsor', photo: photos.folk, tag: 'Music', date: 'Last Tuesday of every month', title: 'Folk Music Night at The Windsor Castle', blurb: 'An informal gathering of up to 20 musicians at this East Finchley pub treats us to an evening of English, Scottish, Irish and American traditional tunes — plenty of singing and dancing along to joyful entertainment. Has become a much-loved IVC regular.' },
    { id: 'party-walthamstow', photo: photos.party, tag: 'Parties', date: 'Mon 30 Dec 2025', title: 'Pre-NYE Disco at Walthamstow Trades Hall', blurb: 'We saw in the new year a day early to avoid the rush. We met at the Walthamstow Trades Hall where there was a great disco night — we were all up dancing eventually.' },
  ];

  const activities = [
    { id: 'pub', icon: Beer, title: 'Pub Nights & Meals', count: '12+ a month', photo: photos.quiz, accent: '#3D352E', blurb: "Regular MYN (Meet Your Neighbours) socials at The Woodman in Highgate, beer gardens at historic riverside pubs, and dinners at members' favourite spots across the capital." },
    { id: 'walks', icon: Mountain, title: 'Walks & Outdoors', count: '8+ a month', photo: photos.walks, accent: '#5C6B4E', blurb: 'Gentle countryside walks, urban hikes, and nature conservation work — including a long-running volunteer programme at a small West Hampstead nature reserve.' },
    { id: 'wine', icon: Wine, title: 'Wine Tastings', count: 'Monthly', photo: photos.wine, accent: '#722F37', blurb: "Hosted in members' homes, often with Pauline Reith of wines4all. Best value tastings in London — generous portions, great company, £25-30 a head with food." },
    { id: 'music', icon: Music, title: 'Music & Open Mics', count: '4+ a month', photo: photos.openmic, accent: '#8B3A3F', blurb: 'Monthly Open Mic at The Washington, regular folk nights at The Windsor Castle East Finchley, classical and opera tickets including Proms and Opera Holland Park, plus festivals.' },
    { id: 'jazz', icon: Mic, title: 'Jazz Nights', count: 'Regular', photo: photos.jazz, accent: '#1A1614', blurb: 'Live jazz at intimate London venues — from late-night sessions in Soho basements to family-run pubs with weekly residencies.' },
    { id: 'birdwatching', icon: Bird, title: 'Birdwatching', count: 'Monthly', photo: photos.birdwatching, accent: '#5C6B4E', blurb: 'From Southend Pier to Rainham Marshes — birding outings combining wildlife with proper pub lunches and fish and chips.' },
    { id: 'quiz', icon: Brain, title: 'Quizzes & Zoom Socials', count: 'Weekly', photo: photos.quiz, accent: '#722F37', blurb: 'Friendly pub quizzes plus our weekly Friday night Zoom social with quiz, live performers, videos and chat — regularly draws around 20 members.' },
    { id: 'parties', icon: PartyPopper, title: 'Parties', count: 'Several a year', photo: photos.party, accent: '#C5872A', blurb: "NYE disco, summer barbecues, themed parties in members' homes, and the legendary IVC dance nights at Walthamstow Trades Hall." },
    { id: 'travel', icon: Plane, title: 'Weekends Away', count: 'Quarterly', photo: photos.folk, accent: '#3D352E', blurb: 'UK and abroad — recent trips include the Swanage Blues Festival, Edinburgh Fringe, and Glastonbury (where members go free as a recycling team).' },
  ];

  const categoryColors: Record<string, string> = {
    'Pub Night': '#C5872A', 'Wine': '#722F37', 'Music': '#8B3A3F', 'Theatre': '#3D352E',
    'Walking': '#5C6B4E', 'Outdoors': '#5C6B4E', 'Zoom Social': '#1A1614', 'Language': '#3D352E', 'Jazz': '#1A1614',
  };

  const upcomingEvents = [
    { id: 1, day: 30, dayName: 'Thu', month: 'Apr', monthNum: 4, time: '19:00', endTime: '21:00', title: 'What Has Labour Got So Wrong?', category: 'Zoom Social', location: 'Online · Zoom', host: 'Nina', price: 'Free', spots: '20 spots · 11 taken', blurb: "Nina leads an informal Zoom chat on the topic of What's in the News. Bring a drink and a strong opinion." },
    { id: 2, day: 30, dayName: 'Thu', month: 'Apr', monthNum: 4, time: '19:30', endTime: '22:30', title: 'The Woodman Highgate Pub Night — Free Bar Snacks', category: 'Pub Night', location: 'The Woodman, Highgate', host: 'North London MYN', price: 'PAYG', spots: 'Open', blurb: 'Our regular well-supported monthly social meeting of the North London MYN (Meet Your Neighbours) group at The Woodman. We will book a table.' },
    { id: 3, day: 30, dayName: 'Thu', month: 'Apr', monthNum: 4, time: '20:00', endTime: '22:00', title: 'French Linguists Online', category: 'Language', location: 'Online · Zoom', host: "Members' group", price: 'Free', spots: '8 spots · 5 taken', blurb: 'If you wish to brush up or practice your knowledge of French, please join other like-minded members for informal and not-too-serious French conversation.' },
    { id: 4, day: 1, dayName: 'Fri', month: 'May', monthNum: 5, time: '10:45', endTime: '13:30', title: 'Nature Conservation Work in West Hampstead', category: 'Outdoors', location: 'West Hampstead Nature Reserve', host: 'IVC volunteers', price: 'Free', spots: 'Open', blurb: 'IVC members have volunteered at this small nature reserve for decades and have made a major contribution to making it a successful haven for wildlife.' },
    { id: 5, day: 1, dayName: 'Fri', month: 'May', monthNum: 5, time: '19:00', endTime: '23:00', title: 'Evening Beer Garden at The Ferryboat Inn', category: 'Pub Night', location: 'Tottenham Hale, N17', host: 'Open to all', price: 'PAYG', spots: 'Open', blurb: 'A visit to a historic pub going back to the Middle Ages, which serves good value food and drink. It would be nice to sit in the beer garden if the weather behaves.' },
    { id: 6, day: 1, dayName: 'Fri', month: 'May', monthNum: 5, time: '19:30', endTime: '01:00', title: 'Zoom Social: Quiz, Live Performers, Videos, Chat', category: 'Zoom Social', location: 'Online · Zoom', host: 'Regulars', price: 'Free', spots: '25 spots · 18 taken', blurb: 'A very popular evening of friendly chat, a pub quiz, live entertainment and sharing music videos. Regularly attracts around 20 people.' },
    { id: 7, day: 2, dayName: 'Sat', month: 'May', monthNum: 5, time: '19:00', endTime: '22:30', title: 'East European Wine Tasting', category: 'Wine', location: "Members' home, North London", host: 'Pauline Reith', price: '£28 incl. supper', spots: '15 spots · 9 taken', blurb: 'We will taste wines from Hungary, Poland, Moldova, Czech Republic, Bulgaria and Romania. Wines from East Europe have improved markedly in recent years.' },
    { id: 8, day: 4, dayName: 'Mon', month: 'May', monthNum: 5, time: '10:16', endTime: '15:30', title: 'Countryish Walking — Motspur Park to Barnes', category: 'Walking', location: 'Travelcard zone', host: 'Walking group', price: 'Travel + lunch', spots: 'Open', blurb: 'Waterloo dep 09:53, Clapham Junction 10:02, arr Motspur Park 10:16. A flat Bank Holiday Monday walk ending at a riverside pub for lunch.' },
    { id: 9, day: 8, dayName: 'Fri', month: 'May', monthNum: 5, time: '19:30', endTime: '23:00', title: 'Old White Lion Open Mic — East Finchley', category: 'Music', location: 'East Finchley, N2', host: 'Paul Danson', price: '£5', spots: 'Open', blurb: 'Up to 20 of us come every month to this very friendly Open Mic at this cosy pub. The IVC band plays here regularly.' },
    { id: 10, day: 11, dayName: 'Mon', month: 'May', monthNum: 5, time: '19:00', endTime: '22:00', title: 'Theatre: A View from the Bridge', category: 'Theatre', location: 'Almeida Theatre, N1', host: 'Theatre group', price: '£32', spots: '8 spots · 6 taken', blurb: "Arthur Miller's classic, currently transferred to the Almeida. Drinks afterwards at one of the local pubs." },
  ];

  const months = ['April 2026', 'May 2026'];
  const eventsInMonth = (m: number) => upcomingEvents.filter(e => e.monthNum === m + 4);
  const interestOptions = ['Music & Open Mics', 'Wine Tastings', 'Walks & Outdoors', 'Theatre & Cinema', 'Pub Socials', 'Weekends Away'];

  const photoForEvent = (e: any) => {
    const c = e.category.toLowerCase();
    if (c.includes('wine')) return photos.wine;
    if (c.includes('walk') || c.includes('outdoor')) return photos.walks;
    if (c.includes('music') || c.includes('open mic')) return photos.openmic;
    if (c.includes('jazz')) return photos.jazz;
    if (c.includes('pub')) return photos.quiz;
    if (c.includes('theatre')) return photos.jazz;
    if (c.includes('zoom') || c.includes('language')) return photos.quiz;
    return photos.party;
  };

  const openEvent = (event: any) => setActiveModal({ type: 'event', event });
  const openActivity = (activity: any) => setActiveModal({ type: 'activity', activity });
  const openSignup = () => { setSignupStep(0); setSignupData({ name: '', email: '', interests: [] }); setActiveModal({ type: 'signup' }); };
  const closeModal = () => setActiveModal(null);

  return (
    <div className="font-body min-h-screen bg-[#F4EFE6] text-[#1A1614] selection:bg-[#722F37] selection:text-[#F4EFE6]">
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />

      {bannerOpen && (
        <div className="bg-[#1A1614] text-[#F4EFE6] text-xs sm:text-sm relative z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[#F4EFE6]/90">
              <Info className="w-3.5 h-3.5 text-[#C5872A] flex-shrink-0" />
              <span><span className="text-[#C5872A] font-medium">Demo build by STC Labs</span> — interactive prototype. Click activities, events and "Try free" to explore.</span>
            </div>
            <button onClick={() => setBannerOpen(false)} className="text-[#F4EFE6]/60 hover:text-[#F4EFE6] flex-shrink-0" aria-label="Dismiss"><X className="w-4 h-4" /></button>
          </div>
        </div>
      )}

      <div className="fixed inset-0 grain pointer-events-none opacity-60 z-0" />

      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#F4EFE6]/95 backdrop-blur-md border-b border-[#1A1614]/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={photos.logo} alt="London IVC" className="h-10 w-10 rounded-md" />
            <div className="font-display text-xl font-semibold tracking-tight hidden sm:block">London <span className="italic font-medium">IVC</span></div>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#highlights" className="hover:text-[#722F37] transition-colors">Recent</a>
            <a href="#activities" className="hover:text-[#722F37] transition-colors">Activities</a>
            <a href="#calendar" className="hover:text-[#722F37] transition-colors">Calendar</a>
            <a href="#membership" className="hover:text-[#722F37] transition-colors">Join</a>
            <a href="#" className="text-[#6B5D4F] hover:text-[#1A1614]">Sign in</a>
            <button onClick={openSignup} className="bg-[#1A1614] text-[#F4EFE6] px-5 py-2.5 rounded-full hover:bg-[#722F37] transition-colors text-sm font-medium">Try free</button>
          </div>
          <button onClick={openSignup} className="md:hidden bg-[#1A1614] text-[#F4EFE6] px-4 py-2 rounded-full text-xs font-medium">Try free</button>
        </div>
      </nav>

      <section id="top" className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-12 lg:pt-16 lg:pb-20">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#722F37] mb-8 flex items-center gap-3">
          <span className="w-10 h-px bg-[#722F37]" /> Est. 1946 <span className="hidden sm:inline text-[#1A1614]/30">·</span> <span className="hidden sm:inline ticker-dot text-[#1A1614]/60 normal-case tracking-normal text-xs font-body">3 events tonight</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7 lg:pb-6">
            <h1 className="font-display font-medium text-[#1A1614] leading-[0.88] tracking-tight" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
              More than<br />a club.<br />
              <span className="italic font-normal text-[#722F37]">A second life</span><br />
              <span className="text-[#1A1614]/30 italic font-normal">in London.</span>
            </h1>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl photo-warm relative bg-[#1A1614] cursor-pointer group" onClick={() => openEvent(recentHighlights[heroFeature])}>
              {recentHighlights.map((h, i) => (
                <div key={h.id} className={`absolute inset-0 transition-opacity duration-1000 ${i === heroFeature ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={h.photo} alt={h.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-[#1A1614]/30 to-transparent" />
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[#F4EFE6]/80 font-mono text-[10px] uppercase tracking-[0.2em] z-10">
                    <span>From recent diaries</span>
                    <span>{String(i + 1).padStart(2, '0')} / {String(recentHighlights.length).padStart(2, '0')}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7 z-10">
                    <div className="text-[#C5872A] font-mono text-[10px] uppercase tracking-[0.2em] mb-2">{h.tag} · {h.date}</div>
                    <div className="font-display italic text-[#F4EFE6] text-2xl lg:text-3xl leading-tight mb-3">{h.title}</div>
                    <div className="text-[#F4EFE6]/70 text-xs flex items-center gap-1.5 group-hover:gap-3 transition-all">Read the full story <ArrowRight className="w-3 h-3" /></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-3 left-3 right-0 flex gap-1.5 z-10">
              {recentHighlights.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setHeroFeature(i); }} className={`h-1 rounded-full transition-all ${i === heroFeature ? 'w-12 bg-[#722F37]' : 'w-6 bg-[#1A1614]/20 hover:bg-[#1A1614]/40'}`} aria-label={`Show highlight ${i + 1}`} />
              ))}
            </div>
            <div className="absolute -top-3 -right-3 w-24 h-24 border border-[#722F37]/30 -z-10 rounded-sm" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-12 lg:mt-16">
          <div className="lg:col-span-7">
            <p className="text-lg lg:text-xl text-[#3D352E] max-w-2xl leading-relaxed mb-8">
              Wine tastings in members' kitchens. Open mics in Belsize Park pubs. Birdwatching off Southend Pier. Folk nights, theatre runs, weekend escapes. <em className="font-display">Fifty events a month, four hundred members, eighty years and counting.</em>
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={openSignup} className="group bg-[#1A1614] text-[#F4EFE6] px-7 py-4 rounded-full hover:bg-[#722F37] transition-all font-medium flex items-center gap-2">Try a free event <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></button>
              <a href="#calendar" className="border border-[#1A1614]/20 px-7 py-4 rounded-full hover:bg-[#1A1614]/5 transition-colors font-medium flex items-center gap-2"><Calendar className="w-4 h-4" /> See what's on</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1A1614]/15 bg-[#1A1614] text-[#F4EFE6] overflow-hidden relative z-10">
        <div className="flex marquee whitespace-nowrap py-3 font-mono text-xs uppercase tracking-[0.25em]">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6">
              {['Wine Tastings', '★', 'Country Walks', '★', 'Open Mic Nights', '★', 'Theatre & Cinema', '★', 'Folk Music', '★', 'Birdwatching', '★', 'Pub Socials', '★', 'Weekends Away', '★', 'Quizzes', '★', 'Jazz Nights', '★', 'Conservation Work', '★', 'Parties', '★'].map((item, i) => (
                <span key={i} className={item === '★' ? 'text-[#C5872A]' : 'text-[#F4EFE6]'}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] photo-warm overflow-hidden bg-[#722F37] -rotate-2 shadow-xl">
              <img src={photos.wine} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="tape" style={{ top: '-8px', left: '40px' }} />
              <div className="tape" style={{ top: '-8px', right: '40px' }} />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#C5872A] text-[#1A1614] px-5 py-3 font-display italic text-lg shadow-lg rotate-3">"an absolute bargain"</div>
          </div>
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#722F37] mb-5 flex items-center gap-3"><span className="w-6 h-px bg-[#722F37]" /> A note from a member</div>
            <p className="font-display italic text-3xl lg:text-5xl leading-[1.1] tracking-tight text-[#1A1614] mb-8">
              "London's a city of <span className="text-[#722F37]">eight million strangers</span>. We're four hundred of them who decided to <span className="squiggle">do something about it</span>."
            </p>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-2xl">
              <p className="text-[#3D352E] leading-relaxed text-base">
                We're not a network. We're not a dating app. We're not a self-improvement project. We're just <span className="font-display italic font-medium">people who like meeting other people</span> — over a glass of English Pinot, on a windswept walk in Hertfordshire, or in the back room of a pub in Belsize Park while someone's nan does a brilliant turn at the open mic.
              </p>
              <p className="text-[#3D352E] leading-relaxed text-base">
                Members run the events. Anyone can suggest one. The committee mostly stays out of the way. There's no dress code, no networking goals, and no pressure to be anywhere you don't want to be. <span className="font-display italic font-medium">Eighty years of doing it like this seems to have worked.</span>
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="font-hand text-3xl text-[#722F37]">— Caroline, Pauline & Dave</div>
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="bg-[#F4EFE6] relative z-10 py-20 lg:py-28 border-t border-[#1A1614]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#722F37] mb-3 flex items-center gap-3"><span className="w-6 h-px bg-[#722F37]" /> 01 — Field notes</div>
              <h2 className="font-display text-5xl lg:text-7xl font-medium leading-[0.95] tracking-tight max-w-3xl">What we've been<br /><span className="italic">up to lately.</span></h2>
            </div>
            <p className="text-sm text-[#6B5D4F] max-w-xs lg:text-right">Real events, real members, pulled straight from the bulletin. Click any to read the story.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            <article className="lg:col-span-7 group cursor-pointer hover-zoom" onClick={() => openEvent(recentHighlights[0])}>
              <div className="aspect-[5/4] overflow-hidden bg-[#722F37] photo-warm relative mb-5">
                <img src={recentHighlights[0].photo} alt={recentHighlights[0].title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-[#F4EFE6]/95 backdrop-blur-sm text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">{recentHighlights[0].tag}</div>
                <div className="absolute bottom-4 right-4 bg-[#1A1614]/80 backdrop-blur-sm text-[#F4EFE6] text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">Featured story</div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6B5D4F] mb-2">{recentHighlights[0].date}</div>
              <h3 className="font-display text-3xl lg:text-4xl font-medium leading-tight mb-3 group-hover:text-[#722F37] transition-colors">{recentHighlights[0].title}</h3>
              <p className="text-base text-[#3D352E]/80 leading-relaxed line-clamp-3 max-w-2xl">{recentHighlights[0].blurb}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-[#722F37] group-hover:gap-2 transition-all">Read the diary entry <ArrowRight className="w-4 h-4" /></div>
            </article>

            <div className="lg:col-span-5 space-y-6 lg:space-y-8">
              {recentHighlights.slice(1, 3).map((h) => (
                <article key={h.id} className="group cursor-pointer hover-zoom flex gap-4 lg:flex-col" onClick={() => openEvent(h)}>
                  <div className="flex-shrink-0 w-32 h-32 lg:w-full lg:h-auto lg:aspect-[3/2] overflow-hidden bg-[#722F37] photo-warm relative">
                    <img src={h.photo} alt={h.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-[#F4EFE6]/95 backdrop-blur-sm text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full hidden lg:block">{h.tag}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6B5D4F] mb-1.5">{h.tag} · {h.date}</div>
                    <h3 className="font-display text-xl lg:text-2xl font-medium leading-tight mb-2 group-hover:text-[#722F37] transition-colors">{h.title}</h3>
                    <p className="text-sm text-[#3D352E]/80 leading-relaxed line-clamp-2">{h.blurb}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#722F37] text-[#F4EFE6] relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {[
            { figure: '400+', label: 'Members across London', sub: 'and growing' },
            { figure: '50+', label: 'Events every month', sub: 'most are free' },
            { figure: '80', label: 'Years in good company', sub: 'since 1946' },
            { figure: '40+', label: 'Sister clubs nationwide', sub: 'reciprocal access' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-display text-6xl lg:text-7xl font-medium tracking-tight leading-none">{stat.figure}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] mt-3 text-[#C5872A]">{stat.label}</div>
              <div className="text-xs text-[#F4EFE6]/60 mt-1 italic font-display">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="activities" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#722F37] mb-3 flex items-center gap-3"><span className="w-6 h-px bg-[#722F37]" /> 02 — How we spend our time</div>
            <h2 className="font-display text-5xl lg:text-7xl font-medium leading-[0.95] tracking-tight">Activities for<br /><span className="italic">whoever you are</span><br />on any given Tuesday.</h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-base text-[#3D352E] leading-relaxed">Members run their own events, which means the calendar reflects what members <em className="font-display">actually want to do</em> — not what the committee thinks they should. <span className="font-display italic font-medium">Click any tile to see what's coming up.</span></p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((a) => (
            <div key={a.id} className="group cursor-pointer" onClick={() => openActivity(a)}>
              <div className="aspect-[4/3] photo-warm relative overflow-hidden" style={{ backgroundColor: a.accent }}>
                <img src={a.photo} alt={a.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-30" />
                <div className="absolute top-3 left-3 z-10 bg-[#F4EFE6]/95 backdrop-blur-sm rounded-full p-2"><a.icon className="w-3.5 h-3.5 text-[#1A1614] stroke-[2]" /></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] to-[#1A1614]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <p className="text-[#F4EFE6] text-sm leading-snug mb-3 line-clamp-4">{a.blurb}</p>
                  <div className="flex items-center gap-1.5 text-[#C5872A] text-xs font-mono uppercase tracking-widest">See events <ArrowRight className="w-3 h-3" /></div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1A1614]/80 to-transparent group-hover:opacity-0 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 z-[5] group-hover:opacity-0 transition-opacity">
                  <div className="font-display text-xl text-[#F4EFE6] font-medium leading-tight">{a.title}</div>
                  <div className="text-[10px] text-[#C5872A] font-mono uppercase tracking-widest mt-0.5">{a.count}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="calendar" className="bg-[#1A1614] text-[#F4EFE6] py-20 lg:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C5872A] mb-3 flex items-center gap-3"><span className="w-6 h-px bg-[#C5872A]" /> 03 — The diary</div>
              <h2 className="font-display text-5xl lg:text-7xl font-medium leading-[0.95] tracking-tight">Coming up.</h2>
              <p className="text-sm text-[#F4EFE6]/60 mt-4">Click any event to see details and reserve a place.</p>
            </div>
            <div className="flex items-center gap-2 bg-[#F4EFE6]/5 rounded-full p-1">
              <button onClick={() => setCalendarMonth(Math.max(0, calendarMonth - 1))} disabled={calendarMonth === 0} className="p-2 rounded-full hover:bg-[#F4EFE6]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Previous month"><ChevronLeft className="w-4 h-4" /></button>
              <div className="font-mono text-xs uppercase tracking-widest px-3 min-w-[120px] text-center">{months[calendarMonth]}</div>
              <button onClick={() => setCalendarMonth(Math.min(months.length - 1, calendarMonth + 1))} disabled={calendarMonth === months.length - 1} className="p-2 rounded-full hover:bg-[#F4EFE6]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Next month"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="space-y-px bg-[#F4EFE6]/10 fade-in" key={calendarMonth}>
            {eventsInMonth(calendarMonth).map((e) => {
              const accent = categoryColors[e.category] || '#C5872A';
              return (
                <button key={e.id} onClick={() => openEvent({ ...e, photo: photoForEvent(e), date: `${e.dayName} ${e.day} ${e.month} 2026`, title: e.title, tag: e.category })} className="w-full text-left bg-[#1A1614] hover:bg-[#221C19] transition-colors p-5 lg:p-7 grid lg:grid-cols-12 gap-5 items-center group relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: accent }} />
                  <div className="lg:col-span-1 flex lg:block items-baseline gap-3 lg:pl-2">
                    <div className="font-display text-4xl lg:text-5xl font-medium leading-none">{e.day}</div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] lg:mt-1" style={{ color: accent }}>{e.dayName} {e.month}</div>
                      <div className="text-[10px] text-[#F4EFE6]/50 lg:mt-0.5 font-mono">{e.time}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-mono mb-1.5 inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} /><span style={{ color: accent }}>{e.category}</span></div>
                    <div className="font-display text-xl lg:text-2xl font-medium mb-1.5 leading-tight">{e.title}</div>
                    <div className="text-xs text-[#F4EFE6]/60 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {e.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {e.time} – {e.endTime}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 text-xs text-[#F4EFE6]/70">
                    <div className="font-mono uppercase tracking-widest text-[10px] mb-1" style={{ color: accent }}>Cost</div>{e.price}
                  </div>
                  <div className="lg:col-span-2 lg:text-right">
                    <div className="font-mono uppercase tracking-widest text-[10px] mb-1" style={{ color: accent }}>Spaces</div>
                    <div className="text-xs text-[#F4EFE6]/70">{e.spots}</div>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs group-hover:gap-2.5 transition-all" style={{ color: accent }}>Reserve <ArrowRight className="w-3 h-3" /></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#722F37]">
          <img src={photos.party} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4EFE6] via-[#F4EFE6]/85 to-[#F4EFE6]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20 lg:py-28 text-center relative z-10">
          <div className="text-7xl font-display text-[#722F37] leading-none mb-2 select-none">"</div>
          <blockquote className="font-display text-3xl lg:text-5xl leading-[1.1] tracking-tight italic text-[#1A1614] max-w-3xl mx-auto">There's always something on, and you'll always meet someone interesting. After three months I had more weekend plans than I'd had in years.</blockquote>
          <div className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-[#6B5D4F]">— Caroline · member since 2023</div>
        </div>
      </section>

      <section id="membership" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10">
        <div className="text-center mb-14">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#722F37] mb-3 flex items-center gap-3 justify-center"><span className="w-6 h-px bg-[#722F37]" /> 04 — Join <span className="w-6 h-px bg-[#722F37]" /></div>
          <h2 className="font-display text-5xl lg:text-7xl font-medium leading-[0.95] tracking-tight max-w-3xl mx-auto">Two ways in. <span className="italic">No pressure either way.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <div className="border border-[#1A1614]/15 p-9 bg-[#F4EFE6] hover:border-[#1A1614]/30 transition-all hover:-translate-y-1 duration-300">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B5D4F] mb-4">Trial Membership</div>
            <div className="font-display text-6xl font-medium mb-1">Free</div>
            <div className="text-sm text-[#6B5D4F] mb-7">Come to two or three events</div>
            <ul className="space-y-2.5 text-sm mb-9">
              {['Browse the events calendar', 'Attend any open event', 'Meet members before deciding', 'No commitment, no card details'].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#722F37] mt-0.5 flex-shrink-0" />{item}</li>
              ))}
            </ul>
            <button onClick={openSignup} className="w-full border border-[#1A1614] py-3.5 rounded-full hover:bg-[#1A1614] hover:text-[#F4EFE6] transition-colors text-sm font-medium">Start trial membership</button>
          </div>

          <div className="bg-[#1A1614] text-[#F4EFE6] p-9 relative hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] bg-[#C5872A] text-[#1A1614] px-2.5 py-1 rounded-full font-mono">Recommended</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C5872A] mb-4">Full Membership</div>
            <div className="font-display text-6xl font-medium mb-1">£25<span className="text-2xl text-[#F4EFE6]/60">/yr</span></div>
            <div className="text-sm text-[#F4EFE6]/60 mb-7">Less than 50p a week</div>
            <ul className="space-y-2.5 text-sm mb-9">
              {['Everything in Trial', 'Member-priced events & weekends away', 'Organise your own events', 'Access to all 40+ sister IVCs nationwide', "Members' bulletin & forum"].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 text-[#C5872A] mt-0.5 flex-shrink-0" />{item}</li>
              ))}
            </ul>
            <button onClick={openSignup} className="w-full bg-[#C5872A] text-[#1A1614] py-3.5 rounded-full hover:bg-[#D49533] transition-colors text-sm font-medium">Join London IVC</button>
          </div>
        </div>

        <p className="text-center text-xs uppercase tracking-[0.3em] font-mono text-[#6B5D4F] mt-10">A non-profit · Run by members for members · Fees go toward club costs only</p>
      </section>

      <section className="border-t border-[#1A1614]/10 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#722F37] mb-3 text-center flex items-center gap-3 justify-center"><span className="w-6 h-px bg-[#722F37]" /> 05 — Common questions <span className="w-6 h-px bg-[#722F37]" /></div>
          <h2 className="font-display text-5xl lg:text-6xl font-medium leading-[0.95] tracking-tight text-center mb-12">Anything else?</h2>
          <div className="space-y-px bg-[#1A1614]/10">
            {[
              { q: 'Do I need to be a graduate?', a: "No. The 'IVC' stands for Inter-Varsity Club — that's the heritage. Today we welcome anyone over 18 looking for a friendly social scene." },
              { q: "What's the typical age range?", a: 'Most members are in their 40s to 60s, but we have members from late twenties through to seventies. Age matters less than wanting to get out and meet people.' },
              { q: 'How does a trial work?', a: 'Sign up for a free trial, browse the calendar, and RSVP to anything that catches your eye. After a couple of events most people decide whether to join properly.' },
              { q: 'Can I bring a partner or friend?', a: "Yes — guests are welcome at most events. After a couple of visits we'll usually invite them to join too." },
              { q: 'Are events London-only?', a: 'Most are, but we run regular weekends away in the UK and abroad, and our 40+ sister clubs across the country welcome London members at their events.' },
            ].map((item, i) => (
              <details key={i} className="bg-[#F4EFE6] p-6 group">
                <summary className="cursor-pointer flex items-center justify-between font-display text-xl font-medium list-none">{item.q}<span className="text-2xl text-[#722F37] group-open:rotate-45 transition-transform inline-block">+</span></summary>
                <p className="mt-4 text-[#3D352E] leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1A1614] text-[#F4EFE6]">
        <div className="absolute inset-0">
          <img src={photos.openmic} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1614] via-[#1A1614]/80 to-[#1A1614]/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36 relative z-10 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C5872A] mb-6 flex items-center gap-3"><span className="w-10 h-px bg-[#C5872A]" /> Your move</div>
            <h2 className="font-display font-medium leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>The next event is<br /><span className="italic text-[#C5872A]">tonight.</span></h2>
            <p className="text-lg lg:text-xl text-[#F4EFE6]/80 mt-8 max-w-xl leading-relaxed">Sign up for a free trial — takes thirty seconds, no card details. Browse the calendar, RSVP to whatever catches your eye, and turn up. <span className="font-display italic">That's it.</span></p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <button onClick={openSignup} className="group bg-[#C5872A] text-[#1A1614] px-10 py-5 rounded-full hover:bg-[#D49533] transition-all text-base font-medium inline-flex items-center gap-3">Try a free event <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
            <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/50">No card · No commitment · Welcome aboard</div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F0C0B] text-[#F4EFE6] py-14 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <img src={photos.logo} alt="London IVC" className="h-12 w-12 rounded-md" />
                <div className="font-display text-2xl font-semibold">London <span className="italic font-medium">IVC</span></div>
              </div>
              <p className="text-[#F4EFE6]/70 max-w-md leading-relaxed text-sm">A friendly home for graduates, professionals and like-minded people across London since 1946.</p>
            </div>
            <div className="lg:col-span-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C5872A] mb-4">Get in touch</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> admin@londonivc.com</div>
                <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> 07714 628507</div>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <a href="https://www.facebook.com/groups/LondonIVC/" target="_blank" rel="noopener noreferrer" className="text-[#F4EFE6]/70 hover:text-[#C5872A] transition-colors flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] font-mono">Facebook</a>
                <a href="http://www.meetup.com/LondonIVC" target="_blank" rel="noopener noreferrer" className="text-[#F4EFE6]/70 hover:text-[#C5872A] transition-colors text-[10px] uppercase tracking-[0.3em] font-mono">Meetup ↗</a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C5872A] mb-4">Quick links</div>
              <div className="space-y-2 text-sm text-[#F4EFE6]/80">
                <div><a href="#calendar" className="hover:text-[#F4EFE6]">Events calendar</a></div>
                <div><a href="#activities" className="hover:text-[#F4EFE6]">Activities</a></div>
                <div><a href="#membership" className="hover:text-[#F4EFE6]">Membership</a></div>
                <div><a href="#" className="hover:text-[#F4EFE6]">Sign in</a></div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C5872A] mb-4">National</div>
              <div className="space-y-2 text-sm text-[#F4EFE6]/80"><div>About aIVC</div><div>Sister clubs</div><div>National events</div></div>
            </div>
          </div>
          <div className="border-t border-[#F4EFE6]/15 pt-7 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-[#F4EFE6]/50">
            <div>© London IVC 2026 · A non-profit social club, run by members for members</div>
            <div>Demo by STC Labs</div>
          </div>
        </div>
      </footer>

      {activeModal && (
        <div className="fixed inset-0 z-[60] bg-[#1A1614]/80 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8 fade-in" onClick={closeModal}>
          <div className="modal-enter bg-[#F4EFE6] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 z-20 bg-[#1A1614] text-[#F4EFE6] rounded-full p-2 hover:bg-[#722F37] transition-colors" aria-label="Close"><X className="w-4 h-4" /></button>

            {activeModal.type === 'event' && (
              <>
                {activeModal.event.photo && (
                  <div className="aspect-[16/9] photo-warm relative overflow-hidden bg-[#722F37]">
                    <img src={activeModal.event.photo} alt={activeModal.event.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/60 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 text-[#F4EFE6]"><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5872A] mb-1.5">{activeModal.event.tag || activeModal.event.category} · {activeModal.event.date}</div></div>
                  </div>
                )}
                <div className="p-7 lg:p-9">
                  <h3 className="font-display text-2xl lg:text-3xl font-medium leading-tight mb-4">{activeModal.event.title}</h3>
                  <p className="text-[#3D352E] leading-relaxed text-sm mb-6">{activeModal.event.blurb}</p>
                  {activeModal.event.location && (
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-[#1A1614]/15">
                      <div><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#722F37] mb-1">Where</div><div className="text-sm">{activeModal.event.location}</div></div>
                      {activeModal.event.host && (<div><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#722F37] mb-1">Hosted by</div><div className="text-sm">{activeModal.event.host}</div></div>)}
                      {activeModal.event.price && (<div><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#722F37] mb-1">Cost</div><div className="text-sm">{activeModal.event.price}</div></div>)}
                      {activeModal.event.spots && (<div><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#722F37] mb-1">Spaces</div><div className="text-sm">{activeModal.event.spots}</div></div>)}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-3">
                    <button onClick={openSignup} className="bg-[#1A1614] text-[#F4EFE6] px-6 py-3 rounded-full hover:bg-[#722F37] transition-colors text-sm font-medium flex items-center gap-2">Reserve a place <ArrowRight className="w-3.5 h-3.5" /></button>
                    <button onClick={closeModal} className="border border-[#1A1614]/20 px-6 py-3 rounded-full hover:bg-[#1A1614]/5 transition-colors text-sm">Back to calendar</button>
                  </div>
                </div>
              </>
            )}

            {activeModal.type === 'activity' && (
              <>
                <div className="aspect-[16/9] photo-warm relative overflow-hidden bg-[#722F37]">
                  <img src={activeModal.activity.photo} alt={activeModal.activity.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/70 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-[#F4EFE6]">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5872A] mb-1.5">{activeModal.activity.count}</div>
                    <h3 className="font-display text-3xl lg:text-4xl font-medium leading-tight">{activeModal.activity.title}</h3>
                  </div>
                </div>
                <div className="p-7 lg:p-9">
                  <p className="text-[#3D352E] leading-relaxed mb-6">{activeModal.activity.blurb}</p>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#722F37] mb-3">Coming up</div>
                  <div className="space-y-2 mb-6">
                    {upcomingEvents.filter(e => {
                      const c = activeModal.activity.id;
                      const cat = e.category.toLowerCase();
                      if (c === 'pub') return cat.includes('pub');
                      if (c === 'walks') return cat.includes('walk') || cat.includes('outdoor');
                      if (c === 'wine') return cat.includes('wine');
                      if (c === 'music') return cat.includes('music') || cat.includes('open mic');
                      if (c === 'jazz') return cat.includes('jazz');
                      if (c === 'quiz') return cat.includes('zoom') || cat.includes('quiz');
                      return true;
                    }).slice(0, 3).map((e) => (
                      <button key={e.id} onClick={() => openEvent({ ...e, blurb: e.blurb, photo: activeModal.activity.photo, date: `${e.dayName} ${e.day} ${e.month} 2026`, tag: e.category })} className="w-full text-left flex items-center gap-4 p-3 hover:bg-[#1A1614]/5 transition-colors rounded-sm group">
                        <div className="font-display text-2xl font-medium leading-none w-10 text-center">{e.day}</div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">{e.title}</div>
                          <div className="text-xs text-[#6B5D4F]">{e.dayName} {e.month} · {e.time} · {e.location}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#722F37] group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                  <button onClick={openSignup} className="w-full bg-[#1A1614] text-[#F4EFE6] py-3 rounded-full hover:bg-[#722F37] transition-colors text-sm font-medium">Sign up to attend any event</button>
                </div>
              </>
            )}

            {activeModal.type === 'signup' && (
              <div className="p-7 lg:p-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#722F37] mb-4 flex items-center gap-3"><span className="w-6 h-px bg-[#722F37]" />Step {signupStep + 1} of 3 — Trial membership</div>
                {signupStep === 0 && (
                  <div className="fade-in">
                    <h3 className="font-display text-3xl lg:text-4xl font-medium leading-tight mb-3">First, the basics.</h3>
                    <p className="text-sm text-[#6B5D4F] mb-6">No card details needed. We just want to know what to call you.</p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-widest text-[#6B5D4F] block mb-1.5">Your name</label>
                        <input type="text" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} className="w-full bg-transparent border-b border-[#1A1614]/30 py-2 font-display text-xl focus:outline-none focus:border-[#722F37]" placeholder="e.g. Caroline" />
                      </div>
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-widest text-[#6B5D4F] block mb-1.5">Email</label>
                        <input type="email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} className="w-full bg-transparent border-b border-[#1A1614]/30 py-2 font-display text-xl focus:outline-none focus:border-[#722F37]" placeholder="caroline@example.com" />
                      </div>
                    </div>
                    <button onClick={() => setSignupStep(1)} disabled={!signupData.name || !signupData.email} className="w-full bg-[#1A1614] text-[#F4EFE6] py-3.5 rounded-full hover:bg-[#722F37] transition-colors text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">Continue <ArrowRight className="w-3.5 h-3.5" /></button>
                  </div>
                )}
                {signupStep === 1 && (
                  <div className="fade-in">
                    <h3 className="font-display text-3xl lg:text-4xl font-medium leading-tight mb-3">What sounds fun?</h3>
                    <p className="text-sm text-[#6B5D4F] mb-6">Pick a few — we'll send you events to match. You can change this anytime.</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {interestOptions.map((opt) => {
                        const selected = signupData.interests.includes(opt);
                        return (<button key={opt} onClick={() => setSignupData({ ...signupData, interests: selected ? signupData.interests.filter(i => i !== opt) : [...signupData.interests, opt] })} className={`px-3 py-3 text-sm border rounded-sm transition-all text-left ${selected ? 'bg-[#1A1614] text-[#F4EFE6] border-[#1A1614]' : 'border-[#1A1614]/20 hover:border-[#1A1614]/50'}`}>{selected ? '✓ ' : ''}{opt}</button>);
                      })}
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setSignupStep(0)} className="border border-[#1A1614]/20 px-5 py-3 rounded-full hover:bg-[#1A1614]/5 transition-colors text-sm">Back</button>
                      <button onClick={() => setSignupStep(2)} disabled={signupData.interests.length === 0} className="flex-1 bg-[#1A1614] text-[#F4EFE6] py-3 rounded-full hover:bg-[#722F37] transition-colors text-sm font-medium disabled:opacity-40 flex items-center justify-center gap-2">Finish <ArrowRight className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                )}
                {signupStep === 2 && (
                  <div className="fade-in text-center py-4">
                    <div className="w-16 h-16 bg-[#722F37] rounded-full mx-auto mb-6 flex items-center justify-center"><Check className="w-8 h-8 text-[#F4EFE6]" strokeWidth={2.5} /></div>
                    <h3 className="font-display text-3xl lg:text-4xl font-medium leading-tight mb-3">Welcome, <span className="italic">{signupData.name}</span>.</h3>
                    <p className="text-[#3D352E] leading-relaxed mb-6 max-w-md mx-auto">Your trial membership is live. We've sent a welcome email to <span className="font-mono text-xs">{signupData.email}</span> with details of upcoming events that match your interests.</p>
                    <p className="text-xs uppercase tracking-widest font-mono text-[#6B5D4F] mb-7">No card needed · No commitment · Welcome aboard</p>
                    <button onClick={closeModal} className="bg-[#1A1614] text-[#F4EFE6] px-7 py-3.5 rounded-full hover:bg-[#722F37] transition-colors text-sm font-medium">Browse events</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
