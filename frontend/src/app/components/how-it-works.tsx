import { motion } from "motion/react";
import { Upload, Settings, Cpu, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Data",
    description: "Simply drag and drop your dataset. We support CSV, JSON, and more.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure & Customize",
    description: "Use our intuitive interface to set parameters or let AI optimize for you.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Train Your Model",
    description: "Watch as our platform trains your model with state-of-the-art algorithms.",
  },
  {
    number: "04",
    icon: ArrowRight,
    title: "Deploy Instantly",
    description: "Push your model to production with one click and start making predictions.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6">How it works</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            From data to deployment in four simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step number */}
              <div className="text-7xl mb-8 opacity-20">{step.number}</div>
              
              {/* Icon */}
              <div className="mb-6">
                <step.icon className="w-12 h-12" />
              </div>

              {/* Content */}
              <h3 className="text-2xl mb-4">{step.title}</h3>
              <p className="text-neutral-400">{step.description}</p>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-[1px] bg-white/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
