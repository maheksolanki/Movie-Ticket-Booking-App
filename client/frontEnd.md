1. First create the react project using
npm create vite@latest

2. we install packages or library that needs in this project 
- npm install react-router-dom
- lucide-react -> Provides a set of clean and modern SVG icons for React.
- react-hot-toast -> For showing toast notifications (like success, error, info messages).
- react-player ->  To embed and play videos (YouTube, Vimeo, MP4, etc.) in React.

3. then we create the routing using react- router - dom
we wrap our app inside the BrowserRouter in main.jsx

then we creates routes inside app.jsx and in this we set route with their path

4. we show the navbar if befor the all router .
we only show navbar if admin panel is not open

5. next we use Toster to show notification it import from react-hot-toast.

6. XIcon - this is use for showing cross icon it is from lucide icons
- MenuIcon,Search : this both from lucide icons

7. scrollTo(0,0)  => top par avi jay









## tailwind
 - tailwind px- padding horizontal , py- padding vertical
 - w-full => width 100%
 -  bg-primary → background color 
background-color: var(--color-primary);

- hover:bg-primary-dull → change background color on hover
:hover {
  background-color: var(--color-primary-dull);
}

- transition: all 0.2s ease;
## taiwind-vanilla
max-md:absolute         → position: absolute; (for screen ≤ 768px)
max-md:top-0            → top: 0;
max-md:left-0           → left: 0;
max-md:font-medium      → font-weight: 500;
max-md:text-lg          → font-size: 1.125rem; (18px)
z-50                    → z-index: 50;
flex                    → display: flex;
flex-col                → flex-direction: column;
md:flex-row             → flex-direction: row; (for screen ≥ 768px)
items-center            → align-items: center;
max-md:justify-center   → justify-content: center;
gap-8                   → gap: 2rem; (32px)
min-md:px-8             → padding-left/right: 2rem; (for screen ≥ 768px)
py-3                    → padding-top/bottom: 0.75rem; (12px)
max-md:h-screen         → height: 100vh;
min-md:rounded-full     → border-radius: 9999px; (for screen ≥ 768px)
backdrop-blur           → backdrop-filter: blur(4px);
bg-black/70             → background-color: rgba(0, 0, 0, 0.7);
md:bg-white/10          → background-color: rgba(255, 255, 255, 0.1); (≥768px)
md:border               → border: 1px solid; (only on md and up)
border-gray-300/20      → border-color: rgba(209, 213, 219, 0.2);
overflow-hidden         → overflow: hidden;
transition-[width]      → transition: width;
duration-300            → transition-duration: 300ms;



