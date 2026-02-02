# Neoverse Website - Terminal Theme Rebuild

## Project Overview
Rebuild the Neoverse website with a terminal/coder aesthetic while preserving all existing content from https://neoverse.solutions/

## Current Website Content Analysis

### Company Identity
- **Name:** Neoverse
- **Tagline:** "Inovate. Integrate. Elevate."
- **Email:** igor.kraisnik@gmail.com
- **Copyright:** © 2023 Neoverse

### Core Messaging
- Revolutionary approach to tech interaction
- Creating a "techvolution" with seamless connectivity
- Empowering digital experiences
- Blending artistry, precision, and ingenuity
- Positioning as visionaries and engineers, not just a tech vendor

### Services Offered
1. UX/UI Design
2. SEO Strategy
3. Software Development
4. Integrations
5. Digital Product Development
6. Digital Marketing

### Key Call-to-Action
"Join us in shaping the future of technology"

## Design Direction: Terminal/Coder Theme

### Visual Aesthetic
- **Style:** Retro terminal/command-line interface
- **Color Scheme:** ✅ CONFIRMED
  - **Primary:** White text (#ffffff) on VS Code grey background (#1e1e1e)
  - **Headlines:** Terminal orange (#ff8800)
  - **Accent:** Light grey (#e0e0e0) for highlights
  - **Dim:** Grey (#888888) for secondary text

### Typography
- Monospace fonts: `'Courier New', 'Monaco', 'Consolas', 'Source Code Pro'`
- Terminal-style text effects (blinking cursor, typewriter animation)
- ASCII art elements for visual interest

### UI Elements
- Terminal window frame with title bar
- Command prompt indicators (> or $)
- Blinking cursor animations
- Scanline effects (subtle)
- CRT monitor glow effects
- Text appearing as if being typed
- ASCII art dividers/separators

## Planned Website Structure

### Page Sections
1. **Hero/Terminal Boot**
   - Animated boot sequence
   - Company name appears letter-by-letter
   - Tagline display with typewriter effect

2. **About Section**
   - Terminal-style "cat about.txt" output
   - Core values and philosophy
   - Company positioning

3. **Services Menu**
   - Command-line style list
   - Interactive hover states
   - Each service as a "command" or "program"

4. **Contact Terminal**
   - Terminal input field styling
   - Email display as "echo $CONTACT"
   - Call-to-action in command format

5. **Footer**
   - Copyright info
   - Minimal terminal status bar style

## Technical Implementation Plan

### File Structure
```
neoverse/
├── index.html          # Main HTML file
├── css/
│   └── terminal.css    # Terminal theme styles
├── js/
│   └── terminal.js     # Interactive effects & animations
├── assets/
│   ├── logo.svg/png    # Neoverse logotype (to be provided)
│   └── favicon.ico     # Terminal-style favicon
└── README.md           # Documentation
```

### Features Implemented ✅ CALM ANIMATIONS
- [x] Responsive terminal window design
- [x] **Calm, subtle animations**
- [x] **Blinking cursor effect (slow)**
- [x] ASCII art logo
- [x] Smooth scrolling between sections
- [x] Terminal-style layout
- [x] Mobile-responsive terminal view
- [x] **Subtle scanline overlay effect**
- [x] **Minimal effects - no flicker, no dramatic glow**
- [x] **Black background (#000000)**
- [x] **Exact content from neoverse.solutions**

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile-optimized terminal view

## Assets Needed from Client
1. ✅ Website content (extracted from existing site)
2. ⏳ Logotype/Logo files (will be added later - placeholder for now)
3. ✅ Preferred terminal color scheme: Amber on dark gray
4. ✅ Additional content: None needed
5. ✅ Animation preferences: Dramatic effects confirmed

## Next Steps
1. Receive logotype from client
2. Confirm color scheme preferences
3. Create HTML structure with semantic markup
4. Develop CSS for terminal aesthetic
5. Implement JavaScript animations
6. Test responsiveness and cross-browser compatibility
7. Deploy to GitHub repository

## Notes
- Keep the code clean and well-commented
- Single-page application for simplicity
- No external dependencies initially (vanilla HTML/CSS/JS)
- Consider adding subtle sound effects (keyboard clicks) as optional enhancement
- Accessibility considerations: maintain readable contrast ratios despite theme
