import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Flood insurance"
    title="Flood coverage deserves its own conversation."
    intro="Standard homeowners policies generally do not cover flood damage. We can help review available flood options for homes, rental properties, and businesses."
    bullets={[
      {title:"Building coverage",text:"Coverage can help protect eligible building property from covered direct physical loss caused by flooding."},
      {title:"Contents coverage",text:"Depending on the policy, separate limits may be available for eligible personal or business contents."},
      {title:"NFIP & private options",text:"Depending on the property and eligibility, both NFIP and private-market flood options may be available."},
      {title:"Know the waiting period",text:"Some flood policies have waiting periods before coverage begins, so it is better to review options before a storm is approaching."},
    ]}
  />;
}