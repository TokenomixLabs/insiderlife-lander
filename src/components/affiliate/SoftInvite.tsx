
import { Button } from "@/components/ui/button";

const SoftInvite = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-gradient">🔓 Ready for the Next Layer?</h2>
        <p className="text-xl text-white/80 mb-8 leading-relaxed">
          There's a private community forming — where contributors are building the next evolution of digital distribution.
          <br /><br />
          It's called <span className="font-bold">InsiderDAO</span> — and this is your invitation.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-insiderPurple to-insiderBlue hover:from-insiderPurple-light hover:to-insiderBlue-light text-white"
        >
          Enter InsiderDAO
        </Button>
      </div>
    </section>
  );
};

export default SoftInvite;
