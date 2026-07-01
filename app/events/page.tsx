'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiteNav, SiteFooter } from '../components/SiteChrome';
import { EventModal } from '../components/EventModal';
import { events, activities, categoryColors, IvcEvent } from '../lib/content';

export default function EventsPage() {
  const [selected, setSelected] = useState<IvcEvent | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(events.map((e) => e.category)))];
  const shown = filter === 'All' ? events : events.filter((e) => e.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      {/* PAGE HEADER */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 w-full pt-14 pb-10 sm:pt-16">
        <div className="eyebrow mb-4 reveal">Events &amp; Activities</div>
        <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-6xl font-medium leading-[1.0] tracking-[-0.02em] text-[var(--ink)] max-w-3xl reveal">
          More than fifty events a month, all across London.
        </h1>
        <p className="font-serif-body text-lg leading-relaxed text-[var(--ink-soft)] mt-6 max-w-2xl reveal">
          Every event is proposed and run by a member. Below is what our members do throughout the year, followed by the diary for this month. Any member can add an event of their own.
        </p>
      </section>

      {/* ACTIVITIES */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a) => (
            <article key={a.id} className="group">
              <div className="aspect-[3/2] overflow-hidden rounded-sm bg-[var(--green)] mb-4">
                <img src={a.photo} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'saturate(0.96) contrast(1.02)' }} />
              </div>
              <div className="eyebrow text-[var(--ink-soft)] mb-1.5">{a.cadence}</div>
              <h3 className="font-display text-xl font-medium text-[var(--ink)] mb-2">{a.title}</h3>
              <p className="font-serif-body text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">{a.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DIARY */}
      <section className="bg-[var(--paper-dim)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <div className="flex items-end justify-between flex-wrap gap-5 mb-8">
            <div>
              <div className="eyebrow mb-3">The diary</div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[var(--ink)]">July 2026</h2>
            </div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-sans text-[0.8rem] px-4 py-2 rounded-full border transition-colors ${filter === c ? 'bg-[var(--green)] text-[var(--paper)] border-[var(--green)]' : 'border-[var(--rule)] text-[var(--ink-soft)] hover:border-[var(--ink-soft)]'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="border rule bg-[var(--paper)]">
            {shown.map((e, i) => {
              const accent = categoryColors[e.category] || 'var(--brass)';
              return (
                <button
                  key={e.id}
                  onClick={() => setSelected(e)}
                  className={`w-full text-left grid grid-cols-[auto_1fr] sm:grid-cols-[5.5rem_1fr_auto] gap-x-5 gap-y-2 items-baseline sm:items-center px-5 sm:px-7 py-5 hover:bg-[var(--paper-dim)] transition-colors group relative ${i > 0 ? 'border-t rule' : ''}`}
                >
                  <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ backgroundColor: accent }} />
                  <div className="sm:text-center">
                    <div className="font-display text-3xl sm:text-4xl font-medium text-[var(--ink)] leading-none">{e.day}</div>
                    <div className="eyebrow text-[var(--ink-soft)] mt-1">{e.dayName} {e.month}</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="eyebrow mb-1" style={{ color: accent }}>{e.category}</div>
                    <h3 className="font-display text-lg sm:text-xl font-medium leading-tight text-[var(--ink)] group-hover:text-[var(--claret)] transition-colors">{e.title}</h3>
                    <div className="font-serif-body text-sm text-[var(--ink-soft)] mt-1.5 flex flex-wrap gap-x-4 gap-y-0.5">
                      <span>{e.location}</span>
                      <span>{e.time} to {e.endTime}</span>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <div className="font-serif-body text-sm text-[var(--ink)]">{e.price}</div>
                    <div className="eyebrow text-[var(--claret)] mt-2 group-hover:opacity-100 opacity-70 transition-opacity">View &rarr;</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Member-submitted events note */}
          <div className="mt-10 border rule bg-[var(--paper)] p-7 sm:p-9 grid sm:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h3 className="font-display text-2xl font-medium text-[var(--ink)] mb-2">Members add their own events</h3>
              <p className="font-serif-body text-[var(--ink-soft)] leading-relaxed max-w-xl">
                Any member can propose an event, from a pub evening to a weekend away. A committee member checks it over, then it appears here in the diary and in the weekly bulletin.
              </p>
            </div>
            <Link href="/join" className="font-sans text-sm font-medium bg-[var(--green)] text-[var(--paper)] px-6 py-3.5 rounded-full hover:bg-[var(--green-deep)] transition-colors whitespace-nowrap text-center">
              Become a member
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <EventModal event={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
