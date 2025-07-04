# React Movie App FrontEnd Development Guide

## 1. Project Setup

### Initial Setup
- Create React project using `npm create vite@latest`

### Required Packages
- `npm install react-router-dom` - For routing functionality
- `lucide-react` - Clean and modern SVG icons for React
- `react-hot-toast` - Toast notifications (success, error, info messages)
- `react-player` - Embed and play videos (YouTube, Vimeo, MP4, etc.)

## 2. Routing Configuration

### Setup Process
- Wrap app inside `BrowserRouter` in `main.jsx`
- Create routes inside `app.jsx` and set route paths
- Show navbar before all routes (only when admin panel is not open)

## 3. UI Components & Libraries

### Toast Notifications
- Use `Toaster` from `react-hot-toast` to show notifications

### Icons (from lucide-react)
- `XIcon` - Cross icon
- `MenuIcon` - Menu icon
- `Search` - Search icon

### Utilities
- `scrollTo(0,0)` - Scroll page to top

## 4. Authentication System

### Clerk Authentication
- Create account in Clerk and create app
- Follow React integration steps
- Use `useUser()` hook to check login status
- Use `UserButton` component for authenticated users

### User Interface
- **Not logged in**: Show normal login button
- **Logged in**: Show user icon with dropdown options
  - Manage account
  - Sign out
  - Custom options using `UserButton.MenuItems` and `UserButton.Action`

### UserButton.Action Props
- `label` - Button text
- `labelIcon` - Icon for button
- `onClick` - Redirect functionality

## 5. Main Components

### HeroSection
- Mounted inside Home component
- Uses `useNavigate` hook for page navigation

### FeaturedSection
- Display movie cards
- "Show more" button functionality
- Uses `BlurCircle` component for gradient backgrounds

### MovieCard
- Displays movie information
- Data sourced from `assets.js` (dummy data)

### TrailerSection
- Shows movie trailer videos using `ReactPlayer`
- YouTube URLs automatically extract thumbnails
- Cannot provide external thumbnail images

### Footer
- Pre-built component from prebuilt.com

## 6. Movie Pages

### Movie List Page
- Accessed via "Show more" button from FeaturedSection
- Displays list of movies using MovieCard component

### Movie Detail Page
- Accessed by clicking movie card image
- Contains multiple sections:
  - Movie details at top
  - "Watch Trailer" and "Buy Ticket" buttons
  - Date selection section (DateSelect component)
  - Dummy dates with buy ticket functionality

### SeatLayout Page
- Left side: Timing options
- Right side: Seat selection
- "Proceed to Checkout" button for payment
- Redirects to my-booking page after payment

### My Booking Page
- Displays booked movie information:
  - Movie image
  - Date and time
  - Amount
- "Pay Now" button if payment incomplete

## 7. Admin Panel

### Admin Pages Structure
```
pages/
└── Admin/
    ├── AddShow
    ├── Dashboard
    ├── Layout
    ├── ListBookings
    └── ListShows
```

### Admin Routing
- Add route in `app.jsx` with path `/admin/*`
- All admin paths use same layout

### Admin Layout
- Uses `Outlet` component from react-router-dom
- Renders all child routes

### Admin Navbar
- Contains only logo

### Admin Sidebar
- Navigation links array structure:
```javascript
const adminNavLinks = [
  {name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon},
  {name: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon},
  {name: 'List Show', path: '/admin/list-shows', icon: ListIcon},
  {name: 'List Bookings', path: '/admin/list-bookings', icon: ListCollapseIcon},
]
```

### Admin Dashboard
- Data fetched from dummy dashboard data in `assets.js`
- Card values are placeholder (will be replaced with backend data)

### Admin List Pages
- **List Shows**: Display shows in table format with dummy data
- **List Bookings**: Display bookings information

## 8. Tailwind CSS Reference

### Common Classes
- `px-` - Padding horizontal
- `py-` - Padding vertical
- `w-full` - Width 100%
- `bg-primary` - Background color using CSS variable
- `hover:bg-primary-dull` - Hover background color
- `transition: all 0.2s ease` - Smooth transitions

### Responsive Design

#### Min-width Breakpoints (Apply at and above specified width)
| Prefix | Meaning | Width ≥ |
|--------|---------|---------|
| `sm:` | Small devices | 640px |
| `md:` | Medium devices | 768px |
| `lg:` | Large devices | 1024px |
| `xl:` | Extra large devices | 1280px |
| `2xl:` | Extra-extra large | 1536px |

#### Max-width Breakpoints (Apply below or equal to specified width)
| Prefix | Meaning | Width ≤ |
|--------|---------|---------|
| `max-sm:` | For screens ≤ 640px | 640px |
| `max-md:` | For screens ≤ 768px | 768px |
| `max-lg:` | For screens ≤ 1024px | 1024px |
| `max-xl:` | For screens ≤ 1280px | 1280px |
| `max-2xl:` | For screens ≤ 1536px | 1536px |

### Utility Classes Examples
- `max-md:absolute` - Position absolute for screens ≤ 768px
- `max-md:top-0` - Top: 0
- `max-md:left-0` - Left: 0
- `max-md:font-medium` - Font weight: 500
- `max-md:text-lg` - Font size: 1.125rem (18px)
- `z-50` - Z-index: 50
- `flex` - Display: flex
- `flex-col` - Flex direction: column
- `md:flex-row` - Flex direction: row (≥768px)
- `items-center` - Align items: center
- `gap-8` - Gap: 2rem (32px)
- `py-3` - Padding top/bottom: 0.75rem
- `backdrop-blur` - Backdrop filter: blur(4px)
- `bg-black/70` - Background: rgba(0, 0, 0, 0.7)
- `border-gray-300/20` - Border color with opacity
- `overflow-hidden` - Overflow: hidden
- `transition-[width]` - Transition: width
- `duration-300` - Transition duration: 300ms
- `aspect-square` - Perfect square aspect ratio
- `truncate` - Text overflow with ellipsis
- `active:scale-95` - Scale to 95% when actively clicked

### Position Values
| Value | Position Relative to Right Edge | Moves Element |
|-------|--------------------------------|---------------|
| `right: 0` | Exactly on right edge | – |
| `right: 80px` | 80px inside from right | Left ⬅ |
| `right: -80px` | 80px outside to the right | Right ➡ |

## 9. Data Management

### Current Data Sources
- Movie data: `assets.js` (dummy data)
- Dashboard data: `assets.js` (dummy data)
- Admin data: `assets.js` (dummy data)

### Future Integration
- Backend database integration planned
- Real-time data fetching to replace dummy data
- Dynamic content management