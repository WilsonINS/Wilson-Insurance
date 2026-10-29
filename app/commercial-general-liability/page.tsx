import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Commercial general liability"
    title="Liability coverage for the everyday risks of doing business."
    intro={[
      "Commercial General Liability insurance is designed to help protect a business from certain third-party claims involving bodily injury, property damage, and personal or advertising injury. A customer slip-and-fall, accidental damage to someone else’s property, or a claim arising from completed work can create legal and financial costs.",
      "For many businesses, CGL is a foundational policy because landlords, general contractors, clients, and lenders may require evidence of liability coverage before doing business with you."
    ]}
    coverages={[
      {title:"Premises & operations",text:"May cover certain bodily injury or property damage claims arising from your premises or ongoing operations."},
      {title:"Products & completed operations",text:"May cover certain claims arising from products you sell or work you have completed."},
      {title:"Personal & advertising injury",text:"May protect against certain covered offenses such as libel, slander, or specified advertising-related claims."},
      {title:"Medical payments",text:"May provide limited no-fault medical payments for certain injuries occurring on your premises or because of your operations."},
      {title:"Defense costs",text:"The insurer may provide a legal defense for covered claims, subject to the policy’s terms and conditions."},
      {title:"Additional insured endorsements",text:"Coverage may be extended to qualifying third parties when required by contract and properly endorsed."},
    ]}
    exclusions={[
      "Workers compensation and employee injuries are generally excluded from CGL.",
      "Professional errors and omissions usually require separate professional liability coverage.",
      "Commercial auto liability is generally excluded and requires a commercial auto policy.",
      "Damage to your own work or product may be limited or excluded depending on the circumstances.",
      "Pollution, cyber events, employment practices, intentional acts, and certain contractual liabilities may be excluded or require separate coverage."
    ]}
    savingsTips={[
      "Use accurate payroll, sales, and subcontractor estimates to reduce audit surprises.",
      "Maintain certificates of insurance from subcontractors and verify their coverage when appropriate.",
      "Use strong safety procedures, contracts, and documented risk-management practices.",
      "Bundle property and liability in a package or BOP when your business qualifies.",
      "Review class codes and operations carefully so you are not paying for exposures you do not actually have."
    ]}
  />;
}