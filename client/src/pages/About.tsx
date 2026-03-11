import { Link } from "wouter";
import { Heart, Sparkles, Leaf } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section - Warm Welcome */}
      <div className="bg-gradient-to-r from-amber-400 to-rose-300 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -ml-40"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Mimi's Journey</h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            A mother's vision to create the gentlest, safest products for precious little ones.
          </p>
        </div>
      </div>

      {/* Main Story Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-amber-900">The Heart of Mimi Choice</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="border-l-4 border-amber-400 pl-6">
                Every parent knows that moment—when you hold your newborn for the first time. That's when everything changes. At Mimi Choice, that same love and care goes into every product we create.
              </p>
              <p>
                We started with a simple mission: to design feeding products that feel as natural as a mother's embrace. Our wide-neck feeders aren't just bottles—they're engineered with anti-colic venting, ergonomic handles, and soft silicone teats that mimic natural feeding.
              </p>
              <p>
                From our signature feeders to our carefully selected teats and beautiful baby dresses, every item is crafted with premium, non-toxic materials. We test relentlessly. We innovate constantly. All because your baby deserves nothing but the best.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-rose-100 rounded-[3rem] transform -rotate-3 scale-105 blur-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000" 
              alt="Happy baby with caregiver" 
              className="relative rounded-[3rem] shadow-2xl object-cover w-full h-auto aspect-square md:aspect-[4/3]"
            />
          </div>
        </div>
      </div>

      {/* Core Values - Warm Cards */}
      <div className="bg-gradient-to-b from-transparent to-rose-50/50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-amber-900">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-rose-300 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-amber-900">Safety First</h3>
              <p className="text-gray-600 text-center">Every product passes rigorous testing. BPA-free, non-toxic, and certified safe—because nothing matters more than your baby's wellbeing.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-amber-900">Crafted with Love</h3>
              <p className="text-gray-600 text-center">Every stitch, every curve, every detail is designed with your baby's comfort in mind. Premium quality that speaks for itself.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-teal-300 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-amber-900">Natural Design</h3>
              <p className="text-gray-600 text-center">Our products are inspired by nature and designed to support natural feeding and development from day one.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Why Mimi Choice - Feature Highlights */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Why Parents Choose Mimi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-800 flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-rose-400 rounded-full"></span>
              Anti-Colic Technology
            </h3>
            <p className="text-gray-600">Our patented venting system reduces air intake, minimizing colic and discomfort for your baby.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-800 flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span>
              Easy to Clean Design
            </h3>
            <p className="text-gray-600">Wide-neck bottles open up for thorough cleaning and sterilizing—because convenience matters.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-800 flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-amber-400 rounded-full"></span>
              Ergonomic Handles
            </h3>
            <p className="text-gray-600">Designed for tiny hands to grip safely and comfortably as your baby grows and learns to hold their bottle.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-800 flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-pink-400 rounded-full"></span>
              Premium Silicone Teats
            </h3>
            <p className="text-gray-600">Soft, flexible, and designed to mimic natural breastfeeding for a seamless transition.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-amber-300 via-rose-300 to-pink-300 py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join the Mimi Family?</h2>
          <p className="text-white/90 text-lg mb-8">Discover products designed with love for every precious moment.</p>
          <Link href="/products" className="inline-block bg-white text-amber-900 hover:bg-amber-50 px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg">
            Explore Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
