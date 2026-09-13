import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface ProductShowcaseProps {
  onOpenProductsPage?: () => void;
}

export default function ProductShowcase({ onOpenProductsPage: _onOpenProductsPage }: ProductShowcaseProps) {
  const logoUrl = "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeidxtfxjqetbbi235hrthpyk5tvukp77avwjtevlvbpho62dtvwmxu";
  const productUrl = "https://temhiro-web.vercel.app/";

  const productFeatures = [
    {
      title: "Interactive Product Showcase",
      description: "Auto-cycling transparent app screenshot slideshow and categorized curriculum feature cards."
    },
    {
      title: "Integrated Legal & Documentation Suite",
      description: "One-click external routing for EULA, Privacy Policy, and Terms of Service compliance."
    },
    {
      title: "Ultra-Lightweight & Fast",
      description: "Optimized asset loading with sub-second page delivery and full mobile-first responsiveness."
    }
  ];

  return (
    <section id="featured-product" className="relative z-20 px-4 sm:px-6 lg:px-20 -mt-8 mb-16">
      {/* Outer brutalist container */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="brutal-border bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* Product Display Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Product Visual Showcase & Brand */}
          <div className="lg:col-span-5 p-6 lg:p-10 bg-zinc-50 border-b-4 lg:border-b-0 lg:border-r-4 border-brutal-black flex flex-col justify-between">
            <div>
              {/* Product Logo & Identity Display Box */}
              <div className="relative group bg-white brutal-border p-6 mb-6 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-[#030547] p-3 brutal-border-sm mb-4 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={logoUrl} 
                    alt="ተምህሮ / Temhiro Logo" 
                    className="w-full h-full object-contain filter drop-shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <span className="font-display text-2xl uppercase font-bold tracking-tight">
                  ተምህሮ / Temhiro
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3 pt-2">
              <a 
                href={productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full brutal-btn bg-neon-green text-brutal-black text-center flex items-center justify-center gap-2 hover:bg-brutal-black hover:text-white transition-colors text-base"
              >
                <span>Launch Live Product</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Detailed Product Specs & Features */}
          <div className="lg:col-span-7 p-6 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Product Header */}
              <div className="border-b-2 border-dashed border-zinc-300 pb-6 mb-6">
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-none mb-3">
                  Welcome to <span className="text-neon-pink underline underline-offset-4 decoration-4">ተምህሮ</span> / Temhiro
                </h2>

                <p className="font-mono text-sm lg:text-base text-zinc-700 leading-relaxed">
                  Next-generation interactive educational platform bringing curriculum-aligned materials, immersive showcases, and verified documentation together in a blazing-fast experience.
                </p>
              </div>

              {/* Core Features List */}
              <div className="space-y-4 mb-2">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                  <span>Product Specifications & Highlights:</span>
                </div>

                {productFeatures.map((feature, idx) => (
                  <div 
                    key={feature.title}
                    className="p-4 bg-zinc-50 brutal-border-sm hover:bg-neon-yellow/20 transition-colors flex items-start gap-3.5"
                  >
                    <div className="p-1.5 bg-neon-pink text-white brutal-border-sm shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg uppercase tracking-tight text-brutal-black">
                        {idx + 1}. {feature.title}
                      </h4>
                      <p className="font-mono text-xs lg:text-sm text-zinc-700 mt-1 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
