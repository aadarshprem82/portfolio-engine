export type KnowledgeItem = {
  id: string;
  keywords: string[];
  data: {
    title: string;
    experiences: string[];
    projects: {
      name: string;
      impact: string;
    }[];
    thoughts: string;
    confidence: {
      level: "low" | "medium" | "high";
      reason: string;
    };
    related: string[];
  };
};

export const knowledge: KnowledgeItem[] = [{
    id: "portfolio_engine_architecture",
    keywords: [
      "portfolio engine",
      "architecture",
      "system design",
      "query engine",
      "knowledge graph",
      "project structure",
      "design this project",
      "how is this built"
    ],
    data: {
      title: "Portfolio Engine Architecture",
      experiences: [
        "Designed the portfolio as a query-driven system instead of a static multi-page website.",
        "Structured the application into retrieval, API, rendering, and UI layers for clean separation of concerns.",
        "Used Next.js App Router to combine frontend UI and backend routes in one codebase."
      ],
      projects: [
        {
          name: "Portfolio Engine",
          impact: "Created an interactive portfolio experience with scalable architecture."
        }
      ],
      thoughts:
        "I wanted the portfolio to represent how I think as an engineer, not just display information. So I approached it like a product with clear layers: input, retrieval, response generation, and presentation.",
      confidence: {
        level: "high",
        reason: "End-to-end architecture was personally designed and implemented."
      },
      related: [
        "search system",
        "next.js architecture",
        "frontend system design"
      ]
    }
  },

  {
    id: "portfolio_engine_search",
    keywords: [
      "search",
      "query",
      "query engine",
      "matching",
      "retrieval",
      "intent detection",
      "keyword search",
      "how does search work"
    ],
    data: {
      title: "Search and Query Engine",
      experiences: [
        "Built a custom query engine to map user input to relevant experience nodes.",
        "Implemented keyword scoring to identify strongest matches from the knowledge base.",
        "Added fallback logic for weak matches to maintain useful responses."
      ],
      projects: [
        {
          name: "Intent Matching Engine",
          impact: "Enabled users to search experience using natural language queries."
        }
      ],
      thoughts:
        "I started with deterministic keyword matching because it is transparent, fast, and easy to improve later into fuzzy search or embeddings.",
      confidence: {
        level: "high",
        reason: "Search layer implemented directly inside the project."
      },
      related: [
        "semantic search",
        "ai fallback",
        "full stack"
      ]
    }
  },

  {
    id: "portfolio_engine_uiux",
    keywords: [
      "ui",
      "ux",
      "design",
      "frontend",
      "interface",
      "user experience",
      "response panel",
      "tailwind"
    ],
    data: {
      title: "UI / UX Design",
      experiences: [
        "Built a minimal interface focused on clarity, spacing, and fast interaction.",
        "Used Tailwind CSS for responsive styling and consistent design tokens.",
        "Created a structured response panel to present insights instead of raw text."
      ],
      projects: [
        {
          name: "Interactive Response UI",
          impact: "Improved readability and made the portfolio feel like a product."
        }
      ],
      thoughts:
        "I intentionally avoided flashy visuals and focused on product-like usability. The interface should feel clean, confident, and easy to explore.",
      confidence: {
        level: "high",
        reason: "UI decisions were iterated directly during development."
      },
      related: [
        "tailwind css",
        "minimal ui",
        "frontend performance"
      ]
    }
  },

  {
    id: "portfolio_engine_modes",
    keywords: [
      "mode",
      "recruiter mode",
      "engineer mode",
      "dual mode",
      "audience",
      "different views"
    ],
    data: {
      title: "Audience-Aware Mode Switching",
      experiences: [
        "Implemented Recruiter mode for concise, impact-focused summaries.",
        "Implemented Engineer mode for deeper technical explanations and reasoning.",
        "Used a single knowledge source while changing output depth based on audience."
      ],
      projects: [
        {
          name: "Mode Toggle System",
          impact: "Made the same project useful for technical and non-technical viewers."
        }
      ],
      thoughts:
        "Different audiences need different levels of detail. Instead of changing content manually, I designed a system that adapts presentation dynamically.",
      confidence: {
        level: "high",
        reason: "Feature implemented directly in the response layer."
      },
      related: [
        "product thinking",
        "user personas",
        "response panel"
      ]
    }
  },

  {
    id: "portfolio_engine_ai_layer",
    keywords: [
      "ai",
      "gemini",
      "fallback",
      "llm",
      "chatbot",
      "ai integration",
      "generative ai"
    ],
    data: {
      title: "AI Fallback Layer",
      experiences: [
        "Integrated Gemini API as a fallback when direct knowledge matches are weak.",
        "Designed hybrid logic: deterministic retrieval first, AI generation second.",
        "Used prompts that keep responses grounded in personal project context."
      ],
      projects: [
        {
          name: "Hybrid Retrieval + AI System",
          impact: "Improved coverage while preserving trust and relevance."
        }
      ],
      thoughts:
        "AI should assist the system, not replace it. I prioritized knowledge-first responses and only used generation when retrieval confidence was low.",
      confidence: {
        level: "medium",
        reason: "Architecture planned and partially integrated with room for future upgrades."
      },
      related: [
        "rag system",
        "semantic search",
        "prompt engineering"
      ]
    }
  },

  {
    id: "portfolio_engine_deployment",
    keywords: [
      "deploy",
      "vercel",
      "production",
      "hosting",
      "live project",
      "deployment"
    ],
    data: {
      title: "Deployment and Production Readiness",
      experiences: [
        "Prepared the application for deployment using Vercel.",
        "Used Next.js full-stack structure to simplify production hosting.",
        "Focused on maintainable code structure for future enhancements."
      ],
      projects: [
        {
          name: "Live Portfolio Deployment",
          impact: "Made the project publicly accessible with minimal ops overhead."
        }
      ],
      thoughts:
        "I chose tools that reduce infrastructure friction so I could focus on product quality and iteration speed.",
      confidence: {
        level: "high",
        reason: "Deployment path is straightforward and production-friendly."
      },
      related: [
        "next.js hosting",
        "vercel setup",
        "scalability"
      ]
    }
  },
  {
    id: "frontend_fullstack",
    keywords: ["react", "javascript", "ui", "ux", "frontend", "fullstack"],
    data: {
      title: "Frontend & Fullstack Exposure",
      experiences: [
        "Worked with React and JavaScript",
        "Developed interactive features in games",
        "Built Streamlit apps for user-facing tools"
      ],
      projects: [
        {
          name: "Team Splitter App",
          impact: "Interactive UI with logic-driven backend"
        }
      ],
      thoughts: "Frontend should remain simple and intuitive while backend handles complexity.",
      confidence: {
        level: "medium",
        reason: "Used in projects and game development but not primary role"
      },
      related: ["ui ux", "web apps", "fullstack"]
    }
  },
  {
    id: "debugging_problem_solving",
    keywords: ["debugging", "problem solving", "analysis"],
    data: {
      title: "Problem Solving & Debugging",
      experiences: [
        "Debugged complex software issues in production-like environments",
        "Performed performance tuning in games reducing crashes",
        "Identified critical bugs during regression testing",
        "Worked in high-reliability environments requiring precision"
      ],
      projects: [
        {
          name: "Game Optimization",
          impact: "Reduced crash rate by 15%"
        }
      ],
      thoughts: "Focus on root cause analysis instead of patch fixes to ensure long-term stability.",
      confidence: {
        level: "high",
        reason: "Applied across multiple domains including QA and game development"
      },
      related: ["system reliability", "performance tuning"]
    }
  },
  {
    id: "agile_collaboration",
    keywords: ["agile", "jira", "teamwork", "scrum"],
    data: {
      title: "Agile & Collaboration",
      experiences: [
        "Participated in Agile ceremonies including stand-ups and sprint planning",
        "Used Jira and Confluence for tracking and documentation",
        "Reduced sprint rollover by 15%",
        "Collaborated with cross-functional teams"
      ],
      projects: [
        {
          name: "Agile Delivery Process",
          impact: "Improved sprint efficiency and team coordination"
        }
      ],
      thoughts: "Clear communication and structured workflows are key to maintaining delivery speed and quality.",
      confidence: {
        level: "high",
        reason: "Consistent use in professional work environment"
      },
      related: ["project management", "team leadership", "delivery"]
    }
  },
  {
    id: "data_analytics",
    keywords: ["data", "pandas", "numpy", "ml", "visualization"],
    data: {
      title: "Data & Analytics",
      experiences: [
        "Worked with Pandas, NumPy, and Scikit-learn",
        "Used Power BI and Tableau for visualization",
        "Applied data-driven approaches in projects",
        "Learned supervised learning techniques"
      ],
      projects: [
        {
          name: "Machine Learning Training",
          impact: "Built foundational understanding of ML workflows and visualization"
        }
      ],
      thoughts: "Leverage data to drive decisions, but prioritize clarity and interpretability over overly complex models.",
      confidence: {
        level: "medium",
        reason: "Academic and project-based exposure with practical tooling"
      },
      related: ["machine learning", "data visualization", "analytics"]
    }
  },
  {
    id: "game_development",
    keywords: ["game dev", "unity", "c#", "cocos", "performance"],
    data: {
      title: "Game Development",
      experiences: [
        "Developed game logic using C#, .Net, JavaScript, and TypeScript",
        "Worked with Unity and Cocos engines",
        "Contributed to 3 successful game releases",
        "Reduced crash rates by 15% through debugging and optimization",
        "Integrated third-party SDKs for monetization and analytics",
        "Refactored codebase reducing duplication by 40%"
      ],
      projects: [
        {
          name: "Mobile & Web Games",
          impact: "Improved performance and maintainability across multiple releases"
        }
      ],
      thoughts: "Focused on modular design and performance optimization to ensure scalable and maintainable game systems.",
      confidence: {
        level: "high",
        reason: "Real-world shipped games with measurable impact"
      },
      related: ["performance optimization", "real-time systems", "software architecture"]
    }
  },
  {
    id: "python_automation",
    keywords: ["python", "automation", "scripting", "frameworks"],
    data: {
      title: "Python & Automation Systems",
      experiences: [
        "Built automation scripts for testing and reporting",
        "Worked with Playwright and Robot Framework",
        "Enhanced existing systems using Python",
        "Applied Python for image processing and logic building"
      ],
      projects: [
        {
          name: "ASCII Art Generator",
          impact: "Converted images into ASCII using pixel intensity mapping"
        },
        {
          name: "Team Splitter App",
          impact: "Built intelligent team balancing logic using player ratings"
        }
      ],
      thoughts: "Prefer Python for rapid development and automation due to its readability and strong ecosystem.",
      confidence: {
        level: "high",
        reason: "Used across testing, scripting, and projects consistently"
      },
      related: ["data processing", "automation frameworks", "scripting"]
    }
  },
  {
    id: "backend_api_engineering",
    keywords: ["backend", "api", "python", "rest", "sql"],
    data: {
      title: "Backend & API Engineering",
      experiences: [
        "Worked on API testing and validation using Postman",
        "Contributed to backend-related automation and reporting systems",
        "Developed Python-based enhancements for report generation systems",
        "Used SQL and PL-SQL for data handling and querying"
      ],
      projects: [
        {
          name: "Reporting System Enhancement",
          impact: "Improved efficiency and usability of generated reports"
        }
      ],
      thoughts: "Strong focus on reliability and validation of APIs rather than just building endpoints, ensuring production stability.",
      confidence: {
        level: "medium",
        reason: "Indirect backend experience through testing, automation, and data handling"
      },
      related: ["system design", "database optimization", "api validation"]
    }
  },
  {
    id: "devops_ci_cd",
    keywords: ["devops", "jenkins", "ci cd", "ci", "cd", "deployment", "automation", "automation pipelines"],
    data: {
      title: "DevOps & CI/CD",
      experiences: [
        "Integrated Jenkins pipelines for automated build, test, and deployment",
        "Enabled CI/CD across three staging environments",
        "Worked with Docker and DevOps fundamentals",
        "Improved release reliability and deployment consistency"
      ],
      projects: [
        {
          name: "Jenkins Pipeline Integration",
          impact: "Automated multi-environment deployments and reduced manual intervention"
        }
      ],
      thoughts: "Focused on automating repetitive workflows early to improve team velocity and reduce human error in deployments.",
      confidence: {
        level: "medium",
        reason: "Practical experience integrating CI/CD pipelines in production environments"
      },
      related: ["cloud", "automation", "infrastructure"]
    }
  },
  {
    id: "test_automation_engineering",
    keywords: ["automation", "testing", "qa", "playwright", "robot framework", "api testing"],
    data: {
      title: "Test Automation Engineering",
      experiences: [
        "Developed automated test suites using Python (Robot Framework, Playwright)",
        "Increased UI/API test coverage by 30%",
        "Reduced manual testing effort by 40%",
        "Performed regression testing to catch critical bugs before release",
        "Contributed to API test planning and validation strategies"
      ],
      projects: [
        {
          name: "Image Comparison Testing Framework",
          impact: "Enhanced accuracy and reliability of UI validation"
        }
      ],
      thoughts: "Automation should focus on reducing repetitive manual effort while improving reliability. Prioritized API and UI automation to ensure end-to-end quality.",
      confidence: {
        level: "high",
        reason: "Hands-on production experience in enterprise QA systems at Wipro"
      },
      related: ["quality engineering", "api testing", "test frameworks"]
    }
  },
  {
    id: "system_reliability",
    keywords: ["reliability", "stability", "testing"],
    data: {
      title: "System Reliability",
      experiences: [
        "Ensured stable releases through regression testing",
        "Caught critical bugs before production",
        "Improved system robustness"
      ],
      projects: [
        {
          name: "Release Validation Systems",
          impact: "Reduced production failures"
        }
      ],
      thoughts: "Reliability comes from proactive testing and monitoring.",
      confidence: {
        level: "high",
        reason: "Core QA responsibility"
      },
      related: ["quality_engineering", "debugging_problem_solving"]
    }
  },
  {
    id: "project_management",
    keywords: ["management", "planning", "delivery"],
    data: {
      title: "Project Management",
      experiences: [
        "Participated in sprint planning and reviews",
        "Managed tasks via Jira",
        "Ensured timely delivery of testing cycles"
      ],
      projects: [
        {
          name: "Agile Sprint Execution",
          impact: "Reduced sprint rollover by 15%"
        }
      ],
      thoughts: "Clear planning and tracking ensures predictable delivery.",
      confidence: {
        level: "high",
        reason: "Consistent Agile exposure"
      },
      related: ["agile_collaboration", "team_leadership"]
    }
  },
  {
    id: "data_visualization",
    keywords: ["visualization", "power bi", "tableau", "charts"],
    data: {
      title: "Data Visualization",
      experiences: [
        "Used Power BI and Tableau for dashboards",
        "Created visual insights from structured datasets"
      ],
      projects: [
        {
          name: "Visualization Dashboards",
          impact: "Improved data interpretability"
        }
      ],
      thoughts: "Good visualization simplifies complex data into actionable insights.",
      confidence: {
        level: "medium",
        reason: "Tool-based practical exposure"
      },
      related: ["data_analytics", "machine_learning"]
    }
  },
  {
    id: "machine_learning",
    keywords: ["ml", "models", "data science", "learning"],
    data: {
      title: "Machine Learning",
      experiences: [
        "Worked with supervised learning techniques",
        "Used Scikit-learn for model experimentation",
        "Applied ML concepts in training and projects"
      ],
      projects: [
        {
          name: "ML Training Projects",
          impact: "Built foundational ML understanding"
        }
      ],
      thoughts: "Focus on problem understanding before selecting models.",
      confidence: {
        level: "medium",
        reason: "Training and project-based exposure"
      },
      related: ["data_analytics", "data_visualization"]
    }
  },
  {
    id: "software_architecture",
    keywords: ["architecture", "design", "modular", "systems"],
    data: {
      title: "Software Architecture",
      experiences: [
        "Refactored systems to improve modularity",
        "Reduced code duplication by 40%",
        "Designed maintainable code structures"
      ],
      projects: [
        {
          name: "Game Code Refactoring",
          impact: "Improved maintainability and scalability"
        }
      ],
      thoughts: "Clean architecture reduces long-term maintenance cost significantly.",
      confidence: {
        level: "high",
        reason: "Applied in real-world codebases"
      },
      related: ["system_design", "performance_optimization"]
    }
  },
  {
    id: "real_time_systems",
    keywords: ["real-time", "games", "latency", "systems"],
    data: {
      title: "Real-Time Systems",
      experiences: [
        "Worked on interactive game systems requiring real-time responsiveness",
        "Handled event-driven logic in game engines"
      ],
      projects: [
        {
          name: "Game Logic Systems",
          impact: "Delivered responsive gameplay experiences"
        }
      ],
      thoughts: "Real-time systems demand efficient state handling and minimal latency.",
      confidence: {
        level: "medium",
        reason: "Applied in game development context"
      },
      related: ["game_development", "performance_optimization"]
    }
  },
  {
    id: "performance_optimization",
    keywords: ["performance", "optimization", "efficiency"],
    data: {
      title: "Performance Optimization",
      experiences: [
        "Reduced crash rates in games by 15%",
        "Optimized code structure to reduce duplication",
        "Improved execution efficiency in automation systems"
      ],
      projects: [
        {
          name: "Game Performance Tuning",
          impact: "Enhanced stability and user experience"
        }
      ],
      thoughts: "Performance gains often come from simplifying systems rather than adding complexity.",
      confidence: {
        level: "high",
        reason: "Measured improvements in production systems"
      },
      related: ["debugging_problem_solving", "system_reliability"]
    }
  },
  {
    id: "automation_frameworks",
    keywords: ["framework", "automation", "testing", "design"],
    data: {
      title: "Automation Frameworks",
      experiences: [
        "Built and enhanced frameworks using Robot Framework and Playwright",
        "Structured reusable and modular test components",
        "Improved maintainability of automation systems"
      ],
      projects: [
        {
          name: "Image Comparison Framework",
          impact: "Improved UI validation accuracy"
        }
      ],
      thoughts: "A good framework should minimize duplication and maximize reuse.",
      confidence: {
        level: "high",
        reason: "Direct hands-on implementation in production"
      },
      related: ["test_automation_engineering", "system_design"]
    }
  },
  {
    id: "cloud",
    keywords: ["aws", "cloud", "infrastructure", "deployment"],
    data: {
      title: "Cloud & Infrastructure",
      experiences: [
        "Worked with AWS basics and cloud concepts",
        "Supported deployment workflows in CI/CD pipelines",
        "Understood environment-based deployments"
      ],
      projects: [
        {
          name: "CI/CD Deployment Systems",
          impact: "Enabled multi-environment deployments"
        }
      ],
      thoughts: "Cloud systems should be designed for scalability and fault tolerance from the start.",
      confidence: {
        level: "medium",
        reason: "Foundational exposure through DevOps work"
      },
      related: ["devops_ci_cd", "infrastructure"]
    }
  },
  {
    id: "api_testing",
    keywords: ["api", "testing", "postman", "validation"],
    data: {
      title: "API Testing",
      experiences: [
        "Used Postman for API validation and testing",
        "Contributed to API test plans and documentation",
        "Validated API reliability before releases"
      ],
      projects: [
        {
          name: "API Validation Framework",
          impact: "Improved backend reliability and reduced production bugs"
        }
      ],
      thoughts: "API stability is critical as it directly impacts all dependent systems.",
      confidence: {
        level: "high",
        reason: "Repeated use in QA workflows"
      },
      related: ["backend_api_engineering", "quality_engineering"]
    }
  },
  {
    id: "quality_engineering",
    keywords: ["quality", "testing strategy", "qe", "automation"],
    data: {
      title: "Quality Engineering",
      experiences: [
        "Improved test coverage across UI and API layers",
        "Defined structured testing strategies and validation plans",
        "Integrated testing into CI/CD pipelines"
      ],
      projects: [
        {
          name: "Automation Coverage Expansion",
          impact: "Increased coverage by 30%"
        }
      ],
      thoughts: "Quality should be built into the system, not tested at the end.",
      confidence: {
        level: "high",
        reason: "Core part of professional role at Wipro"
      },
      related: ["test_automation_engineering", "api_testing"]
    }
  },
  {
    id: "database_optimization",
    keywords: ["database", "sql", "performance", "optimization"],
    data: {
      title: "Database Optimization",
      experiences: [
        "Worked with SQL and PL-SQL for efficient querying",
        "Handled structured data for reporting systems",
        "Focused on minimizing redundant queries in automation workflows"
      ],
      projects: [
        {
          name: "Reporting System Enhancement",
          impact: "Improved query efficiency and report generation speed"
        }
      ],
      thoughts: "Optimizing queries early prevents downstream performance bottlenecks.",
      confidence: {
        level: "medium",
        reason: "Practical experience with SQL in production-like systems"
      },
      related: ["system_design", "backend_api_engineering"]
    }
  },
  {
    id: "system_design",
    keywords: ["system design", "architecture", "scalability", "design patterns"],
    data: {
      title: "System Design",
      experiences: [
        "Worked on structuring automation frameworks for scalability",
        "Designed modular test systems for reuse and maintainability",
        "Contributed to multi-environment deployment architecture"
      ],
      projects: [
        {
          name: "Automation Framework Design",
          impact: "Improved maintainability and reduced duplication"
        }
      ],
      thoughts: "Prefer simple, modular architectures first before introducing distributed complexity.",
      confidence: {
        level: "medium",
        reason: "Applied in test systems and automation pipelines"
      },
      related: ["backend_api_engineering", "database_optimization"]
    }
  }
];