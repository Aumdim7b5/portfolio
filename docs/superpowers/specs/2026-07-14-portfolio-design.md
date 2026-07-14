# Edge AI Engineer Portfolio Design Spec

## Overview
A sleek, modern, single-page portfolio website designed to showcase full-stack hardware and edge AI engineering skills. It is purpose-built to highlight the "Industrial Cat Food Skew Detector" project, which involves custom hardware (Jetson Orin Nano, 24VDC buffer board for PLC), Linux systems engineering, and computer vision (YOLOv8, FastAPI).

## Architecture & Tech Stack
*   **Core:** HTML5, CSS3 (Vanilla), JavaScript (Vanilla).
*   **Hosting/Deployment:** Can be hosted statically on GitHub Pages, Vercel, or Netlify.
*   **Design Language:** Dark mode, industrial aesthetics (deep slate grays/blacks with neon accents like NVIDIA green or sharp blue). Clean, minimalist, and highly readable.

## Content Sections

### 1. Hero Section
*   **Headline:** "Bridging the gap between AI and Industrial Hardware."
*   **Sub-headline:** "Full-Stack Edge AI Engineer specializing in NVIDIA Jetson, custom hardware integration, and computer vision."
*   **Call to Action:** Links to GitHub, LinkedIn, and email.

### 2. Featured Case Study: Industrial Cat Food Skew Detector
The core centerpiece of the portfolio, divided into three engineering pillars:
*   **Hardware Engineering:** Custom Jetson Orin Nano setup, bespoke 24VDC buffer board designed for PLC logic, RTC battery integration, and rigorous burn testing. (Includes space for a physical hardware photo).
*   **Systems & Networking:** JetPack OS flashing, systemd daemonization for 24/7 uptime, and GigE camera (Aravis) network tuning (Jumbo frames/MTU 9000).
*   **AI & Software Stack:** YOLOv8 for inference, FastAPI for the backend, and a Chromium Kiosk dashboard for real-time monitoring. (Includes space for dashboard UI screenshots).

### 3. Skills Matrix
*   **Hardware:** Jetson Orin Nano, GPIO, 24V PLC Integration, Custom Buffer Boards, RTC.
*   **Systems:** Linux, Systemd, Bash Scripting, Network Tuning (GigE).
*   **Software & AI:** Python, C++, PyTorch, YOLO, OpenCV, FastAPI.

### 4. Contact / Footer
*   Simple contact information and resume download link.

## Data Flow & Responsiveness
*   The page will be fully responsive, ensuring it looks excellent on mobile devices (stacking the 3 case study pillars) and desktop (displaying them side-by-side or in an alternating layout).

## Validation & Ambiguity Check (Self-Review)
*   **Placeholders:** Noted that photos/screenshots are required from the user, but the layout will gracefully handle them as placeholders until provided.
*   **Scope:** This is a single-page static site. It does not require a backend, making it highly focused and achievable in one implementation plan.
*   **Ambiguity:** Resolved: We are sticking to Vanilla HTML/CSS/JS rather than introducing React/Next.js to keep it blazing fast and straightforward to host.
