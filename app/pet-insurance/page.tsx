import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Pet insurance"
    title="Help prepare for unexpected veterinary bills."
    intro={[
      "Pet insurance is designed to help reduce the financial impact of eligible veterinary expenses when a dog or cat becomes sick or injured. Emergency treatment, surgery, diagnostics, and specialty care can become expensive very quickly.",
      "Depending on the plan, you may be reimbursed for a percentage of eligible veterinary expenses after meeting a deductible. Coverage design varies widely, so reimbursement percentage, annual limits, waiting periods, and exclusions all matter."
    ]}
    coverages={[
      {title:"Accident coverage",text:"May reimburse eligible veterinary expenses related to covered accidental injuries."},
      {title:"Illness coverage",text:"May reimburse eligible treatment for covered illnesses after applicable waiting periods."},
      {title:"Diagnostics & treatment",text:"Eligible exams, testing, imaging, surgery, hospitalization, and prescriptions may be included depending on the plan."},
      {title:"Specialty care",text:"Some plans may cover eligible treatment by specialists or emergency veterinary facilities."},
      {title:"Wellness options",text:"Optional wellness or preventive-care benefits may be available for routine services, depending on the provider."},
      {title:"Plan choices",text:"Deductibles, reimbursement percentages, annual limits, and benefit structures vary by insurer."},
    ]}
    exclusions={[
      "Pre-existing conditions are commonly excluded.",
      "Waiting periods may apply before accident or illness coverage begins.",
      "Routine and preventive care may not be covered unless a wellness option is purchased.",
      "Breeding, elective procedures, cosmetic procedures, and certain hereditary conditions may be limited or excluded depending on the plan.",
      "Coverage may be subject to age, species, breed, or geographic eligibility rules."
    ]}
    savingsTips={[
      "Enroll pets when they are younger and before significant health conditions develop.",
      "Compare deductibles, reimbursement percentages, and annual limits instead of looking only at premium.",
      "Consider whether you actually need a wellness add-on for routine expenses.",
      "Ask about multi-pet discounts when insuring more than one animal.",
      "Review the plan’s exclusions and reimbursement method before selecting coverage."
    ]}
  />;
}