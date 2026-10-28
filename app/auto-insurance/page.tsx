import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Auto insurance"
    title="Auto coverage that fits the way you drive."
    intro="We help Florida drivers compare available liability, physical damage, medical, and uninsured motorist options based on their vehicles and needs."
    bullets={[
      {title:"Liability",text:"Bodily injury and property damage liability help protect you when you are legally responsible for a covered accident."},
      {title:"Comprehensive & collision",text:"Physical damage coverage can help repair or replace your vehicle after covered losses, subject to deductibles and policy terms."},
      {title:"PIP & medical options",text:"Florida auto policies can include personal injury protection and other medical-related coverage depending on the policy."},
      {title:"Uninsured motorist",text:"UM coverage may help when you are injured by a driver who has no bodily injury liability coverage or not enough coverage."},
    ]}
  />;
}