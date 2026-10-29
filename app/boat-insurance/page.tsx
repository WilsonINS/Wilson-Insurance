import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Boat insurance"
    title="Coverage for time on the water."
    intro={[
      "Boat insurance is designed to protect you from the financial consequences of damage to your vessel and liability arising from its ownership or operation. A collision, theft, storm, fire, or injury on the water can create substantial repair and liability costs.",
      "The right policy may protect the boat itself while also addressing trailers, motors, equipment, passengers, towing, and liability exposures that are not adequately covered by a homeowners policy."
    ]}
    coverages={[
      {title:"Physical damage",text:"May protect the hull, motor, and eligible permanently attached equipment against covered losses."},
      {title:"Liability",text:"May help protect you against certain covered bodily injury and property damage claims arising from ownership or operation."},
      {title:"Medical payments",text:"May help with certain medical expenses for you or your passengers after a covered boating accident."},
      {title:"Uninsured boater",text:"May provide protection when an uninsured or underinsured boater causes covered bodily injury."},
      {title:"Trailer & equipment",text:"Depending on the policy, coverage may extend to trailers, electronics, accessories, and boating equipment."},
      {title:"Towing & assistance",text:"Optional coverage may help with on-water towing, delivery of fuel, or other emergency assistance."},
    ]}
    exclusions={[
      "Wear and tear, corrosion, deterioration, and mechanical breakdown are typically excluded unless specifically covered.",
      "Damage while participating in racing or certain high-risk activities may be excluded.",
      "Commercial use, chartering, or carrying passengers for a fee may require different coverage.",
      "Named-windstorm or hurricane deductibles may apply depending on the policy.",
      "Navigation outside the approved territory may not be covered."
    ]}
    savingsTips={[
      "Complete an approved boating-safety course when discounts are available.",
      "Bundle boat coverage with home or auto if the carrier offers package savings.",
      "Select a navigation territory that matches where you actually operate.",
      "Maintain the boat and document upgrades to major systems.",
      "Ask about lay-up periods or seasonal-use discounts when applicable."
    ]}
  />;
}