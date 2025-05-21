import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="public\images\ose-logo.png" alt="Open Source Endowment Logo" className="h-8 w-auto" />
              
            </div>
            <p className="text-sm text-white/80">
              Sustainable funding for the open source ecosystem through community-driven endowment.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/#features" className="text-sm text-white/80 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-sm text-white/80 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/#community-governance" className="text-sm text-white/80 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/#donate" className="text-sm text-white/80 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Resources</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Annual Report
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Funded Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Investment Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Connect</h5>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@osendowment.org" className="text-sm text-white/80 hover:text-white transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Open Source Endowment. All rights reserved.
            </p>
            <div className="flex mt-4 md:mt-0 gap-4">
              <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;