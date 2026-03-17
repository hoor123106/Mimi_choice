"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useReducedMotion } from "framer-motion";
import { contactFormSchema, type ContactFormData } from "@/data/types";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Textarea } from "../components/textarea";
import { Checkbox } from "../components/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/form";
import { Mail, Phone } from "lucide-react";

export default function Contact() {

  const reduceMotion = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0 },
  };

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", message: "", interestedInBuying: false },
  });



  return (
    <div className="min-h-screen bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h1 variants={fadeUp} className="text-4xl font-bold text-primary mb-4">Get in Touch</motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground">Have a question about our products? We&apos;re here to help. Reach out to the Mimi Choice team today.</motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl shadow-primary/5 overflow-hidden border border-secondary/50"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} className="lg:col-span-2 bg-primary text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <Phone className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                    <p className="text-primary-foreground/80">+92 321 2627 1662</p>
                    <p className="text-primary-foreground/80">+92 321 6093225</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                    <p className="text-primary-foreground/80">mimichoicee@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-sm text-primary-foreground/80">&quot;We promise to respond to all inquiries within 24 hours.&quot;</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-3 p-10 md:p-12">
            <h2 className="text-2xl font-bold text-primary mb-8">Send us a Message</h2>
            <Form {...form}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="John Doe" className="h-12 bg-slate-50 border-secondary focus-visible:ring-primary rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl><Input placeholder="+92 321 000 0000" className="h-12 bg-slate-50 border-secondary focus-visible:ring-primary rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl><Input type="email" placeholder="john@example.com" className="h-12 bg-slate-50 border-secondary focus-visible:ring-primary rounded-xl" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl><Textarea placeholder="How can we help you today?" className="min-h-[150px] bg-slate-50 border-secondary focus-visible:ring-primary rounded-xl resize-none" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="interestedInBuying" render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-secondary/30 border border-secondary">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-primary mt-1" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-semibold cursor-pointer">I am interested in buying products in bulk/wholesale.</FormLabel>
                      <p className="text-sm text-muted-foreground">Check this if you represent a retailer or pharmacy.</p>
                    </div>
                  </FormItem>
                )} />

                <Button type="submit" className="w-full h-14 text-lg btn-accent rounded-xl">
                </Button>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
