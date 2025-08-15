const fs = require("fs");

function svgToReact(svgString, componentName = "MyIcon") {
  // Remove XML declarations or DOCTYPE if any
  let cleaned = svgString
    .replace(/<\?xml.*\?>/g, "")
    .replace(/<!DOCTYPE.*>/g, "")
    .replace(/<!--.*-->/g, "");

  // Replace problematic attributes for JSX
  cleaned = cleaned
    .replace(/class=/g, "className=")
    .replace(/clip-rule=/g, "clipRule=")
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/stroke-width=/g, "strokeWidth=")
    .replace(/viewbox=/gi, "viewBox=");

  // Return React component string
  return `
import React from "react";

export const ${componentName} = ({ height, width, fill, size, ...props }: any) => (
  ${cleaned
    .replace(/<svg/, "<svg fill={fill || 'currentColor'} height={height || size} width={width || size} {...props}") // allow props like className, style
  }
)
`;
}

// Example usage
const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M240,186.79c-91.64,44.77-132.36-42.35-224,2.42v-120c91.64-44.77,132.36,42.35,224-2.42Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="48" y1="96" x2="48" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="112" x2="208" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`
const componentName = "MoneyWavy"; // give it a nice name
const componentCode = svgToReact(svgString, componentName);

// Save to file
fs.writeFileSync(`${componentName}.jsx`, componentCode, "utf8");

console.log(`✅ React component created: ${componentName}.jsx`);