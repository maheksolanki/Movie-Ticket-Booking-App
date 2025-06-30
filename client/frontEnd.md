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

8. let we create the login functionality for this we use clerk.
Authentication using CLERK. (create account in clerk and create app inside that and follow react steps).

9. we use useUser() to check the user is login or not.
- we use the userCleark for adding Buttons.
- if user is not login we normal show our login buttton but if we are loging then we show user icon.
if we click on user icon it has two option manage account and signout.
- but we can able to add other options also using `UserButton.MenuItems` component and inside this component we also show one other component is UserButton.Action component.

- UserButton.Action contains props like label ,label icon , onclick for where to redirect after clicking.

10. next we create the HeroSection this component is mount inside the Home component.

11. we use useNavigate Hook of router for moving one page to other page.

12. next create the FeaturedSection component this is for show movie cards and show more buttons feature.

13. In this backgrand has gradient colors and that use multiple time so that we create separate component for that it's name is BlurCircle.

14. next create the movie card component that add inside the featured component
all the  data in movie card that comed from assets.js file this file contains the dummy data.

15. next create the tailer section component that show the some movie trailer videos using react.
for showing the video we use the ReactPlayer.
When you provide a YouTube URL to ReactPlayer, it automatically Extracts the video thumbnail from YouTube's servers or from youtube image url we can not give externally thubnail image.

16. we have not write the code for footer we use pre built.com website and get pre built footer from there.

17. let next create movie list in movie component.






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
md:px-16	               ≥768px	
lg:px-24	               ≥1024px
xl:px-44	               ≥1280px
pt -> padding top
pb -> padding bottom 


| Value          | Position Relative to Right Edge | Moves Element |
| -------------- | ------------------------------- | ------------- |
| `right: 0`     | Exactly on right edge           | –             |
| `right: 80px`  | 80px **inside** from right      | Left ⬅        |
| `right: -80px` | 80px **outside** to the right   | Right ➡       |
