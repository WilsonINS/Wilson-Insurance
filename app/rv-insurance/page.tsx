import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="RV insurance"
    title="Coverage for the road and the campsite."
    intro={[
      "RV insurance helps protect a vehicle that may function as both transportation and temporary living space. Because of that, an RV can create exposures that are different from those of a standard private passenger auto.",
      "A policy may protect against liability from driving, damage to the RV itself, and losses involving belongings or equipment used while camping or traveling."
    ]}
    coverages={[
      {title:"Liability",text:"May help protect you against certain covered bodily injury and property damage claims arising from use of the RV."},
      {title:"Collision",text:"May help repair or replace the RV after a covered collision, subject to the deductible."},
      {title:"Comprehensive",text:"May cover eligible non-collision losses such as theft, vandalism, fire, weather, or animal contact."},
      {title:"Personal belongings",text:"Additional protection may be available for eligible property carried inside the RV."},
      {title:"Roadside assistance",text:"Optional coverage may help with towing, tire changes, jump starts, and similar roadside emergencies."},
      {title:"Vacation or full-time liability",text:"Special liability options may be available depending on how the RV is used and whether it is occupied for extended periods."},
    ]}
    exclusions={[
      "Wear and tear, mechanical breakdown, and maintenance are generally excluded.",
      "Full-time occupancy may not be covered unless the policy is written or endorsed for that use.",
      "Business use or renting the RV to others may require different coverage.",
      "Certain personal belongings may have limits or exclusions.",
      "Damage outside the policy’s territory or while used in prohibited activities may be excluded."
    ]}
    savingsTips={[
      "Ask about multi-policy, safe-driver, and RV-club discounts.",
      "Consider seasonal or storage options when the RV is not used year-round.",
      "Choose deductibles based on what you can comfortably afford after a loss.",
      "Maintain the RV and document upgrades to major systems.",
      "Be accurate about annual mileage and whether the RV is used recreationally or full-time."
    ]}
  />;
}