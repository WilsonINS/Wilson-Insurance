import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Home insurance"
    title="Protection for the place you call home."
    intro={[
      "Home insurance is designed to help protect one of your largest financial investments: your home. A covered loss such as fire, wind damage, theft, or certain types of water damage can create repair costs that would be difficult to absorb on your own.",
      "It can also protect more than the building itself. Depending on the policy, coverage may extend to your belongings, other structures on the property, temporary living expenses after a covered loss, and personal liability if someone is injured or their property is damaged."
    ]}
    coverages={[
      {title:"Dwelling coverage",text:"Helps protect the main structure of the home against covered causes of loss, subject to the policy limit, deductible, and terms."},
      {title:"Other structures",text:"May cover detached structures such as fences, sheds, or detached garages, usually with a separate limit."},
      {title:"Personal property",text:"May help repair or replace covered belongings such as furniture, clothing, electronics, and household items."},
      {title:"Loss of use",text:"May help with additional living expenses if a covered loss makes the residence temporarily uninhabitable."},
      {title:"Personal liability",text:"May help protect you against certain covered claims for bodily injury or property damage for which you are legally responsible."},
      {title:"Medical payments",text:"May provide limited coverage for certain medical expenses when a guest is injured, regardless of fault, subject to policy terms."},
    ]}
    exclusions={[
      "Flood is generally excluded and normally requires a separate flood policy.",
      "Wear and tear, deterioration, and lack of maintenance are typically not covered.",
      "Earth movement, sinkhole, mold, water backup, and ordinance or law may be excluded, limited, or require separate coverage depending on the policy.",
      "Certain valuables may have special limits unless scheduled separately.",
      "Intentional loss and certain business-related property or activities are typically excluded."
    ]}
    savingsTips={[
      "Ask about wind-mitigation and other inspection-based discounts that may apply.",
      "Consider a higher deductible if you can comfortably absorb more of a loss yourself.",
      "Bundle home and auto when a carrier offers a meaningful multi-policy discount.",
      "Maintain the roof, plumbing, electrical, and HVAC systems and address known problems promptly.",
      "Review your replacement-cost estimate and coverage annually so you are not paying for unnecessary limits or carrying inadequate protection."
    ]}
    note="Home policy forms and coverage vary significantly by carrier. Flood, windstorm, water, roof, and valuation provisions deserve special attention in Florida."
  />;
}