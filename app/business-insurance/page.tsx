import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Business insurance"
    title="Coverage built around how your business actually works."
    intro="Commercial insurance starts with understanding your operations, property, vehicles, people, contracts, and the risks that can interrupt your business."
    bullets={[
      {title:"General liability",text:"Coverage for certain third-party bodily injury, property damage, and personal and advertising injury claims."},
      {title:"Commercial property",text:"Coverage options for buildings, business personal property, equipment, and related property exposures."},
      {title:"Commercial auto",text:"Coverage for autos used in business, including liability and available physical damage options."},
      {title:"Workers compensation",text:"Coverage for qualifying employee work-related injuries and illnesses, subject to applicable law and policy terms."},
      {title:"Inland marine",text:"Coverage options for equipment, tools, and property that moves between locations or jobsites."},
      {title:"Umbrella & excess",text:"Additional liability limits may be available over qualifying underlying policies."},
    ]}
    note="We work with contractors, restaurants, property owners, trucking risks, and other Florida businesses. Coverage availability varies by carrier and class."
  />;
}