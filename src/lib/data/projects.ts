export interface Challenge {
  title: string;
  how: string;
}

export interface ResultStat {
  metric: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  name: string;
  org: string;
  date: string;
  dateDisplay: string;
  description: string;
  longDesc?: string;
  idea?: string;
  problem?: string;
  solution?: string;
  goal?: string;
  privacyPolicy?: string;
  challenges?: Challenge[];
  results?: ResultStat[];
  tags: string[];
  stars?: number;
  contributors?: number;
  href?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  image?: string;
  banner?: string;
  gif?: string;
}

export const projects: Project[] = [
  {
    slug: "mlp-my-landing-page",
    title: "MLP My Landing Page",
    name: "mlp-my-landing-page",
    org: "arya-aji",
    date: "2026-05-20",
    dateDisplay: "May 2026",
    description:
      "A configurable landing page platform where users can manage frontend text and page content from an admin dashboard, reducing the need for developer involvement on every content update.",
    longDesc:
      "MLP My Landing Page is a landing page example designed around content autonomy. It lets users adjust the visible frontend copy from an admin page, so routine content changes can happen quickly without waiting for a developer to edit and redeploy the interface.",
    idea: "Give non-developer users a landing page they can update from admin controls instead of code changes",
    problem:
      "Landing page content often changes faster than the development cycle. Small updates to headlines, descriptions, calls to action, and section copy can create unnecessary developer dependency and slow down business iteration.",
    solution:
      "Built a landing page flow with admin-managed content fields, allowing frontend text to be adjusted from a controlled admin interface while the public page reflects those updates consistently.",
    goal: "To minimize developer involvement for routine content updates and give users a practical way to keep landing page messaging fresh from a simple admin experience.",
    challenges: [
      {
        title: "Editable content without breaking the page layout",
        how: "Structured the page around predictable content fields so users can update text while the frontend keeps a consistent visual hierarchy.",
      },
      {
        title: "Balancing flexibility and simplicity",
        how: "Focused admin controls on the copy users most frequently need to change, keeping the update flow practical instead of turning it into a heavy CMS.",
      },
    ],
    results: [
      {
        metric: "Admin-first",
        label: "Content updates from dashboard",
      },
      {
        metric: "Less dev work",
        label: "Routine copy changes need fewer code edits",
      },
    ],
    tags: [
      "landing-page",
      "admin-panel",
      "cms",
      "content-management",
      "vercel",
    ],
    href: "https://landing-port-neon.vercel.app/",
    live: "https://landing-port-neon.vercel.app/",
    image: "/assets/mlp.png",
    banner: "/assets/banner-mlp.png",
    featured: true,
  },
  {
    slug: "blur-your-whatsapp",
    title: "Blur Your Whatsapp",
    name: "blur-your-whatsapp",
    org: "arya-aji",
    date: "2026-05-19",
    dateDisplay: "May 2026",
    description:
      "Chrome extension to maximize WhatsApp privacy in public places. Blurs chats, names, groups, and images. 100% local, no data sent to servers, and completely free.",
    longDesc:
      "A Chrome extension designed to maximize WhatsApp Web privacy in public spaces. It enables users to selectively blur chats, names, groups, images, and other sensitive elements. The extension operates 100% locally with absolutely no data transmitted to external servers, ensuring complete security and privacy. And of course, it is completely free.",
    idea: "Maximize WhatsApp privacy in public places with zero data collection",
    problem:
      "Using WhatsApp Web in public spaces exposes personal chats, group names, and sensitive images to shoulder surfers. Existing solutions either require subscriptions or send telemetry data to third-party servers.",
    solution:
      "Built a lightweight Chrome extension that injects CSS to selectively blur WhatsApp Web elements (messages, contact names, profile pictures). The blur is removed only on hover. All logic runs locally in the browser with absolutely no external data transmission.",
    goal: "To provide a seamless, secure, and privacy-focused solution for WhatsApp Web users in public environments, ensuring sensitive data remains hidden without compromising usability or requiring external servers.",
    privacyPolicy:
      "<h3>Data Collection</h3><p>Blur Your WhatsApp does <strong>not collect, transmit, sell, or share</strong> any personal data. Period.</p><h3>Local Processing</h3><p>The extension runs entirely locally in your browser. It applies visual privacy masking effects directly on WhatsApp Web. It reads page elements on <em>web.whatsapp.com</em> strictly to apply blur/mask styles to chat text, names, avatars, previews, images, media drawers, or the whole WhatsApp Web interface.</p><h3>Storage</h3><p>User preferences—such as enabled controls and mask strength—are stored using Chrome's local storage. These preferences are used only to restore your selected privacy settings upon reopening the browser.</p><h3>Third-Party Services</h3><p>Blur Your WhatsApp does <strong>not use</strong> remote code, analytics, tracking, advertising SDKs, or external servers. Your data stays on your machine.</p><h3>Affiliation</h3><p>Blur Your WhatsApp is an independent open-source browser extension and is not affiliated with, endorsed by, or sponsored by WhatsApp, Meta, or any related company.</p>",
    tags: ["chrome-extension", "javascript", "privacy", "css"],
    href: "https://chromewebstore.google.com/detail/blur-your-whatsapp/fjniailddieogadfhmkikgbegllicjpo",
    image: "/assets/blur-my-whatsapp.png",
    banner: "/assets/banner-blur-my-whatsapp.png",
    gif: "/assets/blur-my-whatsapp.png",
    featured: true,
  },
].map((project) => ({
  ...project,
  image: project.image || "/placeholder.jpg",
}));

export { tagColors } from "$lib/data/colors";
