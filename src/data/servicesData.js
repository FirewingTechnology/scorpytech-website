export const enterpriseServices = [
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure & Structured Networking',
    category: 'Enterprise Connectivity',
    emoji: '🌐',
    shortDesc: 'End-to-end network architecture, high-density structured cabling, SD-WAN, and rack optimization.',
    fullDesc: 'We architect and implement carrier-grade corporate networks designed for 99.99% uptime. From high-speed CAT6A / 10G fiber backbones to software-defined campus networking, wireless access points, and rack management.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Structured Cat6/Cat6A & 10G OM3/OM4 Fiber Optic Cabling',
      'Enterprise Core, Distribution & Access Switches (Cisco, Aruba, TP-Link Omada)',
      'High-Density Dual-Band Wi-Fi 6 / 6E Enterprise AP Deployments',
      'Server Rack Cable Dressing, Patch Panels & Fluke Network Testing',
      'Site-to-Site VPN, Firewall Configurations & Bandwidth Management',
      'Complete As-Built Documentation & Cable Topology Schematics'
    ],
    deliverables: ['Network Blueprint CAD', 'Fluke Certified Test Reports', 'Rack Schematics', '1-Year On-Site SLA'],
    icon: 'Network',
    badge: 'Popular for MNC Campuses'
  },
  {
    id: 'servers-datacenter',
    title: 'Enterprise Servers & Virtualization',
    category: 'Datacenter & Cloud',
    emoji: '🏢',
    shortDesc: 'High-availability rack/blade server deployment, VMware/Hyper-V virtualization, and SAN/NAS storage.',
    fullDesc: 'Custom server clusters engineered for computation, virtualization, ERP hosting, and enterprise database integrity. We configure high-density rack units with redundant power, RAID arrays, and automated off-site cloud backups.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Dell PowerEdge, HPE ProLiant & Lenovo ThinkSystem Rack Servers',
      'VMware ESXi, Proxmox VE & Microsoft Hyper-V Virtualization',
      'High-Speed SAN / NAS Storage Arrays (Synology, QNAP, TrueNAS)',
      'Hot-Swappable RAID 10/50 Configurations & Zero-Data-Loss Failovers',
      'Datacenter Environmental Monitoring & Precision Precision Cooling Setup',
      'Bare-Metal Disaster Recovery Planning & Immutable Cloud Replication'
    ],
    deliverables: ['Hardware Burn-in Test Logs', 'Virtual Machine Provisioning', 'Redundancy Verification', '24/7 Monitoring'],
    icon: 'Server',
    badge: 'Mission-Critical'
  },
  {
    id: 'lab-engineering',
    title: 'Precision Laboratory Systems & Turnkey Setup',
    category: 'Scientific & Institutional',
    emoji: '🔬',
    shortDesc: 'Turnkey setup and sourcing of analytical instruments, research lab furniture, testing benches & calibration.',
    fullDesc: 'Scorpy Tech is Pune’s premier partner for academic institutions, biotech firms, and industrial quality testing centers. We supply certified scientific instrumentation, ESD-safe workstations, fume hoods, and analytical systems.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Turnkey STEM, Physics, Chemistry, Biotech & Electronics Laboratories',
      'Analytical Testing Instruments (UV-Vis Spectrophotometers, Centrifuges, Balances)',
      'Digital Oscilloscopes, Function Generators, Spectrum Analyzers & DC Loads',
      'Chemical-Resistant Fume Hoods, Biosafety Cabinets & Cleanroom Enclosures',
      'Heavy-Duty Modular Lab Benches with Integrated Gas/Vacuum & Power Ports',
      'NABL Traceable Calibration with Complete IQ/OQ/PQ Validation Dossiers'
    ],
    deliverables: ['Lab Layout CAD Blueprints', 'NABL Calibration Certificates', 'Operator Safety Manuals', 'Preventive Maintenance Schedule'],
    icon: 'FlaskConical',
    badge: 'Specialized Engineering'
  },
  {
    id: 'workstations-computing',
    title: 'Corporate Workstations & Endpoint Computing',
    category: 'Workplace Tech',
    emoji: '💻',
    shortDesc: 'Fleet procurement, bulk OS/image imaging, CAD/Engineering rigs, and ergonomic peripheral deployment.',
    fullDesc: 'From high-powered CAD/3D rendering workstations to corporate business laptop fleets, we handle procurement, asset tagging, secure OS imaging, and zero-touch enterprise rollout for rapid scaling.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Commercial Business PCs & Laptops (HP EliteBook, Dell Latitude, Lenovo ThinkPad)',
      'Specialized GPU Rigs for Machine Learning, AutoCAD & 3D Simulations',
      'Standardized Gold Master Image Deployment via PXE/MDM',
      'Dual-Monitor Ergonomic Workstation Setups & Docking Stations',
      'Asset Tagging, Barcoding & Lifecycle Tracking for IT Audits',
      'Certified E-Waste Disposal & Safe Data Destruction (DoD 5220.22-M)'
    ],
    deliverables: ['Asset Inventory Manifest', 'Pre-Installed Enterprise Image', 'Vendor Warranty Registration', 'User Setup Guide'],
    icon: 'Laptop',
    badge: 'Bulk Corporate Deployment'
  },
  {
    id: 'amc-support',
    title: 'Enterprise AMC & 24/7 Field Engineering',
    category: 'Managed Services',
    emoji: '🛠️',
    shortDesc: 'Comprehensive preventative maintenance contracts, 4-hour Pune dispatch SLA, and loaner standby units.',
    fullDesc: 'Eliminate costly downtime with our Annual Maintenance Contracts (AMC). Our certified engineers perform proactive thermal audits, component health inspections, firmware patching, and rapid on-site emergency repairs.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Guaranteed < 4-Hour On-Site SLA across Pune, Pimpri-Chinchwad & Chakan',
      'Scheduled Monthly & Quarterly Preventative Maintenance Visits',
      'Critical Standby & Loaner Hardware to Prevent Operational Shutdowns',
      'Thermal Imaging & Dust Purging for Industrial Server & Lab Environments',
      'Dedicated Helpdesk Portal with Ticket Tracking & Priority Escalation',
      'Flexible Comprehensive (With Parts) & Non-Comprehensive AMC Packages'
    ],
    deliverables: ['Quarterly Health Audit Report', 'Dedicated Account Engineer', 'Emergency Standby Stock', 'Uptime Guarantee'],
    icon: 'Wrench',
    badge: 'Zero-Downtime Guarantee'
  },
  {
    id: 'cybersecurity-systems',
    title: 'Cybersecurity, Firewall & Endpoint Defense',
    category: 'Data Protection',
    emoji: '🛡️',
    shortDesc: 'Next-Gen firewall deployment, ransomware mitigation, endpoint detection (EDR), and access control.',
    fullDesc: 'Protect your intellectual property, research data, and financial transactions. We configure Fortinet, Sophos, and SonicWall next-generation firewalls, multi-factor authentication, and automated threat defense.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Next-Gen Firewall (NGFW) Installation (Sophos, Fortigate, SonicWall)',
      'Enterprise Antivirus & EDR (CrowdStrike, SentinelOne, Bitdefender)',
      'Zero Trust Network Access (ZTNA) & Secure Remote Worker Access',
      'Automated Vulnerability Scanning & Port Penetration Testing',
      'Biometric Access Control & IP Surveillance Camera Integration',
      'Data Loss Prevention (DLP) & Regulatory Compliance Assistance'
    ],
    deliverables: ['Security Posture Audit', 'Firewall Rule Matrix', 'Incident Response Playbook', 'Quarterly Compliance Cert'],
    icon: 'ShieldCheck',
    badge: 'High Security'
  }
];

export const serviceTiers = [
  {
    name: 'Silver Support',
    emoji: '🥈',
    target: 'Emerging Startups & Small Labs',
    price: 'Custom Tiered',
    response: 'Next Business Day',
    features: [
      'Standard 8x5 Business Hours Support',
      'Quarterly Preventative Health Checkup',
      'Basic Antivirus & Firewall Management',
      'Remote Desk Assistance & Diagnostics',
      'Non-Comprehensive Spares Coverage'
    ],
    highlight: false
  },
  {
    name: 'Gold Corporate',
    emoji: '🥇',
    target: 'Growing Enterprises & Institutes',
    price: 'Most Popular',
    response: '< 4 Hours On-Site',
    features: [
      'Comprehensive Hardware AMC Coverage',
      'Monthly Scheduled Preventative Visits',
      'Free Emergency Standby / Loaner Hardware',
      'Dedicated Primary Field Engineer',
      'Fluke Network & Server Health Audits',
      'Priority Phone & WhatsApp Dispatch'
    ],
    highlight: true,
    tag: 'MNC Recommended'
  },
  {
    name: 'Platinum 24/7 Mission-Critical',
    emoji: '💎',
    target: 'Datacenters, R&D Labs & Factories',
    price: 'Enterprise Custom',
    response: '< 2 Hours Emergency SLA',
    features: [
      'Round-the-Clock 24x7x365 Coverage',
      'Zero-Downtime Hot-Swappable Spares On-Site',
      'NABL Certified Instrument Recalibration',
      'Executive Account Director & Dedicated Techs',
      'Automated SIEM & Infrastructure Telemetry',
      'Penetration Testing & Redundant Power Audits'
    ],
    highlight: false
  }
];
