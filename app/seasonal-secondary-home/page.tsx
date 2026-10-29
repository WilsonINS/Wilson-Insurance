import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Seasonal & secondary homes"
    title="Coverage for homes you don’t occupy year-round."
    intro="Seasonal and secondary homes can have different occupancy, vacancy, weather, and property-management considerations than a primary residence."
    bullets={[
      {title:"Occupancy matters",text:"How often the property is occupied can affect eligibility, underwriting, and available coverage options."},
      {title:"Property protection",text:"Coverage may be available for the dwelling, other structures, personal property, and covered causes of loss."},
      {title:"Liability",text:"Liability protection remains important even when the property is not your primary residence."},
      {title:"Florida exposures",text:"Wind, water, vacancy, maintenance, and distance from your primary residence can all matter during underwriting."},
    ]}
  />;
}