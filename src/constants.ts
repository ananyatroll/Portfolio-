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
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: '2026',
    description: "Foundational introduction to Claude's interface, basic prompting techniques, and essential features for effective AI-assisted communication and productivity.",
    link: 'https://verify.skilljar.com/c/7uw5hk3i86ts',
  },
  {
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    date: '2026',
    description: "Foundational knowledge in programming logic, syntax, and problem-solving techniques using modern languages through Claude's coding capabilities.",
    link: 'https://verify.skilljar.com/c/w3rk6tzpcd7g',
  },
  {
    title: 'Introduction to Claude Cowork',
    issuer: 'Anthropic',
    date: '2026',
    description: 'Foundational skills for collaborating with Claude in shared workspaces, enabling team coordination, document collaboration, and collective project execution.',
    link: 'https://verify.skilljar.com/c/kwxtkj5ckmg3',
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: '2026',
    description: 'Practical application of Claude Code in live development environments, demonstrating real-time coding assistance, debugging, and software engineering workflows.',
    link: 'https://verify.skilljar.com/c/7iacxdtz67nh',
  },
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: '2026',
    description: "Comprehensive grounding in the AI Fluency Framework's core principles, foundational AI concepts, and structured approaches to AI literacy.",
    link: 'https://verify.skilljar.com/c/5y65g2426b84',
  },
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    date: '2026',
    description: 'Foundational understanding of the Model Context Protocol specification for connecting AI models to external data sources and tool ecosystems.',
    link: 'https://verify.skilljar.com/c/syhd8ztvcoqn',
  },
  {
    title: 'Claude with the Anthropic API',
    issuer: 'Anthropic',
    date: '2026',
    description: 'Technical proficiency in implementing Claude through API endpoints, including request structuring, response handling, and application integration.',
    link: 'https://verify.skilljar.com/c/sjvhej4s9g66',
  },
  {
    title: 'AI Fluency: AI Capabilities & Limitations',
    issuer: 'Anthropic',
    date: '2026',
    description: 'In-depth understanding of artificial intelligence strengths, constraints, failure modes, and realistic expectation-setting for AI system deployment.',
    link: 'https://verify.skilljar.com/c/7xt77i8776sp',
  },
  {
    title: 'Introduction to agent skills',
    issuer: 'Anthropic',
    date: '2026',
    description: 'Core concepts in equipping AI agents with specialized capabilities, skill definition, and task-oriented behavioral programming.',
    link: 'https://verify.skilljar.com/c/dgrssm8nrbjd',
  },
  {
    title: 'Introduction to subagents',
    issuer: 'Anthropic',
    date: '2026',
    description: 'Foundational knowledge of creating and managing subordinate AI agents, hierarchical task delegation, and distributed agent architectures.',
    link: 'https://verify.skilljar.com/c/cbynfvxuocp2',
  },
  {
    title: 'AI Fluency for nonprofits',
    issuer: 'Anthropic + GivingTuesday',
    date: '2026',
    description: 'Sector-specific AI fluency for nonprofit organizations, addressing mission-driven applications, donor relations, and social impact optimization.',
    link: 'https://verify.skilljar.com/c/nyyos9594qwc',
  },
  {
    title: 'AI Fluency for educators',
    issuer: 'Anthropic (with UCC, Ringling College, HEA, and National Forum)',
    date: '2026',
    description: 'Specialized AI fluency competencies tailored for teaching professionals, focusing on classroom integration, student guidance, and educational innovation.',
    link: 'https://verify.skilljar.com/c/tpghpsrfayoq',
  },
  {
    title: 'AI Fluency for students',
    issuer: 'Anthropic (with UCC, Ringling College, HEA, and National Forum)',
    date: '2026',
    description: 'Targeted AI fluency training for students, emphasizing academic integrity, research skills, and responsible AI use in educational contexts.',
    link: 'https://verify.skilljar.com/c/4s7kws5rrt2f',
  },
  {
    title: 'Teaching the AI Fluency Framework',
    issuer: 'Anthropic',
    date: '2026',
    description: 'Pedagogical training in instructing the AI Fluency Framework, including lesson planning, learner assessment, and educational delivery methods.',
    link: 'https://verify.skilljar.com/c/icv8a6fbfgpi',
  },
  {
    title: 'Basics of Machine Learning Algorithms',
    issuer: 'UniAthena in partnership with Cambridge International Qualifications, UK',
    date: '2026',
    description: 'Foundational understanding of core machine learning algorithms, model training principles, and practical applications for data-driven problem solving. Blockchain-verified via FEDE (ID: 9848-4366-7732).',
    link: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeiaimsydwpklpo4fc6xtgwjerouzxd7zrwsystgbwtsbcoziysacsi',
  },
  {
    title: 'Basics of Python',
    issuer: 'UniAthena in partnership with Cambridge International Qualifications, UK',
    date: '2026',
    description: 'Foundational proficiency in Python programming syntax, logic structures, and problem-solving techniques for software development and data analysis. Blockchain-verified via FEDE (ID: 2461-1530-7720).',
    link: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeicoka5itd26246hk6mls22yz6o6u7qjpjfpdy23g4c42ujp65r6wy',
  },
  {
    title: 'Basics of Digital Marketing',
    issuer: 'UniAthena in partnership with Cambridge International Qualifications, UK',
    date: '2026',
    description: 'Foundational knowledge of digital marketing strategies, audience engagement tactics, and analytics tools for effective online campaign management. Blockchain-verified via FEDE (ID: 5620-1461-4158).',
    link: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeihnpzoocg7c5qyprnw7zv2aulqfzsyxgp3g3kjecfqbx5d5tzcy64',
  },
  {
    title: 'Basics of Data Science',
    issuer: 'UniAthena in partnership with Cambridge International Qualifications, UK',
    date: '2026',
    description: 'Foundational skills in data collection, cleaning, analysis, and visualization techniques for extracting actionable insights from complex datasets. Blockchain-verified via FEDE (ID: 8332-1509-0127).',
    link: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeihhdml2sliiu64ka7kmipgrxtdrb23ubap7inpijzheaywh4r47aq',
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
  },
  {
    title: 'Class Status Bot',
    description: 'A comprehensive Telegram bot that provides students with real-time updates and information about their classes.',
    tags: ['Telegram Bot', 'Node.js', 'Education'],
    link: 'https://t.me/Classstatuss_bot',
    image: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreiffzvubkfdokeamdypvt6wwm3qi7u23dqa6pnn5hloyp5t42ydwli'
  },
  {
    title: 'Zen Budgeting Bot',
    description: 'A personal finance and budgeting assistant integrated directly into Telegram for easy expense tracking.',
    tags: ['Telegram Bot', 'FinTech', 'Node.js'],
    link: 'https://t.me/zenbudgeting_bot',
    image: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeif4se3zaup2a3dz2l2cmfxun2ruxh7mqhhaukaiio4sbs65nhaq54'
  },
  {
    title: 'Charity Donation Tracker',
    description: 'A transparent software solution for tracking charity donations and ensuring accountability in philanthropic efforts.',
    tags: ['Software', 'Charity', 'Transparency'],
    github: 'https://github.com/ananyatroll/miniature-sniffle',
    image: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafybeia62mzjw2ug3uxs7t2minxr4mq3maghzstrbthbv7cwlqtjmzuee4'
  },
  {
    title: 'Blockchain Land Management',
    description: 'A secure land management system for government and citizens, leveraging blockchain for immutable property records.',
    tags: ['Blockchain', 'GovTech', 'Security'],
    github: 'https://github.com/ananyatroll/land-managment-using-block-chain',
    image: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreidy4vvw3dxv4oq3akjqvwhjgvzutg3hkynepdbe4opfqclmre6tmi'
  },
  {
    title: 'QWN Trading Bot',
    description: 'An automated trading bot built with Python that scans markets for high-probability signals and executes trades via Exness on MT5.',
    tags: ['Python', 'Trading', 'MT5', 'Automation'],
    link: 'https://t.me/qwntrading_bot',
    github: 'https://github.com/ananyatroll/trading',
    image: 'https://lavender-working-anteater-929.mypinata.cloud/ipfs/bafkreig2fktbfzvopt3kfgl6gkliyi7hfu6hrngkmuprmdtekaokyks7km'
  }
];
