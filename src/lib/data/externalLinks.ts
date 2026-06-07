export const externalLinks = {
  portfolio: {
    label: "Core Portfolio",
    domain: "aryaaji.com",
    url: "https://aryaaji.com",
    description: "Main portfolio, case studies, services, and contact flow.",
  },
  tryout: {
    label: "Tryout SaaS",
    domain: "tryout.aryaaji.com",
    url: "https://tryout.aryaaji.com",
    description: "Exam simulation SaaS for SKUI and related learning products.",
  },
  extensions: {
    label: "Extension Hub",
    domain: "extension.aryaaji.com",
    url: "https://extension.aryaaji.com",
    description: "Browser extension products, install links, privacy notes, and support pages.",
  },
} as const;

export const serviceMap = [
  externalLinks.portfolio,
  externalLinks.tryout,
  externalLinks.extensions,
] as const;
