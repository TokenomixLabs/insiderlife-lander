
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const SwipeSection = () => {
  const swipes = [
    {
      title: "Social Post",
      content: `AI + Instant Pay.
Viral funnel. High-converting.
The system is live — and it's fire.
👉 [Insert your link]`
    },
    {
      title: "Email Swipe",
      content: `Subject: The Game Just Changed

If you've been waiting for an offer that's actually different… this is it.
Instant payouts. Pre-built funnel.
AI + automation at the core.
👉 [Insert your link]`
    },
    {
      title: "Short Form Thread",
      content: `Most systems talk.
This one executes.
🔥 Instant pay
🔥 Funnel done
🔥 Tribe forming
Your move → [Insert your link]`
    }
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  return (
    <section className="py-16 px-4 bg-insiderDark-light">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Copy + Paste Swipes</h2>
        <div className="grid gap-6">
          {swipes.map((swipe, index) => (
            <Card key={index} className="glass-card overflow-hidden">
              <CardHeader>
                <CardTitle className="text-white">{swipe.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap text-white/90 font-sans mb-4">
                  {swipe.content}
                </pre>
                <Button
                  onClick={() => copyToClipboard(swipe.content, swipe.title)}
                  variant="secondary"
                  className="w-full"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy {swipe.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SwipeSection;
