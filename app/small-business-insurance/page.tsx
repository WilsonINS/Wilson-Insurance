import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Small business insurance"
    title="Practical coverage for small Florida businesses."
    intro={[
      "Small business insurance is not one single coverage. It is usually a combination of policies designed around the property, people, vehicles, operations, contracts, and income your business depends on.",
      "A single fire, customer injury, theft, lawsuit, vehicle accident, or prolonged shutdown can put significant pressure on a small business. Building the right package can help protect both day-to-day operations and the investment you have made in the company."
    ]}
    coverages={[
      {title:"General liability",text:"May protect against certain third-party bodily injury, property damage, and personal or advertising injury claims."},
      {title:"Commercial property",text:"May protect buildings, equipment, inventory, furniture, and other eligible business property."},
      {title:"Business income",text:"May help replace qualifying income and continuing expenses after a covered property loss interrupts operations."},
      {title:"Commercial auto",text:"May protect business-owned vehicles and certain business driving exposures."},
      {title:"Workers compensation",text:"May provide benefits for qualifying work-related employee injuries or illnesses as required by applicable law."},
      {title:"Umbrella or excess liability",text:"May provide additional liability limits above qualifying underlying policies."},
    ]}
    exclusions={[
      "Professional errors may require professional liability or E&O coverage.",
      "Cyber events, employee theft, employment-practices claims, and pollution may require separate policies or endorsements.",
      "Flood is generally excluded from standard commercial property coverage.",
      "Auto liability and employee injuries are generally not covered by a standard CGL policy.",
      "Losses arising from undisclosed operations, locations, or classifications may create coverage problems."
    ]}
    savingsTips={[
      "Package eligible property and liability coverages into a BOP or commercial package when appropriate.",
      "Use accurate payroll, sales, property values, and classifications.",
      "Implement documented safety, hiring, training, and loss-control procedures.",
      "Review contracts and insurance requirements before signing them.",
      "Revisit limits and exposures at least annually so the policy matches how the business actually operates."
    ]}
  />;
}