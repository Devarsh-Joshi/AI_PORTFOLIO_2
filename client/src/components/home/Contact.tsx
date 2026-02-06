import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Let's Build the <br />
              <span className="text-primary">Future Together</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, research collaborations, or opportunities to apply AI in novel ways.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email Me</p>
                  <p>hello@ai-engineer.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p>San Francisco, CA (Remote Available)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Name</label>
                  <Input placeholder="John Doe" className="bg-black/20 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Email</label>
                  <Input placeholder="john@example.com" type="email" className="bg-black/20 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-black/20 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Message</label>
                <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-black/20 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary" />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-cyan-600 hover:to-cyan-500 text-black font-bold h-12 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
