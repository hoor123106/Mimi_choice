import { Link } from "wouter";
import { Heart, Shield, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Born out of a mother's love and a commitment to providing the safest, most comfortable products for babies everywhere.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Welcome to Mimi Choice</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Mimi Choice, we understand that nothing is more important than the wellbeing of your little one. That's why we've dedicated ourselves to creating a premium line of baby essentials that you can trust unconditionally.
              </p>
              <p>
                Our signature wide-neck feeders and ultra-soft teats are meticulously designed to mimic natural feeding, reducing colic and ensuring a comfortable experience for both baby and parents.
              </p>
              <p>
                Every product we offer—from our durable feeding bottles to our beautiful baby dresses—is crafted with love, using only the highest quality, non-toxic materials. We believe in transparency, quality, and designs that bring joy to everyday parenting.
              </p>
            </div>
          </div>
          <div className="relative">
            {/* abstract shapes / baby layout */}
            <div className="absolute inset-0 bg-secondary rounded-[3rem] transform -rotate-3 scale-105"></div>
            <img 
              src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=1000" 
              alt="Baby toys and clothes" 
              className="relative rounded-[3rem] shadow-xl object-cover w-full h-auto aspect-square md:aspect-[4/3]"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Uncompromising Safety</h3>
              <p className="text-muted-foreground">Every product passes rigorous safety testing. BPA-free, non-toxic, and perfectly safe for your baby.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Crafted with Love</h3>
              <p className="text-muted-foreground">We design our products focusing on the delicate needs of newborns, ensuring maximum comfort.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">From the softness of our teats to the stitching of our dresses, quality is in our DNA.</p>
            </div>

          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-primary mb-6">Experience the Mimi Choice Difference</h2>
        <Link href="/products" className="btn-accent px-8 py-4 rounded-xl text-lg font-semibold inline-block">
          Shop Our Collection
        </Link>
      </div>
    </div>
  );
}
