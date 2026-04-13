"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";

import type { InvestorDemoSnapshot } from "../data/schema";
import { ProductStudio } from "./mock-panels";

const SECTION_IDS = [
  { id: "overview", label: "Overview" },
  { id: "loop", label: "Loop" },
  { id: "sources", label: "Sources" },
  { id: "knowledge", label: "Knowledge" },
  { id: "studio", label: "Measurement" },
  { id: "monitoring", label: "Monitoring" },
  { id: "agents", label: "Agents + Wiki" },
] as const;

type DemoTab = "measurement" | "diagnosis" | "action" | "proof";

function formatPercent(value: number) {
  return `${Math.round(value * 100)}%`;
}

function formatSignedPercent(value: number) {
  const rounded = Math.round(value * 1000) / 10;
  return `${rounded > 0 ? "+" : ""}${rounded}%`;
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      <div className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-soft)]">
          {eyebrow}
        </div>
        <div className="max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-[var(--muted-strong)] md:text-lg">
            {description}
          </p>
        </div>
      </div>
      {children}
    </section>
  );
}

function SurfaceCard({
  title,
  children,
  accent = "accent",
}: {
  title: string;
  children: ReactNode;
  accent?: "accent" | "teal";
}) {
  return (
    <div className="theme-surface-card rounded-[28px] border p-5 backdrop-blur-sm">
      <div className={`text-xs font-semibold uppercase tracking-[0.24em] ${accent === "accent" ? "text-[var(--accent-soft)]" : "text-[var(--teal)]"}`}>
        {title}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function InvestorDemoPage({ snapshot }: { snapshot: InvestorDemoSnapshot }) {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [activeTab, setActiveTab] = useState<DemoTab>("measurement");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    SECTION_IDS.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("crest-investor-theme");
    const preferredTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

    setTheme(preferredTheme);
    document.documentElement.dataset.theme = preferredTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("crest-investor-theme", theme);
  }, [theme]);

  const generatedAt = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(snapshot.generatedAt)),
    [snapshot.generatedAt],
  );

  const visibleSurfaces = useMemo(
    () =>
      snapshot.architecture.surfaces.filter(
        (surface) =>
          !/static investor demo/i.test(surface.name) &&
          !/vercel-hosted/i.test(surface.description),
      ),
    [snapshot.architecture.surfaces],
  );

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="hero-mesh pointer-events-none fixed inset-0 opacity-70" />

      <header className="theme-header-shell sticky top-0 z-50 border-b backdrop-blur-xl">
        <div className="mx-auto flex max-w-[100rem] items-center justify-between gap-6 px-5 py-4 md:px-8">
          <a href="#overview" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/crest-mark.png" alt="Crest AI" className="theme-chip h-10 w-10 rounded-2xl border p-1.5 shadow-tide" />
            <div>
              <div className="text-lg font-semibold tracking-tight">Crest AI</div>
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                Investor Demo
              </div>
            </div>
          </a>
          <div className="flex items-center gap-3">
            <span className="theme-button-subtle rounded-full border px-3 py-2 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Pre-launch walkthrough
            </span>
            <span className="hidden rounded-full border border-[var(--teal)]/30 bg-[var(--teal)]/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-[var(--teal)] md:inline-flex">
              Grounded snapshot
            </span>
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="theme-button-subtle inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)] transition"
            >
              <span className="text-sm leading-none">{theme === "dark" ? "☀" : "☾"}</span>
              <span>{theme === "dark" ? "Light" : "Dark"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[100rem] px-5 pb-24 pt-10 md:px-8 md:pt-14">
        <div className="grid gap-10 lg:grid-cols-[260px,minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="theme-surface-card rounded-[28px] border p-4 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Scroll map</div>
                <div className="mt-4 space-y-2">
                  {SECTION_IDS.map((item, index) => (
                    <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 rounded-2xl px-3 py-2 transition hover:bg-white/5">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs ${
                          activeSection === item.id
                            ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                            : "border-[var(--surface-border)] text-[var(--muted)]"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className={activeSection === item.id ? "text-[var(--foreground)]" : "text-[var(--muted)]"}>
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="theme-surface-card rounded-[28px] border p-4 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Snapshot</div>
                <div className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">
                  Generated from the real AEO demo flow on {generatedAt}, using the HelioDesk dataset and seeded competitor benchmarks.
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-16 md:space-y-24">
            <section id="overview" className="scroll-mt-24">
              <div className="grid gap-8 xl:grid-cols-[1.1fr,0.9fr]">
                <div className="space-y-6">
                  <div className="space-y-5">
                    <div className="max-w-[68rem]">
                      <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--teal)] md:text-base">
                        Pre-content optimization for AI visibility
                      </div>
                      <h1 className="mt-4 text-[2.75rem] font-semibold leading-[1.04] tracking-tight text-[var(--foreground)] md:text-[4.25rem] xl:text-[4.85rem]">
                        <span className="block">AEO optimization</span>
                        <span className="block">with a real knowledge layer behind it.</span>
                      </h1>
                    </div>
                    <p className="max-w-4xl text-lg leading-8 text-[var(--muted-strong)] md:text-xl">
                      {snapshot.overview.subheadline}
                    </p>
                    <p className="max-w-4xl text-base leading-7 text-[var(--muted)] md:text-[1.04rem]">
                      {snapshot.overview.narrative}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#studio"
                      className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-black shadow-glow transition hover:-translate-y-0.5"
                    >
                      See the product flow
                    </a>
                    <a
                      href="#agents"
                      className="theme-button-subtle rounded-full border px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition"
                    >
                      See how the system works
                    </a>
                  </div>
                </div>

                <SurfaceCard title="Live demo storyline" accent="teal">
                  <div className="space-y-4">
                    <div className="theme-surface-strong rounded-2xl border p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Demo company</div>
                      <div className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                        {snapshot.brand.demoCompany}
                      </div>
                      <div className="mt-2 text-sm text-[var(--muted-strong)]">
                        {snapshot.brand.officialDomain} · {snapshot.brand.vertical}
                      </div>
                    </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                      {snapshot.overview.heroMetrics.map((metric) => (
                        <div key={metric.label} className="theme-surface-soft rounded-2xl border px-4 py-4">
                          <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{metric.label}</div>
                          <div className="mt-2 text-3xl font-semibold text-[var(--foreground)]">{metric.value}</div>
                          <div className="mt-1 text-sm text-[var(--muted-strong)]">{metric.detail}</div>
                        </div>
                      ))}
                    </div>
                    <div className="theme-surface-overlay rounded-2xl border p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">How to read this demo</div>
                      <div className="mt-4 grid gap-3">
                        <div className="theme-surface-soft rounded-2xl border p-4">
                          <div className="text-sm font-semibold text-[var(--foreground)]">What is real here</div>
                          <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                            The counts, scorecards, diagnosis findings, recommended fixes, alert feed, wiki totals, and optimization outputs shown here come from the real Crest AI demo pipeline running against the seeded HelioDesk company dataset.
                          </p>
                        </div>
                        <div className="theme-surface-strong rounded-2xl border p-4">
                          <div className="text-sm font-semibold text-[var(--foreground)]">What is pre-launch</div>
                          <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                            This is a guided product walkthrough. The lift shown here is a pre-launch estimate based on staged before-and-after experiment runs, and the measurement layer models answer-channel behavior before a live production connection is turned on.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SurfaceCard>
              </div>
            </section>

            <Section
              id="loop"
              eyebrow="Product Loop"
              title="A single operating system for pre-content optimization and continuous AEO improvement"
              description="Crest AI starts before content is published or refreshed, then stays useful after launch through grounded measurement, diagnosis, action, proof, and ongoing monitoring."
            >
              <div className="grid gap-4 lg:grid-cols-3">
                <div className="rounded-[28px] border border-[var(--accent)]/20 bg-[var(--accent)]/[0.08] p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-soft)]">Pre-content optimization</div>
                  <div className="mt-3 text-xl font-semibold text-[var(--foreground)]">This is where teams improve AI discoverability before content goes live.</div>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">
                    The demo shows the exact operating loop Crest AI uses before launch: ingest sources, build a knowledge layer, evaluate AI visibility, diagnose gaps, generate fixes, run staged experiments, and keep monitoring the domain.
                  </p>
                </div>
                <div className="theme-surface-card rounded-[28px] border p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Current baseline</div>
                  <div className="mt-3 text-3xl font-semibold text-[var(--foreground)]">{snapshot.diagnosis.findings.length}</div>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">
                    The current HelioDesk baseline surfaces {snapshot.diagnosis.findings.length} grounded gaps before remediation, which makes the optimization workflow concrete instead of hypothetical.
                  </p>
                </div>
                <div className="rounded-[28px] border border-[var(--teal)]/20 bg-[var(--teal)]/[0.08] p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--teal)]">Why this matters</div>
                  <div className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
                    {formatSignedPercent(snapshot.experiments.liftMetrics[0]?.lift ?? 0)}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">
                    Even with a weak baseline, Crest AI can show what to change, what the expected lift is, and what evidence supports that recommendation.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {snapshot.overview.loopSteps.map((step) => (
                  <div key={step.id} className="theme-surface-card relative overflow-hidden rounded-[28px] border p-5">
                    <div className="theme-step-number absolute right-4 top-4 text-5xl font-semibold">{step.id}</div>
                    <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-soft)]">{step.id}</div>
                    <div className="mt-4 text-xl font-semibold text-[var(--foreground)]">{step.title}</div>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">{step.description}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="sources"
              eyebrow="Ingestion"
              title="The system starts with the company’s entire discoverability surface"
              description="For the HelioDesk demo, Crest AI ingests official product pages and competitor surfaces together, preserving page types and provenance so later diagnosis can stay grounded."
            >
              <div className="grid gap-5 xl:grid-cols-[1.1fr,0.9fr]">
                <SurfaceCard title="Source mix">
                  <div className="grid gap-4 md:grid-cols-2">
                    {snapshot.ingestion.sourceTypes.map((source) => (
                      <div key={source.label} className="theme-surface-strong rounded-2xl border p-4">
                        <div className="text-sm font-semibold text-[var(--foreground)]">{source.label}</div>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">{source.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {source.examples.map((example) => (
                            <span key={example} className="theme-chip rounded-full border px-2.5 py-1 text-xs text-[var(--muted)]">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </SurfaceCard>
                <SurfaceCard title="Current dataset" accent="teal">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="theme-surface-strong rounded-2xl border p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Documents</div>
                      <div className="mt-2 text-4xl font-semibold text-[var(--foreground)]">
                        {snapshot.ingestion.counts.documents}
                      </div>
                    </div>
                    <div className="theme-surface-strong rounded-2xl border p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Chunks</div>
                      <div className="mt-2 text-4xl font-semibold text-[var(--foreground)]">
                        {snapshot.ingestion.counts.chunks}
                      </div>
                    </div>
                    <div className="theme-surface-strong rounded-2xl border p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Official pages</div>
                      <div className="mt-2 text-4xl font-semibold text-[var(--foreground)]">
                        {snapshot.ingestion.counts.officialPages}
                      </div>
                    </div>
                    <div className="theme-surface-strong rounded-2xl border p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Competitor pages</div>
                      <div className="mt-2 text-4xl font-semibold text-[var(--foreground)]">
                        {snapshot.ingestion.counts.competitorPages}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {snapshot.ingestion.topDocuments.map((document) => (
                      <div key={document.canonicalUri} className="theme-surface-soft rounded-2xl border p-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="theme-chip rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                            {document.siteDomain}
                          </span>
                          <span className="rounded-full border border-[var(--teal)]/30 bg-[var(--teal)]/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--teal)]">
                            {document.pageType}
                          </span>
                        </div>
                        <div className="mt-3 text-base font-semibold text-[var(--foreground)]">{document.title}</div>
                        <div className="mt-1 text-sm text-[var(--muted)]">{document.canonicalUri}</div>
                      </div>
                    ))}
                  </div>
                </SurfaceCard>
              </div>
            </Section>

            <Section
              id="knowledge"
              eyebrow="Knowledge Construction"
              title="Everything compiles into a retrieval-optimized, agent-usable knowledge layer"
              description="Crest AI converts raw pages into normalized chunks, then into canonical knowledge objects with evidence. That structured layer is what powers grounded search, diagnosis, fix plans, and the compiled markdown wiki."
            >
              <div className="grid gap-5 xl:grid-cols-[1.1fr,0.9fr]">
                <SurfaceCard title="Three-layer knowledge system">
                  <div className="space-y-4">
                    {snapshot.knowledge.layers.map((layer, index) => (
                      <div key={layer.name} className="theme-surface-strong relative rounded-[24px] border p-5">
                        {index < snapshot.knowledge.layers.length - 1 ? (
                          <div className="absolute bottom-[-20px] left-8 h-10 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
                        ) : null}
                        <div className="text-xs uppercase tracking-[0.22em] text-[var(--accent-soft)]">
                          Layer {index + 1}
                        </div>
                        <div className="mt-2 text-xl font-semibold text-[var(--foreground)]">{layer.name}</div>
                        <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">{layer.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {layer.outputs.map((output) => (
                            <span key={output} className="theme-chip rounded-full border px-2.5 py-1 text-xs text-[var(--muted)]">
                              {output}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </SurfaceCard>

                <div className="grid gap-5">
                  <SurfaceCard title="Knowledge inventory" accent="teal">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="theme-surface-strong rounded-2xl border p-4">
                        <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Entities</div>
                        <div className="mt-2 text-4xl font-semibold text-[var(--foreground)]">
                          {snapshot.knowledge.entityCount}
                        </div>
                      </div>
                      <div className="theme-surface-strong rounded-2xl border p-4">
                        <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Workflows</div>
                        <div className="mt-2 text-4xl font-semibold text-[var(--foreground)]">
                          {snapshot.knowledge.workflowCount}
                        </div>
                      </div>
                      <div className="theme-surface-strong rounded-2xl border p-4">
                        <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Rules / constraints</div>
                        <div className="mt-2 text-4xl font-semibold text-[var(--foreground)]">
                          {snapshot.knowledge.ruleCount}
                        </div>
                      </div>
                      <div className="theme-surface-strong rounded-2xl border p-4">
                        <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Wiki pages</div>
                        <div className="mt-2 text-4xl font-semibold text-[var(--foreground)]">
                          {snapshot.knowledge.wikiPageCount}
                        </div>
                      </div>
                    </div>
                  </SurfaceCard>

                  <SurfaceCard title="Structured outputs">
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Top entities</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {snapshot.knowledge.topEntities.map((entity) => (
                            <span key={entity} className="theme-chip rounded-full border px-3 py-1.5 text-sm text-[var(--foreground)]">
                              {entity}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Workflow + source packs</div>
                        <div className="mt-3 space-y-2">
                          {snapshot.knowledge.topWorkflows.map((workflow) => (
                            <div key={workflow} className="theme-surface-strong rounded-2xl border px-4 py-3 text-sm text-[var(--muted-strong)]">
                              {workflow}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Trusted source areas</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {snapshot.knowledge.trustedSources.map((source) => (
                            <span key={source} className="rounded-full border border-[var(--teal)]/30 bg-[var(--teal)]/10 px-3 py-1.5 text-sm text-[var(--teal)]">
                              {source}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SurfaceCard>
                </div>
              </div>
            </Section>

            <Section
              id="studio"
              eyebrow="Product Mockups"
              title="A single product surface for Measurement, Diagnosis, Action, and Proof"
              description="Every panel below is driven by the same data model the full platform uses internally. This seeded run shows a true pre-optimization baseline, which makes the diagnosis, action, and proof loop immediately legible."
            >
              <ProductStudio snapshot={snapshot} activeTab={activeTab} onTabChange={setActiveTab} />
            </Section>

            <Section
              id="monitoring"
              eyebrow="Monitoring"
              title="Crest AI keeps watch after the analysis is done"
              description="The platform is designed to keep tracking visibility drift, factual regressions, empty-retrieval failures, and experiment regressions over time instead of stopping at a one-time score."
            >
              <div className="grid gap-5 xl:grid-cols-[1fr,1fr]">
                <SurfaceCard title="Alert feed" accent="teal">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="theme-surface-strong rounded-2xl border p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Alerts</div>
                      <div className="mt-2 text-4xl font-semibold text-[var(--foreground)]">
                        {snapshot.monitoring.alertCount}
                      </div>
                    </div>
                    <div className="theme-surface-strong rounded-2xl border p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Metric points</div>
                      <div className="mt-2 text-4xl font-semibold text-[var(--foreground)]">
                        {snapshot.monitoring.metricCount}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {snapshot.monitoring.alerts.map((alert) => (
                      <div key={alert.title} className="theme-surface-soft rounded-2xl border p-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="theme-chip-strong rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                            {alert.severity}
                          </span>
                          <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                            {alert.alertType}
                          </span>
                        </div>
                        <div className="mt-3 text-lg font-semibold text-[var(--foreground)]">{alert.title}</div>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">{alert.description}</p>
                      </div>
                    ))}
                  </div>
                </SurfaceCard>

                <SurfaceCard title="What monitoring tracks">
                  <div className="grid gap-3 md:grid-cols-2">
                    {snapshot.monitoring.notes.map((note) => (
                      <div key={note} className="theme-surface-strong rounded-2xl border p-4 text-sm leading-6 text-[var(--muted-strong)]">
                        {note}
                      </div>
                    ))}
                  </div>
                </SurfaceCard>
              </div>
            </Section>

            <Section
              id="agents"
              eyebrow="Agents + Evidence Workspace"
              title="The same system feeds APIs, MCP tools, and a compiled markdown wiki"
              description="Crest AI is built so humans and downstream agents can work from the same evidence-backed layer. The compiled wiki becomes the readable memory of the business domain, while APIs and MCP expose the same capabilities programmatically."
            >
              <div className="grid gap-5 xl:grid-cols-[1fr,1fr]">
                <SurfaceCard title="Knowledge base construction">
                  <div className="theme-surface-strong rounded-2xl border p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">What happens first</div>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">
                      Crest AI first converts raw pages into a structured knowledge base with canonical entities, evidence-backed facts, workflows, trusted sources, and summaries. That knowledge layer becomes the foundation for grounded retrieval, diagnosis, agent context, and the compiled wiki.
                    </p>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="theme-surface-soft rounded-2xl border p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Knowledge pages</div>
                      <div className="mt-2 text-4xl font-semibold text-[var(--foreground)]">
                        {snapshot.wiki.pageCount}
                      </div>
                    </div>
                    <div className="theme-surface-soft rounded-2xl border p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">KB outputs</div>
                      <div className="mt-2 text-sm text-[var(--muted-strong)]">Entities, evidence, workflows, and agent-ready context</div>
                    </div>
                  </div>
                </SurfaceCard>

                <SurfaceCard title="Agent-facing surfaces" accent="teal">
                  <div className="grid gap-4 md:grid-cols-2">
                    {visibleSurfaces.map((surface) => (
                      <div key={surface.name} className="theme-surface-strong rounded-2xl border p-4">
                        <div className="text-base font-semibold text-[var(--foreground)]">{surface.name}</div>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">{surface.description}</p>
                      </div>
                    ))}
                  </div>
                </SurfaceCard>
              </div>
            </Section>

          </div>
        </div>
      </main>
    </div>
  );
}
