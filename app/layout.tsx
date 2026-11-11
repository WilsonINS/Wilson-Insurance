import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/content";
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"Wilson Insurance of Florida",template:"%s"},description:"Independent insurance guidance for Florida families and businesses.",robots:{index:true,follow:true},openGraph:{type:"website",locale:"en_US",siteName:"Wilson Insurance of Florida"}};
export const viewport:Viewport={width:"device-width",initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){const structured={"@context":"https://schema.org","@type":"InsuranceAgency","name":"Wilson Insurance of Florida","url":siteUrl,"areaServed":{"@type":"State","name":"Florida"},"description":"Independent insurance agency offering personal and commercial insurance guidance in Florida."};return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a><SiteHeader/>{children}<SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,"\\u003c")}}/></body></html>}