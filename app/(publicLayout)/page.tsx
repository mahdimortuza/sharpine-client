import { Button } from "@/components/ui/button";
import { AlertTriangle, Lightbulb, Route, Zap } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Capture ideas in one place",
    description: "Dump your messy thoughts without worrying about structure.",
  },
  {
    icon: Route,
    title: "Get a structured roadmap instantly",
    description: "AI transforms chaos into clear vision and execution steps.",
  },
  {
    icon: AlertTriangle,
    title: "See risks before you invest time",
    description: "Identify assumptions and potential blockers upfront.",
  },
  {
    icon: Zap,
    title: "Think faster, not fancier",
    description: "Built for speed and clarity. No fluff, no distractions.",
  },
];

const HomePage = () => {
  return (
    <div className=" bg-background">
      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6">
        <section className="py-20 md:py-28">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight max-w-2xl">
            Capture your ideas.
            <br />
            Structure your vision.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Turn messy thoughts into a clear roadmap with risks, ROI, and
            execution plans — instantly.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
            <Button className="w-full sm:w-auto">Sign in with Google</Button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            No passwords. Secure. Instant access.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="py-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
