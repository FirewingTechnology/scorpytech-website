export const labCategories = [
  { id: 'all', label: 'All Equipment', emoji: '🔬' },
  { id: 'analytical', label: 'Analytical Chemistry', emoji: '🧪' },
  { id: 'biotech', label: 'Biotech & Life Sciences', emoji: '🧬' },
  { id: 'electronics', label: 'Electronics & STEM', emoji: '⚡' },
  { id: 'cleanroom', label: 'Lab Furniture & Cleanroom', emoji: '🏢' },
  { id: 'thermal', label: 'Thermal & Ovens', emoji: '🔥' }
];

export const labEquipmentList = [
  {
    id: 'spectro-uv',
    name: 'Dual-Beam UV-Vis Spectrophotometer',
    category: 'analytical',
    emoji: '🧪',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    specs: 'Wavelength Range: 190nm - 1100nm | Bandwidth: 1.0nm | Stray Light: ≤0.03%T',
    description: 'High-precision double beam optical system ideal for pharmaceutical QC, biochemistry quantification, and academic research.',
    applications: 'DNA/Protein concentration, chemical kinetics, organic compound identification.',
    standard: 'NABL & CE Certified'
  },
  {
    id: 'centrifuge-refrig',
    name: 'High-Speed Refrigerated Microcentrifuge',
    category: 'biotech',
    emoji: '🧬',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    specs: 'Max Speed: 18,500 RPM | Temp Range: -20°C to +40°C | Capacity: 24 x 1.5/2.0 mL',
    description: 'Microprocessor controlled centrifuge with CFC-free refrigeration, brushless induction drive, and automatic imbalance detection.',
    applications: 'Cell separation, RNA/DNA isolation, molecular biology protein precipitate pellets.',
    standard: 'ISO 13485 Compliant'
  },
  {
    id: 'oscilloscope-digital',
    name: 'Mixed Signal Digital Storage Oscilloscope (MSO)',
    category: 'electronics',
    emoji: '⚡',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    specs: 'Bandwidth: 200 MHz / 4 Channels | Sample Rate: 2 GSa/s | 16 Digital Channels',
    description: 'Enterprise grade oscilloscope with deep memory, hardware decoding (I2C, SPI, UART, CAN), and built-in arbitrary waveform generator.',
    applications: 'VLSI testing, IoT hardware debugging, automotive electronic bus validation.',
    standard: 'IEEE 488 / USB-TMC'
  },
  {
    id: 'biosafety-cabinet',
    name: 'Class II Type A2 Biosafety Cabinet (BSL-2)',
    category: 'cleanroom',
    emoji: '🛡️',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    specs: '70% Air Recirculation / 30% HEPA Exhaust | 99.999% at 0.3μm Retention | SS 304 Interior',
    description: 'Guarantees complete operator, product, and environmental protection during biological agent handling and sterile culture transfer.',
    applications: 'Cell culture, microbiology research, pathology sample preparation.',
    standard: 'EN 12469 / NSF 49 Standard'
  },
  {
    id: 'analytical-balance',
    name: 'Ultra-Micro Analytical Balance (0.0001g)',
    category: 'analytical',
    emoji: '⚖️',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    specs: 'Readability: 0.1 mg | Max Capacity: 220g | Auto Internal Calibration Motorized',
    description: 'Monobloc weighing cell with draft glass shield, electro-magnetic force restoration, and RS232/USB GLP/GMP print output.',
    applications: 'Analytical titration, formulation weighing, pharmacopoeia standards compliance.',
    standard: 'OIML Class I & Legal Metrology'
  },
  {
    id: 'muffle-furnace',
    name: 'High-Temperature Laboratory Muffle Furnace',
    category: 'thermal',
    emoji: '🔥',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    specs: 'Max Temp: 1400°C | Chamber Vol: 12 Liters | PID 30-Segment Programmable Controller',
    description: 'Fiber-insulated ceramic chamber with Kanthal heating coils, over-temperature cutoff, and rapid thermal recovery cycle.',
    applications: 'Ashing test, material sintering, heat treatment, ceramic annealing.',
    standard: 'CE Safety Marked'
  },
  {
    id: 'fume-hood-ductless',
    name: 'Chemical Ducted Aerodynamic Fume Hood',
    category: 'cleanroom',
    emoji: '💨',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    specs: 'Air Velocity: 0.5 m/s | PP Chemical Liner | Counterbalanced Toughened Glass Sash',
    description: 'Custom engineered fume exhaust hood equipped with integrated wet scrubber, gas/nitrogen service valves, and hazardous vapor extraction.',
    applications: 'Acid digestion, organic synthesis, volatile solvent distillation.',
    standard: 'ASHRAE 110 Tested'
  },
  {
    id: 'rf-spectrum-analyzer',
    name: 'Gigahertz RF Spectrum & Network Analyzer',
    category: 'electronics',
    emoji: '📡',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    specs: 'Frequency: 9 kHz - 3.2 GHz | DANL: -161 dBm/Hz | RBW: 1 Hz to 3 MHz',
    description: 'High-sensitivity electromagnetic spectrum analyzer for pre-compliance EMI/EMC scans, wireless transmitter testing, and microwave labs.',
    applications: '5G/Wi-Fi prototyping, RF filter tuning, antenna return-loss measurement.',
    standard: 'Rohde & Schwarz / Rigol Calibrated'
  }
];

export const turnkeyLabProcess = [
  {
    step: '01',
    title: 'Architectural & Utility CAD Planning',
    desc: '3D layout design optimizing sample flow, ESD zoning, gas pipelines, clean electrical grounding, and chemical safety containment.',
    emoji: '📐'
  },
  {
    step: '02',
    title: 'Certified Sourcing & Delivery',
    desc: 'Procurement directly from certified global manufacturers ensuring authentic instrumentation, warranties, and spares availability.',
    emoji: '📦'
  },
  {
    step: '03',
    title: 'On-Site Commissioning & Testing',
    desc: 'Precision leveling, vibration isolation, power calibration, and rigorous load testing by our Pune field engineers.',
    emoji: '🛠️'
  },
  {
    step: '04',
    title: 'NABL IQ/OQ/PQ & Staff Training',
    desc: 'Comprehensive Installation, Operational, and Performance Qualification documentation plus hands-on faculty and staff SOP training.',
    emoji: '🎓'
  }
];
