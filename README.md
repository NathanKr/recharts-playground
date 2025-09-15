<h1>Recharts Playground</h1>

<p>A React playground project for exploring and demonstrating different chart implementations using the Recharts library.</p>

<h2>Project Description</h2>

<p>This project serves as a sandbox for experimenting with various chart types and configurations using Recharts. It includes examples ranging from basic line charts to more complex multi-line charts with responsive layouts, tooltips, legends, and custom styling.</p>

<h2>Motivation</h2>

<p>Created as a learning and prototyping tool for implementing charts in a pension calculation project. The goal was to understand how to visualize data showing how balance and monthly pension change with desired income values (ages 62-67). Recharts was selected as the charting library based on its React-native integration and feature set.</p>

<h2>Key Features</h2>

<ul>
    <li><strong>Simple Line Charts</strong>: Basic chart implementation</li>
    <li><strong>CSS Layout Integration</strong>: Responsive chart layouts using CSS modules</li>
    <li><strong>Enhanced Charts</strong>: Charts with axes, labels, tooltips, and grid lines</li>
    <li><strong>Multi-line Charts</strong>: Displaying multiple data series on the same chart</li>
    <li><strong>Responsive Design</strong>: Charts that adapt to container width</li>
    <li><strong>Custom Styling</strong>: Thick lines, no dots, custom colors and legends</li>
</ul>

<h2>Installation</h2>

```bash
# Clone the repository
git clone <repository-url>
cd recharts-playground

# Install dependencies
pnpm install
```

<h2>Usage</h2>

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Run linting
pnpm run lint
```

<h2>Technologies Used</h2>

<ul>
    <li><strong>React</strong>: Frontend framework</li>
    <li><strong>TypeScript</strong>: Type safety and development experience</li>
    <li><strong>Recharts</strong>: Charting library built on D3</li>
    <li><strong>Vite</strong>: Build tool and development server</li>
    <li><strong>CSS Modules</strong>: Scoped styling</li>
    <li><strong>ESLint</strong>: Code linting and formatting</li>
</ul>

<h2>Code Structure</h2>

```
src/
├── components/
│   └── simple-sample-charts.tsx    # Main chart examples component
├── styles/
│   └── chart-layout.module.css     # Chart layout styles
├── App.tsx                         # Main application component
├── main.tsx                        # Application entry point
└── App.css & index.css            # Global styles
```



<h2>Demo</h2>

<p>The application showcases various chart implementations:</p>

<img src='./figs/full-screen.png'/>



<h2>Points of Interest</h2>

<ul>
    <li><strong>ResponsiveContainer</strong>: Enables charts to resize with their container</li>
    <li><strong>CSS Modules</strong>: Scoped styling prevents style conflicts</li>
    <li><strong>Data Transformation</strong>: Converting arrays into chart-compatible objects</li>
    <li><strong>Multiple Data Series</strong>: Combining different datasets on single chart</li>
    <li><strong>Custom Chart Configuration</strong>: Detailed control over appearance and behavior</li>
</ul>

<h2>References</h2>

<ul>
    <li><a href="https://recharts.org/">Recharts Documentation</a></li>
    <li><a href="https://react.dev/">React Documentation</a></li>
    <li><a href="https://vitejs.dev/">Vite Documentation</a></li>
</ul>
