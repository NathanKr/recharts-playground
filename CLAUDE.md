# Project Preferences

> I prefer using HTML elements instead of Markdown syntax in README.md
> No need for version in technologies section
> I prefer using ``` .... ``` over pre code
> Demo section should include figures. Put figures under figs folder under root and reference it from README.md
> If you think you need extra h2 section always ask for approval
> Don't change existing section titles without permission
> "Code Structure" section should contain code samples/examples, not just file tree
> For code samples, put here what is the most important in this project
> Provide samples with simple at first and most complex at the end

# How to capture images

## Prerequisites
1. Ensure dev server is running: `pnpm run dev` (or check background process with BashOutput)
2. Verify server is accessible at http://localhost:5174 (port may vary)
3. Create figs folder if it doesn't exist: `mkdir figs`

## Firefox screenshot command:
```bash
"C:\Program Files\Mozilla Firefox\firefox.exe" --screenshot="C:\nathan\misc\github\recharts-playground\figs\filename.png" --window-size=1200,1500 http://localhost:5174
```

## Required images for README demo section:
- `basic-line-chart.png`
- `css-layout-charts.png`
- `enhanced-line-chart.png`
- `multi-line-chart.png`

## Quick capture all images:
```bash
"C:\Program Files\Mozilla Firefox\firefox.exe" --screenshot="C:\nathan\misc\github\recharts-playground\figs\basic-line-chart.png" --window-size=1200,1500 http://localhost:5174
"C:\Program Files\Mozilla Firefox\firefox.exe" --screenshot="C:\nathan\misc\github\recharts-playground\figs\css-layout-charts.png" --window-size=1200,1500 http://localhost:5174
"C:\Program Files\Mozilla Firefox\firefox.exe" --screenshot="C:\nathan\misc\github\recharts-playground\figs\enhanced-line-chart.png" --window-size=1200,1500 http://localhost:5174
"C:\Program Files\Mozilla Firefox\firefox.exe" --screenshot="C:\nathan\misc\github\recharts-playground\figs\multi-line-chart.png" --window-size=1200,1500 http://localhost:5174
```

## Troubleshooting
- If screenshots fail silently: Check if dev server is still running with `BashOutput` tool
- Use `--window-size=1200,1500` for taller pages to capture more content
- Each screenshot takes ~5-10 seconds, be patient
- Firefox launches fresh each time, so multiple screenshots will be slow
- Verify images created with: `ls -la figs`