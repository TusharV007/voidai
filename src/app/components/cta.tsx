import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center border-4 border-black p-16"
      >
        <h2 className="text-5xl md:text-7xl mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-2xl mx-auto">
          Join thousands of developers and data scientists building the future with AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-neutral-800 px-8 py-6 text-lg group"
          >
            Start Building Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg"
          >
            Contact Sales
          </Button>
        </div>
        <p className="mt-8 text-sm text-neutral-500">
          No credit card required • Free tier available
        </p>
      </motion.div>
    </section>
  );
}
