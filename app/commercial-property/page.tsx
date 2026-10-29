import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Commercial property"
    title="Protect the property your business depends on."
    intro={[
      "Commercial property insurance is designed to help protect the physical assets a business relies on to operate. A fire, storm, theft, or other covered loss can damage a building, equipment, furniture, inventory, or tenant improvements and interrupt normal operations.",
      "The policy can be structured around property you own, lease, or are responsible for, with limits and valuation methods tailored to the business."
    ]}
    coverages={[
      {title:"Building coverage",text:"May protect an owned commercial building and qualifying permanently installed property."},
      {title:"Business personal property",text:"May cover eligible furniture, equipment, inventory, and other property used in the business."},
      {title:"Business income",text:"May help replace qualifying lost income and continuing expenses after a covered loss interrupts operations."},
      {title:"Extra expense",text:"May help with certain additional costs incurred to continue or restore operations after a covered loss."},
      {title:"Equipment breakdown",text:"Optional coverage may help with certain mechanical, electrical, or pressure-system breakdowns."},
      {title:"Ordinance or law",text:"Optional coverage may help with certain increased rebuilding costs caused by current building codes after a covered loss."},
    ]}
    exclusions={[
      "Flood is generally excluded unless separately insured.",
      "Wear and tear, deterioration, rust, corrosion, and maintenance issues are typically excluded.",
      "Earth movement and certain water losses may be excluded or limited.",
      "Property away from the insured premises may require inland marine or other specialized coverage.",
      "Cyber losses, employee theft, equipment breakdown, and utility interruption may require separate or endorsed coverage."
    ]}
    savingsTips={[
      "Maintain updated building values and business personal property inventories.",
      "Use protective devices such as alarms, sprinklers, cameras, and monitored systems where appropriate.",
      "Choose deductibles that match your risk tolerance and cash reserves.",
      "Package property with liability coverage when your business qualifies for a BOP or commercial package policy.",
      "Document roof, electrical, plumbing, HVAC, and fire-protection upgrades that may help underwriting."
    ]}
  />;
}