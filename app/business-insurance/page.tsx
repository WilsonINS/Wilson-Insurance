import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Business insurance"
    title="Coverage built around how your business actually operates."
    intro={[
      "Business insurance is designed to protect the company from the financial impact of property damage, lawsuits, vehicle accidents, employee injuries, and other covered events that can interrupt operations or create unexpected costs.",
      "Most businesses need more than one policy. The right combination depends on what the business owns, what it does, where it operates, whether it has employees or vehicles, and what contracts or customers require."
    ]}
    coverages={[
      {title:"General liability",text:"May protect against certain third-party bodily injury, property damage, and personal or advertising injury claims."},
      {title:"Commercial property",text:"May protect buildings, equipment, inventory, furniture, and other eligible business property."},
      {title:"Commercial auto",text:"May protect business-owned vehicles and certain liability exposures created by driving for work."},
      {title:"Workers compensation",text:"May provide benefits for qualifying employee work-related injuries or illnesses as required by applicable law."},
      {title:"Business income",text:"May help replace qualifying income and continuing expenses after a covered property loss interrupts operations."},
      {title:"Umbrella or excess liability",text:"May provide additional liability limits above qualifying underlying policies."},
    ]}
    exclusions={[
      "Professional errors may require professional liability or E&O coverage.",
      "Cyber events, employee theft, employment-practices claims, and pollution may require separate policies or endorsements.",
      "Flood is generally excluded from standard commercial property coverage.",
      "Auto liability and employee injuries are generally not covered by a standard CGL policy.",
      "Undisclosed operations, locations, vehicles, or classifications can create coverage problems."
    ]}
    savingsTips={[
      "Package eligible property and liability coverages when a BOP or commercial package is appropriate.",
      "Keep payroll, sales, classifications, vehicle lists, and property values accurate.",
      "Use documented safety, hiring, training, and loss-control procedures.",
      "Review insurance requirements in contracts before signing them.",
      "Review the account annually so coverage reflects how the business actually operates."
    ]}
  />;
}