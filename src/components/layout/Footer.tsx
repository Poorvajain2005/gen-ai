import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold mb-2">Toronto, CA</h3>
          <p>140 Simcoe St, Toronto</p>
          <p>ON M5H 4E9 Canada</p>
          <h3 className="font-bold mt-6 mb-2">Tallinn, EE</h3>
          <p>Telliskivi 60a, Tallinn</p>
          <p>10412 Estonia</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-pink-600" />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 hover:text-pink-600" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/blog" className="hover:text-pink-600">Blog</Link></li>
            <li><Link to="/updates" className="hover:text-pink-600">Updates</Link></li>
            <li>
              <Link to="/careers" className="hover:text-pink-600 flex items-center">
                Careers
                <span className="ml-2 bg-pink-600 text-white text-xs rounded-full px-2 py-0.5">Hiring</span>
              </Link>
            </li>
            <li><Link to="/our-data" className="hover:text-pink-600">Our Data</Link></li>
            <li><Link to="/newsletter" className="hover:text-pink-600">Newsletter</Link></li>
            <li><Link to="/api" className="hover:text-pink-600">API</Link></li>
          </ul>
          <h3 className="font-bold mt-6 mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/helpdesk" className="hover:text-pink-600">Helpdesk</Link></li>
            <li><Link to="/ask-question" className="hover:text-pink-600">Ask a Question</Link></li>
            <li><Link to="/book-call" className="hover:text-pink-600">Book a Call</Link></li>
            <li><Link to="/academy" className="hover:text-pink-600">Academy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Features</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/discovery" className="hover:text-pink-600">Discovery</Link></li>
            <li><Link to="/analytics" className="hover:text-pink-600">Analytics</Link></li>
            <li><Link to="/campaign-monitoring" className="hover:text-pink-600">Campaign Monitoring</Link></li>
            <li><Link to="/management" className="hover:text-pink-600">Management</Link></li>
            <li><Link to="/inbox" className="hover:text-pink-600">Inbox</Link></li>
            <li><Link to="/shopify-integration" className="hover:text-pink-600">Shopify Integration</Link></li>
          </ul>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-800 pt-8 text-gray-500 text-sm flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold mb-2">Get in touch</h4>
          <p>contact@genai.io</p>
          <p>+1 (555) 123-4567</p>
        </div>
        <p>© 2025 GEN-AI OÜ. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/terms" className="hover:text-pink-600">Terms & Service</Link>
          <Link to="/privacy" className="hover:text-pink-600">Privacy Policy</Link>
          <Link to="/cookie" className="hover:text-pink-600">Cookie Policy</Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 opacity-10 pointer-events-none select-none">
        <h1 className="text-[10rem] font-extrabold text-center">GEN-AI</h1>
      </div>
    </footer>
  );
}
