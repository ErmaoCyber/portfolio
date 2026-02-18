import bankImg from "../assets/projects/bank.png";
import quantImg from "../assets/projects/quant.png";
import meetingImg from "../assets/projects/meeting.png";

export const PROJECTS = [
  {
    id: "meeting-room-reservation-api",
    featured: true,
    title: "Meeting Room Reservation API",
    oneLiner: ".NET Web API for conflict-safe meeting room reservations.",
    desc:
      "Implements scheduling rules and overlap validation in the service layer to keep bookings consistent across clients.",
    year: "2026",
    status: "Active",
    tags: [".NET", "C#", "ASP.NET Core", "EF Core", "Scheduling", "Validation"],
    stack: {
      backend: [".NET", "ASP.NET Core", "EF Core"],
      db: ["SQLite (dev)"],
      docs: ["Swagger / OpenAPI"],
    },
    highlights: [
      "Conflict detection to prevent overlapping bookings",
      "Service-layer validation and clear REST API design",
      "Swagger UI for quick testing and onboarding",
    ],
    repoUrl: "https://github.com/ErmaoCyber/meeting-room-reservation-api",
    demoUrl: "",
    image: meetingImg,
  },

  {
    id: "bank-account-service-api",
    featured: false,
    title: "Bank Account Service API",
    oneLiner: "Spring Boot API with transactional account operations.",
    desc:
      "Demonstrates atomic transfers and rule enforcement using a layered service design and persistent transaction records.",
    year: "2025",
    status: "Active",
    tags: ["Java", "Spring Boot", "JPA", "Transactions", "PostgreSQL", "Swagger"],
    stack: {
      backend: ["Java 17", "Spring Boot", "Spring Data JPA (Hibernate)"],
      db: ["PostgreSQL / H2"],
      docs: ["Swagger / OpenAPI"],
      build: ["Maven"],
    },
    highlights: [
      "Transactional money transfers with atomic balance updates",
      "Service-layer business rules (e.g., overdraft prevention)",
      "Audit-style transaction history for traceability",
    ],
    repoUrl: "https://github.com/ErmaoCyber/bank-account-service-api",
    demoUrl: "",
    image: bankImg,
  },

  {
    id: "time-series-backtester",
    featured: true,
    title: "Time Series Backtester",
    oneLiner: "Python backtesting engine with reproducible experiment runs.",
    desc:
      "Runs rule-based strategies with t+1 execution, transaction costs, and standard performance metrics using historical market data.",
    year: "2026",
    status: "Active",
    tags: [
      "Python",
      "Pandas",
      "Time Series",
      "Backtesting",
      "Data Processing",
      "Experiment Reproducibility",
    ],
    stack: {
      data: ["Pandas", "NumPy"],
      visualization: ["Matplotlib"],
      config: ["YAML"],
      data_source: ["Yahoo Finance (yfinance)"],
    },
    highlights: [
      "t+1 execution to reduce look-ahead bias",
      "Config-driven runs (YAML) and reproducible outputs",
      "Metrics: total return, Sharpe ratio, max drawdown",
    ],
    repoUrl: "https://github.com/ErmaoCyber/time-series-backtester",
    demoUrl: "",
    image: quantImg,
  },
];