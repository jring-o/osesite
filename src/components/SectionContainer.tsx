import React from 'react';
import { Separator } from "@/components/ui/separator";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullBleed?: boolean;
  noPaddingTop?: boolean;
  noPaddingBottom?: boolean;
  withBackground?: boolean;
  withVerticalSeparator?: boolean;
}

const SectionContainer = ({
  children,
  className = "",
  id,
  fullBleed = false,
  noPaddingTop = false,
  noPaddingBottom = false,
  withBackground = false,
  withVerticalSeparator = false
}: SectionContainerProps) => {
  const paddingClasses = !fullBleed ? `${noPaddingTop ? '' : 'pt-32'} ${noPaddingBottom ? '' : 'pb-32'} px-6` : '';
  const backgroundClasses = withBackground ? 'bg-zinc-50/50 border-y border-zinc-100' : '';
  
  return (
    <section 
      id={id} 
      className={`relative ${backgroundClasses} ${className} overflow-x-hidden`} // Added overflow-x-hidden
    >
      <div className={`max-w-full ${!fullBleed ? `max-w-[1200px] mx-auto ${paddingClasses}` : ''} relative`}>
        {withVerticalSeparator && (
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 hidden md:block">
            <Separator 
              orientation="vertical" 
              className="h-full border-[0.5px] border-brand-blue/10 dark:border-brand-green/10" 
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;