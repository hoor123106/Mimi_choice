import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - Mimi Choice",
  description: "Read Mimi Choice's privacy policy.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        </div>

        <div className="prose prose-lg text-muted-foreground">
          <p>At Mimi Choice, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Mimi Choice and how we use it.</p>

          <h3 className="text-primary font-bold mt-8 mb-4">1. Information We Collect</h3>
          <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
          <p>If you contact us directly via our contact form, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us.</p>

          <h3 className="text-primary font-bold mt-8 mb-4">2. How We Use Your Information</h3>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h3 className="text-primary font-bold mt-8 mb-4">3. Log Files</h3>
          <p>Mimi Choice follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

          <h3 className="text-primary font-bold mt-8 mb-4">4. Contact Us</h3>
          <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through our <Link href="/contact" className="text-accent hover:underline">Contact Page</Link>.</p>
        </div>
      </div>
    </div>
  );
}
