import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Renters insurance"
    title="Protect your belongings and your liability."
    intro="Your landlord’s policy generally protects the building—not your personal belongings or your personal liability."
    bullets={[
      {title:"Personal property",text:"Coverage may help repair or replace eligible belongings after a covered loss."},
      {title:"Personal liability",text:"Liability coverage can help with certain covered claims involving bodily injury or property damage."},
      {title:"Loss of use",text:"Coverage may help with additional living expenses if a covered loss makes the rental uninhabitable."},
      {title:"Affordable protection",text:"Renters insurance is often a simple way to protect more than most people realize."},
    ]}
  />;
}