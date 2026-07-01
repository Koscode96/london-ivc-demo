'use client';

import { useState } from 'react';
import { SiteNav, SiteFooter } from '../components/SiteChrome';
import { faqs } from '../lib/content';

export default function JoinPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ name: '', email: '' });
  const [bulletinEmail, setBulletinEmail] = useState('');
  const [bulletinDone, setBulletinDone] = useState(false);

  const submitBulletin = (e: React.FormEvent) => {
    e.preventDefault();
    if (bulletinEmail.includes('@')) setBulletinDone(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 w-full pt-14 pb-10 sm:pt-16">
        <div className="eyebrow mb-4 reveal">Membership</div>
        <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-6xl font-medium leading-[1.0] tracking-[-0.02em] text-[var(--ink)] max-w-3xl reveal">
          How to join us
        </h1>
        <p className="font-serif-body text-lg leading-relaxed text-[var(--ink-soft)] mt-6 max-w-2xl reveal">
          Begin with a three-month trial. You will have the full events diary and the weekly bulletin, and you are welcome at any open event. At the end of the trial you decide whether to become a full member.
        </p>
      </section>

      {/* MEMBERSHIP OPTIONS */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-10 sm:py-14">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Trial */}
          <div className="border rule bg-[var(--paper)] p-8 sm:p-10 flex flex-col">
            <div className="eyebrow text-[var(--ink-soft)] mb-4">Three-month trial</div>
            <div className="font-display text-5xl font-medium text-[var(--ink)] mb-1">Free</div>
            <div className="font-serif-body text-[var(--ink-soft)] mb-8">Three months, with no obligation</div>
            <ul className="space-y-3 font-serif-body text-[var(--ink)] mb-9">
              {['Full access to the events diary', 'Come to any open event for three months', 'The weekly members\u2019 bulletin', 'No card details needed to begin'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[var(--brass)] mt-1.5 flex-shrink-0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg></span>
                  {item}
                </li>
              ))}
            </ul>
            {/* Inline signup */}
            <div className="mt-auto">
              {step === 0 && (
                <div className="space-y-4 fade-in">
                  <div>
                    <label className="eyebrow text-[var(--ink-soft)] block mb-1.5">Your name</label>
                    <input type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className="w-full bg-transparent border-b rule py-2 font-serif-body text-lg focus:outline-none focus:border-[var(--brass)]" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="eyebrow text-[var(--ink-soft)] block mb-1.5">Email</label>
                    <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="w-full bg-transparent border-b rule py-2 font-serif-body text-lg focus:outline-none focus:border-[var(--brass)]" placeholder="jane@example.com" />
                  </div>
                  <button onClick={() => setStep(1)} disabled={!data.name || !data.email} className="w-full font-sans text-sm font-medium bg-[var(--green)] text-[var(--paper)] py-3.5 rounded-full hover:bg-[var(--green-deep)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-2">
                    Start my trial
                  </button>
                </div>
              )}
              {step === 1 && (
                <div className="fade-in text-center py-4">
                  <div className="w-14 h-14 bg-[var(--green)] rounded-full mx-auto mb-5 flex items-center justify-center">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--paper)" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg>
                  </div>
                  <h3 className="font-display text-2xl font-medium text-[var(--ink)] mb-2">Welcome, {data.name.split(' ')[0]}</h3>
                  <p className="font-serif-body text-[var(--ink-soft)] leading-relaxed">
                    Your three-month trial is set up. We have sent a note to {data.email} with this Friday's bulletin and details of how to reserve your first event.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Full membership */}
          <div className="border-2 border-[var(--green)] bg-[var(--green)] text-[var(--paper)] p-8 sm:p-10 flex flex-col relative">
            <div className="absolute top-6 right-6 eyebrow bg-[var(--brass)] text-[var(--green-deep)] px-3 py-1 rounded-full">Recommended</div>
            <div className="eyebrow text-[var(--brass)] mb-4">Full membership</div>
            <div className="font-display text-5xl font-medium mb-1">&pound;25<span className="text-2xl text-[var(--paper)]/60"> / year</span></div>
            <div className="font-serif-body text-[var(--paper)]/70 mb-8">Around fifty pence a week</div>
            <ul className="space-y-3 font-serif-body mb-9">
              {['Everything in the trial', 'Member rates on events and weekends away', 'Propose and host your own events', 'Access to the 40+ sister clubs nationwide', 'The members\u2019 bulletin and forum'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[var(--brass)] mt-1.5 flex-shrink-0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg></span>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={() => setStep(0)} className="mt-auto w-full font-sans text-sm font-medium bg-[var(--brass)] text-[var(--green-deep)] py-3.5 rounded-full hover:bg-[var(--brass-deep)] hover:text-[var(--paper)] transition-colors">
              Join London IVC
            </button>
            <p className="eyebrow text-[var(--paper)]/50 mt-4 text-center">Most trial members join at the end of their three months</p>
          </div>
        </div>

        <p className="text-center font-serif-body italic text-[var(--ink-soft)] mt-8">
          A non-profit club. Subscriptions go towards club costs only.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--paper-dim)]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[var(--ink)] mb-10 text-center">Common questions</h2>
          <div className="border-t rule">
            {faqs.map((item) => (
              <details key={item.q} className="border-b rule group">
                <summary className="cursor-pointer flex items-center justify-between gap-4 py-5 font-display text-xl font-medium text-[var(--ink)] list-none">
                  {item.q}
                  <span className="text-2xl text-[var(--brass)] group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <p className="font-serif-body text-[1.02rem] leading-relaxed text-[var(--ink-soft)] pb-5 -mt-1 max-w-2xl">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BULLETIN — one simple line */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-16 sm:py-20">
        <div className="border rule bg-[var(--paper)] p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[var(--ink)] leading-tight">Prefer to keep an eye on things first?</h2>
            <p className="font-serif-body text-[var(--ink-soft)] mt-2">Sign up for our weekly bulletin.</p>
          </div>
          <div className="lg:col-span-7">
            {!bulletinDone ? (
              <form onSubmit={submitBulletin} className="flex flex-col sm:flex-row gap-3">
                <input type="email" required value={bulletinEmail} onChange={(e) => setBulletinEmail(e.target.value)} placeholder="your@email.com" className="flex-1 bg-transparent border-b rule py-3 font-serif-body text-lg focus:outline-none focus:border-[var(--brass)]" />
                <button type="submit" className="font-sans text-sm font-medium bg-[var(--green)] text-[var(--paper)] px-7 py-3 rounded-full hover:bg-[var(--green-deep)] transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="font-serif-body text-lg text-[var(--ink)] fade-in">Thank you. The next bulletin will arrive this Friday at {bulletinEmail}.</p>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
