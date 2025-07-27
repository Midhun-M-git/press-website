# Visual Studio Code Development Guide

## Getting Started

This guide will help you set up and work with the SRIRAM PRESS website project in Visual Studio Code.

## Prerequisites

1. **Visual Studio Code**: Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. **Node.js** (optional, for development tools): Download from [nodejs.org](https://nodejs.org/)
3. **Git**: Download from [git-scm.com](https://git-scm.com/)

## Setup Instructions

### Step 1: Clone and Open Project

```bash
# Clone the repository
git clone https://github.com/Midhun-M-git/press-website.git
cd press-website

# Open in VS Code (choose one method)
code .                              # Open current directory
code sriram-press.code-workspace    # Open workspace file (recommended)
```

### Step 2: Install Recommended Extensions

When you open the project, VS Code will automatically prompt you to install recommended extensions. Click **"Install All"** or install them manually:

**Essential Extensions:**
- **Live Server** (`ritwickdey.liveserver`) - Live preview with auto-reload
- **Auto Rename Tag** (`formulahendry.auto-rename-tag`) - Auto rename paired HTML tags
- **CSS Peek** (`pranaygp.vscode-css-peek`) - Navigate to CSS definitions
- **Prettier** (`esbenp.prettier-vscode`) - Code formatter
- **Auto Close Tag** (`formulahendry.auto-close-tag`) - Auto close HTML tags

**Additional Helpful Extensions:**
- **Path Intellisense** (`christian-kohler.path-intellisense`) - File path autocomplete
- **Bracket Pair Colorizer** - Color matching brackets
- **HTML CSS Class Completion** - CSS class autocomplete
- **Material Icon Theme** - Better file icons

### Step 3: Start Development Server

**Method 1: Using Live Server Extension (Recommended)**
1. Right-click on `press/pressnew.html`
2. Select **"Open with Live Server"**
3. Website opens at `http://localhost:5500`

**Method 2: Using Terminal**
```bash
npm run dev    # Starts server on port 5500
```

**Method 3: Using Tasks**
1. Press `Ctrl+Shift+P` (Cmd+Shift+P on Mac)
2. Type "Tasks: Run Task"
3. Select "Start Live Server"

## Key Features

### Live Reload
- Any changes to HTML, CSS, or JS files automatically refresh the browser
- No need to manually refresh the page

### Code Formatting
- **Format on Save**: Enabled by default
- **Manual Format**: `Shift+Alt+F` (Windows/Linux) or `Shift+Option+F` (Mac)
- **Format Selection**: Select code and use format shortcut

### IntelliSense & Auto-completion
- HTML tag completion
- CSS property completion
- JavaScript function completion
- File path completion

### Debugging
- **F5**: Start debugging
- Set breakpoints by clicking left of line numbers
- Debug JavaScript in Chrome browser

## Common Tasks

### Adding New Pages
1. Create new `.html` file in `/press` folder
2. Link to it from existing pages
3. Add corresponding CSS if needed

### Modifying Styles
1. Edit `styles.css` for main page styles
2. Edit `products.css` for products page styles
3. Changes auto-reload with Live Server

### Adding Images
1. Add image files to `/press` folder
2. Reference in HTML: `<img src="image-name.jpg" alt="Description">`

### Version Control
- **View Changes**: `Ctrl+Shift+G` opens Source Control panel
- **Commit**: Stage changes and add commit message
- **Push**: Sync changes to GitHub

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Open Command Palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Quick File Open | `Ctrl+P` | `Cmd+P` |
| Format Document | `Shift+Alt+F` | `Shift+Option+F` |
| Find in Files | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| Toggle Terminal | `Ctrl+`` | `Cmd+`` |
| Go to Line | `Ctrl+G` | `Cmd+G` |
| Toggle Sidebar | `Ctrl+B` | `Cmd+B` |

## Workspace Layout

```
press-website/
├── .vscode/                 # VS Code settings
│   ├── settings.json       # Editor preferences
│   ├── extensions.json     # Recommended extensions
│   ├── launch.json         # Debug configurations
│   └── tasks.json          # Build tasks
├── press/                  # Website source files
│   ├── pressnew.html      # Main page
│   ├── products.html      # Products page
│   ├── styles.css         # Main styles
│   ├── products.css       # Product styles
│   ├── script.js          # JavaScript
│   └── [images...]        # Image assets
└── sriram-press.code-workspace  # Workspace file
```

## Troubleshooting

### Live Server Not Working
1. Check if Live Server extension is installed
2. Try right-clicking HTML file → "Open with Live Server"
3. Alternative: Use `npm run dev` in terminal

### Changes Not Reflecting
1. Check if Live Server is running
2. Clear browser cache (`Ctrl+F5`)
3. Check browser console for errors

### Extension Issues
1. Reload VS Code window: `Ctrl+Shift+P` → "Developer: Reload Window"
2. Disable/re-enable problematic extensions
3. Check extension output for errors

### Formatting Not Working
1. Ensure Prettier extension is installed
2. Check if "Format on Save" is enabled in settings
3. Manually format with `Shift+Alt+F`

## Tips for Better Development

1. **Use Emmet**: Type `!` and press `Tab` for HTML boilerplate
2. **Multi-cursor**: `Alt+Click` to place multiple cursors
3. **Quick Search**: `Ctrl+F` to search current file, `Ctrl+Shift+F` for all files
4. **File Navigation**: `Ctrl+P` to quickly open files
5. **Terminal**: `Ctrl+`` to open integrated terminal
6. **Split View**: `Ctrl+\` to split editor for side-by-side editing

## Getting Help

- **VS Code Documentation**: [code.visualstudio.com/docs](https://code.visualstudio.com/docs)
- **Keyboard Shortcuts**: `Ctrl+K Ctrl+S` to open shortcuts editor
- **Command Palette**: `Ctrl+Shift+P` to access all commands
- **Extension Help**: Click extension in sidebar for documentation

Happy coding! 🚀