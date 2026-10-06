import { useCallback, useEffect, useRef, useState } from 'react'
import { useI18n, asset } from './i18n'
import { Reveal } from './Reveal'
import { useActiveSection, useDialogFlag, useMenu, useSwipe } from './hooks'
import { type Content, type Project, type SectorKey, projects, clients, WA, PHONE, EMAIL, FB, IG, MAPS, PITCH_WA } from './content'

const wa = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`
const src = (img: string, w: 640 | 1200) => asset(`images/${img}-${w}.webp`)
const srcSet = (img: string) => `${src(img, 640)} 640w, ${src(img, 1200)} 1024w`

const heroOrder: { key: SectorKey; id: string }[] = [
  { key: 'corporate', id: 'tdcx-google' },
  { key: 'medical', id: 'dermadarah' },
  { key: 'hotel', id: 'renaissance' },
  { key: 'fnb', id: 'celsius' },
]
const byId = (id: string) => projects.find((p) => p.id === id)!

function useC() {
  return useI18n<Content>()
}

function WaIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  )
}

function Logo({ small = false }: { small?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-display font-medium tracking-[0.08em] ${small ? 'text-xl' : 'text-[1.55rem]'}`}>BESPOKE</span>
      {' '}<span className="mt-1 text-[8.5px] font-semibold tracking-[0.62em] text-mist">INTERIOR</span>
    </span>
  )
}

function Header() {
  const { c, lang, setLang } = useC()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)
  const closeMenu = useCallback(() => setOpen(false), [])
  useMenu(open, closeMenu, btnRef)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const links: [string, string][] = [
    ['sectors', c.nav.sectors], ['projects', c.nav.projects], ['services', c.nav.services],
    ['process', c.nav.process], ['studio', c.nav.studio], ['contact', c.nav.contact],
  ]
  const active = useActiveSection(links.map(([id]) => id))
  const toggle = () => setLang(lang === 'en' ? 'ms' : 'en')
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${scrolled || open ? 'glass border-b border-white/5' : ''}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="tap flex items-center rounded-md"><Logo /></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label={c.a11y.main}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}
              className={`nav-link relative py-3 text-[13px] font-medium transition hover:text-teal ${active === id ? 'text-bone' : 'text-bone/70'}`}>{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button data-lang-toggle onClick={toggle} aria-label={c.langAria} className="tap rounded-full border border-white/15 px-3 text-xs font-bold tracking-widest transition hover:border-teal hover:text-teal">
            {c.langLabel}
          </button>
          <a href={wa(c.contact.waText)} target="_blank" rel="noopener" className="tap hidden items-center gap-2 rounded-full bg-teal px-5 text-[13px] font-bold text-ink transition hover:bg-bone sm:inline-flex">
            <WaIcon className="h-4 w-4" /> {c.contact.wa}
          </a>
          <button ref={btnRef} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mnav" aria-label={open ? c.close : c.menu} className="tap grid place-items-center rounded-full border border-white/15 lg:hidden">
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-bone transition ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-bone transition ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mnav" className="fade-in h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/5 bg-ink px-5 pb-10 pt-4 lg:hidden" aria-label={c.a11y.mobile}>
          {links.map(([id, label], i) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined}
              className={`flex min-h-[56px] items-center justify-between border-b border-white/5 font-display text-3xl transition active:text-teal ${active === id ? 'text-teal' : ''}`}>
              {label}<span className="font-sans text-xs text-mist">0{i + 1}</span>
            </a>
          ))}
          <a href={wa(c.contact.waText)} target="_blank" rel="noopener" className="mt-8 flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-teal font-bold text-ink">
            <WaIcon /> {c.contact.wa}
          </a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  const { c, lang } = useC()
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const [mounted, setMounted] = useState<boolean[]>([true, false, false, false])
  const reduce = useRef(false)
  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = window.setTimeout(() => setMounted([true, true, true, true]), 2500)
    return () => window.clearTimeout(t)
  }, [])
  useEffect(() => {
    if (paused || reduce.current) return
    const t = window.setTimeout(() => setI((v) => (v + 1) % heroOrder.length), 6000)
    return () => window.clearTimeout(t)
  }, [i, paused])
  const pick = (n: number) => {
    setMounted((m) => m.map((v, k) => v || k === n))
    setI(n)
    setPaused(true)
  }
  const cur = byId(heroOrder[i].id)
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-teal/10 blur-3xl max-md:hidden" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-6 lg:pt-6">
          <p className="kicker">{c.hero.eyebrow}</p>
          <h1 className="mt-6 font-display font-medium leading-[0.98] tracking-[-0.02em]" style={{ fontSize: lang === 'ms' ? 'clamp(2.4rem, 6.4vw, 4.5rem)' : 'clamp(2.55rem, 7vw, 5.1rem)' }}>
            {c.hero.title1}{' '}
            <em className="text-teal">{c.hero.title2}</em>
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-bone/70 sm:text-base">{c.hero.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={wa(c.contact.waText)} target="_blank" rel="noopener" className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-teal px-7 text-[15px] font-bold text-ink transition hover:bg-bone">
              <WaIcon /> {c.hero.cta}
            </a>
            <a href="#projects" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-[15px] font-semibold transition hover:border-teal hover:text-teal">
              {c.hero.cta2} <span aria-hidden>→</span>
            </a>
          </div>
          <div className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-mist">{c.hero.switchLabel}</p>
            <div role="tablist" aria-label={c.hero.switchLabel} className="mt-3 grid grid-cols-4 gap-1.5 sm:gap-2">
              {heroOrder.map((h, n) => (
                <button key={h.key} role="tab" aria-selected={i === n} onClick={() => pick(n)}
                  className={`relative min-h-[48px] overflow-hidden rounded-lg border px-1 text-[12.5px] font-semibold transition sm:text-sm ${i === n ? 'border-teal/60 bg-teal/10 text-bone' : 'border-white/10 text-bone/60 hover:text-bone'}`}>
                  {c.sectorNames[h.key]}
                  {i === n && <span key={`${n}-${paused}`} className={`absolute inset-x-0 bottom-0 h-0.5 bg-teal ${paused ? '' : 'chip-bar'}`} />}
                </button>
              ))}
            </div>
          </div>
          <dl className="mt-10 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
            {c.stats.map((s) => (
              <div key={s.v} className="px-3 py-4 first:pl-0">
                <dt className="sr-only">{s.v}</dt>
                <dd className="font-display text-3xl sm:text-4xl">{s.k}{s.k === '5.0' && <span className="ml-1 text-lg text-teal">★</span>}</dd>
                <dd className="mt-1 text-[11.5px] leading-snug text-mist sm:text-xs">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/4.2] w-full overflow-hidden rounded-[22px] bg-graphite sm:aspect-[4/3.6] lg:aspect-[4/4.9]">
            {heroOrder.map((h, n) => mounted[n] && (
              <img key={h.id} src={src(h.id, 1200)} srcSet={srcSet(h.id)} sizes="(min-width:1024px) 45vw, 92vw"
                alt={`${byId(h.id).client} — ${byId(h.id).name}`} width={1024} height={1024}
                loading={n === 0 ? 'eager' : 'lazy'} fetchPriority={n === 0 ? 'high' : 'low'} decoding={n === 0 ? 'sync' : 'async'}
                data-on={i === n} className="hero-img absolute inset-0 h-full w-full object-cover" />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1.5 font-display text-sm text-bone">
              0{i + 1}<span className="text-mist"> / 0{heroOrder.length}</span>
            </div>
            <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-teal">{c.hero.now} · {c.sectorNames[cur.sector]}</p>
              <p key={cur.id} className="fade-in mt-1.5 font-display text-2xl leading-tight sm:text-3xl">{cur.client}</p>
              <p className="text-sm text-bone/70">{cur.name}</p>
              <p className="mt-2 text-[10.5px] text-bone/45">{c.hero.photo}</p>
            </div>
          </div>
          <div aria-hidden className="absolute -bottom-3 -left-3 hidden h-24 w-24 border-b border-l border-teal/50 lg:block" />
          <div aria-hidden className="absolute -right-3 -top-3 hidden h-24 w-24 border-r border-t border-teal/50 lg:block" />
        </div>
      </div>
    </section>
  )
}

function Clients() {
  const { c } = useC()
  const row = [...clients, ...clients]
  return (
    <section aria-label={c.clientsLabel} className="border-y border-white/5 bg-graphite py-6">
      <p className="mb-4 px-5 text-center text-[10.5px] font-semibold uppercase tracking-[0.26em] text-mist">{c.clientsLabel}</p>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee">
          {row.map((n, k) => (
            <span key={k} aria-hidden={k >= clients.length} className="flex items-center whitespace-nowrap px-6 font-display text-xl italic text-bone/70 sm:text-2xl">
              {n}<span className="ml-12 h-1.5 w-1.5 rounded-full bg-teal/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Sectors() {
  const { c } = useC()
  return (
    <section id="sectors" className="bg-bone py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker !text-teal-ink">{c.sectors.kicker}</p>
            <h2 className="h2 mt-4">{c.sectors.title}</h2>
          </div>
          <p className="max-w-xl self-end text-[15.5px] leading-relaxed text-ink/70 lg:col-span-6 lg:col-start-7">{c.sectors.lead}</p>
        </Reveal>
        <ol className="mt-12 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {c.sectors.items.map(([t, d], k) => (
            <li key={t} className="group relative border-b border-ink/15 py-6 sm:px-5 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r">
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-teal-deep transition-all duration-500 group-hover:w-full" />
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm text-teal-ink">{String(k + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-display text-2xl">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{d}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Sheet({ p, pos, onClose, onNav }: { p: Project; pos: [number, number]; onClose: () => void; onNav: (d: number) => void }) {
  const { c } = useC()
  const closeRef = useRef<HTMLButtonElement>(null)
  const swipe = useSwipe((d) => onNav(d))
  useDialogFlag()
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    closeRef.current?.focus()
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    }
    window.addEventListener('keydown', key)
    return () => {
      document.body.style.overflow = prev
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', key)
    }
  }, [onClose, onNav])
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end lg:items-stretch" role="dialog" aria-modal="true" aria-label={`${p.client} — ${p.name}`}>
      <button aria-label={c.close} onClick={onClose} className="fade-in absolute inset-0 bg-black/70" />
      <div {...swipe} className="sheet-enter relative flex max-h-[92dvh] w-full flex-col overflow-y-auto rounded-t-3xl bg-graphite lg:max-h-none lg:w-[560px] lg:rounded-none">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-graphite/95 px-5 py-3">
          <span className="mx-auto h-1 w-10 rounded-full bg-white/20 lg:hidden" aria-hidden />
          <button ref={closeRef} onClick={onClose} className="tap absolute right-3 top-1.5 grid place-items-center rounded-full bg-ink/60 text-2xl text-bone/90 hover:text-teal" aria-label={c.close}>×</button>
        </div>
        <img key={p.id} src={src(p.img, 1200)} srcSet={srcSet(p.img)} sizes="(min-width:1024px) 560px, 100vw" width={1024} height={1024} alt={`${p.client} — ${p.name}`} className="fade-in aspect-square w-full object-cover" />
        <div className="space-y-5 p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-teal">{c.sectorNames[p.sector]}</p>
          <h3 className="font-display text-3xl leading-tight sm:text-4xl">{p.name}</h3>
          <dl className="grid grid-cols-2 gap-4 border-y border-white/10 py-4 text-sm">
            <div><dt className="text-mist">{c.work.sheetClient}</dt><dd className="mt-1 font-semibold">{p.client}</dd></div>
            <div><dt className="text-mist">{c.work.sheetSector}</dt><dd className="mt-1 font-semibold">{c.sectorNames[p.sector]}</dd></div>
          </dl>
          <a href={wa(c.work.sheetWa.replace('{p}', `${p.client} — ${p.name}`))} target="_blank" rel="noopener" className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-teal font-bold text-ink transition hover:bg-bone">
            <WaIcon /> {c.work.sheetCta}
          </a>
          <div className="flex items-center justify-between">
            <button onClick={() => onNav(-1)} className="tap rounded-full border border-white/15 px-5 text-sm font-semibold hover:border-teal hover:text-teal" aria-label={c.a11y.prev}>←</button>
            <p className="text-center text-[11px] text-bone/60">{c.work.count.replace('{n}', String(pos[0])).replace('{t}', String(pos[1]))} · {c.hero.photo}</p>
            <button onClick={() => onNav(1)} className="tap rounded-full border border-white/15 px-5 text-sm font-semibold hover:border-teal hover:text-teal" aria-label={c.a11y.next}>→</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Work() {
  const { c } = useC()
  const [filter, setFilter] = useState<SectorKey | 'all'>('all')
  const [openId, setOpenId] = useState<string | null>(null)
  const list = projects.filter((p) => filter === 'all' || p.sector === filter)
  const keys: (SectorKey | 'all')[] = ['all', 'corporate', 'medical', 'hotel', 'fnb']
  const close = useCallback(() => setOpenId(null), [])
  const nav = useCallback((d: number) => {
    setOpenId((id) => {
      const idx = list.findIndex((p) => p.id === id)
      return list[(idx + d + list.length) % list.length].id
    })
  }, [list])
  const open = openId ? projects.find((p) => p.id === openId) : null
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="kicker">{c.work.kicker}</p>
            <h2 className="h2 mt-4 max-w-2xl">{c.work.title}</h2>
          </div>
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label={c.a11y.filter}>
            {keys.map((k) => {
              const n = k === 'all' ? projects.length : projects.filter((p) => p.sector === k).length
              return (
                <button key={k} onClick={() => setFilter(k)} aria-pressed={filter === k}
                  className={`tap shrink-0 rounded-full border px-4 text-sm font-semibold transition ${filter === k ? 'border-teal bg-teal text-ink' : 'border-white/15 text-bone/75 hover:border-teal'}`}>
                  {k === 'all' ? c.work.all : c.sectorNames[k]} <sup className="opacity-60">{n}</sup>
                </button>
              )
            })}
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(300px,26vw)] lg:grid-cols-3 xl:auto-rows-[340px]">
          {list.map((p, k) => {
            const big = (k === 0 && list.length !== 2)
            // 7 projects: big 2x2, then a wide card on rows 3 and 4 so no row is left with a single orphan
            const wide = list.length === 7 && (k === 3 || k === 6)
            return (
            <button key={p.id} onClick={() => setOpenId(p.id)}
              className={`card fade-in group relative overflow-hidden rounded-2xl bg-graphite text-left ${big ? 'sm:col-span-2 lg:row-span-2' : ''} ${wide ? 'lg:col-span-2' : ''}`}>
              <img src={src(p.img, big || wide ? 1200 : 640)} srcSet={srcSet(p.img)}
                sizes={big ? '(min-width:1024px) 66vw, (min-width:640px) 100vw, 92vw' : wide ? '(min-width:1024px) 66vw, (min-width:640px) 50vw, 92vw' : '(min-width:1024px) 33vw, (min-width:640px) 50vw, 92vw'}
                width={1024} height={1024} loading="lazy" decoding="async" alt={`${p.client} — ${p.name}`}
                className={`card-img aspect-[4/3] h-full w-full object-cover lg:aspect-auto ${big ? 'sm:aspect-[16/10]' : 'sm:aspect-square'}`} />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <span className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <span>
                  <span className="block text-[10.5px] font-semibold uppercase tracking-[0.22em] text-teal">{c.sectorNames[p.sector]} · {p.client}</span>
                  <span className="mt-1 block font-display text-xl leading-tight sm:text-2xl">{p.name}</span>
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 transition group-hover:border-teal group-hover:bg-teal group-hover:text-ink" aria-hidden>↗</span>
              </span>
              <span className="sr-only">{c.work.view}</span>
            </button>
            )
          })}
          {list.length < 3 && (
            <div className={`flex flex-col justify-end gap-4 rounded-2xl border border-white/10 bg-graphite p-6 sm:col-span-2 lg:col-span-1 ${list.length === 1 ? 'lg:row-span-2' : ''}`}>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-teal">{filter !== 'all' && c.sectorNames[filter]}</p>
              <p className="font-display text-2xl leading-tight sm:text-3xl">{c.work.ctaTitle}</p>
              <p className="text-sm leading-relaxed text-bone/70">{c.work.ctaText}</p>
              <a href={wa(c.contact.waText)} target="_blank" rel="noopener" className="inline-flex min-h-[48px] items-center justify-center gap-2 self-start rounded-full bg-teal px-6 text-sm font-bold text-ink transition hover:bg-bone">
                <WaIcon className="h-4 w-4" /> {c.work.ctaBtn}
              </a>
            </div>
          )}
        </div>
        <p className="mt-6 text-xs text-mist">{c.work.note}</p>
      </div>
      {open && <Sheet p={open} pos={[list.findIndex((p) => p.id === open.id) + 1, list.length]} onClose={close} onNav={nav} />}
    </section>
  )
}

function Services() {
  const { c } = useC()
  const [open, setOpen] = useState(0)
  return (
    <section id="services" className="bg-bone py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="kicker !text-teal-ink">{c.services.kicker}</p>
          <h2 className="h2 mt-4">{c.services.title}</h2>
        </Reveal>
        <div className="mt-12 border-t border-ink/15">
          {c.services.items.map((s, k) => {
            const on = open === k
            return (
              <div key={s.t} className="border-b border-ink/15">
                <button onClick={() => setOpen(on ? -1 : k)} aria-expanded={on} className="group flex min-h-[72px] w-full items-center gap-3 py-6 text-left sm:gap-8">
                  <span className="font-display text-sm text-teal-ink">0{k + 1}</span>
                  <span className={`min-w-0 flex-1 font-display leading-tight transition ${on ? 'text-ink' : 'text-ink/70 group-hover:text-ink'}`} style={{ fontSize: 'clamp(1.45rem, 4vw, 2.75rem)' }}>{s.t}</span>
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border text-xl transition ${on ? 'border-ink bg-ink text-bone' : 'border-ink/25 group-hover:border-ink'}`} aria-hidden><span className={`transition-transform duration-300 ${on ? 'rotate-45' : ''}`}>+</span></span>
                </button>
                <div className={`grid transition-all duration-500 ${on ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid gap-5 pb-8 sm:pl-14 lg:grid-cols-12">
                      <p className="max-w-2xl text-[15.5px] leading-relaxed text-ink/70 lg:col-span-7">{s.d}</p>
                      <ul className="flex flex-wrap content-start gap-2 lg:col-span-4 lg:col-start-9">
                        {s.tags.map((t) => <li key={t} className="rounded-full border border-ink/20 px-3 py-1.5 text-xs font-semibold">{t}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const { c } = useC()
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="kicker">{c.process.kicker}</p>
          <h2 className="h2 mt-4 max-w-3xl">{c.process.title}</h2>
        </Reveal>
        <Reveal className="relative mt-14">
          <span aria-hidden className="timeline-line absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px bg-teal md:hidden lg:left-0 lg:top-[11px] lg:block lg:h-px lg:w-full" />
          <ol className="grid gap-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-4 lg:gap-8">
            {c.process.steps.map(([t, d], k) => (
              <li key={t} className="relative pl-12 lg:pl-0 lg:pt-12">
                <span className="absolute left-0 top-0 grid h-6 w-6 place-items-center rounded-full border border-teal bg-ink text-[10px] font-bold text-teal">{k + 1}</span>
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-bone/70">{d}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}

function Studio() {
  const { c } = useC()
  return (
    <section id="studio" className="bg-bone py-20 text-ink sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-5">
          <div className="relative mr-10 sm:mr-24 lg:mr-12">
            <img src={src('tdcx-razer', 640)} width={640} height={640} loading="lazy" decoding="async" alt="TDCX Malaysia — Razer & DJI" className="aspect-[4/5] w-full rounded-2xl object-cover" />
            <img src={src('gsk', 640)} width={640} height={640} loading="lazy" decoding="async" alt="GlaxoSmithKline Pharmaceutical" className="absolute -bottom-8 -right-10 w-1/2 rounded-xl border-4 border-bone object-cover shadow-2xl sm:-right-20 lg:-right-12" />
          </div>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="kicker !text-teal-ink">{c.studio.kicker}</p>
            <h2 className="h2 mt-4">{c.studio.title}</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-ink/70">{c.studio.p1}</p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">{c.studio.p2}</p>
          </Reveal>
          <Reveal className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/70">{c.studio.teamLabel}</p>
            <ul className="mt-3 grid grid-cols-1 border-t border-ink/15 sm:grid-cols-2 sm:gap-x-8">
              {c.studio.team.map(([n, r]) => (
                <li key={n} className="flex items-baseline justify-between gap-3 border-b border-ink/15 py-3">
                  <span className="font-display text-lg">{n}</span>
                  <span className="text-right text-xs text-ink/70">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const { c } = useC()
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="kicker">{c.faq.kicker}</p>
          <h2 className="h2 mt-4">{c.faq.title}</h2>
        </Reveal>
        <div className="lg:col-span-7 lg:col-start-6">
          {c.faq.items.map(([q, a], k) => (
            <details key={q} className="group border-b border-white/10" open={k === 0}>
              <summary className="flex min-h-[64px] cursor-pointer items-center justify-between gap-4 py-4 text-[17px] font-semibold">
                {q}
                <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-lg text-teal transition" aria-hidden>+</span>
              </summary>
              <p className="pb-6 pr-12 text-[15px] leading-relaxed text-bone/65">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { c } = useC()
  const items = [
    { l: c.contact.call, v: PHONE, h: `tel:${PHONE.replace(/[^+\d]/g, '')}` },
    { l: c.contact.email, v: EMAIL, h: `mailto:${EMAIL}` },
  ]
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 bg-graphite py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl max-md:hidden" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="kicker">{c.contact.kicker}</p>
          <h2 className="mt-4 font-display font-medium leading-[0.98]" style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)' }}>{c.contact.title}</h2>
          <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-bone/70">{c.contact.lead}</p>
          <a href={wa(c.contact.waText)} target="_blank" rel="noopener" className="mt-8 inline-flex min-h-[56px] items-center gap-3 rounded-full bg-teal px-8 text-base font-bold text-ink transition hover:bg-bone">
            <WaIcon /> {c.contact.wa}
          </a>
          <p className="mt-6 flex items-center gap-2 text-sm text-bone/60"><span className="text-teal">★★★★★</span> 5.0 Google</p>
        </Reveal>
        <Reveal className="space-y-3 lg:col-span-5 lg:col-start-8">
          {items.map((it) => (
            <a key={it.l} href={it.h} className="group flex min-h-[72px] items-center justify-between gap-4 rounded-2xl border border-white/10 px-5 py-4 transition hover:border-teal">
              <span className="min-w-0"><span className="block text-[11px] uppercase tracking-[0.2em] text-mist">{it.l}</span><span className="mt-1 block break-words font-semibold">{it.v}</span></span>
              <span className="text-teal transition group-hover:translate-x-1" aria-hidden>→</span>
            </a>
          ))}
          <a href={MAPS} target="_blank" rel="noopener" className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-5 py-4 transition hover:border-teal">
            <span className="min-w-0"><span className="block text-[11px] uppercase tracking-[0.2em] text-mist">{c.contact.visit}</span><span className="mt-1 block text-[14.5px] leading-relaxed">{c.contact.address}</span><span className="mt-2 block text-sm font-semibold text-teal">{c.contact.directions} ↗</span></span>
          </a>
          <div className="flex items-center gap-3 pt-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-mist">{c.contact.follow}</span>
            <a href={FB} target="_blank" rel="noopener" className="tap inline-flex items-center rounded-full border border-white/15 px-4 text-sm font-semibold hover:border-teal">Facebook</a>
            <a href={IG} target="_blank" rel="noopener" className="tap inline-flex items-center rounded-full border border-white/15 px-4 text-sm font-semibold hover:border-teal">Instagram</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  const { c } = useC()
  return (
    <footer className="border-t border-white/5 bg-ink pb-28 pt-12 sm:pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4"><Logo small /><p className="mt-3 font-display italic text-bone/70">{c.footer.tagline}</p></div>
          <ul className="space-y-2 text-sm text-bone/75 lg:col-span-5">
            <li><a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`} className="inline-flex min-h-[32px] items-center hover:text-teal">{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="inline-flex min-h-[32px] items-center break-all hover:text-teal">{EMAIL}</a></li>
            <li><a href={MAPS} target="_blank" rel="noopener" className="inline-flex min-h-[32px] items-center hover:text-teal">Menara 2, KL Eco City, Kuala Lumpur ↗</a></li>
          </ul>
          <div className="flex items-start sm:justify-end lg:col-span-3">
            <a href="#top" className="tap inline-flex items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold transition hover:border-teal hover:text-teal">{c.footer.toTop} <span aria-hidden>↑</span></a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-dashed border-white/15 p-5 text-sm text-bone/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{c.footer.pitch}</p>
          <a href={PITCH_WA} target="_blank" rel="noopener" className="tap inline-flex shrink-0 items-center gap-2 font-semibold text-teal hover:text-bone"><WaIcon className="h-4 w-4" /> {c.footer.pitchLink}</a>
        </div>
        <p className="mt-6 text-xs text-mist">{c.footer.credit}</p>
      </div>
    </footer>
  )
}

function Fab() {
  const { c } = useC()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 1.1)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <a href={wa(c.contact.waText)} target="_blank" rel="noopener" aria-label={c.contact.wa} aria-hidden={!show} tabIndex={show ? 0 : -1}
      data-fab className={`fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-teal text-ink shadow-[0_10px_30px_rgba(60,196,210,.35)] transition duration-300 sm:hidden ${show ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
      <WaIcon className="h-6 w-6" />
    </a>
  )
}

export default function App() {
  const { c } = useC()
  return (
    <>
      <a href="#projects" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-teal focus:px-4 focus:py-2 focus:text-ink">{c.a11y.skip}</a>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Sectors />
        <Work />
        <Services />
        <Process />
        <Studio />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Fab />
    </>
  )
}
