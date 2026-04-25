## Project Name

Odyssey Event Management

## Live

-Link : https://event-management-foysal.vercel.app/

## Uses technology

- Next.js
- Tailwind CSS
- Daisy UI
- CSS
- JSX
- Firebase authentication
- React Hot Toast
- Material Icon
- Local data

## Project Description

- This project is event management focus website.
- We planing event and also selling the event tickets in collaboration with client.
- Landing page have a hero section, about our service, upcoming event, successful project, subscription form, banner. Navbar and footer rape all the website.
- The items page has a show upcoming event list and client can booked. Visitor also can see details click by view details button.
- The project page shows our successfully arranged project who have been done.
- The About page shows our company and services.
- People can reach out from the contact page.
- Add page, add new item. This page is protected by user login.
- The Manage Item page can manage items. This page also user binding.
- Footer are linkable. User can visit another route from footer.

## Features

- User authentication
- Item page shows all upcomming items
- Specific Item Details
- Project page show completed project
- Single project details
- Protected add and manage item page
- Linkable footer
- Mobile Screen protected route located beside hamburg button also protected route find in hamburg drawer

## Setup Project

1. Clone the Repository
   git clone https://github.com/mahmoodfoysal/event-management
   cd event-management
2. Install Dependencies

Make sure you have Node.js installed (v18 or later recommended).

npm install

# or

yarn install

# or

pnpm install 3. Setup Environment Variables

Create a .env.local file in the root directory and add your environment variables:

NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_AUTH_DOMAIN=your_domain

⚠️ Do not commit .env.local to version control.

4. Run the Development Server
   npm run dev

Now open your browser and visit:

http://localhost:3000 5. Build for Production
npm run build

## Routes

- Items
- Item details
- Projects
- Project Details
- About
- Contact
- Login
- Refistration
- Add Items
- Manage Items

## Protected Route

- After login user can visit Add item and manage item page.
- If user logged in then they can not visit login and registration page.

## Future Work

- Booking event
- Get ticket collect after booking
- Contact with us page complete functionality.
- Add payment system
