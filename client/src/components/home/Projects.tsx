import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Neural Vision Interface",
    description: "Real-time object detection and segmentation system for autonomous navigation systems using YOLOv8 and TensorRT.",
    tags: ["Computer Vision", "PyTorch", "React", "WebSocket"],
    image: "/assets/project-vision.png",
    link: "#",
    github: "#"
  },
  {
    title: "Cognitive NLP Engine",
    description: "Large Language Model fine-tuning pipeline for specialized medical diagnosis assistance with RAG architecture.",
    tags: ["NLP", "Transformers", "Python", "FastAPI"],
    image: "/assets/hero-bg.png", // Reusing for now
    link: "#",
    github: "#"
  },
  {
    title: "Reinforcement Agent Alpha",
    description: "Multi-agent reinforcement learning environment for optimizing supply chain logistics in complex simulation spaces.",
    tags: ["Reinforcement Learning", "Ray", "OpenAI Gym"],
    image: "/assets/project-vision.png", // Reusing for now
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Selected Works</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card overflow-hidden h-full group border-0 bg-card/40">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                      <a href={project.link} className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-black transition-colors">
                        <ExternalLink size={20} />
                      </a>
                      <a href={project.github} className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-transparent">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
