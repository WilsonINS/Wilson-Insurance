import InsurancePage from "@/components/InsurancePage";

export default function Page() {
  return <InsurancePage
    eyebrow="Flood insurance"
    title="Flood coverage deserves its own conversation."
    intro={[
      "Flood insurance is designed to protect against direct physical damage caused by flooding, a peril that standard homeowners and many commercial property policies generally exclude. Flooding can occur from heavy rain, overflowing bodies of water, storm surge, drainage problems, or other qualifying flood events.",
      "Even properties outside high-risk flood zones can experience flood damage. A separate flood policy can help protect the building and, when selected, eligible contents from a loss that could otherwise be entirely out of pocket."
    ]}
    coverages={[
      {title:"Building coverage",text:"May protect eligible parts of the structure, foundation, certain systems, and permanently installed property after a covered flood."},
      {title:"Contents coverage",text:"May cover eligible personal or business contents, subject to separate limits and valuation provisions."},
      {title:"NFIP coverage",text:"Federally backed flood insurance may be available through the National Flood Insurance Program for eligible properties."},
      {title:"Private flood coverage",text:"Private insurers may offer alternative limits, deductibles, valuation terms, and optional coverages."},
    ]}
    exclusions={[
      "Temporary housing and additional living expenses may not be covered under some flood policies.",
      "Land, landscaping, decks, patios, and property outside the insured building may have limited or no coverage.",
      "Basement property and property below the lowest elevated floor can be subject to significant limitations.",
      "Moisture, mold, or mildew that could have been prevented may be excluded.",
      "Loss of use, business interruption, vehicles, and certain valuables may require other insurance or may not be covered."
    ]}
    savingsTips={[
      "Compare NFIP and private flood options when both are available.",
      "Consider higher deductibles if the resulting premium savings make sense for you.",
      "Obtain an elevation certificate when it may improve rating or underwriting.",
      "Use flood-resistant materials and mitigation measures where practical.",
      "Buy coverage before storm season because waiting periods may apply."
    ]}
  />;
}