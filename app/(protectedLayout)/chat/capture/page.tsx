"use client";
import { Textarea } from "@/components/layout/TextArea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Capture = () => {
  const [rawIdea, setRawIdea] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rawIdea.trim()) return;

    setIsProcessing(true);

    // Simulate processing delay for MVP
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  const canSubmit = rawIdea.trim().length > 20;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-xl font-medium text-foreground">
            Capture an idea
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Write or paste your messy thoughts. We&apos;ll help you structure
            them.
          </p>
        </div>

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
            />
            <p className="text-xs text-muted-foreground">
              {rawIdea.length > 0 && rawIdea.length < 20
                ? `Keep going... (${20 - rawIdea.length} more characters)`
                : rawIdea.length > 0
                ? `${rawIdea.length} characters`
                : ""}
            </p>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={!canSubmit || isProcessing}
              className="w-full sm:w-auto"
            >
              {isProcessing ? (
                "Structuring your idea..."
              ) : (
                <>
                  Structure this idea
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Sharpine will analyze your input and generate: vision clarity,
            feasibility assessment, key risks, and an execution roadmap.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Capture;
