"use client";
import { Textarea } from "@/components/layout/TextArea";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

interface AIAnalysis {
  response: string;
}

const Capture = () => {
  const [rawIdea, setRawIdea] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFirstRequest, setIsFirstRequest] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rawIdea.trim()) return;

    setIsProcessing(true);
    setError(null);
    setAiAnalysis(null);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: rawIdea }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to analyze idea");
      }

      const data: AIAnalysis = await response.json();
      setAiAnalysis(data.response);
      setIsFirstRequest(false);
    } catch (err) {
      console.error("AI analysis error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to analyze your idea. Please try again."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setRawIdea("");
    setAiAnalysis(null);
    setError(null);
  };

  const canSubmit = rawIdea.trim().length > 20;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-xl font-medium text-foreground flex items-center gap-2">
            Capture an idea
            <Sparkles className="w-5 h-5 text-primary" />
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Write or paste your messy thoughts. AI will help you structure them.
          </p>
        </div>

        {!aiAnalysis ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="raw-idea"
                className="text-sm font-medium text-foreground"
              >
                Write down your thoughts
              </label>
              <Textarea
                id="raw-idea"
                placeholder="Dump everything here — half-baked thoughts, random notes, voice-to-text transcripts, bullet points, anything. The messier, the better. We'll help you make sense of it."
                value={rawIdea}
                onChange={(e) => setRawIdea(e.target.value)}
                className="min-h-[280px] text-base leading-relaxed"
                disabled={isProcessing}
              />
              <p className="text-xs text-muted-foreground">
                {rawIdea.length > 0 && rawIdea.length < 20
                  ? `Keep going... (${20 - rawIdea.length} more characters)`
                  : rawIdea.length > 0
                  ? `${rawIdea.length} characters`
                  : ""}
              </p>
            </div>

            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">
                    Analysis Failed
                  </p>
                  <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                    {error}
                  </p>
                </div>
              </div>
            )}

            <div className="pt-2">
              <Button
                type="submit"
                disabled={!canSubmit || isProcessing}
                className="w-full sm:w-auto"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                    Structuring your idea...
                  </span>
                ) : (
                  <>
                    Structure this idea
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>

            {isProcessing && isFirstRequest && (
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  ⏳ First analysis may take 20-60 seconds as the AI model warms
                  up. Subsequent requests will be much faster (3-10s).
                </p>
              </div>
            )}
          </form>
        ) : (
          <div className="space-y-6">
            {/* Original Input */}
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-muted-foreground">
                Your Original Idea
              </h2>
              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-foreground whitespace-pre-wrap">
                  {rawIdea}
                </p>
              </div>
            </div>

            {/* AI Analysis */}
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-foreground flex items-center gap-2">
                AI Business Analysis
                <Sparkles className="w-4 h-4 text-primary" />
              </h2>
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                    {aiAnalysis}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <Button
                onClick={handleReset}
                variant="outline"
                className="flex-1"
              >
                Analyze Another Idea
              </Button>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(aiAnalysis);
                }}
                variant="secondary"
                className="flex-1"
              >
                Copy Analysis
              </Button>
            </div>
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {aiAnalysis
              ? "Analysis powered by AI. Results are suggestions, not guarantees."
              : "Sharpine will analyze your input and generate: vision clarity, feasibility assessment, key risks, and an execution roadmap."}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Capture;
