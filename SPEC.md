# Turbo Rent a Car - Website Specification

## Project Overview
- **Project Name**: Turbo Rent a Car
- **Type**: Static multi-page car rental website
- **Core Functionality**: Car rental booking, fleet showcase, service information, contact
- **Target Users**: Tourists, business travelers, residents in Bahrain

## Brand Identity
- **Tagline**: "Drive Beyond Expectations"
- **Primary Color**: #FF4D00 (Vibrant Orange - energy, speed)
- **Secondary Color**: #1A1A2E (Deep Navy - trust, professionalism)
- **Accent Color**: #00D4FF (Electric Cyan - modern, dynamic)
- **Theme**: Dark, premium, automotive-inspired with bold typography

## Page Structure

### 1. Home Page (index.html)
- **Hero Section**: Full-viewport with animated gradient background, floating car 3D effect, headline, CTA buttons
- **Quick Search Widget**: Pick-up/return location, dates, car type
- **Featured Fleet**: 6-card carousel showcasing popular cars
- **Why Choose Us**: 4-column feature grid with icons
- **Testimonials**: Horizontal slider with customer reviews
- **Statistics**: Animated counter section (fleet size, customers, locations, years)
- **CTA Banner**: Promotional call-to-action
- **Footer**: Full footer with links, contact info, social media

### 2. Fleet Page (fleet.html)
- **Filter Sidebar**: Car type, price range, transmission, fuel type
- **Car Grid**: Responsive grid with car cards
- **Car Card**: Image, name, specs (seats, transmission, fuel), daily price, "Book Now" button
- **Pagination**: Numbered pagination

### 3. Car Detail Page (car-detail.html)
- **Image Gallery**: Large hero image + thumbnail strip
- **Car Info**: Name, category, key features
- **Pricing Table**: Daily, weekly, monthly rates
- **Specifications**: Engine, transmission, fuel, seats, features list
- **Booking Form**: Date picker, extras, total calculation
- **Related Cars**: Similar vehicles suggestions

### 4. Services Page (services.html)
- **Service Categories**: Grid of 6 services with icons
- **Service Detail Cards**: Description, benefits, pricing
- **Corporate**: Corporate rental program section
- **Airport**: Airport pickup/drop-off service
- **Chauffeur**: Professional driver service

### 5. About Page (about.html)
- **Hero**: About us introduction
- **Company Story**: History and mission
- **Team Section**: Management team cards
- **Values**: Core values grid
- **Achievements**: Awards and milestones
- **Partners**: Client/logo showcase

### 6. Contact Page (contact.html)
- **Contact Form**: Full contact form with validation
- **Contact Info**: Phone, email, address, hours
- **Map**: Embedded map placeholder
- **FAQ Section**: Common questions accordion

## UI/UX Specification

### Typography
- **Headings**: "Bebas Neue" (bold, automotive feel)
- **Body**: "Outfit" (modern, clean)
- **Accent**: "Orbitron" (tech/automotive vibe for prices/numbers)

### Visual Effects
- **Backgrounds**: Dark gradient (#0D0D1A to #1A1A2E) with geometric patterns
- **Cards**: Glassmorphism effect (backdrop-blur, subtle borders)
- **Animations**: Smooth scroll, fade-in on scroll, hover effects
- **Buttons**: Gradient backgrounds, glow effects on hover
- **Car Images**: Subtle zoom on hover, reflection effect

### Layout
- **Max Width**: 1400px container
- **Spacing**: 80px section padding, 24px card padding
- **Responsive**: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)

### Components
- **Navigation**: Sticky header with logo, menu, CTA button
- **Search Widget**: Floating card with form inputs
- **Car Cards**: Image top, details bottom, hover overlay
- **Buttons**: Rounded (8px), primary gradient, secondary outline
- **Forms**: Dark inputs with cyan focus border
- **Icons**: Feather icons, custom car-related SVGs

## Functionality Specification

### Navigation
- Sticky header that changes style on scroll
- Mobile hamburger menu with slide-in drawer
- Active state for current page

### Search/Booking
- Date picker (flatpickr library)
- Location dropdown with presets
- Car type filter
- Form validation with error messages

### Car Display
- Filter by category (sedan, SUV, luxury, economy)
- Sort by price (low-high, high-low)
- Price range slider
- Quick view modal

### Forms
- Contact form with validation
- Booking form with total calculation
- Success/error message display

### Animations
- Hero section car float animation
- Scroll-triggered fade-in for sections
- Counter animation for statistics
- Smooth hover transitions
- Loading spinner for actions

## Mock Data

### Fleet Cars
1. **Nissan Sunny** - Economy - BHD 12/day
2. **Toyota Corolla** - Sedan - BHD 15/day
3. **Hyundai Sonata** - Mid-Size - BHD 18/day
4. **Toyota Camry** - Premium - BHD 22/day
5. **Nissan Kicks** - SUV - BHD 16/day
6. **Toyota Fortuner** - SUV - BHD 28/day
7. **Mitsubishi Pajero** - Luxury SUV - BHD 35/day
8. **BMW 3 Series** - Luxury - BHD 45/day
9. **Mercedes C-Class** - Premium - BHD 55/day
10. **Chevrolet Tahoe** - Large SUV - BHD 40/day

### Services
- Daily/Weekly/Monthly Rental
- Airport Pickup & Drop-off
- Corporate Rental Program
- Chauffeur Service
- One-Way Rentals
- 24/7 Roadside Assistance

### Contact Info
- Phone: +973 17221211
- WhatsApp: +973 39509922
- Email: info@turbocarbh.com
- Address: Salimabad, Bahrain
- Hours: 24/7

## Acceptance Criteria
1. All 6 pages load without errors
2. Navigation works between all pages
3. Forms validate input and show feedback
4. Responsive on mobile, tablet, desktop
5. Animations are smooth (60fps)
6. All car data displays correctly
7. Filters and sorting work on fleet page
8. Booking form calculates total correctly
9. All external resources (fonts, icons) load properly
10. Color scheme is consistent throughout