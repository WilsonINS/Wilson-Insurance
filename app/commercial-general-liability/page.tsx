import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Commercial general liability"
    title="Liability coverage for the everyday risks of doing business."
    intro="Commercial General Liability can help protect a business against certain third-party bodily injury, property damage, and personal and advertising injury claims."
    bullets={[
      {title:"Premises & operations",text:"Coverage can apply to certain claims arising from your premises or ongoing business operations."},
      {title:"Products & completed operations",text:"Depending on the business and policy, coverage may apply to certain claims arising after work is completed or products are sold."},
      {title:"Contracts & certificates",text:"Contract requirements often involve additional insured status, waivers, limits, and certificates of insurance."},
      {title:"Business-specific underwriting",text:"Payroll, sales, subcontractors, operations, locations, and loss history can materially affect coverage and pricing."},
    ]}
  />;
}