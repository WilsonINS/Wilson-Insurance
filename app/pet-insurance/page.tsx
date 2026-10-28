import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Pet insurance"
    title="Help prepare for unexpected veterinary bills."
    intro="Pet insurance can help offset eligible veterinary expenses when your dog or cat becomes sick or injured, depending on the plan selected."
    bullets={[
      {title:"Accident coverage",text:"Eligible accident-related veterinary expenses may be reimbursable subject to the plan, deductible, limits, and exclusions."},
      {title:"Illness coverage",text:"Many plans offer coverage for eligible illnesses after applicable waiting periods and subject to plan terms."},
      {title:"Flexible plan design",text:"Deductibles, reimbursement percentages, annual limits, and optional benefits vary by provider."},
      {title:"Review exclusions",text:"Pre-existing conditions and other exclusions matter. We can help you understand the plan details before enrollment."},
    ]}
  />;
}