import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Boat insurance"
    title="Coverage for time on the water."
    intro="Boat insurance can help protect the vessel, equipment, liability exposure, and other risks that come with owning and operating a boat."
    bullets={[
      {title:"Boat physical damage",text:"Coverage options may protect the hull and eligible permanently attached equipment from covered losses."},
      {title:"Liability",text:"Boat liability can help protect against covered bodily injury or property damage claims arising from operation or ownership."},
      {title:"Trailer & equipment",text:"Depending on the carrier and policy, trailers, motors, and certain equipment may be eligible for coverage."},
      {title:"Additional options",text:"Available options can include towing, uninsured boater, medical payments, and other endorsements."},
    ]}
  />;
}