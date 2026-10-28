import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Home insurance"
    title="Protection for the place you call home."
    intro="Florida homes face a unique mix of weather, water, liability, and property risks. We help you review the coverage options available for your home and belongings."
    bullets={[
      {title:"Dwelling & structures",text:"Coverage for the residence and, when applicable, other structures on the property, subject to policy terms and limits."},
      {title:"Personal property",text:"Coverage options for belongings such as furniture, clothing, electronics, and other personal property."},
      {title:"Liability",text:"Personal liability and medical-payments coverage can help when covered injuries or property damage involve you or your household."},
      {title:"Loss of use",text:"Coverage may help with additional living expenses when a covered loss makes the residence uninhabitable."},
    ]}
    note="Flood damage is generally not covered by a standard homeowners policy. Ask us about separate flood insurance options."
  />;
}