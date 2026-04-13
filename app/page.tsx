import { InvestorDemoPage } from "../components/investor-demo-page";
import { investorDemoSnapshot } from "../data/snapshot.generated";

export default function HomePage() {
  return <InvestorDemoPage snapshot={investorDemoSnapshot} />;
}
