import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Commercial auto"
    title="Coverage for vehicles used in your business."
    intro={[
      "Commercial auto insurance is designed to protect a business from liability and vehicle damage losses arising from autos used for business purposes. A vehicle accident can expose the business to repair costs, bodily injury claims, property damage, lawsuits, and lost productivity.",
      "Personal auto policies may not adequately cover vehicles titled to a business or used in certain commercial operations, so the way each vehicle is owned and used matters."
    ]}
    coverages={[
      {title:"Auto liability",text:"May help protect the business against certain covered bodily injury and property damage claims arising from use of covered autos."},
      {title:"Collision",text:"May help repair or replace a covered business vehicle after a collision, subject to the deductible."},
      {title:"Comprehensive",text:"May cover eligible non-collision losses such as theft, fire, vandalism, weather, or animal contact."},
      {title:"Uninsured motorist",text:"May be available for certain bodily injury losses caused by uninsured or underinsured drivers."},
      {title:"Hired & non-owned auto",text:"May help address certain liability exposures involving rented vehicles or employee-owned vehicles used for business."},
      {title:"Towing & rental",text:"Optional coverage may help with roadside assistance or temporary replacement transportation after a covered loss."},
    ]}
    exclusions={[
      "Intentional acts, fraud, and certain criminal activity are excluded.",
      "Wear and tear, mechanical breakdown, and maintenance are generally not covered.",
      "Vehicles or drivers not properly scheduled or disclosed can create coverage issues.",
      "Certain hauling, delivery, passenger-for-hire, or trucking operations may require specialized coverage.",
      "Cargo, tools, and property being transported are generally not automatically covered by the auto policy."
    ]}
    savingsTips={[
      "Hire and retain drivers with strong motor vehicle records.",
      "Use telematics, driver training, and documented fleet-safety programs.",
      "Review vehicle values and remove obsolete units promptly.",
      "Consider higher physical-damage deductibles where financially appropriate.",
      "Keep garaging, radius, use, driver, and vehicle information accurate so the policy is rated correctly."
    ]}
  />;
}