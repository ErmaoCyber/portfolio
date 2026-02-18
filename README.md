# Portfolio Website

Personal portfolio website built with **React + Vite**, designed as a deployable frontend application to present projects, technical skills, and background.

This site serves as the main entry point to my software engineering work, including backend API systems and a Python quantitative analysis project.

Live site:  
https://ermaocyber.github.io

---

## Overview

The portfolio is not a static HTML page — it is a structured frontend application that organises project information, links to repositories, and presents technical details in a clear and maintainable format.

The goal of this project is to:
- Provide a central hub for my development work
- Present backend API projects in an accessible way
- Demonstrate frontend integration and UI structuring skills
- Act as a continuously updated technical profile

The content is intentionally separated from layout components so projects can be updated without rewriting UI code.

---

## Tech Stack

**Frontend**
- React
- Vite
- JavaScript (ES6+)
- CSS (modular styling)

**Deployment**
- GitHub Pages

---

## Featured Projects

The site links to several independent repositories:

### meeting-room-reservation-api
C# / .NET Web API implementing meeting room scheduling with time-range conflict detection and layered architecture.

### bank-account-service-api
Java Spring Boot backend supporting deposits, withdrawals, and transactional account transfers with service-layer validation.

### time-series-backtester
Python backtesting engine that evaluates rule-based trading strategies on historical data, including t+1 execution modelling and performance metrics.

---

## Project Structure

```
src/
  components/      UI components (cards, layout, navigation)
  pages/           Route-level pages
  config/          Project metadata (projects list)
  styles/          Application styling
  assets/          Images and static resources
```

Projects are defined in a configuration file instead of hard-coded UI, allowing new repositories to be added easily without changing layout logic.

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/ErmaoCyber/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## Build & Deployment

Create production build:

```bash
npm run build
```

The build output will be generated in:

```
dist/
```

This folder is deployed to the GitHub Pages repository:

```
ermaocyber.github.io
```

---

## Purpose of This Repository

This repository represents:
- Frontend structuring ability
- UI composition and information design
- Integration between multiple backend projects
- Ongoing documentation of technical work

Unlike individual project repositories (which focus on backend systems or data analysis), this project focuses on presentation, organisation, and accessibility of engineering work.

---

## Author

Jason Yang  
Master of Software Development  
Victoria University of Wellington

GitHub: https://github.com/ErmaoCyber  
LinkedIn: https://linkedin.com/in/jason-yang-vuw