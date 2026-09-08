# Watcharakorn Moolsri (Aum) | Engineering Portfolio

> **Spectroscopy Data Scientist & Industrial Edge AI Engineer**  
> Bridging Polymer Materials Science, Chemometrics (NIR Spectroscopy), and High-Speed Industrial Edge Computer Vision.

[![GitHub Pages](https://img.shields.io/badge/Live-Demo-brightgreen?logo=github)](https://aumdim7b5.github.io/portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Profile](https://img.shields.io/badge/GitHub-Aumdim7b5-181717?logo=github)](https://github.com/Aumdim7b5)

---

## 🌟 Overview

Welcome to my portfolio repository! This site showcases my professional projects, engineering background, and technical expertise across:
- **Chemometrics & Optical Spectroscopy (NIR):** Extracting quantitative insights and discriminatory patterns from complex spectral data.
- **Industrial Edge AI & Vision Systems:** Deploying robust deep learning and computer vision inference pipelines directly onto factory floors.
- **Hardware & PLC Integration:** Seamlessly bridging edge computers, industrial GigE cameras, and programmable logic controllers (PLCs).

🌐 **Live Website:** [https://aumdim7b5.github.io/portfolio/](https://aumdim7b5.github.io/portfolio/)

---

## 🛠️ Core Expertise

### 1. Chemometrics & Spectral Signal Processing
- **Predictive & Discriminative Modeling:** Partial Least Squares (PLS), Principal Component Analysis (PCA), Support Vector Regression (SVR).
- **Spectral Signal Pretreatment:** Standard Normal Variate (SNV), Multiplicative Scatter Correction (MSC), Savitzky-Golay 1st & 2nd derivatives, baseline detrending, and spectral normalization.
- **Materials Context:** Leveraging polymer and petrochemical engineering principles to deeply interpret optical, chemical, and physical interactions.

### 2. Industrial Edge AI & Computer Vision
- **Embedded Inference Platforms:** NVIDIA Jetson Orin Nano, industrial fanless edge PCs, GPU acceleration.
- **Deep Learning Frameworks:** YOLOv8 (Ultralytics), Euresys Open_eVision (EasyClassify deep learning), PyTorch, OpenCV.
- **Camera Protocols & APIs:** GigE Vision via Aravis, Hikrobot MVS SDK, hardware-triggered external strobes.

### 3. Industrial Automation & System Architecture
- **Factory Protocols:** Modbus TCP / RTU communication with Omron, Mitsubishi, and Siemens PLCs.
- **Hardware Interfacing:** Custom 24VDC opto-isolated PLC buffer boards, high-speed digital I/O reject relays.
- **Application Development:** High-performance desktop HMIs in C# / .NET (WinForms), asynchronous RESTful APIs in Python (FastAPI), local transactional databases (SQLite).

---

## 🚀 Featured Industrial Projects

### 1. Industrial Skew Detector & Rejection System
An end-to-end edge AI vision system engineered to detect skewed flexible packaging on an active high-speed conveyor line, preventing robotic pick-and-place arm jams and downstream mechanical downtime.

- **Edge Compute:** NVIDIA Jetson Orin Nano
- **AI & Vision Pipeline:** Custom-trained YOLOv8 for orientation bounding boxes, FastAPI backend, Aravis GigE Vision driver
- **Hardware Integration:** Custom 24VDC PLC buffer circuit delivering deterministic sub-millisecond digital rejection pulses
- **Impact:** Eliminated robotic jam incidents by automatically rejecting packages exceeding the ±5° skew threshold.

*Screenshots located in:* ssets/images/skew-detector/

---

### 2. Multi-Station Automated Visual Inspection System
A production-grade 6-station automated visual inspection and verification system designed for industrial manufacturing and packaging lines.

- **Software Architecture:** Modular C# & .NET WinForms HMI with real-time station monitoring and operator workflows
- **Deep Learning Engine:** Euresys GPU-accelerated deep learning classifier for label correctness, packaging integrity, and defect verification
- **Vision Hardware:** Hikrobot GigE industrial cameras synchronized with external optical sensors
- **Line Integration:** Real-time Modbus TCP communication to PLC for automated defect lane diverter control and SQLite inspection audit logs
- **Key Features:** Barcode-driven job setup, master recipe configuration, live station diagnostics, and statistical yield reporting.

*Screenshots located in:* ssets/images/paint-inspection/

---

## 🎓 Academic Foundation

- **Master of Engineering (M.Eng.) in Polymer Science and Engineering**  
  *Silpakorn University*
- **Bachelor of Engineering (B.Eng.) in Petrochemical and Polymeric Materials**  
  *Silpakorn University*

> *My academic training provides the chemistry and physical foundation essential for understanding complex optical absorption phenomena, polymer crystallization kinetics, and building robust chemometric models.*

---

## 📂 Repository Structure

`	ext
portfolio/
├── index.html                           # Main portfolio landing page
├── styles.css                           # Modern dark-themed CSS styling
├── script.js                            # Interactive carousel & UI logic
├── README.md                            # Project documentation
├── .gitignore                           # Git ignore rules
└── assets/
    └── images/
        ├── skew-detector/               # Skew detector dashboard screenshots
        │   ├── dashboard_1.png
        │   ├── dashboard_2.png
        │   ├── dashboard_3.png
        │   └── dashboard_4.png
        └── paint-inspection/            # Paint bucket inspection screenshots
            ├── paint_1.png
            ├── paint_2.png
            ├── paint_3.png
            ├── paint_4.png
            └── paint_5.png
`

---

## 💻 Running Locally

To preview the portfolio locally on your machine:

1. Clone or download the repository:
   `ash
   git clone https://github.com/Aumdim7b5/portfolio.git
   cd portfolio
   `

2. Start a lightweight local server:
   `ash
   # Python 3
   python -m http.server 8000
   `

3. Open your browser and navigate to:
   `
   http://localhost:8000
   `

---

## 🌐 Deploying to GitHub Pages

To make the portfolio publicly viewable for anyone on the internet:

1. In this repository on GitHub, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Branch**:
   - Select main branch.
   - Folder: / (root).
   - Click **Save**.
3. Within 1–2 minutes, your website will be live at:
   https://aumdim7b5.github.io/portfolio/

---

## 📬 Contact & Inquiries

- **Email:** [aum_metalworld@hotmail.com](mailto:aum_metalworld@hotmail.com)
- **Phone:** 084-177-5119
- **GitHub:** [@Aumdim7b5](https://github.com/Aumdim7b5)
- **Location:** Thailand

Open to discussions regarding industrial computer vision consulting, chemometrics modeling, and edge AI engineering roles.
