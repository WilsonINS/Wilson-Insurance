import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Commercial auto"
    title="Coverage for vehicles used in your business."
    intro="Commercial auto insurance can help protect business-owned vehicles, drivers, and liability exposures created by driving for work."
    bullets={[
      {title:"Auto liability",text:"Coverage may help protect the business against covered bodily injury and property damage claims."},
      {title:"Physical damage",text:"Comprehensive and collision options may help protect covered business vehicles."},
      {title:"Drivers & vehicles",text:"Driver history, vehicle type, radius, use, garaging, and ownership all matter during underwriting."},
      {title:"Business-specific needs",text:"Contractors, service businesses, delivery risks, trucking operations, and fleets can require different coverage structures."},
    ]}
  />;
}