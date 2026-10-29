import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Auto insurance"
    title="Auto coverage that fits the way you drive."
    intro={[
      "Auto insurance is designed to protect you from the financial impact of accidents, injuries, vehicle damage, theft, and other covered losses. Even a relatively minor accident can create repair bills, medical expenses, and liability claims that add up quickly.",
      "The policy can combine protection for other people with protection for you, your passengers, and your vehicle. The right limits and deductibles depend on the vehicles you own, how they are used, who drives them, and how much risk you want to retain yourself."
    ]}
    coverages={[
      {title:"Bodily injury liability",text:"May help protect you when you are legally responsible for injuries to others in a covered accident."},
      {title:"Property damage liability",text:"May help pay for covered damage you cause to another person’s vehicle or property."},
      {title:"PIP",text:"Florida Personal Injury Protection may help pay certain medical expenses and lost wages after a covered auto accident, subject to policy terms and Florida law."},
      {title:"Uninsured motorist",text:"May help protect you when you are injured by a driver who has no bodily injury liability coverage or not enough coverage."},
      {title:"Collision",text:"May help repair or replace your vehicle after a covered collision, subject to the deductible and valuation terms."},
      {title:"Comprehensive",text:"May cover non-collision losses such as theft, vandalism, falling objects, weather, or animal contact, subject to the policy."},
      {title:"Rental & towing",text:"Optional coverage may help with rental transportation or roadside assistance after certain covered events."},
    ]}
    exclusions={[
      "Intentional damage and certain criminal or fraudulent acts are excluded.",
      "Normal wear and tear, mechanical breakdown, and maintenance are generally not covered.",
      "Using a personal vehicle for certain commercial, delivery, or rideshare activities may be excluded unless properly endorsed.",
      "Personal property stolen from a vehicle is generally not covered by the auto policy itself.",
      "Drivers or vehicles not disclosed as required by the carrier may create coverage problems."
    ]}
    savingsTips={[
      "Bundle auto with home or renters when multi-policy discounts are available.",
      "Maintain a clean driving record and ask about safe-driver or telematics programs.",
      "Consider higher comprehensive and collision deductibles if you can afford more out of pocket after a loss.",
      "Review older vehicles to determine whether physical damage coverage still makes financial sense.",
      "Ask about low-mileage, paid-in-full, automatic-payment, defensive-driving, and good-student discounts when applicable."
    ]}
  />;
}