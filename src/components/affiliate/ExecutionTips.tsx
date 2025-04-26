
import { Card, CardContent } from "@/components/ui/card";

const ExecutionTips = () => {
  const tips = [
    "Post in affiliate groups + private channels",
    "Use your voice — reels, video stories, even threads",
    "Share the truth — the system speaks for itself"
  ];

  return (
    <section className="py-16 px-4 bg-insiderDark-light">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Execution Tips</h2>
        <Card className="glass-card">
          <CardContent className="p-6">
            <ul className="space-y-4">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-insiderPurple">•</span>
                  <span className="text-white/90">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExecutionTips;
