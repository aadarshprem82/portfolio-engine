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

export const knowledge: KnowledgeItem[] = [
  {
    id: "backend_scalability",
    keywords: ["backend", "scaling", "performance", "api"],
    data: {
      title: "Backend Scalability",
      experiences: [
        "Scaled Node.js API from 1k → 50k users",
        "Implemented Redis caching layer",
        "Optimized DB queries reducing response time"
      ],
      projects: [
        {
          name: "E-commerce API",
          impact: "Reduced latency by 40%"
        }
      ],
      thoughts:
        "Focused on caching first before moving to complex solutions like sharding to keep system simple and maintainable.",
      confidence: {
        level: "high",
        reason: "Used in production systems over 2+ years"
      },
      related: ["system design", "database optimization"]
    }
  },
  {
    id: "system_design",
    keywords: ["architecture", "scaling", "performance", "api"],
    data: {
      title: "Backend Scalability",
      experiences: [
        "Scaled Node.js API from 1k → 50k users",
        "Implemented Redis caching layer",
        "Optimized DB queries reducing response time"
      ],
      projects: [
        {
          name: "E-commerce API",
          impact: "Reduced latency by 40%"
        }
      ],
      thoughts:
        "Focused on caching first before moving to complex solutions like sharding to keep system simple and maintainable.",
      confidence: {
        level: "high",
        reason: "Used in production systems over 2+ years"
      },
      related: ["system design", "database optimization"]
    }
  },
  {
    id: "react_performance",
    keywords: ["react", "UI", "frontend", "performance"],
    data: {
      title: "Backend Scalability",
      experiences: [
        "Scaled Node.js API from 1k → 50k users",
        "Implemented Redis caching layer",
        "Optimized DB queries reducing response time"
      ],
      projects: [
        {
          name: "E-commerce API",
          impact: "Reduced latency by 40%"
        }
      ],
      thoughts:
        "Focused on caching first before moving to complex solutions like sharding to keep system simple and maintainable.",
      confidence: {
        level: "high",
        reason: "Used in production systems over 2+ years"
      },
      related: ["system design", "database optimization"]
    }
  }
];