import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Renters insurance"
    title="Protect your belongings and your liability."
    intro={[
      "Your landlord’s policy is generally designed to protect the building, not everything you own inside it. If your belongings are damaged by a covered fire, theft, or other covered event, replacing them could become your responsibility.",
      "Renters insurance can also provide personal liability protection and help with temporary living expenses if a covered loss forces you out of the rental."
    ]}
    coverages={[
      {title:"Personal property",text:"May help repair or replace covered belongings such as furniture, electronics, clothing, and household items."},
      {title:"Personal liability",text:"May help protect you against certain covered claims if you are legally responsible for bodily injury or property damage."},
      {title:"Loss of use",text:"May help pay additional living expenses when a covered loss makes your rental temporarily uninhabitable."},
      {title:"Medical payments",text:"May provide limited coverage for certain medical expenses when a guest is injured."},
      {title:"Scheduled property",text:"Higher limits may be available for jewelry, collectibles, firearms, or other valuables that exceed standard special limits."},
      {title:"Optional endorsements",text:"Water backup, identity-related coverage, and other endorsements may be available depending on the carrier."},
    ]}
    exclusions={[
      "Flood is generally not covered unless separately insured.",
      "Your roommate’s belongings are typically not covered unless that person qualifies as an insured under the policy.",
      "Wear and tear, insects, rodents, and maintenance-related damage are typically excluded.",
      "Business property and business activities may have limited or no coverage.",
      "Certain valuables may be subject to special sublimits."
    ]}
    savingsTips={[
      "Bundle renters and auto insurance when a carrier offers a multi-policy discount.",
      "Choose a deductible that balances premium savings with what you can afford after a loss.",
      "Ask about alarm, security, or protective-device discounts.",
      "Create a home inventory so you can select an appropriate personal-property limit.",
      "Review optional coverages rather than automatically buying limits you do not need."
    ]}
  />;
}