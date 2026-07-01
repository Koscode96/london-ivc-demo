'use client';

import { useState } from 'react';
import Link from 'next/link';
import { events as diaryEvents, photos } from '../lib/content';

/* ---- demo data local to the admin preview ---- */

type Submission = {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  proposedBy: string;
  submitted: string;
  blurb: string;
};

const initialSubmissions: Submission[] = [
  { id: 1, title: 'Sunday Roast at The Royal Oak', category: 'Dining', date: 'Sun 12 Jul', time: '13:00', location: 'The Royal Oak, Hampstead', proposedBy: 'Margaret Hill', submitted: '2 hours ago', blurb: 'A relaxed Sunday lunch for anyone free. The Royal Oak does a very good roast and there is room for a big table if we book ahead.' },
  { id: 2, title: 'Kew Gardens Summer Walk', category: 'Walking', date: 'Sat 18 Jul', time: '11:00', location: 'Kew Gardens main gate', proposedBy: 'David Osei', submitted: 'Yesterday', blurb: 'A gentle wander round Kew while the borders are at their best, finishing with tea at the Orangery. Members pay their own entry.' },
  { id: 3, title: 'Jazz at the Vortex, Dalston', category: 'Music', date: 'Fri 24 Jul', time: '20:00', location: 'Vortex Jazz Club, Dalston', proposedBy: 'Sylvia Browning', submitted: 'Yesterday', blurb: 'An evening of live jazz at one of London\u2019s best small venues. Tickets around \u00a315 on the door, get there early for a seat.' },
];

const members = [
  { name: 'Caroline Adeyemi', status: 'Full', since: '2019', renews: 'Jan 2027' },
  { name: 'Pauline Reith', status: 'Full', since: '2015', renews: 'Jan 2027' },
  { name: 'James Okoro', status: 'Trial', since: 'Jun 2026', renews: 'Trial ends Sep 2026' },
  { name: 'Margaret Hill', status: 'Full', since: '2011', renews: 'Jan 2027' },
  { name: 'Nina Kaur', status: 'Trial', since: 'Jun 2026', renews: 'Trial ends Sep 2026' },
  { name: 'David Osei', status: 'Full', since: '2022', renews: 'Jan 2027' },
];

const navItems = [
  { id: 'queue', label: 'Approvals' },
  { id: 'diary', label: 'Events diary' },
  { id: 'members', label: 'Members' },
  { id: 'bulletin', label: 'Weekly bulletin' },
];

export default function AdminPreview() {
  const [section, setSection] = useState('queue');
  const [subs, setSubs] = useState(initialSubmissions);
  const [toast, setToast] = useState<string | null>(null);
  const [bulletinSent, setBulletinSent] = useState(false);

  const act = (id: number, decision: 'approved' | 'declined') => {
    const sub = subs.find((s) => s.id === id);
    setSubs((prev) => prev.filter((s) => s.id !== id));
    setToast(decision === 'approved' ? `"${sub?.title}" published to the diary and this week's bulletin` : `"${sub?.title}" declined \u2014 ${sub?.proposedBy} has been notified`);
    setTimeout(() => setToast(null), 3200);
  };

  return (
    <div className="min-h-screen bg-[var(--paper)] flex flex-col">
      {/* Preview banner */}
      <div className="bg-[var(--green-deep)] text-[var(--paper)] text-[0.72rem] tracking-wide">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-between gap-4">
          <span className="text-[var(--brass)]">Committee admin preview by STC Labs</span>
          <Link href="/" className="underline decoration-[var(--paper)]/30 hover:decoration-[var(--paper)]">View the public site &rarr;</Link>
        </div>
      </div>

      {/* Admin top bar */}
      <header className="border-b rule bg-[var(--paper)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={photos.logo} alt="" className="h-10 w-10 rounded" />
            <div>
              <div className="font-display text-xl font-semibold text-[var(--ink)] leading-none">London <span className="italic text-[var(--claret)]">IVC</span></div>
              <div className="eyebrow text-[0.6rem] text-[var(--ink-soft)] mt-1">Committee area</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <div className="font-sans text-sm text-[var(--ink)]">Dave Lawrence</div>
              <div className="eyebrow text-[0.6rem] text-[var(--ink-soft)]">Committee &middot; Editor</div>
            </div>
            <div className="h-9 w-9 rounded-full bg-[var(--green)] text-[var(--paper)] grid place-items-center font-display text-sm">DL</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full flex-1 grid lg:grid-cols-[13rem_1fr] gap-8 lg:gap-12 py-8">
        {/* Sidebar */}
        <aside>
          <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
            {navItems.map((n) => {
              const active = section === n.id;
              const count = n.id === 'queue' ? subs.length : null;
              return (
                <button
                  key={n.id}
                  onClick={() => setSection(n.id)}
                  className={`flex items-center justify-between gap-2 px-4 py-2.5 rounded-md font-sans text-sm whitespace-nowrap transition-colors ${active ? 'bg-[var(--green)] text-[var(--paper)]' : 'text-[var(--ink-soft)] hover:bg-[var(--paper-dim)]'}`}
                >
                  {n.label}
                  {count !== null && count > 0 && (
                    <span className={`text-[0.7rem] px-1.5 py-0.5 rounded-full ${active ? 'bg-[var(--paper)]/20 text-[var(--paper)]' : 'bg-[var(--claret)] text-[var(--paper)]'}`}>{count}</span>
                  )}
                </button>
              );
            })}
          </nav>
          <div className="hidden lg:block mt-8 p-4 rounded-md border rule">
            <div className="eyebrow text-[var(--ink-soft)] mb-2">This month</div>
            <div className="font-serif-body text-sm text-[var(--ink-soft)] leading-relaxed">
              <span className="font-display text-2xl text-[var(--ink)]">{diaryEvents.length}</span> events published<br />
              <span className="font-display text-2xl text-[var(--ink)]">{subs.length}</span> awaiting review
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0">
          {/* ---- APPROVAL QUEUE (the signature screen) ---- */}
          {section === 'queue' && (
            <div className="fade-in">
              <div className="mb-6">
                <h1 className="font-display text-3xl font-medium text-[var(--ink)]">Events awaiting your approval</h1>
                <p className="font-serif-body text-[var(--ink-soft)] mt-1">Members proposed these. Approve to publish them to the diary and the weekly bulletin, or decline with a note.</p>
              </div>

              {subs.length === 0 ? (
                <div className="border rule rounded-md p-12 text-center">
                  <div className="font-display text-2xl text-[var(--ink)] mb-2">All caught up</div>
                  <p className="font-serif-body text-[var(--ink-soft)]">Nothing waiting for review. New member submissions will appear here.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {subs.map((s) => (
                    <div key={s.id} className="border rule rounded-md p-5 sm:p-6 bg-[var(--paper)]">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="eyebrow text-[var(--claret)] mb-1.5">{s.category}</div>
                          <h3 className="font-display text-xl font-medium text-[var(--ink)] leading-tight">{s.title}</h3>
                        </div>
                        <div className="text-right font-serif-body text-sm text-[var(--ink-soft)]">
                          <div>{s.date} &middot; {s.time}</div>
                          <div className="eyebrow text-[0.6rem] mt-1">Submitted {s.submitted}</div>
                        </div>
                      </div>
                      <p className="font-serif-body text-[0.98rem] leading-relaxed text-[var(--ink-soft)] mb-4">{s.blurb}</p>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-serif-body text-[var(--ink-soft)] mb-5 pb-5 border-b rule">
                        <span><span className="eyebrow text-[0.6rem] text-[var(--ink-soft)] mr-1.5">Where</span>{s.location}</span>
                        <span><span className="eyebrow text-[0.6rem] text-[var(--ink-soft)] mr-1.5">Proposed by</span>{s.proposedBy}</span>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button onClick={() => act(s.id, 'approved')} className="font-sans text-sm font-medium bg-[var(--green)] text-[var(--paper)] px-5 py-2.5 rounded-full hover:bg-[var(--green-deep)] transition-colors">
                          Approve &amp; publish
                        </button>
                        <button onClick={() => act(s.id, 'declined')} className="font-sans text-sm border rule px-5 py-2.5 rounded-full hover:bg-[var(--paper-dim)] transition-colors text-[var(--ink)]">
                          Decline with a note
                        </button>
                        <button className="font-sans text-sm text-[var(--ink-soft)] px-3 py-2.5 hover:text-[var(--ink)] transition-colors">Edit first</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ---- DIARY ---- */}
          {section === 'diary' && (
            <div className="fade-in">
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <h1 className="font-display text-3xl font-medium text-[var(--ink)]">Events diary</h1>
                  <p className="font-serif-body text-[var(--ink-soft)] mt-1">Everything published for July. Click any event to edit it.</p>
                </div>
                <button className="font-sans text-sm font-medium bg-[var(--green)] text-[var(--paper)] px-5 py-2.5 rounded-full hover:bg-[var(--green-deep)] transition-colors whitespace-nowrap">+ Add an event</button>
              </div>
              <div className="border rule rounded-md overflow-hidden">
                {diaryEvents.slice(0, 9).map((e, i) => (
                  <div key={e.id} className={`flex items-center gap-4 px-5 py-3.5 hover:bg-[var(--paper-dim)] transition-colors cursor-pointer ${i > 0 ? 'border-t rule' : ''}`}>
                    <div className="text-center w-12 flex-shrink-0">
                      <div className="font-display text-xl font-medium text-[var(--ink)] leading-none">{e.day}</div>
                      <div className="eyebrow text-[0.55rem] text-[var(--ink-soft)] mt-0.5">{e.dayName}</div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-serif-body text-[var(--ink)] truncate">{e.title}</div>
                      <div className="eyebrow text-[0.6rem] text-[var(--ink-soft)] mt-0.5">{e.category} &middot; {e.time}</div>
                    </div>
                    <span className="eyebrow text-[0.6rem] text-[var(--green)] flex-shrink-0">Published</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---- MEMBERS ---- */}
          {section === 'members' && (
            <div className="fade-in">
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <h1 className="font-display text-3xl font-medium text-[var(--ink)]">Members</h1>
                  <p className="font-serif-body text-[var(--ink-soft)] mt-1">Trial and full members. Renewals are tracked automatically.</p>
                </div>
                <div className="flex gap-2">
                  <div className="border rule rounded-md px-4 py-2 text-center">
                    <div className="font-display text-xl text-[var(--ink)] leading-none">412</div>
                    <div className="eyebrow text-[0.55rem] text-[var(--ink-soft)] mt-1">Full</div>
                  </div>
                  <div className="border rule rounded-md px-4 py-2 text-center">
                    <div className="font-display text-xl text-[var(--claret)] leading-none">7</div>
                    <div className="eyebrow text-[0.55rem] text-[var(--ink-soft)] mt-1">On trial</div>
                  </div>
                </div>
              </div>
              <div className="border rule rounded-md overflow-hidden">
                <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-3 bg-[var(--paper-dim)] eyebrow text-[0.6rem] text-[var(--ink-soft)]">
                  <span>Name</span><span className="hidden sm:block">Member since</span><span>Status</span>
                </div>
                {members.map((m, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto_auto] gap-4 items-center px-5 py-3.5 border-t rule hover:bg-[var(--paper-dim)] transition-colors">
                    <span className="font-serif-body text-[var(--ink)]">{m.name}</span>
                    <span className="hidden sm:block font-serif-body text-sm text-[var(--ink-soft)]">{m.since}</span>
                    <span className={`eyebrow text-[0.6rem] px-2.5 py-1 rounded-full ${m.status === 'Trial' ? 'bg-[var(--claret)]/12 text-[var(--claret)]' : 'bg-[var(--green)]/12 text-[var(--green)]'}`}>{m.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---- BULLETIN ---- */}
          {section === 'bulletin' && (
            <div className="fade-in">
              <h1 className="font-display text-3xl font-medium text-[var(--ink)] mb-1">This week's bulletin</h1>
              <p className="font-serif-body text-[var(--ink-soft)] mb-6">Assembled automatically from the published diary. Review it, then send to all members and subscribers.</p>

              <div className="border rule rounded-md overflow-hidden">
                <div className="bg-[var(--green)] text-[var(--paper)] px-6 py-5">
                  <div className="font-display text-2xl font-medium">London IVC &mdash; the week ahead</div>
                  <div className="eyebrow text-[var(--brass)] mt-1">Friday 3 July 2026</div>
                </div>
                <div className="p-6 space-y-3">
                  {diaryEvents.slice(0, 5).map((e) => (
                    <div key={e.id} className="flex items-baseline gap-3 font-serif-body">
                      <span className="font-display text-[var(--ink)] w-16 flex-shrink-0">{e.dayName} {e.day}</span>
                      <span className="text-[var(--ink)]">{e.title}</span>
                    </div>
                  ))}
                  <div className="pt-3 font-serif-body text-sm italic text-[var(--ink-soft)]">and {diaryEvents.length - 5} more events in the full diary&hellip;</div>
                </div>
                <div className="px-6 py-4 border-t rule flex flex-wrap items-center justify-between gap-3">
                  <span className="eyebrow text-[0.6rem] text-[var(--ink-soft)]">Goes to 419 members &amp; 34 bulletin subscribers</span>
                  {!bulletinSent ? (
                    <button onClick={() => setBulletinSent(true)} className="font-sans text-sm font-medium bg-[var(--green)] text-[var(--paper)] px-5 py-2.5 rounded-full hover:bg-[var(--green-deep)] transition-colors">
                      Send this week's bulletin
                    </button>
                  ) : (
                    <span className="font-sans text-sm text-[var(--green)] font-medium">Sent &middot; scheduled for Friday 7am</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[var(--green-deep)] text-[var(--paper)] px-5 py-3 rounded-full font-sans text-sm shadow-lg fade-in max-w-[90vw]">
          {toast}
        </div>
      )}

      <footer className="border-t rule py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-between gap-3 eyebrow text-[0.6rem] text-[var(--ink-soft)]">
          <span>A preview of the committee admin &middot; nothing here is saved</span>
          <span>Built by STC Labs</span>
        </div>
      </footer>
    </div>
  );
}
