import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Small business insurance"
    title="Practical coverage for small Florida businesses."
    intro="Small businesses often need several coverages working together. We help review the operation first, then the insurance pieces."
    bullets={[
      {title:"Liability",text:"General liability is often a starting point for third-party bodily injury and property damage exposures."},
      {title:"Property",text:"Buildings, contents, equipment, inventory, and tenant improvements may need protection."},
      {title:"Vehicles & employees",text:"Commercial auto and workers compensation may be needed depending on how the business operates."},
      {title:"Package options",text:"Some eligible businesses may qualify for packaged policies that combine multiple coverages."},
    ]}
  />;
}