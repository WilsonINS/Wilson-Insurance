import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Commercial property"
    title="Protect the property your business depends on."
    intro="Commercial property coverage can help protect buildings, business personal property, equipment, and other eligible property from covered causes of loss."
    bullets={[
      {title:"Buildings",text:"Coverage may apply to owned commercial buildings and certain permanently installed property."},
      {title:"Business personal property",text:"Furniture, inventory, equipment, and other eligible business property may be covered."},
      {title:"Business income",text:"Available coverage may help with lost income and certain continuing expenses after a covered loss interrupts operations."},
      {title:"Valuation matters",text:"Replacement cost, actual cash value, coinsurance, deductibles, and limits can significantly affect a claim."},
    ]}
  />;
}