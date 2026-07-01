'use client';

import { useEffect } from 'react';
import { IvcEvent, categoryColors } from '../lib/content';

export function EventModal({ event, onClose }: { event: IvcEvent | null; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = event ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [event]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!event) return null;
  const accent = categoryColors[event.category] || 'var(--brass)';

  return (
    <div className="fixed inset-0 z-[60] bg-[var(--green-deep)]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 fade-in" onClick={onClose}>
      <div className="bg-[var(--paper)] max-w-xl w-full max-h-[88vh] overflow-y-auto relative reveal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-[var(--paper)] border rule rounded-full p-2 hover:bg-[var(--paper-dim)] transition-colors" aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>

        <div className="px-7 sm:px-9 pt-9 pb-8">
          <div className="eyebrow mb-3" style={{ color: accent }}>{event.category}</div>
          <h3 className="font-display text-3xl sm:text-4xl font-medium leading-[1.05] mb-4 text-[var(--ink)]">{event.title}</h3>

          <div className="flex items-baseline gap-3 mb-6 font-serif-body text-[var(--ink-soft)]">
            <span className="font-display text-2xl text-[var(--ink)]">{event.dayName} {event.day} {event.month}</span>
            <span>&middot;</span>
            <span>{event.time} to {event.endTime}</span>
          </div>

          <p className="font-serif-body text-[1.05rem] leading-relaxed text-[var(--ink-soft)] mb-7">{event.blurb}</p>

          <div className="grid grid-cols-2 gap-y-5 gap-x-4 py-6 border-t border-b rule mb-7">
            <div>
              <div className="eyebrow text-[var(--ink-soft)] mb-1">Where</div>
              <div className="font-serif-body text-[var(--ink)]">{event.location}</div>
            </div>
            {event.host && (
              <div>
                <div className="eyebrow text-[var(--ink-soft)] mb-1">Hosted by</div>
                <div className="font-serif-body text-[var(--ink)]">{event.host}</div>
              </div>
            )}
            <div>
              <div className="eyebrow text-[var(--ink-soft)] mb-1">Cost</div>
              <div className="font-serif-body text-[var(--ink)]">{event.price}</div>
            </div>
            {event.spots && (
              <div>
                <div className="eyebrow text-[var(--ink-soft)] mb-1">Availability</div>
                <div className="font-serif-body text-[var(--ink)]">{event.spots}</div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={onClose} className="font-sans text-sm font-medium bg-[var(--green)] text-[var(--paper)] px-6 py-3 rounded-full hover:bg-[var(--green-deep)] transition-colors">
              Reserve a place
            </button>
            <button onClick={onClose} className="font-sans text-sm border rule px-6 py-3 rounded-full hover:bg-[var(--paper-dim)] transition-colors text-[var(--ink)]">
              Back to diary
            </button>
          </div>
          <p className="eyebrow text-[var(--ink-soft)]/60 mt-4">Members and trial members can reserve online</p>
        </div>
      </div>
    </div>
  );
}
