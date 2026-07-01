import Link from 'next/link';
import { SiteNav, SiteFooter } from './components/SiteChrome';
import { photos, events, activities } from './lib/content';

export default function HomePage() {
  const featured = events.find((e) => e.featured);
  const upcoming = events.filter((e) => !e.featured).slice(0, 4);
  const activityTaster = activities.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 w-full pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="eyebrow mb-6">London &middot; Since 1946</div>
            <h1 className="font-display text-[2.9rem] sm:text-6xl lg:text-[4.6rem] font-medium leading-[0.98] tracking-[-0.02em] text-[var(--ink)]">
              A social club<br />for London,<br />
              <span className="italic font-normal text-[var(--claret)]">eighty years on.</span>
            </h1>
            <p className="font-serif-body text-lg sm:text-xl leading-relaxed text-[var(--ink-soft)] mt-7 max-w-lg">
              Over four hundred members. More than fifty events a month. Wine tastings, country walks, open mics, dining and much more, all run by the members themselves.
            </p>
            <div className="flex flex-wrap gap-3.5 mt-9">
              <Link href="/join" className="font-sans text-[0.95rem] font-medium bg-[var(--green)] text-[var(--paper)] px-7 py-3.5 rounded-full hover:bg-[var(--green-deep)] transition-colors">
                Start a three-month trial
              </Link>
              <Link href="/events" className="font-sans text-[0.95rem] border rule px-7 py-3.5 rounded-full hover:bg-[var(--paper-dim)] transition-colors text-[var(--ink)]">
                See what's on
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 reveal" style={{ animationDelay: '0.1s' }}>
            <figure className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[var(--green)]">
                <img src={photos.wine} alt="Members at a London IVC wine tasting evening" className="w-full h-full object-cover" style={{ filter: 'saturate(0.96) contrast(1.02)' }} />
              </div>
              <figcaption className="font-serif-body italic text-sm text-[var(--ink-soft)] mt-3 pl-1">
                A members' wine tasting evening, one of more than fifty events this month.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 80TH ANNIVERSARY — the signature moment */}
      {featured && (
        <section className="bg-[var(--green)] text-[var(--paper)]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <div className="eyebrow text-[var(--brass)] mb-5">This month &middot; A milestone</div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-medium leading-[1.02] tracking-[-0.01em]">
                  Eighty years ago this month, two Cambridge undergraduates started a club.
                </h2>
                <p className="font-serif-body text-lg leading-relaxed text-[var(--paper)]/80 mt-6 max-w-2xl">
                  {featured.blurb}
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8 font-serif-body text-[var(--paper)]/70">
                  <span><span className="text-[var(--brass)] font-display text-xl">{featured.dayName} {featured.day} July</span></span>
                  <span>{featured.location}</span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="border border-[var(--paper)]/20 rounded-sm p-8 sm:p-10">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="font-display text-4xl sm:text-5xl font-medium text-[var(--brass)]">80</div>
                      <div className="eyebrow text-[var(--paper)]/60 mt-2">Years</div>
                    </div>
                    <div>
                      <div className="font-display text-4xl sm:text-5xl font-medium text-[var(--brass)]">400+</div>
                      <div className="eyebrow text-[var(--paper)]/60 mt-2">Members</div>
                    </div>
                    <div>
                      <div className="font-display text-4xl sm:text-5xl font-medium text-[var(--brass)]">50+</div>
                      <div className="eyebrow text-[var(--paper)]/60 mt-2">Events a month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WHAT WE ARE */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.9rem] font-medium leading-[1.05] tracking-[-0.01em] text-[var(--ink)]">
              A club run by its members, not for them.
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8 lg:gap-10">
            <p className="font-serif-body text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
              London IVC has more activities per member than any comparable organisation. Because the club is owned and run by its members, of whom there are hundreds rather than thousands, it keeps a genuine club atmosphere, and new members settle in quickly.
            </p>
            <p className="font-serif-body text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
              Many members follow one or two particular interests, but there is always overlap between them. Even trying a new activity tends to feel like being among friends of friends. There is no dress code and no obligation, only a full and varied diary to dip into as you please.
            </p>
          </div>
        </div>
      </section>

      {/* UPCOMING SNAPSHOT */}
      <section className="bg-[var(--paper-dim)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="eyebrow mb-3">The diary</div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[var(--ink)]">A few of this week's events</h2>
            </div>
            <Link href="/events" className="font-sans text-sm text-[var(--claret)] link-underline pb-0.5">See the full diary &rarr;</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)] border rule">
            {upcoming.map((e) => (
              <div key={e.id} className="bg-[var(--paper)] p-6 flex flex-col">
                <div className="font-display text-3xl font-medium text-[var(--ink)] leading-none">{e.day}</div>
                <div className="eyebrow text-[var(--ink-soft)] mt-1.5">{e.dayName} {e.month} &middot; {e.time}</div>
                <h3 className="font-display text-xl font-medium leading-tight mt-4 mb-2 text-[var(--ink)]">{e.title}</h3>
                <p className="font-serif-body text-sm text-[var(--ink-soft)] leading-relaxed mt-auto">{e.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES TASTER */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-16 sm:py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="eyebrow mb-3">How members spend their time</div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.01em] text-[var(--ink)]">Something on, most nights of the week</h2>
          </div>
          <Link href="/events" className="font-sans text-sm text-[var(--claret)] link-underline pb-0.5">All activities &rarr;</Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activityTaster.map((a) => (
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

      {/* CLOSING CTA */}
      <section className="bg-[var(--green-deep)] text-[var(--paper)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-[-0.01em] max-w-2xl mx-auto">
            Come along to an event before you decide anything.
          </h2>
          <p className="font-serif-body text-lg text-[var(--paper)]/75 mt-5 max-w-xl mx-auto">
            A three-month trial gives you the full diary and the weekly bulletin, with no obligation to join.
          </p>
          <Link href="/join" className="inline-block mt-8 font-sans text-[0.95rem] font-medium bg-[var(--brass)] text-[var(--green-deep)] px-8 py-4 rounded-full hover:bg-[var(--brass-deep)] hover:text-[var(--paper)] transition-colors">
            Start a three-month trial
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
