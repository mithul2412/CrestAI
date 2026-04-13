export type InvestorMetric = {
  label: string;
  value: string;
  detail: string;
};

export type LoopStep = {
  id: string;
  title: string;
  description: string;
};

export type SourceGroup = {
  label: string;
  description: string;
  examples: string[];
};

export type SourceDocument = {
  title: string;
  pageType: string;
  siteDomain: string;
  canonicalUri: string;
};

export type KnowledgeLayer = {
  name: string;
  description: string;
  outputs: string[];
};

export type ClusterSnapshot = {
  clusterName: string;
  intent: string;
  funnelStage: string;
  promptCount: number;
  shareOfVoice: number;
  citationRate: number;
  recommendationRate: number;
  inclusionRate: number;
  primarySourceShare: number;
  stabilityScore: number;
  topCompetitors: string[];
};

export type CompetitorSnapshot = {
  domain: string;
  shareOfVoice: number;
  citationShare: number;
  recommendationShare: number;
  inclusionShare: number;
  winCount: number;
  citedPageCount: number;
};

export type PageReference = {
  title: string;
  pageType: string;
  canonicalUri: string;
};

export type DiagnosisFindingSnapshot = {
  title: string;
  severity: string;
  description: string;
  promptCluster?: string | null;
  competitorDomain?: string | null;
  expectedImpact?: number | null;
  targetPageTitle?: string | null;
  evidenceNotes: string[];
};

export type FixRecommendationSnapshot = {
  title: string;
  recommendationType: string;
  priority: number;
  description: string;
  promptCluster?: string | null;
  expectedImpact?: number | null;
  targetPageTitle?: string | null;
  evidenceNotes: string[];
  patchTitle?: string | null;
  patchExcerpt?: string | null;
};

export type LiftMetricSnapshot = {
  metricName: string;
  baselineValue: number;
  variantValue: number;
  lift: number;
  decision: string;
  notes?: string | null;
};

export type AlertSnapshot = {
  title: string;
  severity: string;
  description: string;
  status: string;
  alertType: string;
};

export type ArchitectureModule = {
  name: string;
  owner: string;
  description: string;
  outcomes: string[];
};

export type SurfaceSnapshot = {
  name: string;
  description: string;
};

export type TechStackItem = {
  name: string;
  role: string;
};

export type InvestorDemoSnapshot = {
  generatedAt: string;
  brand: {
    productName: string;
    demoCompany: string;
    officialDomain: string;
    vertical: string;
    tagline: string;
  };
  overview: {
    headline: string;
    subheadline: string;
    narrative: string;
    heroMetrics: InvestorMetric[];
    loopSteps: LoopStep[];
  };
  ingestion: {
    sourceTypes: SourceGroup[];
    counts: {
      documents: number;
      chunks: number;
      officialPages: number;
      competitorPages: number;
    };
    topDocuments: SourceDocument[];
  };
  knowledge: {
    layers: KnowledgeLayer[];
    entityCount: number;
    workflowCount: number;
    ruleCount: number;
    wikiPageCount: number;
    topEntities: string[];
    topWorkflows: string[];
    trustedSources: string[];
  };
  measurement: {
    shareOfVoice: number;
    citationRate: number;
    recommendationRate: number;
    inclusionRate: number;
    primarySourceShare: number;
    answerStability: number;
    driftDelta: number;
    promptClusterCount: number;
    topCitedPages: PageReference[];
    clusters: ClusterSnapshot[];
    competitors: CompetitorSnapshot[];
  };
  diagnosis: {
    summary: string;
    missingPageTypes: string[];
    weakPromptClusters: string[];
    competitorAdvantages: string[];
    findings: DiagnosisFindingSnapshot[];
  };
  actions: {
    summary: string;
    recommendations: FixRecommendationSnapshot[];
  };
  experiments: {
    name: string;
    hypothesis: string;
    liftMetrics: LiftMetricSnapshot[];
  };
  monitoring: {
    alertCount: number;
    metricCount: number;
    alerts: AlertSnapshot[];
    notes: string[];
  };
  wiki: {
    pageCount: number;
    keyPages: string[];
    explanation: string;
  };
  architecture: {
    modules: ArchitectureModule[];
    surfaces: SurfaceSnapshot[];
    techStack: TechStackItem[];
  };
};
