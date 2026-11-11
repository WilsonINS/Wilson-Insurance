import Link from "next/link";
import { personal, business } from "@/lib/content";
export function SiteHeader(){
return <header className="site-header"><div className="container header-inner">
<Link className="brand" href="/" aria-label="Wilson Insurance of Florida homepage"><span className="brand-symbol" aria-hidden="true">W</span><span>WILSON<span className="brand-small">INSURANCE OF FLORIDA</span></span></Link>
<nav className="desktop-nav" aria-label="Primary navigation">
<details className="nav-dropdown"><summary>Personal Insurance <span aria-hidden="true">⌄</span></summary><div className="nav-panel">{personal.map(p=><Link key={p.slug} href={`/insurance/${p.slug}`}>{p.title}</Link>)}</div></details>
<details className="nav-dropdown"><summary>Business Insurance <span aria-hidden="true">⌄</span></summary><div className="nav-panel">{business.map(p=><Link key={p.slug} href={`/insurance/${p.slug}`}>{p.title}</Link>)}</div></details>
<Link href="/about">About us</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link>
</nav>
<Link className="btn btn-primary header-cta" href="/contact">Request a quote <span aria-hidden="true">→</span></Link>
<details className="mobile-nav"><summary aria-label="Open navigation menu">Menu ☰</summary><nav aria-label="Mobile navigation"><Link href="/">Home</Link><strong>Personal</strong>{personal.map(p=><Link key={p.slug} href={`/insurance/${p.slug}`}>{p.title}</Link>)}<strong>Business</strong>{business.map(p=><Link key={p.slug} href={`/insurance/${p.slug}`}>{p.title}</Link>)}<Link href="/about">About</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link></nav></details>
</div></header>
}