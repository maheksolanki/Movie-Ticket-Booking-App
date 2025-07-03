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

7. scrollTo(0,0)  => scroll the page to the top

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
all the  data in movie card that comes from assets.js file this file contains the dummy data.

15. next create the tailer section component that show the some movie trailer videos using react.
for showing the video we use the ReactPlayer.
When you provide a YouTube URL to ReactPlayer, it automatically Extracts the video thumbnail from YouTube's servers or from youtube image url we can not give externally thubnail image.

16. we have not write the code for footer we use pre built.com website and get pre built footer from there.

17. let next create movie page and to this page we transfer from the fetured component that has button show more. 
when click the show more button we go to the movie page that show the list of the movie.

18. from the movie page  call the movieCard component which show the perticular card.

19. when we click to the particular card image we transfer to the movie detail page.
 movie detail page contains many sections top of the page show the particular movie details.

 that contains two button watch tailar and buy tickt .
 when we click the buy ticket it scroll the page to next section that is show date .
 for showing the date we call componenet date select.

 date select contais dummy dates and one button buy ticket.
 when click to the buy ticket button we transfer to the seatLayout page.

 20. seatlayout page contains the timing in one left side and right side contais seats.
 it also contains the proceed to checkout button when we click on that it asked for payment and if payment is completed then redirect the page to the my-booking page.

 21. next create the my-booking page. 
 In my booking page we show the booked movie image , date, time , amount .
 if the amount is not paid then we show pay Now button

 22. lets create **Admin** pages.
 first create the Admin folder in pages folder and then next create the pages like AddShow , Dashboard , layout, listbookings , listshows

 23. next we add the rout in app.jsx file in rout we add path like this /admin/* means for all admin paths shows the same layout.

 24. lets create the layout page.
 in layout page we use the **Outlet** component that import from react-router-dom use to render all child route.

 25. next crete the Admin Navbar
 







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

active: → This is a state variant. It applies the style when the element is actively being clicked
scale-95 → This means the element is scaled down to 95% of its original size using CSS transform: scale(0.95).

aspect-square	Ensures the element is always a perfect square.


| Value          | Position Relative to Right Edge | Moves Element |
| -------------- | ------------------------------- | ------------- |
| `right: 0`     | Exactly on right edge           | –             |
| `right: 80px`  | 80px **inside** from right      | Left ⬅        |
| `right: -80px` | 80px **outside** to the right   | Right ➡       |


 🔹 1. Min-width Breakpoints (sm:, md:, lg:, etc.)
These apply at and above the specified width.

Prefix	Meaning	Width ≥
sm:	Small devices	640px
md:	Medium devices	768px
lg:	Large devices	1024px
xl:	Extra large devices	1280px
2xl:	Extra-extra large	1536px


🔹 2. Max-width Breakpoints (max-sm:, max-md:, etc.)
These apply below or equal to the specified width.

Prefix	Meaning	Width ≤
max-sm:	For screens ≤ 640px	
max-md:	For screens ≤ 768px	
max-lg:	For screens ≤ 1024px	
max-xl:	For screens ≤ 1280px	
max-2xl:	For screens ≤ 1536px