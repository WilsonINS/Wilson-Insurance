import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Motorcycle insurance"
    title="Coverage for two wheels and the road ahead."
    intro={[
      "Motorcycle insurance helps protect you from liability and physical damage losses associated with owning and operating a motorcycle. Because riders have less physical protection than occupants of passenger vehicles, even a relatively small crash can lead to serious injuries and substantial costs.",
      "The right policy can combine liability protection with coverage for the bike itself, accessories, medical-related exposures, and uninsured motorists."
    ]}
    coverages={[
      {title:"Liability",text:"May help protect you against certain covered bodily injury and property damage claims for which you are legally responsible."},
      {title:"Collision",text:"May help repair or replace the motorcycle after a covered collision."},
      {title:"Comprehensive",text:"May cover eligible losses such as theft, vandalism, fire, weather, or animal contact."},
      {title:"Uninsured motorist",text:"May help protect you from certain bodily injury losses caused by an uninsured or underinsured driver."},
      {title:"Accessories & custom parts",text:"Optional coverage may be available for eligible custom equipment, accessories, and modifications."},
      {title:"Medical-related coverage",text:"Available medical-payments or other benefits vary by carrier, policy, and state requirements."},
    ]}
    exclusions={[
      "Racing, speed contests, and certain track activities are commonly excluded.",
      "Wear and tear, mechanical breakdown, and maintenance are generally not covered.",
      "Undisclosed custom parts may exceed standard policy limits.",
      "Commercial or delivery use may require different coverage.",
      "Certain operators may be excluded or require specific underwriting."
    ]}
    savingsTips={[
      "Complete an approved motorcycle safety course when discounts are offered.",
      "Bundle motorcycle coverage with auto, home, or other policies when available.",
      "Ask about mature-rider, safe-rider, or association discounts.",
      "Use appropriate theft-deterrent and storage measures.",
      "Consider higher deductibles if the savings justify the added out-of-pocket risk."
    ]}
  />;
}