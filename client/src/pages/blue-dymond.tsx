import { motion } from "framer-motion";
import { Gem, Sparkles, BadgeCheck, Lightbulb, ShoppingCart, Wrench, Layers, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BlueDymond() {
    return (
      <section className="bg-white text-gray-800">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white to-blue-50 py-24 text-center px-4">
          
          {/* Logo - big and centered */}
          <motion.img
            src="/images/dym.jpg" // place this in your public/ folder
            alt="Blue Dymond Logo"
            className="mx-auto mb-6 w-auto h-48 sm:h-56 md:h-64 lg:h-72 object-contain"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
  
          {/* Optional - text title, can be removed if logo has the text */}
          {/* <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-serif font-bold text-blue-900 mb-6"
          >
            Blue Dymond
          </motion.h1> */}


        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-gray-600"
        >
        India’s first full stack mirror brand reimagining how mirrors are designed, personalized, and experienced.        </motion.p>
      </div>

      {/* Our Vision */}
      <div className="container px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Vision</h2>
          <p className="text-muted-foreground text-lg">
            Mirrors are everywhere — homes, hotels, salons, offices, and cars. Yet in India, they remain an afterthought.
            Blue Dymond is building a brand where mirrors are not just functional, but fine, personal, and proudly made in India.
          </p>
        </motion.div>
      </div>

      {/* What We’re Building */}
      <div className="container px-4 py-10 grid md:grid-cols-2 gap-10">
        <Card className="rounded-xl shadow-md">
          <CardContent className="p-6">
            <Lightbulb className="text-blue-800 h-8 w-8 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Sketch My Mirror (Coming Soon)</h3>
            <p className="text-muted-foreground">A drag-and-drop and AI-powered design tool to create your dream mirror, personalized by our artisans.</p>
          </CardContent>
        </Card>


        <Card className="rounded-xl shadow-md">
            <CardContent className="p-6">
                <ShoppingCart className="text-blue-800 h-8 w-8 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Standard, Luxury, Antique, LED, Smart Mirrors and More</h3>
                <p className="text-muted-foreground">
                Explore a wide range of mirrors, from standard and luxury to antique, LED, and smart mirrors with IoT-enabled features like lighting, sensors, and voice control. Perfect for homes and commercial spaces.
                </p>
            </CardContent>
        </Card>




        <Card className="rounded-xl shadow-md">
          <CardContent className="p-6">
            <Wrench className="text-blue-800 h-8 w-8 mb-4" />
            <h3 className="font-semibold text-xl mb-2">B2B & Bulk Supply</h3>
            <p className="text-muted-foreground">Supplying standard and custom-sized mirrors directly to furniture brands, hotels, and auto industries.</p>
          </CardContent>
        </Card>
        <Card className="rounded-xl shadow-md">
          <CardContent className="p-6">
            <Layers className="text-blue-800 h-8 w-8 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Made in India, Made to Last</h3>
            <p className="text-muted-foreground">Fully in-house production, quality control, and packaging to ensure elegance and durability.</p>
          </CardContent>
        </Card>
      </div>

      {/* What Makes Us Different */}
      <div className="bg-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">What Makes Us Different</h2>
          <p className="text-muted-foreground mb-6">
            Blue Dymond is not just about personalization. We’re redefining mirror artistry itself with handcrafted patterns carved directly onto the mirror surface, not just frames or overlays. These are one-of-a-kind mirrors you won’t find anywhere else.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Gem className="text-blue-800 h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Refined, luxury-focused design</p>
            </div>
            <div>
              <Sparkles className="text-blue-800 h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Art meets automation — crafted with care</p>
            </div>
            <div>
              <BadgeCheck className="text-blue-800 h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Built on 25+ years of industry legacy</p>
            </div>
            <div>
              <Palette className="text-blue-800 h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Custom etched and artistic mirrorwork</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-20 px-4">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-serif font-bold text-blue-900 mb-4"
        >
          Be Part of the Mirror Revolution
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground mb-6"
        >
        We're on a mission to revolutionize the mirror industry and invite early believers, partners, and pioneers to join us. Let’s create India’s most iconic mirror brand together.        </motion.p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSePPK7DFawycTLD251W0B6-azW2g6u9h73G3DtyHy5O_kwOKg/viewform?usp=header" target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-800 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
            Join the Journey
        </button>
        </a>
      </div>
    </section>
  );
}
