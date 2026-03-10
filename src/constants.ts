import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram,
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu,
  Award,
  ChevronRight,
  Download,
  X,
  Send
} from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: typeof Github;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools';
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
  image?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/ananyatroll', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ananya-balew-351765378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: Linkedin },
  { name: 'X', url: 'https://x.com/ananyatroll', icon: X },
  { name: 'Instagram', url: 'https://www.instagram.com/ananyatroll?igsh=ZXdtM3R1cDlzOGN4', icon: Instagram },
  { name: 'Telegram', url: 'https://t.me/ananyatroll', icon: Send },
  { name: 'Email', url: 'mailto:ananyabayable06@gmail.com', icon: Mail },
];

export const PICTURES = [
  {
    url: "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeifvqcb66pcuxwm3yqsj36qqrqriztj3263uvyiohuzofu3carhe2a",
    caption: "Graduation Day - A milestone achieved with honors."
  },
  {
    url: "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreibhzsboxrv2omjcocnsry75dj72fa4np2hnkcxpsdv3k7766okzby",
    caption: "Cyber Talent Summer Camp - Collaborating with the best minds."
  },
  {
    url: "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreic4jrsog3xdj5nxom3oodixbulox3sqlcn4cwc2l2lrbakepq6pvq",
    caption: "Binance Event - Exploring the future of blockchain."
  },
  {
    url: "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreib5adm2hcxtr2vuy2ss7njtxkhftzyy5lpxskdpparvspl4ifvo4a",
    caption: "Recognition of Excellence - Trophies and certifications."
  },
  {
    url: "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeidq4tnwbedbi3rfvfnxnupiaj6gzfda54op4uivnuocujoqzjqupm",
    caption: "The Workspace - Where magic happens and code comes to life."
  },
  {
    url: "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeiewe4fytwm4xzgtgwzwqplatw7raqclmdra4p4pk7n3bpey437lju",
    caption: "Community & Collaboration - Moments from the Cyber Talent Summer Camp."
  },
  {
    url: "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreidy63hb4pi7f6hq23xvd7mxvyymsr5uxccfxqy5fjmremilviq5qi",
    caption: "Focused Innovation - Deep in the zone, where code meets creativity."
  },
  {
    url: "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeigpv6xqmow7far6yrxaiw5jprhjnvw5jf3qmzc5xohghglnfkrpw4",
    caption: "Late Night Studies - Dedication doesn't have a clock."
  },
  {
    url: "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeihlcz7xjhg74zbwrkbnof2vxrstpc3j2upahjt56pkvv6na5tnbxq",
    caption: "Project Presentation (Sharing my work)"
  },
  {
    url: "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeidtcge2enjg3jfidtqag54fhhukqniizgx42v4q3m4oywflz57csu",
    caption: "Code Deep Dive (Close-up of development)"
  },
  {
    url: "https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeig4mjrkv6j3w62eroy4vco3cn2voitajwwdhq7qwwukrryxlkqh2e",
    caption: "National Pride (With the Ethiopian flag)"
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 47, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'PostgreSQL', level: 4, category: 'Backend' },
  { name: 'Python', level: 70, category: 'Backend' },
  { name: 'UI/UX Design', level: 85, category: 'Design' },
  { name: 'Figma', level: 44, category: 'Design' },
  { name: 'Docker', level: 40, category: 'Tools' },
  { name: 'Git', level: 90, category: 'Tools' },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: 'Programming Fundamentals',
    issuer: 'Udacity',
    date: '2026',
    description: 'Foundational knowledge in programming logic, syntax, and problem-solving techniques using modern languages.',
    link: 'https://www.udacity.com/certificate/e/bb8db4c6-72b8-11f0-b91f-977d9b9125ac',
  },
  {
    title: 'Data Analysis Fundamentals',
    issuer: 'Udacity',
    date: '2026',
    description: 'Introduction to data cleaning, exploration, and visualization to derive meaningful insights from complex datasets.',
    link: 'https://www.udacity.com/certificate/e/51a7cf42-84e2-11f0-a9ed-83dd860f9121',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'Udacity',
    date: '2026',
    description: 'Core concepts of AI, including machine learning, neural networks, and their practical applications in solving real-world problems.',
    link: 'https://www.udacity.com/certificate/e/ab376a46-73b1-11f0-b976-b7cbd1af7502',
  },
  {
    title: 'Android Development Fundamentals',
    issuer: 'Udacity',
    date: '2026',
    description: 'Building native Android applications, focusing on UI design, activity lifecycles, and integrating with external APIs.',
    link: 'https://www.udacity.com/certificate/e/a1244ce0-9d64-11f0-92c3-77547ec65177',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'ECX Wallet & EBC Ecosystem',
    description: 'A comprehensive blockchain wallet and digital ecosystem designed for the EBC community, featuring secure asset management and decentralized services.',
    tags: ['Blockchain', 'Web3', 'Wallet', 'Ecosystem'],
    link: 'https://ebcinfo.vercel.app',
    github: 'https://github.com/ananyatroll/ECX-wallet-',
    image: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreica2n6wyrnyouwvlwgciqym73zrhpge25fwwoh735hfnzrksg2t5y'
  },
  {
    title: 'Blockchain Voting Platform',
    description: 'A secure and transparent voting system built with HTML, CSS, and JavaScript, leveraging blockchain technology for tamper-proof results.',
    tags: ['Blockchain', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ananyatroll/blockvote',
    image: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreigplcawdodqzwcr5j7hqjjierdrl27vdhy33ios7ogygrbh5u62ge'
  },
  {
    title: 'AAU GPA Calculator',
    description: 'A specialized GPA calculator designed for Addis Ababa University students to easily track their academic performance.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Education'],
    link: 'https://aaugpacalculator.netlify.app/',
    image: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreieorssaluls37ydjgpqqgdfv4ho7drfgr3wo7x3mcrteo3ycd3esy'
  }
];
