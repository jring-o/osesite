import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur">
      <div className="max-w-[1200px] mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/ose-images/ose-logo.png" 
            alt="Open Source Endowment Logo" 
            className="h-8 w-auto" 
          />
        </div>
        
        <NavigationMenu className="hidden md:flex justify-center">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link to="/#features" className="text-sm text-foreground hover:text-brand-blue transition-colors font-medium">
                Features
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#how-it-works" className="text-sm text-foreground hover:text-brand-blue transition-colors font-medium">
                How It Works
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/#community-governance" className="text-sm text-foreground hover:text-brand-blue transition-colors font-medium">
                Team
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="https://github.com/open-source-endowment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-brand-blue transition-colors font-medium flex items-center"
              >
                <Github size={16} className="text-black" />
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <a href="#donate">
            <Button size="sm" className="bg-brand-green text-white hover:shadow-md hover:brightness-105 transition-all font-medium">
              Donate Now
            </Button>
          </a>
        </div>
      </div>
      <Separator className="border-t-1 border-gray-200 dark:border-gray-800" />
    </header>
  );
};

export default Navbar;