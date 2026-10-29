import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Seasonal & secondary homes"
    title="Coverage for homes you don’t occupy year-round."
    intro={[
      "A seasonal or secondary home may face many of the same risks as your primary residence, but periods of vacancy or limited occupancy can create additional concerns. A leak, break-in, or storm-related problem may go unnoticed longer when no one is regularly at the property.",
      "Insurance for these homes is designed to protect the structure, belongings, and liability exposures while accounting for how often the property is occupied, who has access to it, and how it is maintained."
    ]}
    coverages={[
      {title:"Dwelling coverage",text:"Helps protect the home itself against covered causes of loss, subject to the selected limit and policy terms."},
      {title:"Other structures",text:"May protect detached structures such as garages, sheds, fences, or docks when eligible."},
      {title:"Personal property",text:"May cover eligible furnishings and belongings kept at the seasonal or secondary residence."},
      {title:"Loss of use",text:"May help with additional expenses when a covered loss prevents use of the property."},
      {title:"Liability",text:"May protect against certain covered claims involving bodily injury or property damage at the residence."},
      {title:"Optional endorsements",text:"Water backup, equipment breakdown, scheduled property, or other optional protections may be available depending on the carrier."},
    ]}
    exclusions={[
      "Damage related to long-term vacancy or failure to maintain the property may be excluded or limited.",
      "Flood is generally excluded unless separately insured.",
      "Wear and tear, deterioration, insects, rodents, and maintenance issues are typically excluded.",
      "Certain water losses may be restricted if the home is vacant or unoccupied for an extended period.",
      "Rental or business use may require different coverage than a purely personal seasonal residence."
    ]}
    savingsTips={[
      "Use monitored alarms, leak sensors, and smart-home devices when carrier discounts are available.",
      "Arrange regular property checks when the home is unoccupied.",
      "Ask about bundling the secondary residence with your primary home or auto coverage.",
      "Keep the property well maintained and document roof, plumbing, electrical, and HVAC updates.",
      "Be accurate about how often the property is occupied so the policy is rated correctly."
    ]}
  />;
}