import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

// Mock structured output for demo
const mockStructuredIdea = {
  vision: {
    title: "Clear Vision",
    content:
      "A focused tool that helps founders transform chaotic, unstructured ideas into actionable business concepts with clear next steps.",
  },
  feasibility: {
    title: "Feasibility & ROI",
    content:
      "High technical feasibility using existing LLM APIs. Low initial investment required. Potential for strong unit economics with subscription model. Target market: early-stage founders and indie hackers (est. 500K+ globally).",
  },
  risks: {
    title: "Risks & Assumptions",
    items: [
      "Assumption: Founders struggle with idea clarity (validate with interviews)",
      "Risk: Output quality depends heavily on LLM capabilities",
      "Risk: Differentiation from general-purpose AI tools like ChatGPT",
      "Unknown: Willingness to pay for structured thinking vs free tools",
    ],
  },
  roadmap: {
    title: "Execution Roadmap",
    phases: [
      {
        phase: "Week 1-2",
        tasks:
          "Core capture UI, basic LLM integration, manual testing with 5 founders",
      },
      {
        phase: "Week 3-4",
        tasks:
          "Refine prompts based on feedback, add idea history, simple auth",
      },
      {
        phase: "Month 2",
        tasks: "Beta launch, collect feedback, iterate on output quality",
      },
    ],
  },
};

const IdeaDetail = () => {
  const isNew = "new";
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to ideas
          </Link>
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-xl font-medium text-foreground">
              AI-powered customer support triage
            </h1>
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4" />
              Re-structure
            </Button>
          </div>
          {isNew && (
            <p className="text-sm text-muted-foreground mt-2">
              ✓ Idea structured successfully
            </p>
          )}
        </div>

        <div className="space-y-8">
          {/* Vision */}
          <section className="space-y-3">
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">
              {mockStructuredIdea.vision.title}
            </h2>
            <p className="text-foreground leading-relaxed">
              {mockStructuredIdea.vision.content}
            </p>
          </section>

          {/* Feasibility */}
          <section className="space-y-3">
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">
              {mockStructuredIdea.feasibility.title}
            </h2>
            <p className="text-foreground leading-relaxed">
              {mockStructuredIdea.feasibility.content}
            </p>
          </section>

          {/* Risks */}
          <section className="space-y-3">
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">
              {mockStructuredIdea.risks.title}
            </h2>
            <ul className="space-y-2">
              {mockStructuredIdea.risks.items.map((item, i) => (
                <li
                  key={i}
                  className="text-foreground leading-relaxed pl-4 border-l-2 border-border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Roadmap */}
          <section className="space-y-3">
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">
              {mockStructuredIdea.roadmap.title}
            </h2>
            <div className="space-y-4">
              {mockStructuredIdea.roadmap.phases.map((phase, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-sm font-medium text-muted-foreground w-20 shrink-0">
                    {phase.phase}
                  </span>
                  <p className="text-foreground leading-relaxed">
                    {phase.tasks}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            This analysis is AI-generated. Use it as a starting point, not a
            final answer.
          </p>
        </div>
      </main>
    </div>
  );
};

export default IdeaDetail;
