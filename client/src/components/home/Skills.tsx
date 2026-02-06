import { motion } from "framer-motion";
import { Code2, Brain, Database, Cpu, Network, LineChart } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning",
    icon: <Brain className="w-8 h-8 text-primary" />,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "XGBoost", "Hugging Face"]
  },
  {
    title: "Computer Vision",
    icon: <Code2 className="w-8 h-8 text-purple-400" />,
    skills: ["OpenCV", "YOLO", "Segmentation", "Object Detection", "GANs", "3D Reconstruction"]
  },
  {
    title: "Data Engineering",
    icon: <Database className="w-8 h-8 text-blue-400" />,
    skills: ["SQL", "MongoDB", "Apache Spark", "Airflow", "Kafka", "Redis"]
  },
  {
    title: "Deployment & MLOps",
    icon: <Cpu className="w-8 h-8 text-green-400" />,
    skills: ["Docker", "Kubernetes", "AWS SageMaker", "FastAPI", "MLflow", "Terraform"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black/20">
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of tools and frameworks I use to build intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-white/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-60"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
