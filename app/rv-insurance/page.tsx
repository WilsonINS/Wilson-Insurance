import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="RV insurance"
    title="Coverage for the road and the campsite."
    intro="RV insurance can combine auto-style protection with coverage considerations that come with using an RV as a temporary or extended living space."
    bullets={[
      {title:"Liability",text:"Liability coverage can help protect against covered bodily injury or property damage claims."},
      {title:"Physical damage",text:"Comprehensive and collision options may help protect the RV itself from covered damage."},
      {title:"Personal belongings",text:"Depending on the policy, additional protection may be available for property carried inside the RV."},
      {title:"Usage matters",text:"Occasional recreation, seasonal use, and extended or full-time RV use can require different underwriting."},
    ]}
  />;
}