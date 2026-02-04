import { Brain, Zap, Shield, BarChart3, Code2, Rocket } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Builder",
    description: "Leverage cutting-edge AI to automatically configure and optimize your ML models.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Train models in minutes, not hours. Our optimized infrastructure ensures maximum speed.",
  },
  {
    icon: Code2,
    title: "Zero Code",
    description: "Build sophisticated ML models with an intuitive drag-and-drop interface.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor your model's performance with comprehensive dashboards and insights.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with industry standards.",
  },
  {
    icon: Rocket,
    title: "One-Click Deploy",
    description: "Deploy your trained models to production with a single click.",
  },
];

export function Features() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6">Everything you need</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            All the tools and features to build, train, and deploy machine learning models at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-black hover:bg-black hover:text-white transition-colors duration-300 group"
            >
              <feature.icon className="w-12 h-12 mb-6" />
              <h3 className="text-2xl mb-4">{feature.title}</h3>
              <p className="text-neutral-600 group-hover:text-neutral-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
