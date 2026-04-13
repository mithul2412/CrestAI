"use client";

import type { ReactNode } from "react";

import type {
  ClusterSnapshot,
  CompetitorSnapshot,
  FixRecommendationSnapshot,
  InvestorDemoSnapshot,
  LiftMetricSnapshot,
} from "../data/schema";

type DemoTab = "measurement" | "diagnosis" | "action" | "proof";

const TABS: Array<{ key: DemoTab; label: string; eyebrow: string }> = [
  { key: "measurement", label: "Measurement", eyebrow: "AI visibility scoreboard" },
  { key: "diagnosis", label: "Diagnosis", eyebrow: "Root-cause engine" },
  { key: "action", label: "Action", eyebrow: "Optimization engine" },
  { key: "proof", label: "Proof", eyebrow: "Experiment loop" },
];

function formatPercent(value: number) {
  return `${Math.round(value * 100)}%`;
}

function formatClusterName(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function PanelFrame({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div className="panel-frame theme-panel-shell overflow-hidden rounded-[28px] border shadow-glow">
      <div className="theme-panel-header border-b px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-soft)]">
          {eyebrow}
        </div>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          {title}
        </h3>
      </div>
      <div className="px-5 py-5 md:px-6 md:py-6">{children}</div>
    </div>
  );
}

function CompetitorRow({ competitor }: { competitor: CompetitorSnapshot }) {
  return (
    <div className="theme-surface-strong rounded-2xl border px-4 py-4">
      <div className="text-base font-semibold text-[var(--foreground)]">{competitor.domain}</div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <MetricPill label="Voice" value={formatPercent(competitor.shareOfVoice)} />
        <MetricPill label="Citation" value={formatPercent(competitor.citationShare)} />
        <MetricPill label="Recommend" value={formatPercent(competitor.recommendationShare)} />
        <MetricPill label="Inclusion" value={formatPercent(competitor.inclusionShare)} />
        <MetricPill label="Wins" value={`${competitor.winCount}`} />
      </div>
    </div>
  );
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="theme-surface-strong rounded-xl border px-3 py-3">
      <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">{label}</div>
      <div className="mt-1.5 text-xl font-semibold text-[var(--foreground)]">{value}</div>
    </div>
  );
}

function SignalPill({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: string;
  tone?: "neutral" | "accent" | "teal";
}) {
  const toneClass =
    tone === "accent"
      ? "border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent-soft)]"
      : tone === "teal"
        ? "border-[var(--teal)]/30 bg-[var(--teal)]/10 text-[var(--teal)]"
        : "theme-chip-strong text-[var(--muted-strong)]";

  return (
    <div className={`rounded-full border px-3 py-1.5 text-xs font-medium ${toneClass}`}>
      <span className="uppercase tracking-[0.18em]">{label}</span>
      <span className="ml-2 font-semibold">{value}</span>
    </div>
  );
}

function ClusterCard({ cluster }: { cluster: ClusterSnapshot }) {
  const status =
    cluster.primarySourceShare >= 0.75
      ? "HelioDesk is already visible here. This cluster is the cleanest path to conversion gains."
      : cluster.primarySourceShare >= 0.5
        ? "Owned pages are showing up here, but competitors still control the answer slot."
        : "This cluster is thin for HelioDesk and likely needs stronger comparison or proof content.";

  return (
    <div className="theme-surface-soft rounded-[24px] border p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-lg font-semibold text-[var(--foreground)]">
            {formatClusterName(cluster.clusterName)}
          </div>
          <div className="mt-1 text-sm text-[var(--muted)]">
            {cluster.intent} · {cluster.funnelStage} · {cluster.promptCount} prompts
          </div>
        </div>
        <SignalPill
          label="Primary"
          value={formatPercent(cluster.primarySourceShare)}
          tone={cluster.primarySourceShare >= 0.6 ? "teal" : "neutral"}
        />
      </div>

      <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">{status}</p>

      <div className="mt-4">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
          <span>Owned-page visibility</span>
          <span>{formatPercent(cluster.primarySourceShare)}</span>
        </div>
        <div className="theme-track mt-2 h-2.5 overflow-hidden rounded-full">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--teal)]"
            style={{ width: `${Math.max(10, Math.round(cluster.primarySourceShare * 100))}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {cluster.topCompetitors.length > 0 ? (
          cluster.topCompetitors.map((competitor) => (
            <SignalPill key={competitor} label="Top rival" value={competitor} tone="accent" />
          ))
        ) : (
          <SignalPill label="Top rival" value="None" tone="teal" />
        )}
      </div>
    </div>
  );
}

function TopCitedPageCard({
  page,
  officialDomain,
}: {
  page: InvestorDemoSnapshot["measurement"]["topCitedPages"][number];
  officialDomain: string;
}) {
  const isOfficial = page.canonicalUri.includes(officialDomain.replace(/^www\./, ""));

  return (
    <div className="theme-surface-strong rounded-2xl border p-4">
      <div className="flex flex-wrap items-center gap-2">
        <SignalPill label="Source" value={isOfficial ? "Official" : "Competitor"} tone={isOfficial ? "teal" : "accent"} />
        <span className="rounded-full border border-[var(--surface-border)] px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
          {page.pageType}
        </span>
      </div>
      <div className="mt-3 text-base font-semibold text-[var(--foreground)]">{page.title}</div>
      <div className="mt-1 text-sm text-[var(--muted)]">{page.canonicalUri}</div>
    </div>
  );
}

function RecommendationCard({ recommendation }: { recommendation: FixRecommendationSnapshot }) {
  return (
    <div className="theme-surface-soft rounded-2xl border p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--accent-soft)]">
          {recommendation.recommendationType}
        </span>
        <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
          Priority {recommendation.priority}
        </span>
        {recommendation.expectedImpact != null ? (
          <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--teal)]">
            {formatPercent(recommendation.expectedImpact)} expected lift
          </span>
        ) : null}
      </div>
      <h4 className="mt-3 text-lg font-semibold text-[var(--foreground)]">{recommendation.title}</h4>
      <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">{recommendation.description}</p>
      {recommendation.targetPageTitle ? (
        <div className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          Target page · {recommendation.targetPageTitle}
        </div>
      ) : null}
      {recommendation.evidenceNotes.length > 0 ? (
        <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
          {recommendation.evidenceNotes.slice(0, 3).map((note) => (
            <li key={note} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--teal)]" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {recommendation.patchExcerpt ? (
        <pre className="theme-code-block mt-4 overflow-x-auto rounded-2xl border p-4 text-xs leading-6">
          {recommendation.patchExcerpt}
        </pre>
      ) : null}
    </div>
  );
}

function LiftRow({ metric }: { metric: LiftMetricSnapshot }) {
  const positive = metric.lift >= 0;
  return (
    <div className="theme-surface-soft grid gap-3 rounded-2xl border px-4 py-4 md:grid-cols-[1.3fr,0.7fr,0.7fr,0.7fr,0.8fr]">
      <div>
        <div className="text-base font-semibold text-[var(--foreground)]">{metric.metricName}</div>
        {metric.notes ? <div className="mt-1 text-sm text-[var(--muted)]">{metric.notes}</div> : null}
      </div>
      <MetricPill label="Baseline" value={formatPercent(metric.baselineValue)} />
      <MetricPill label="Variant" value={formatPercent(metric.variantValue)} />
      <MetricPill label="Lift" value={`${positive ? "+" : ""}${formatPercent(metric.lift)}`} />
      <div className="theme-surface-strong rounded-xl border px-3 py-3">
        <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Decision</div>
        <div className={`mt-2 text-base font-semibold ${positive ? "text-[var(--teal)]" : "text-[var(--accent-soft)]"}`}>
          {metric.decision}
        </div>
      </div>
    </div>
  );
}

export function ProductStudio({
  snapshot,
  activeTab,
  onTabChange,
}: {
  snapshot: InvestorDemoSnapshot;
  activeTab: DemoTab;
  onTabChange: (tab: DemoTab) => void;
}) {
  const strongestCluster = [...snapshot.measurement.clusters].sort(
    (left, right) => right.primarySourceShare - left.primarySourceShare,
  )[0];
  const weakestCluster = [...snapshot.measurement.clusters].sort(
    (left, right) => left.primarySourceShare - right.primarySourceShare,
  )[0];
  const leadingCompetitor = [...snapshot.measurement.competitors].sort(
    (left, right) => right.shareOfVoice - left.shareOfVoice,
  )[0];
  const sourceVisibleClusters = snapshot.measurement.clusters.filter(
    (cluster) => cluster.primarySourceShare >= 0.5,
  ).length;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-3">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => onTabChange(tab.key)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeTab === tab.key
                ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                : "theme-button-subtle border text-[var(--muted-strong)] hover:text-[var(--foreground)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "measurement" ? (
        <PanelFrame title="Pre-optimization baseline and competitor benchmark" eyebrow="Measurement">
          <div className="theme-surface-soft rounded-[24px] border p-4">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Before optimization</div>
            <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">
              HelioDesk already appears as an official source in {sourceVisibleClusters} of {snapshot.measurement.promptClusterCount} prompt clusters, but competitors still convert more of that attention into the final answer. The strongest owned foothold is {formatClusterName(strongestCluster.clusterName)}, while the biggest gap is {formatClusterName(weakestCluster.clusterName)}.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <SignalPill label="Primary-source visibility" value={formatPercent(snapshot.measurement.primarySourceShare)} tone="teal" />
              <SignalPill label="Top rival" value={leadingCompetitor.domain} tone="accent" />
              <SignalPill label="Visible clusters" value={`${sourceVisibleClusters}/${snapshot.measurement.promptClusterCount}`} />
            </div>
          </div>

          <div className="mt-6 grid gap-5 xl:grid-cols-[1.05fr,0.95fr]">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Where HelioDesk already appears</div>
              <div className="grid gap-4 md:grid-cols-2">
                {snapshot.measurement.clusters.map((cluster) => (
                  <ClusterCard key={cluster.clusterName} cluster={cluster} />
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Who is winning now</div>
                <div className="space-y-3">
                  {snapshot.measurement.competitors.map((competitor) => (
                    <CompetitorRow key={competitor.domain} competitor={competitor} />
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Pages shaping the current answer set</div>
                <div className="space-y-3">
                  {snapshot.measurement.topCitedPages.map((page) => (
                    <TopCitedPageCard
                      key={page.canonicalUri}
                      page={page}
                      officialDomain={snapshot.brand.officialDomain}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PanelFrame>
      ) : null}

      {activeTab === "diagnosis" ? (
        <PanelFrame title="Grounded root-cause diagnosis tied to prompts, pages, and competitors" eyebrow="Diagnosis">
          <div className="grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
            <div className="theme-surface-soft rounded-2xl border p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">What Crest found</div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">{snapshot.diagnosis.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {snapshot.diagnosis.missingPageTypes.map((item) => (
                  <span key={item} className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs text-[var(--accent-soft)]">
                    Missing {item}
                  </span>
                ))}
                {snapshot.diagnosis.weakPromptClusters.map((item) => (
                  <span key={item} className="rounded-full border border-[var(--teal)]/30 bg-[var(--teal)]/10 px-3 py-1 text-xs text-[var(--teal)]">
                    Weak {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="theme-surface-strong rounded-2xl border p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Competitor advantages</div>
              <ul className="mt-3 space-y-3 text-sm text-[var(--muted-strong)]">
                {snapshot.diagnosis.competitorAdvantages.map((advantage) => (
                  <li key={advantage} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {snapshot.diagnosis.findings.map((finding) => (
              <div key={finding.title} className="theme-surface-soft rounded-2xl border p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="theme-chip-strong rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {finding.severity}
                  </span>
                  {finding.promptCluster ? (
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--teal)]">
                      {finding.promptCluster}
                    </span>
                  ) : null}
                </div>
                <h4 className="mt-3 text-lg font-semibold text-[var(--foreground)]">{finding.title}</h4>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">{finding.description}</p>
                {finding.evidenceNotes.length > 0 ? (
                  <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                    {finding.evidenceNotes.slice(0, 3).map((note) => (
                      <li key={note} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--teal)]" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </PanelFrame>
      ) : null}

      {activeTab === "action" ? (
        <PanelFrame title="Prioritized remediation plans and exportable patch drafts" eyebrow="Action">
          <div className="theme-surface-soft rounded-2xl border p-4">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Fix plan summary</div>
            <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">{snapshot.actions.summary}</p>
          </div>
          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            {snapshot.actions.recommendations.map((recommendation) => (
              <RecommendationCard key={recommendation.title} recommendation={recommendation} />
            ))}
          </div>
        </PanelFrame>
      ) : null}

      {activeTab === "proof" ? (
        <PanelFrame title="Before/after experiment readout with acceptance decisions" eyebrow="Proof">
          <div className="theme-surface-soft rounded-2xl border p-4">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Hypothesis</div>
            <h4 className="mt-2 text-xl font-semibold text-[var(--foreground)]">{snapshot.experiments.name}</h4>
            <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">
              {snapshot.experiments.hypothesis}
            </p>
          </div>
          <div className="mt-6 space-y-3">
            {snapshot.experiments.liftMetrics.map((metric) => (
              <LiftRow key={metric.metricName} metric={metric} />
            ))}
          </div>
        </PanelFrame>
      ) : null}
    </div>
  );
}
