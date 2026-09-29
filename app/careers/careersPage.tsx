"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Briefcase, 
  Globe, 
  GraduationCap, 
  HeartHandshake, 
  Zap, 
  Code2, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Send, 
  X, 
  Loader2, 
  Building2, 
  Users, 
  ShieldCheck,
  Upload,
  FileText,
  Trash2,
  FileCheck,
  Mail
} from "lucide-react";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { toast } from "sonner";
import emailjs from "emailjs-com";

type JobRole = {
  id: string;
  title: string;
  department: "engineering" | "ai" | "design" | "product";
  departmentLabel: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

const jobRoles: JobRole[] = [
  {
    id: "sr-fullstack-dev",
    title: "Senior Full-Stack Engineer (Next.js / Node.js)",
    department: "engineering",
    departmentLabel: "Engineering",
    location: "Remote / Hybrid (USA / Sri Lanka)",
    type: "Full-Time",
    experience: "4+ Years",
    description:
      "Architect and build scalable web applications using Next.js 15, TypeScript, React 19, and Node.js microservices. You will lead core feature developments for our enterprise software suite.",
    responsibilities: [
      "Develop responsive, high-performance web applications using React/Next.js and TypeScript.",
      "Design and maintain scalable RESTful APIs and GraphQL services with Node.js/Express.",
      "Optimize application load times, bundle sizes, and database query performance.",
      "Collaborate with product designers and backend engineers in an agile squad environment."
    ],
    requirements: [
      "Strong proficiency in React 18/19, Next.js (App Router), TypeScript, and Tailwind CSS.",
      "Solid experience with Node.js, PostgreSQL/MongoDB, and Redis caching.",
      "Familiarity with Docker, CI/CD pipelines, and cloud platforms (AWS or Azure).",
      "Excellent problem-solving skills and passion for clean, maintainable code."
    ],
    niceToHave: [
      "Experience with Next.js 15 App Router & Server Actions.",
      "Familiarity with Tailwind CSS and Framer Motion micro-interactions.",
      "Prior experience in B2B SaaS healthcare or enterprise software."
    ]
  },
  {
    id: "ai-ml-engineer",
    title: "AI & Machine Learning Engineer",
    department: "ai",
    departmentLabel: "AI & Data Science",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Drive intelligent automation across GPV products. Implement LLMs, predictive models, and computer vision algorithms for medical imaging and automated adjudication systems.",
    responsibilities: [
      "Design, train, and deploy machine learning and deep learning models into production.",
      "Build AI pipelines for automated medical claims processing and intelligent text analysis.",
      "Integrate OpenAI, Claude API, and custom fine-tuned transformer models.",
      "Monitor model performance, latency, and drift in live production environments."
    ],
    requirements: [
      "Strong background in Python, PyTorch/TensorFlow, scikit-learn, and Hugging Face.",
      "Experience with LLM orchestration (LangChain, LlamaIndex) and Vector DBs (Pinecone, Qdrant).",
      "Understanding of REST APIs and model deployment with FastAPI/Docker.",
      "Bachelor's or Master's degree in Computer Science, AI, or related quantitative field."
    ],
    niceToHave: [
      "Hands-on experience fine-tuning Llama-3 or Mistral models.",
      "Contributions to open-source AI frameworks or published research.",
      "Experience with GPU acceleration (CUDA, TensorRT)."
    ]
  },
  {
    id: "medical-imaging-dev",
    title: "Medical Imaging & DICOM Software Developer",
    department: "engineering",
    departmentLabel: "Healthcare Tech",
    location: "Remote (USA / Canada / Sri Lanka)",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Join the Photon XR core engineering team to build web-based DICOM viewers, PACS integration protocols, and high-fidelity radiological visualization tools.",
    responsibilities: [
      "Develop WebGL and WebAssembly-powered DICOM image rendering algorithms.",
      "Implement DICOM Web (WADO-RS, QIDO-RS, STOW-RS) communication protocols.",
      "Ensure strict HIPAA compliance, data encryption, and zero-footprint web security.",
      "Work closely with radiologists and healthcare IT teams to refine clinical UX."
    ],
    requirements: [
      "Experience with DICOM standards, PACS/RIS architecture, and health IT protocols.",
      "Proficiency in JavaScript/TypeScript, WebGL, Cornerstone.js, or VTK.js.",
      "Understanding of medical image processing, windowing, and 3D MPR rendering.",
      "Strong commitment to software quality and regulatory compliance."
    ],
    niceToHave: [
      "Familiarity with Cornerstone3D, OHIF Viewer, or Orthanc PACS.",
      "Experience with WebAssembly (Wasm) DICOM decompression.",
      "Knowledge of FDA medical device software guidelines."
    ]
  },
  {
    id: "sr-ui-ux-designer",
    title: "Senior UI/UX & Product Designer",
    department: "design",
    departmentLabel: "Product Design",
    location: "Remote",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Craft intuitive, human-centered user interfaces for complex healthcare, aviation, and marketplace software platforms. Turn complex workflows into elegant user experiences.",
    responsibilities: [
      "Lead user research, wireframing, interactive prototyping, and visual design in Figma.",
      "Maintain and evolve GPV’s design system and component libraries.",
      "Conduct usability testing sessions with domain experts and end-users.",
      "Work side-by-side with frontend developers to ensure pixel-perfect implementation."
    ],
    requirements: [
      "Strong portfolio demonstrating end-to-end UX/UI design for complex web/mobile platforms.",
      "Mastery of Figma, design tokens, micro-interactions, and design systems.",
      "Understanding of modern Web CSS capabilities (Tailwind, Framer Motion animations).",
      "Great communication skills and ability to articulate design decisions."
    ],
    niceToHave: [
      "Experience designing complex B2B SaaS dashboards.",
      "Basic understanding of React / HTML / Tailwind implementation.",
      "Motion design skills (Lottie, Rive, or After Effects)."
    ]
  },
  {
    id: "cloud-devops-specialist",
    title: "Cloud Infrastructure & DevOps Engineer",
    department: "engineering",
    departmentLabel: "Infrastructure",
    location: "Remote",
    type: "Full-Time",
    experience: "4+ Years",
    description:
      "Build, secure, and scale high-availability cloud infrastructure on Azure and AWS. Automate multi-region deployments, monitoring, and security controls.",
    responsibilities: [
      "Manage Infrastructure as Code (IaC) using Terraform / Bicep.",
      "Maintain automated CI/CD pipelines via GitHub Actions and Azure DevOps.",
      "Implement zero-trust security controls, IAM, and compliance monitoring.",
      "Optimize cloud infrastructure cost, elasticity, and uptime (99.99% target)."
    ],
    requirements: [
      "Deep expertise in Microsoft Azure and AWS cloud services.",
      "Hands-on experience with Kubernetes (AKS/EKS), Docker, Terraform, and Nginx.",
      "Knowledge of SOC2, HIPAA, and ISO 27001 security compliance controls.",
      "Strong scripting abilities in Bash, Python, or PowerShell."
    ],
    niceToHave: [
      "Certified Azure Solutions Architect or AWS DevOps Engineer.",
      "Experience with service meshes (Istio, Linkerd) and Prometheus/Grafana.",
      "Automated security scanning with SonarQube & Trivy."
    ]
  },
  {
    id: "product-manager",
    title: "Enterprise Product Manager",
    department: "product",
    departmentLabel: "Product Management",
    location: "Hybrid (USA / Sri Lanka)",
    type: "Full-Time",
    experience: "4+ Years",
    description:
      "Own product roadmaps, requirements gathering, and feature prioritization for GPV's enterprise products. Bridge business goals with engineering execution.",
    responsibilities: [
      "Define product strategy, user stories, acceptance criteria, and roadmap milestones.",
      "Engage with enterprise clients, dental clinics, and partners to discover unmet needs.",
      "Collaborate with UI/UX and Engineering teams to deliver high-value releases on schedule.",
      "Track key product telemetry metrics, adoption rates, and customer satisfaction."
    ],
    requirements: [
      "Proven track record managing B2B SaaS or enterprise software products.",
      "Strong technical literacy — able to converse comfortably with software architects.",
      "Data-driven mindset with experience in product analytics tools.",
      "Exceptional leadership, stakeholder management, and written communication."
    ],
    niceToHave: [
      "Prior experience as a software engineer or UI/UX designer.",
      "Familiarity with Agile Scrum/Kanban tools (Jira, Linear).",
      "Experience launching HIPAA-compliant software products."
    ]
  }
];

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedJob, setSelectedJob] = useState<JobRole | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<"description" | "application">("description");
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvFileBase64, setCvFileBase64] = useState<string>("");

  const [applicantForm, setApplicantForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    portfolio: "",
    message: ""
  });

  const filteredJobs = selectedCategory === "all"
    ? jobRoles
    : jobRoles.filter((job) => job.department === selectedCategory);

  const handleOpenApplyModal = (job: JobRole, initialTab: "description" | "application" = "description") => {
    setSelectedJob(job);
    setActiveModalTab(initialTab);
    setCvFile(null);
    setCvFileBase64("");
    setApplicantForm((prev) => ({
      ...prev,
      position: job.title
    }));
    setIsApplyModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate File Type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      toast.error("Invalid file format. Please upload a PDF or DOC file.");
      return;
    }

    // Validate File Size (Max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size exceeds 5MB limit. Please upload a smaller file.");
      return;
    }

    setCvFile(file);

    // Convert to Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setCvFileBase64(reader.result as string);
    };
    reader.readAsDataURL(file);
    toast.success(`CV attached: ${file.name}`);
  };

  const handleRemoveFile = () => {
    setCvFile(null);
    setCvFileBase64("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicantForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cvFile) {
      toast.error("Please upload your CV / Resume (PDF or DOC) before submitting.");
      return;
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_46wnwgj";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "template_sm7vyun";
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "RSYKiGw4dibVK-Rl9";

    const messageDetails = [
      `=== CAREER APPLICATION ===`,
      `Position Applied: ${applicantForm.position || "General Application"}`,
      `Applicant Name: ${applicantForm.fullName}`,
      `Applicant Email: ${applicantForm.email}`,
      `Applicant Phone: ${applicantForm.phone || "N/A"}`,
      `LinkedIn Profile: ${applicantForm.linkedin || "N/A"}`,
      `GitHub / Portfolio: ${applicantForm.portfolio || "N/A"}`,
      `CV / Resume File: ${cvFile.name} (${(cvFile.size / 1024).toFixed(1)} KB)`,
      ``,
      `--- Cover Note / Additional Details ---`,
      `${applicantForm.message || "No additional note provided."}`
    ].join("\n");

    const templateParams: Record<string, any> = {
      to_email: "info@globalpearlventures.com",
      title: `Job Application: ${applicantForm.position} - ${applicantForm.fullName}`,
      name: applicantForm.fullName,
      email: applicantForm.email,
      phone: applicantForm.phone || "N/A",
      companyName: `Career Application (${applicantForm.position})`,
      message: messageDetails,
    };

    // EmailJS Free Tier has a 50KB request size limit.
    // Only attach Base64 if small (< 40KB) to prevent HTTP 400 Bad Request error from EmailJS.
    if (cvFileBase64 && cvFileBase64.length < 40000) {
      templateParams.my_file = cvFileBase64;
    }

    try {
      const res = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      if (res.status === 200 || res.text === "OK") {
        toast.success("Application submitted successfully! Our talent team will contact you soon.");
        setIsApplyModalOpen(false);
        setCvFile(null);
        setCvFileBase64("");
        setApplicantForm({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          linkedin: "",
          portfolio: "",
          message: ""
        });
      }
    } catch (err: any) {
      console.error("EmailJS Career Application Error:", err);
      const errorMsg = err?.text || err?.message || "Failed to submit application. Please try again.";
      toast.error(`Submission Error: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* ── Hero Section ── */}
      <section className="relative text-center py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-white border-b border-gray-100">
        <BackgroundAnimation />

        <div className="relative max-w-4xl mx-auto z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Join Our Global Team
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-5 leading-[1.12]">
            Build the Future of Technology at{" "}
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Global Pearl Ventures
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            We are on a mission to deliver world-class software solutions. Join a passionate, global team of engineers, designers, and domain experts building impactful products for healthcare, aviation, education, and enterprise sectors.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="#open-positions"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Open Roles</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#why-gpv"
              className="inline-flex items-center gap-2 border border-gray-300 bg-white text-gray-700 font-semibold text-base px-8 py-3.5 rounded-full hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-700 transition-all duration-300"
            >
              <span>Life at GPV</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Culture & Perks Bento Grid Section ── */}
      <section id="why-gpv" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3 shadow-sm">
              <HeartHandshake className="h-3.5 w-3.5 text-blue-600" />
              Life & Culture at GPV
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Why You&apos;ll Love{" "}
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Working With Us
              </span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              We foster an environment of continuous growth, technical excellence, autonomy, and work-life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bento Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/20 group-hover:bg-blue-100 transition-colors">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Impact</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Work on flagship applications like Photon XR, Dentax, Voxa, and EduCore used by professionals and healthcare providers around the world.
              </p>
            </div>

            {/* Bento Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 ring-1 ring-teal-500/20 group-hover:bg-teal-100 transition-colors">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dedicated budgets for professional certifications, tech conferences, workshops, and access to state-of-the-art AI tooling.
              </p>
            </div>

            {/* Bento Card 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-200 hover:shadow-xl">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 ring-1 ring-purple-500/20 group-hover:bg-purple-100 transition-colors">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible & Remote First</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enjoy flexible working hours, hybrid options, and remote work freedom designed around trust, output, and autonomy.
              </p>
            </div>

            {/* Bento Card 4 */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/20 group-hover:bg-emerald-100 transition-colors">
                <Code2 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Tech Stack</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Build with React 19, Next.js 15, TypeScript, Python AI models, WebGL DICOM rendering, Azure Cloud, and Docker.
              </p>
            </div>

            {/* Bento Card 5 */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-xl">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-500/20 group-hover:bg-indigo-100 transition-colors">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Culture</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Work alongside supportive teammates across the USA, Canada, and Sri Lanka. We value transparent communication and mutual respect.
              </p>
            </div>

            {/* Bento Card 6 */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-200 hover:shadow-xl">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-500/20 group-hover:bg-rose-100 transition-colors">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Benefits</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Attractive compensation packages, annual performance bonuses, wellness support, and career progression pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Positions Section ── */}
      <section id="open-positions" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3 shadow-sm">
              <Briefcase className="h-3.5 w-3.5 text-blue-600" />
              Current Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Open{" "}
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Positions
              </span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Discover your next career milestone with GPV. Browse our open positions below.
            </p>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { id: "all", label: "All Departments" },
                { id: "engineering", label: "Engineering" },
                { id: "ai", label: "AI & Data Science" },
                { id: "design", label: "Product Design" },
                { id: "product", label: "Product Management" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    selectedCategory === tab.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group rounded-3xl border border-gray-200 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      <Building2 className="h-3 w-3" />
                      {job.departmentLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                      <Clock className="h-3 w-3" />
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                    {job.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      Experience: {job.experience}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <button
                    onClick={() => handleOpenApplyModal(job, "description")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>See More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12 text-gray-500 text-sm">
                No open positions in this department right now. Feel free to submit a general application below!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Job Details & Application Form Modal ── */}
      {isApplyModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] border border-gray-100 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 bg-gray-100 p-2 rounded-full transition-colors z-10 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header & Navigation Tabs */}
            <div className="mb-6 pb-4 border-b border-gray-100 pr-8">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <Building2 className="h-3 w-3" />
                  {selectedJob.departmentLabel}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                  <MapPin className="h-3 w-3" />
                  {selectedJob.location}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                  <Clock className="h-3 w-3" />
                  {selectedJob.type}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {selectedJob.title}
              </h3>

              {/* ── Top Tabs: Description vs Application (COMMENTED OUT FOR FUTURE USE) ── */}
              {/*
              <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-2xl border border-gray-200/80 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveModalTab("description")}
                  className={`flex-1 sm:flex-initial py-2.5 px-5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeModalTab === "description"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Job Description
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalTab("application")}
                  className={`flex-1 sm:flex-initial py-2.5 px-5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeModalTab === "application"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Application Form
                </button>
              </div>
              */}
            </div>

            {/* Modal Body */}
            {activeModalTab === "description" ? (
              /* ── Tab 1: Job Description View ── */
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Role Overview</h4>
                  <p className="text-gray-700 text-sm leading-relaxed bg-blue-50/40 p-4 rounded-2xl border border-blue-100">
                    {selectedJob.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedJob.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-1.5">
                    <Zap className="h-4 w-4 text-amber-500" />
                    Requirements & Qualifications
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedJob.niceToHave && selectedJob.niceToHave.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                      Nice to Have
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedJob.niceToHave.map((nth, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                          <span>{nth}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ── Direct Email Submission Banner ── */}
                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-teal-50 to-emerald-50 border border-blue-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-600 text-white rounded-xl shrink-0 shadow-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-gray-900">How to Apply</h5>
                      <p className="text-xs text-gray-600 mt-0.5">
                        If interested, please send your CV mentioning the position to{" "}
                        <a
                          href="mailto:info@globalpearlventures.com"
                          className="font-bold text-blue-600 hover:underline"
                        >
                          info@globalpearlventures.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <a
                    href={`mailto:info@globalpearlventures.com?subject=${encodeURIComponent(`Job Application: ${selectedJob.title}`)}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold text-xs px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-sm shrink-0"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Send Email CV</span>
                  </a>
                </div>

                {/* ── Apply Button (COMMENTED OUT FOR FUTURE USE) ── */}
                {/*
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveModalTab("application")}
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Apply for this Position</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                */}
              </div>
            ) : (
              /* ── Tab 2: Application Form View (COMMENTED OUT FOR FUTURE USE) ── */
              /*
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Full Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="John Doe"
                      value={applicantForm.fullName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Email Address <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={applicantForm.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={applicantForm.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="linkedin" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      placeholder="https://linkedin.com/in/username"
                      value={applicantForm.linkedin}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Upload CV / Resume <span className="text-blue-600">* (PDF or DOC, Max 5MB)</span>
                  </label>

                  {!cvFile ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="group border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-2xl p-6 text-center cursor-pointer transition-all bg-slate-50/50 hover:bg-blue-50/30 flex flex-col items-center justify-center space-y-2"
                    >
                      <div className="p-3 bg-blue-100/60 text-blue-600 rounded-full group-hover:scale-110 transition-transform">
                        <Upload className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                          Click to upload your CV
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          PDF, DOC, or DOCX formats accepted (up to 5MB)
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-4 border border-emerald-200 bg-emerald-50/60 rounded-2xl text-sm">
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl shrink-0">
                          <FileCheck className="h-5 w-5" />
                        </div>
                        <div className="truncate">
                          <p className="font-semibold text-emerald-900 truncate">
                            {cvFile.name}
                          </p>
                          <p className="text-xs text-emerald-700">
                            {(cvFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to submit
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors shrink-0 ml-2"
                        title="Remove file"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Portfolio / GitHub / Website Link <span className="text-gray-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    placeholder="https://github.com/username or Portfolio site"
                    value={applicantForm.portfolio}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Cover Note / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us briefly about your background and why you want to join GPV..."
                    value={applicantForm.message}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50/50 resize-y"
                  ></textarea>
                </div>

                <div className="pt-3 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(false)}
                    className="px-6 py-3 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin h-4 w-4" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
              */
              null
            )}
          </div>
        </div>
      )}

      {/* CSS for hiding scrollbar */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;             /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
}
