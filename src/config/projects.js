import bankImg from "../assets/projects/bank.png";
import quantImg from "../assets/projects/quant.png";
import meetingImg from "../assets/projects/meeting.png";

export const PROJECTS = [
  {
    id: "meeting-room-reservation-api",
    featured: true,
    title: "Meeting Room Reservation API",
    oneLiner:
      ".NET Web API for meeting room scheduling with conflict detection and layered architecture.",
    desc:
      "A backend service that handles meeting room reservations with time-slot overlap validation. Built with a clean layered structure where booking rules live in the service layer to ensure consistent behavior across clients.",
    year: "2026",
    status: "Active",
    tags: [".NET", "C#", "ASP.NET Core", "EF Core", "Scheduling", "Validation"],
    stack: {
      backend: [".NET", "ASP.NET Core", "EF Core"],
      db: ["SQLite (dev)"],
      docs: ["Swagger / OpenAPI"],
    },
    highlights: [
      "Prevents double-booking via time-range overlap validation",
      "Layered architecture (Controller → Service → Repository → DB)",
      "Swagger UI for interactive API exploration and testing",
    ],
    repoUrl: "https://github.com/ErmaoCyber/meeting-room-reservation-api",
    demoUrl: "",
    image: meetingImg,
  },

  {
    id: "bank-account-service-api",
    featured: false,
    title: "Bank Account Service API",
    oneLiner:
      "Spring Boot REST API for account operations and transactional money transfers.",
    desc:
      "A banking-style backend service implementing deposits, withdrawals, and transfers with transactional consistency. Business rules and validation are enforced in the service layer to keep balances correct and auditable.",
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
      "Transactional transfers to ensure atomic balance updates",
      "Business rules like overdraft prevention enforced in service layer",
      "Swagger UI for API testing and onboarding",
    ],
    repoUrl: "https://github.com/ErmaoCyber/bank-account-service-api",
    demoUrl: "",
    image: bankImg,
  },

  {
    id: "time-series-backtester",
    featured: true,
    title: "Time Series Backtester",
    oneLiner:
      "Python backtesting engine for evaluating decision rules on historical time-series data.",
    desc:
      "A reproducible experiment system that evaluates rule-based strategies using historical market data. The engine separates signal generation from execution and forces trades at the next-day open (t+1) to avoid look-ahead bias. Includes transaction costs, performance metrics, and risk analysis.",
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
      "t+1 execution model to prevent look-ahead bias",
      "Config-driven experiment reproducibility (data + config hashing)",
      "Metrics: return, Sharpe ratio, max drawdown",
    ],
    repoUrl: "https://github.com/ErmaoCyber/time-series-backtester",
    demoUrl: "",
    image: quantImg,
  },
];