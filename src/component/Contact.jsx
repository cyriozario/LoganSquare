import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionMotion } from "./SectionMotion";
import TextReveal from "./TextReveal";

export default function ContactUs() {
  return (
    <SectionMotion>
      <section className="w-full px-4 md:px-8 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <TextReveal>
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Questions? We’re here to help.
            </p>
          </TextReveal>

          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-gray-700 mb-8">
              Have questions or need to get in touch? Send us a message and our
              team will respond promptly.
            </p>
          </TextReveal>

          <form className="space-y-6 text-left">
            <div>
              <Label htmlFor="name" className="block mb-1 font-medium">
                Name
              </Label>
              <Input id="name" type="text" placeholder="Your name" required />
            </div>

            <div>
              <Label htmlFor="email" className="block mb-1 font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="block mb-1 font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                required
              />
            </div>

            <Button
              type="submit"
              variant="blue"
              className="mt-4 w-full sm:w-auto"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </SectionMotion>
  );
}
