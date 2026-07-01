'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { photos } from '../lib/content';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/join', label: 'Join' },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <div className="bg-[var(--green-deep)] text-[var(--paper)]/80 text-[0.7rem] tracking-wide">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-center sm:justify-between gap-4">
          <span className="hidden sm:inline">A non-profit social club, run by members for members.</span>
          <span className="text-[var(--brass)]">Demonstration site prepared by STC Labs</span>
        </div>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled || menuOpen ? 'bg-[var(--paper)]/97 backdrop-blur border-b rule shadow-[0_1px_20px_rgba(0,0,0,0.03)]' : 'bg-[var(--paper)] border-b border-transparent'}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 group">
            <img src={photos.logo} alt="London IVC crest" className="h-12 w-12 sm:h-14 sm:w-14 rounded" />
            <div className="leading-none">
              <div className="font-display text-2xl sm:text-[1.7rem] font-semibold tracking-tight text-[var(--ink)]">
                London <span className="italic font-medium text-[var(--claret)]">IVC</span>
              </div>
              <div className="eyebrow mt-1 text-[0.6rem] text-[var(--ink-soft)]">Est. 1946</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} className={`font-sans text-[0.95rem] transition-colors ${active ? 'text-[var(--claret)]' : 'text-[var(--ink)] hover:text-[var(--claret)]'}`}>
                  {l.label}
                </Link>
              );
            })}
            <a href="#" className="font-sans text-[0.95rem] text-[var(--ink-soft)] hover:text-[var(--ink)]">Members</a>
            <Link href="/join" className="font-sans text-[0.9rem] font-medium bg-[var(--green)] text-[var(--paper)] px-5 py-2.5 rounded-full hover:bg-[var(--green-deep)] transition-colors">
              Join the club
            </Link>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 -mr-2 text-[var(--ink)]" aria-label="Menu" aria-expanded={menuOpen}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              {menuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t rule bg-[var(--paper)] fade-in">
            <nav className="max-w-6xl mx-auto px-5 py-3 flex flex-col">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="font-display text-2xl py-3.5 border-b rule last:border-0 text-[var(--ink)]">
                  {l.label}
                </Link>
              ))}
              <a href="#" className="font-sans text-sm text-[var(--ink-soft)] py-3.5">Members' login</a>
              <Link href="/join" className="mt-3 mb-2 text-center font-sans text-sm font-medium bg-[var(--green)] text-[var(--paper)] px-5 py-3 rounded-full">
                Join the club
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--green-deep)] text-[var(--paper)]/85 mt-auto">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5 mb-5">
              <img src={photos.logo} alt="London IVC crest" className="h-12 w-12 rounded" />
              <div className="font-display text-2xl font-semibold text-[var(--paper)]">London <span className="italic font-medium text-[var(--brass)]">IVC</span></div>
            </div>
            <p className="font-serif-body text-[var(--paper)]/70 leading-relaxed max-w-sm text-[0.98rem]">
              The longest-established social and activities club in London, welcoming graduates, professionals and like-minded people since 1946.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-[var(--brass)] mb-4">Pages</div>
            <ul className="space-y-2.5 font-sans text-sm">
              <li><Link href="/" className="link-underline hover:text-[var(--paper)]">Home</Link></li>
              <li><Link href="/events" className="link-underline hover:text-[var(--paper)]">Events</Link></li>
              <li><Link href="/join" className="link-underline hover:text-[var(--paper)]">Join</Link></li>
              <li><a href="#" className="link-underline hover:text-[var(--paper)]">Members' login</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-[var(--brass)] mb-4">National</div>
            <ul className="space-y-2.5 font-sans text-sm text-[var(--paper)]/70">
              <li>About aIVC</li>
              <li>Sister clubs</li>
              <li>National events</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-[var(--brass)] mb-4">Get in touch</div>
            <ul className="space-y-2.5 font-sans text-sm text-[var(--paper)]/80">
              <li>admin@londonivc.com</li>
              <li>07714 628507</li>
            </ul>
            <div className="flex gap-4 mt-5">
              <a href="https://www.facebook.com/groups/LondonIVC/" target="_blank" rel="noopener noreferrer" className="eyebrow text-[var(--paper)]/60 hover:text-[var(--brass)]">Facebook</a>
              <a href="http://www.meetup.com/LondonIVC" target="_blank" rel="noopener noreferrer" className="eyebrow text-[var(--paper)]/60 hover:text-[var(--brass)]">Meetup</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--paper)]/15 mt-14 pt-7 flex flex-wrap items-center justify-between gap-3 eyebrow text-[var(--paper)]/45">
          <span>&copy; London IVC 2026 &middot; A non-profit social club</span>
          <span>Demonstration site by STC Labs</span>
        </div>
      </div>
    </footer>
  );
}
