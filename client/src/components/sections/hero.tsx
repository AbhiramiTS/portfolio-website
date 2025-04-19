import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Hero() {
  return (
    <div className="relative bg-background min-h-[600px] flex items-center">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Where Tradition Meets Innovation in Mirror
            </motion.h1>

            <motion.p 
              className="text-lg text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
               Operating from 2004 to 2023. Abhirami Mirror Industry built a reputation for delivering high-quality, handcrafted mirrors using time tested techniques. serving clients across kerala with consistency, reliability and a commitment to excellence.
            </motion.p>

            {/* BlueDiamond Announcement */}
            <motion.div 
              className="mb-8 p-4 border-l-4 border-blue-500 bg-muted rounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-1">
                Announcing Our New Identity
              </h2>
              <p className="text-muted-foreground">
                Abhirami Mirror Industry is now <span className="font-bold text-blue-800">
                <span className="font-bold text-blue-800 cursor-pointer">Blue Dymond</span>
                  </span> – same legacy, modern vision. We’re excited to relaunch with new ideas while continuing to honor our craftsmanship roots.
              </p>
            </motion.div>

            <motion.div
              className="space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild size="lg">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                alt="Modern glass manufacturing facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent" />
            </AspectRatio>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520164126806-d75ade72e6e3')] bg-cover bg-center"
          style={{ opacity: 0.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      </div>
    </div>
  );
}
