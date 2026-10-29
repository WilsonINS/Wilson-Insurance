import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Motorcycle insurance"
    title="Coverage for two wheels and the road ahead."
    intro="Motorcycle coverage can include liability, physical damage, uninsured motorist, and other options depending on the bike and how you ride."
    bullets={[
      {title:"Liability",text:"Coverage may help protect you against covered claims when you are legally responsible for injury or property damage."},
      {title:"Comprehensive & collision",text:"Physical damage coverage may help repair or replace the motorcycle after covered losses."},
      {title:"Accessories",text:"Some policies offer options for eligible custom parts, accessories, and equipment."},
      {title:"Rider-specific options",text:"Available protections vary by carrier, bike type, riding history, and selected limits."},
    ]}
  />;
}