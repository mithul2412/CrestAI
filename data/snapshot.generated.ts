import type { InvestorDemoSnapshot } from "./schema";

export const investorDemoSnapshot = {
  "generatedAt": "2026-04-13T03:07:18.689592+00:00",
  "brand": {
    "productName": "Crest AI",
    "demoCompany": "HelioDesk",
    "officialDomain": "www.heliodesk.ai",
    "vertical": "B2B SaaS / AI customer support",
    "tagline": "The operating system for understanding, improving, and proving AI visibility."
  },
  "overview": {
    "headline": "AEO optimization with a real knowledge layer behind it.",
    "subheadline": "Crest AI gives teams a pre-content optimization layer before pages are published or refreshed: it ingests a company site, compiles a machine-readable knowledge base, measures AI visibility, diagnoses root causes, generates fixes, and proves lift through staged experiments.",
    "narrative": "This walkthrough uses the real HelioDesk pre-optimization baseline. Crest AI benchmarks HelioDesk against Resolveflow and SupportPilot, then turns the results into grounded diagnosis, prioritized action, and experiment-backed proof before changes are pushed live.",
    "heroMetrics": [
      {
        "label": "Documents analyzed",
        "value": "11",
        "detail": "Official and competitor pages compiled into one knowledge layer"
      },
      {
        "label": "Primary source share",
        "value": "55.6%",
        "detail": "How often the official domain is the source behind the answer"
      },
      {
        "label": "Fix recommendations",
        "value": "9",
        "detail": "Grounded remediations ranked by likely impact"
      },
      {
        "label": "Estimated lift",
        "value": "+3.1 pts",
        "detail": "Staged experiment lift from the top remediation set"
      }
    ],
    "loopSteps": [
      {
        "id": "01",
        "title": "Ingest",
        "description": "Crawl and normalize company and competitor pages, docs, pricing, FAQ, trust, and use-case content."
      },
      {
        "id": "02",
        "title": "Understand",
        "description": "Convert pages into chunks, entities, workflows, trust signals, and evidence-backed facts."
      },
      {
        "id": "03",
        "title": "Measure",
        "description": "Run prompt clusters to capture inclusion, citations, recommendations, and primary-source share."
      },
      {
        "id": "04",
        "title": "Diagnose",
        "description": "Trace weak performance back to missing assets, extractability issues, and competitor wins."
      },
      {
        "id": "05",
        "title": "Recommend",
        "description": "Generate ranked fix plans, schema suggestions, FAQ blocks, and page-level content patches."
      },
      {
        "id": "06",
        "title": "Experiment",
        "description": "Stage variants and estimate lift before publishing changes into the outside world."
      },
      {
        "id": "07",
        "title": "Monitor",
        "description": "Track alerts, drift, factual risk, and regression signals over time."
      },
      {
        "id": "08",
        "title": "Improve",
        "description": "File the outputs back into a compiled wiki and structured KB so the next run starts smarter."
      }
    ]
  },
  "ingestion": {
    "sourceTypes": [
      {
        "label": "Company site pages",
        "description": "Homepage, pricing, docs, FAQ, trust, and use-case content from the official HelioDesk domain.",
        "examples": [
          "Heliodesk Docs Ai Agent Routing Setup",
          "Heliodesk Faq",
          "Heliodesk Ai Customer Support Platform"
        ]
      },
      {
        "label": "Competitor pages",
        "description": "Resolveflow and SupportPilot pages used to benchmark share of voice, citations, and page-type strengths.",
        "examples": [
          "Resolveflow Vs Heliodesk",
          "Resolveflow Ai Support Platform",
          "Supportpilot Ai For Customer Support"
        ]
      },
      {
        "label": "Prompt suite coverage",
        "description": "Awareness, pricing, comparison, trust, use-case, and implementation prompts that emulate buyer journeys.",
        "examples": [
          "category discovery",
          "pricing and ROI",
          "comparison buying"
        ]
      },
      {
        "label": "Evidence artifacts",
        "description": "Compiled wiki pages, chunk citations, and experiment reports that let teams audit every recommendation.",
        "examples": [
          "analysis/visibility.md",
          "analysis/diagnosis.md",
          "analysis/experiments.md"
        ]
      }
    ],
    "counts": {
      "documents": 11,
      "chunks": 35,
      "officialPages": 6,
      "competitorPages": 5
    },
    "topDocuments": [
      {
        "title": "Heliodesk Docs Ai Agent Routing Setup",
        "pageType": "docs",
        "siteDomain": "docs.heliodesk.ai",
        "canonicalUri": "https://docs.heliodesk.ai/agent-routing"
      },
      {
        "title": "Heliodesk Faq",
        "pageType": "faq",
        "siteDomain": "www.heliodesk.ai",
        "canonicalUri": "https://www.heliodesk.ai/faq"
      },
      {
        "title": "Heliodesk Ai Customer Support Platform",
        "pageType": "homepage",
        "siteDomain": "www.heliodesk.ai",
        "canonicalUri": "https://www.heliodesk.ai/"
      },
      {
        "title": "Heliodesk Pricing",
        "pageType": "pricing",
        "siteDomain": "www.heliodesk.ai",
        "canonicalUri": "https://www.heliodesk.ai/pricing"
      },
      {
        "title": "Resolveflow Vs Heliodesk",
        "pageType": "comparison",
        "siteDomain": "www.resolveflow.ai",
        "canonicalUri": "https://www.resolveflow.ai/compare/heliodesk"
      },
      {
        "title": "Resolveflow Ai Support Platform",
        "pageType": "homepage",
        "siteDomain": "www.resolveflow.ai",
        "canonicalUri": "https://www.resolveflow.ai/"
      }
    ]
  },
  "knowledge": {
    "layers": [
      {
        "name": "Raw source layer",
        "description": "Immutable company and competitor content is stored with stable IDs, timestamps, raw artifacts, and provenance.",
        "outputs": [
          "raw files",
          "URLs",
          "content hashes",
          "crawl metadata"
        ]
      },
      {
        "name": "Normalized document layer",
        "description": "Pages are cleaned, sectioned, chunked, classified by page type, and enriched with schema and extractability signals.",
        "outputs": [
          "chunks",
          "headings",
          "page types",
          "schema signals"
        ]
      },
      {
        "name": "Structured knowledge layer",
        "description": "The system builds entities, workflows, trusted-source packs, summaries, and evidence-backed objects that downstream agents can use directly.",
        "outputs": [
          "entities",
          "workflows",
          "summaries",
          "context bundles"
        ]
      }
    ],
    "entityCount": 21,
    "workflowCount": 1,
    "ruleCount": 0,
    "wikiPageCount": 55,
    "topEntities": [
      "HelioDesk",
      "ResolveFlow",
      "SupportPilot",
      "advanced analytics"
    ],
    "topWorkflows": [
      "Heliodesk Docs Ai Agent Routing Setup"
    ],
    "trustedSources": [
      "Heliodesk Docs Ai Agent Routing Setup",
      "Heliodesk For Ecommerce Support",
      "Heliodesk Faq",
      "Heliodesk Ai Customer Support Platform",
      "Heliodesk Pricing"
    ]
  },
  "measurement": {
    "shareOfVoice": 0.0,
    "citationRate": 0.0,
    "recommendationRate": 0.0,
    "inclusionRate": 0.0,
    "primarySourceShare": 0.5556,
    "answerStability": 1.0,
    "driftDelta": 0.0,
    "promptClusterCount": 6,
    "topCitedPages": [
      {
        "title": "Heliodesk Ai Customer Support Platform",
        "pageType": "homepage",
        "canonicalUri": "https://www.heliodesk.ai/"
      },
      {
        "title": "Resolveflow Ai Support Platform",
        "pageType": "homepage",
        "canonicalUri": "https://www.resolveflow.ai/"
      },
      {
        "title": "Resolveflow Pricing",
        "pageType": "pricing",
        "canonicalUri": "https://www.resolveflow.ai/pricing"
      },
      {
        "title": "Heliodesk For Ecommerce Support",
        "pageType": "use_case",
        "canonicalUri": "https://www.heliodesk.ai/solutions/ecommerce-support"
      }
    ],
    "clusters": [
      {
        "clusterName": "category_discovery",
        "intent": "category",
        "funnelStage": "awareness",
        "promptCount": 2,
        "shareOfVoice": 0.0,
        "citationRate": 0.0,
        "recommendationRate": 0.0,
        "inclusionRate": 0.0,
        "primarySourceShare": 0.7,
        "stabilityScore": 1.0,
        "topCompetitors": [
          "resolveflow.ai"
        ]
      },
      {
        "clusterName": "pricing_and_roi",
        "intent": "pricing",
        "funnelStage": "consideration",
        "promptCount": 2,
        "shareOfVoice": 0.0,
        "citationRate": 0.0,
        "recommendationRate": 0.0,
        "inclusionRate": 0.0,
        "primarySourceShare": 0.5,
        "stabilityScore": 1.0,
        "topCompetitors": [
          "resolveflow.ai",
          "supportpilot.ai"
        ]
      },
      {
        "clusterName": "comparison_buying",
        "intent": "comparison",
        "funnelStage": "decision",
        "promptCount": 2,
        "shareOfVoice": 0.0,
        "citationRate": 0.0,
        "recommendationRate": 0.0,
        "inclusionRate": 0.0,
        "primarySourceShare": 0.3,
        "stabilityScore": 1.0,
        "topCompetitors": [
          "resolveflow.ai"
        ]
      },
      {
        "clusterName": "security_and_trust",
        "intent": "trust",
        "funnelStage": "consideration",
        "promptCount": 1,
        "shareOfVoice": 0.0,
        "citationRate": 0.0,
        "recommendationRate": 0.0,
        "inclusionRate": 0.0,
        "primarySourceShare": 0.4,
        "stabilityScore": 1.0,
        "topCompetitors": [
          "supportpilot.ai",
          "resolveflow.ai"
        ]
      },
      {
        "clusterName": "ecommerce_use_case",
        "intent": "use_case",
        "funnelStage": "consideration",
        "promptCount": 1,
        "shareOfVoice": 0.0,
        "citationRate": 0.0,
        "recommendationRate": 0.0,
        "inclusionRate": 0.0,
        "primarySourceShare": 0.6,
        "stabilityScore": 1.0,
        "topCompetitors": [
          "supportpilot.ai",
          "resolveflow.ai"
        ]
      },
      {
        "clusterName": "implementation_docs",
        "intent": "how_to",
        "funnelStage": "decision",
        "promptCount": 1,
        "shareOfVoice": 0.0,
        "citationRate": 0.0,
        "recommendationRate": 0.0,
        "inclusionRate": 0.0,
        "primarySourceShare": 1.0,
        "stabilityScore": 1.0,
        "topCompetitors": []
      }
    ],
    "competitors": [
      {
        "domain": "resolveflow.ai",
        "shareOfVoice": 0.675,
        "citationShare": 0.8888888888888888,
        "recommendationShare": 0.8888888888888888,
        "inclusionShare": 0.8888888888888888,
        "winCount": 8,
        "citedPageCount": 8
      },
      {
        "domain": "supportpilot.ai",
        "shareOfVoice": 0.55,
        "citationShare": 0.4444444444444444,
        "recommendationShare": 0.4444444444444444,
        "inclusionShare": 0.4444444444444444,
        "winCount": 4,
        "citedPageCount": 4
      }
    ]
  },
  "diagnosis": {
    "summary": "Missing page types: comparison Weak prompt clusters: category_discovery, pricing_and_roi, comparison_buying, security_and_trust Competitor advantages: resolveflow.ai wins 8 prompt cases and leads on share of voice. | supportpilot.ai wins 4 prompt cases and leads on share of voice.",
    "missingPageTypes": [
      "comparison"
    ],
    "weakPromptClusters": [
      "category_discovery",
      "pricing_and_roi",
      "comparison_buying",
      "security_and_trust",
      "ecommerce_use_case",
      "implementation_docs"
    ],
    "competitorAdvantages": [
      "resolveflow.ai wins 8 prompt cases and leads on share of voice.",
      "supportpilot.ai wins 4 prompt cases and leads on share of voice."
    ],
    "findings": [
      {
        "title": "Missing comparison coverage",
        "severity": "high",
        "description": "The official domain does not currently expose a clear comparison page, which limits inclusion and citation coverage for related prompt clusters.",
        "promptCluster": "comparison",
        "competitorDomain": null,
        "expectedImpact": 0.12,
        "targetPageTitle": null,
        "evidenceNotes": [
          "No official comparison page was found."
        ]
      },
      {
        "title": "Add schema markup to Heliodesk Faq",
        "severity": "medium",
        "description": "Heliodesk Faq is citation-relevant but lacks schema/JSON-LD signals, which reduces machine readability.",
        "promptCluster": "faq",
        "competitorDomain": null,
        "expectedImpact": 0.08,
        "targetPageTitle": "Heliodesk Faq",
        "evidenceNotes": [
          "Page type faq is missing schema markup."
        ]
      },
      {
        "title": "Add schema markup to Heliodesk Pricing",
        "severity": "medium",
        "description": "Heliodesk Pricing is citation-relevant but lacks schema/JSON-LD signals, which reduces machine readability.",
        "promptCluster": "pricing",
        "competitorDomain": null,
        "expectedImpact": 0.08,
        "targetPageTitle": "Heliodesk Pricing",
        "evidenceNotes": [
          "Page type pricing is missing schema markup."
        ]
      },
      {
        "title": "Weak performance in category_discovery",
        "severity": "high",
        "description": "The category_discovery cluster underperforms on share of voice and citation rate. Competitors are more extractable or better matched to these prompts.",
        "promptCluster": "category_discovery",
        "competitorDomain": "resolveflow.ai",
        "expectedImpact": 0.1,
        "targetPageTitle": null,
        "evidenceNotes": [
          "Share of voice: 0.00",
          "Citation rate: 0.00",
          "Top competitors: resolveflow.ai"
        ]
      },
      {
        "title": "Weak performance in pricing_and_roi",
        "severity": "high",
        "description": "The pricing_and_roi cluster underperforms on share of voice and citation rate. Competitors are more extractable or better matched to these prompts.",
        "promptCluster": "pricing_and_roi",
        "competitorDomain": "resolveflow.ai",
        "expectedImpact": 0.1,
        "targetPageTitle": null,
        "evidenceNotes": [
          "Share of voice: 0.00",
          "Citation rate: 0.00",
          "Top competitors: resolveflow.ai, supportpilot.ai"
        ]
      },
      {
        "title": "Weak performance in comparison_buying",
        "severity": "high",
        "description": "The comparison_buying cluster underperforms on share of voice and citation rate. Competitors are more extractable or better matched to these prompts.",
        "promptCluster": "comparison_buying",
        "competitorDomain": "resolveflow.ai",
        "expectedImpact": 0.1,
        "targetPageTitle": null,
        "evidenceNotes": [
          "Share of voice: 0.00",
          "Citation rate: 0.00",
          "Top competitors: resolveflow.ai"
        ]
      },
      {
        "title": "Weak performance in security_and_trust",
        "severity": "high",
        "description": "The security_and_trust cluster underperforms on share of voice and citation rate. Competitors are more extractable or better matched to these prompts.",
        "promptCluster": "security_and_trust",
        "competitorDomain": "supportpilot.ai",
        "expectedImpact": 0.1,
        "targetPageTitle": null,
        "evidenceNotes": [
          "Share of voice: 0.00",
          "Citation rate: 0.00",
          "Top competitors: supportpilot.ai, resolveflow.ai"
        ]
      },
      {
        "title": "Weak performance in ecommerce_use_case",
        "severity": "high",
        "description": "The ecommerce_use_case cluster underperforms on share of voice and citation rate. Competitors are more extractable or better matched to these prompts.",
        "promptCluster": "ecommerce_use_case",
        "competitorDomain": "supportpilot.ai",
        "expectedImpact": 0.1,
        "targetPageTitle": null,
        "evidenceNotes": [
          "Share of voice: 0.00",
          "Citation rate: 0.00",
          "Top competitors: supportpilot.ai, resolveflow.ai"
        ]
      },
      {
        "title": "Weak performance in implementation_docs",
        "severity": "high",
        "description": "The implementation_docs cluster underperforms on share of voice and citation rate. Competitors are more extractable or better matched to these prompts.",
        "promptCluster": "implementation_docs",
        "competitorDomain": null,
        "expectedImpact": 0.1,
        "targetPageTitle": null,
        "evidenceNotes": [
          "Share of voice: 0.00",
          "Citation rate: 0.00",
          "Top competitors: n/a"
        ]
      }
    ]
  },
  "actions": {
    "summary": "1. Create comparison content 2. Improve coverage for category_discovery 3. Improve coverage for comparison_buying 4. Improve coverage for ecommerce_use_case 5. Improve coverage for implementation_docs 6. Improve coverage for pricing_and_roi",
    "recommendations": [
      {
        "title": "Create comparison content",
        "recommendationType": "create_page",
        "priority": 1,
        "description": "Ship a dedicated comparison asset with direct answers, citations, and structured sections.",
        "promptCluster": "comparison",
        "expectedImpact": 0.12,
        "targetPageTitle": null,
        "evidenceNotes": [
          "No official comparison page was found."
        ],
        "patchTitle": "Comparison Page Brief",
        "patchExcerpt": "# Comparison Brief\n\n## Direct Answer\nState who the page is for, what outcome it delivers, and why it is differentiated.\n\n## Proof\nAdd customer outcome metrics, trust signals, and citations.\n\n## FAQ\nAnswer 4-6 short, literal buyer questions in scannable form."
      },
      {
        "title": "Improve coverage for category_discovery",
        "recommendationType": "expand_cluster_coverage",
        "priority": 2,
        "description": "Create content blocks that map more directly to weak prompt clusters and competitor-winning themes.",
        "promptCluster": "category_discovery",
        "expectedImpact": 0.1,
        "targetPageTitle": null,
        "evidenceNotes": [
          "Share of voice: 0.00",
          "Citation rate: 0.00",
          "Top competitors: resolveflow.ai"
        ],
        "patchTitle": "Cluster Coverage Patch",
        "patchExcerpt": "## New Section\nAdd a short comparison/proof/FAQ block tied to the underperforming prompt cluster.\n\n## Evidence\nGround claims in customer results, integrations, trust signals, or specific feature details."
      },
      {
        "title": "Improve coverage for comparison_buying",
        "recommendationType": "expand_cluster_coverage",
        "priority": 3,
        "description": "Create content blocks that map more directly to weak prompt clusters and competitor-winning themes.",
        "promptCluster": "comparison_buying",
        "expectedImpact": 0.1,
        "targetPageTitle": null,
        "evidenceNotes": [
          "Share of voice: 0.00",
          "Citation rate: 0.00",
          "Top competitors: resolveflow.ai"
        ],
        "patchTitle": "Cluster Coverage Patch",
        "patchExcerpt": "## New Section\nAdd a short comparison/proof/FAQ block tied to the underperforming prompt cluster.\n\n## Evidence\nGround claims in customer results, integrations, trust signals, or specific feature details."
      },
      {
        "title": "Improve coverage for ecommerce_use_case",
        "recommendationType": "expand_cluster_coverage",
        "priority": 4,
        "description": "Create content blocks that map more directly to weak prompt clusters and competitor-winning themes.",
        "promptCluster": "ecommerce_use_case",
        "expectedImpact": 0.1,
        "targetPageTitle": null,
        "evidenceNotes": [
          "Share of voice: 0.00",
          "Citation rate: 0.00",
          "Top competitors: supportpilot.ai, resolveflow.ai"
        ],
        "patchTitle": "Cluster Coverage Patch",
        "patchExcerpt": "## New Section\nAdd a short comparison/proof/FAQ block tied to the underperforming prompt cluster.\n\n## Evidence\nGround claims in customer results, integrations, trust signals, or specific feature details."
      },
      {
        "title": "Improve coverage for implementation_docs",
        "recommendationType": "expand_cluster_coverage",
        "priority": 5,
        "description": "Create content blocks that map more directly to weak prompt clusters and competitor-winning themes.",
        "promptCluster": "implementation_docs",
        "expectedImpact": 0.1,
        "targetPageTitle": null,
        "evidenceNotes": [
          "Share of voice: 0.00",
          "Citation rate: 0.00",
          "Top competitors: n/a"
        ],
        "patchTitle": "Cluster Coverage Patch",
        "patchExcerpt": "## New Section\nAdd a short comparison/proof/FAQ block tied to the underperforming prompt cluster.\n\n## Evidence\nGround claims in customer results, integrations, trust signals, or specific feature details."
      },
      {
        "title": "Improve coverage for pricing_and_roi",
        "recommendationType": "expand_cluster_coverage",
        "priority": 6,
        "description": "Create content blocks that map more directly to weak prompt clusters and competitor-winning themes.",
        "promptCluster": "pricing_and_roi",
        "expectedImpact": 0.1,
        "targetPageTitle": null,
        "evidenceNotes": [
          "Share of voice: 0.00",
          "Citation rate: 0.00",
          "Top competitors: resolveflow.ai, supportpilot.ai"
        ],
        "patchTitle": "Cluster Coverage Patch",
        "patchExcerpt": "## New Section\nAdd a short comparison/proof/FAQ block tied to the underperforming prompt cluster.\n\n## Evidence\nGround claims in customer results, integrations, trust signals, or specific feature details."
      }
    ]
  },
  "experiments": {
    "name": "AEO Demo Experiment",
    "hypothesis": "Applying the highest-priority HelioDesk fixes should improve visibility metrics.",
    "liftMetrics": [
      {
        "metricName": "share_of_voice",
        "baselineValue": 0.0,
        "variantValue": 0.0312,
        "lift": 0.0312,
        "decision": "accept",
        "notes": "Offline/staged simulation using recommendation-weighted lift."
      },
      {
        "metricName": "citation_rate",
        "baselineValue": 0.0,
        "variantValue": 0.026000000000000002,
        "lift": 0.026000000000000002,
        "decision": "accept",
        "notes": "Offline/staged simulation using recommendation-weighted lift."
      },
      {
        "metricName": "recommendation_rate",
        "baselineValue": 0.0,
        "variantValue": 0.0172,
        "lift": 0.0172,
        "decision": "accept",
        "notes": "Offline/staged simulation using recommendation-weighted lift."
      },
      {
        "metricName": "primary_source_share",
        "baselineValue": 0.5556,
        "variantValue": 0.5784,
        "lift": 0.022800000000000042,
        "decision": "accept",
        "notes": "Offline/staged simulation using recommendation-weighted lift."
      }
    ]
  },
  "monitoring": {
    "alertCount": 3,
    "metricCount": 50,
    "alerts": [
      {
        "title": "Share of voice is below target",
        "severity": "high",
        "description": "The latest AI visibility run is under the expected share-of-voice threshold.",
        "status": "open",
        "alertType": "share_of_voice_drop"
      },
      {
        "title": "Citation rate is weak",
        "severity": "medium",
        "description": "The official domain is being included without citations too often.",
        "status": "open",
        "alertType": "low_citation_rate"
      },
      {
        "title": "Contradictions detected in the knowledge layer",
        "severity": "medium",
        "description": "Open contradiction records are present and may affect answer quality.",
        "status": "open",
        "alertType": "factual_conflict"
      }
    ],
    "notes": [
      "Visibility metrics were recorded from the latest prompt-eval run.",
      "Latest experiment metrics were reviewed for regressions.",
      "Prompt evaluation runs retain answer stability and official-vs-third-party citation information.",
      "Experiment outcomes are preserved for future preference optimization and model tuning."
    ]
  },
  "wiki": {
    "pageCount": 55,
    "keyPages": [
      "README.md",
      "analysis/diagnosis.md",
      "analysis/experiments.md",
      "analysis/fix-plans.md",
      "analysis/visibility.md",
      "index.md"
    ],
    "explanation": "Every run compiles a markdown workspace with analysis pages, evidence links, entity pages, and experiment summaries so operators and downstream agents can work from the same persistent memory layer."
  },
  "architecture": {
    "modules": [
      {
        "name": "FastAPI application layer",
        "owner": "apps/api",
        "description": "Versioned APIs expose ingestion, presentation, AEO measurement, diagnosis, optimization, experiments, monitoring, and wiki retrieval.",
        "outcomes": [
          "dashboard routes",
          "scorecards",
          "diagnosis APIs",
          "fix plan APIs"
        ]
      },
      {
        "name": "Knowledge and retrieval core",
        "owner": "packages/platform_core",
        "description": "SQLite-backed canonical knowledge objects, Qdrant dense retrieval, FTS5 sparse retrieval, evidence mapping, and structured summaries power the platform.",
        "outcomes": [
          "entities",
          "workflows",
          "hybrid retrieval",
          "source-backed answers"
        ]
      },
      {
        "name": "AEO intelligence services",
        "owner": "measurement / diagnosis / optimization / experiments",
        "description": "Prompt evaluations produce visibility metrics, grounded diagnosis, ranked remediations, and before/after lift reports.",
        "outcomes": [
          "share of voice",
          "root cause findings",
          "patch drafts",
          "experiment lift"
        ]
      },
      {
        "name": "LangGraph-compatible orchestration",
        "owner": "graphs/supervisor.py",
        "description": "A durable multi-agent supervisor coordinates ingestion, knowledge construction, evaluation, diagnosis, and optimization while preserving typed state.",
        "outcomes": [
          "durable state",
          "human review points",
          "multi-step automation"
        ]
      },
      {
        "name": "Compiled markdown wiki",
        "owner": "wiki service",
        "description": "Every run compiles a human-readable evidence workspace with analysis pages, source summaries, entity pages, and experiment artifacts.",
        "outcomes": [
          "Obsidian-friendly wiki",
          "agent-readable knowledge",
          "persistent memory layer"
        ]
      }
    ],
    "surfaces": [
      {
        "name": "Business-facing product UI",
        "description": "The live multi-page app shows scorecards, competitors, diagnosis, actions, monitoring, and grounded search."
      },
      {
        "name": "MCP tool layer",
        "description": "Agents can ingest domains, search knowledge, run evaluations, generate fix plans, and inspect observability through MCP tools."
      },
      {
        "name": "Compiled wiki",
        "description": "A persistent markdown workspace gives operators and agents a shared evidence-backed view of the domain."
      }
    ],
    "techStack": [
      {
        "name": "FastAPI",
        "role": "Backend APIs and orchestration entrypoints"
      },
      {
        "name": "SQLite + FTS5",
        "role": "Local system of record and sparse retrieval"
      },
      {
        "name": "Qdrant",
        "role": "Dense vector retrieval and semantic recall"
      },
      {
        "name": "LangGraph",
        "role": "Durable multi-agent workflow orchestration"
      },
      {
        "name": "Next.js",
        "role": "Business UI and static investor demo surface"
      },
      {
        "name": "OpenTelemetry",
        "role": "Tracing, metrics, and observability hooks"
      },
      {
        "name": "Pydantic",
        "role": "Typed contracts across APIs, workers, and services"
      },
      {
        "name": "Local object storage",
        "role": "Raw artifact persistence for repeatable demos"
      }
    ]
  }
} satisfies InvestorDemoSnapshot;
