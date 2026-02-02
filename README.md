# Neoverse Terminal Website

A calm terminal-themed website for Neoverse with subtle effects and amber-on-black aesthetics.

## Features

### Visual Effects
- **Subtle Scanlines** - Minimal terminal texture
- **Clean Terminal Design** - Authentic terminal appearance
- **Blinking Cursor** - Classic slow-blinking terminal cursor
- **Smooth Interactions** - Calm hover effects

### Color Scheme
- **Primary:** White (#ffffff)
- **Background:** VS Code Grey (#1e1e1e)
- **Headlines:** Terminal Orange (#ff8800)
- **Accent:** Light Grey (#e0e0e0)
- **Dim:** Grey (#888888)
- **Success:** Green (#00ff00)

## Structure

```
neoverse/
├── index.html          # Main HTML file
├── css/
│   └── terminal.css    # Terminal theme styles
├── js/
│   └── terminal.js     # Interactive effects & animations
├── assets/             # Logo and images (to be added)
├── README.md           # This file
└── claude.md           # Project planning document
```

## Setup

Simply open `index.html` in a modern web browser. No build process or dependencies required.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (responsive design)

## Easter Eggs

Try the Konami code: ↑↑↓↓←→←→BA

## Customization

### Changing Colors
Edit CSS variables in `css/terminal.css`:
```css
:root {
    --primary-color: #ffb000;
    --bg-color: #1e1e1e;
    --accent-color: #ffd700;
    --dim-color: #cc8800;
}
```

### Adjusting Animations
All animations are calm and minimal - modify CSS transitions in `css/terminal.css` if needed

### Adding Logo
Place logo file in `assets/` folder and update the HTML to include it in the hero section.

## Content Sections

Content matches exactly from neoverse.solutions:

1. **Hero** - ASCII logo and tagline "Inovate. Integrate. Elevate."
2. **Introduction** - Opening question about innovation
3. **Revolutionizing Tech Interaction** - Company mission
4. **Reimagining the Digital Canvas** - Service approach
5. **Unparalleled Excellence** - Company positioning
6. **More Than a Tech Company** - Call-to-action
7. **Contact** - Email address
8. **Footer** - Copyright and live status

## Performance

- Vanilla JavaScript (no frameworks)
- CSS-only animations where possible
- Optimized for 60fps
- Minimal HTTP requests

## Future Enhancements

- [ ] Add logo when provided
- [ ] Additional content sections if needed
- [ ] Theme variations (different terminal colors)
- [ ] Contact form integration

## License

© 2023 Neoverse - All rights reserved

---

**Status:** Ready for deployment
**Version:** 1.0.0
**Last Updated:** 2026-02-02
