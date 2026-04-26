# Odyssey Event Management

A modern event management web application built with Next.js App Router.  
This project includes public pages, Firebase authentication, and protected item management pages.

## Live Demo

- Live URL: [https://event-management-foysal.vercel.app/](https://event-management-foysal.vercel.app/)

## Repository

- GitHub: [https://github.com/mahmoodfoysal/event-management](https://github.com/mahmoodfoysal/event-management)

## Technologies Used

- Next.js (App Router)
- React
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- React Hot Toast
- Lucide Icons
- LocalStorage (for item persistence)

## Key Features

- Responsive landing page with consistent layout and polished UI
- Sticky navbar with authenticated user dropdown
- Email/password authentication with Firebase
- Google login support
- Items page with search, multi-field filtering, and pagination
- Dynamic item details page (`/items/[id]`) with related items
- Protected Add Item page (`/items/add`)
- Protected Manage Items page (`/items/manage`) with view and delete actions
- Invalid item handling with a dedicated "Item Not Found" UI

## Setup and Installation

### 1) Clone the repository

```bash
git clone https://github.com/mahmoodfoysal/event-management
cd event-management
```

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_PROJECT_ID=your_project_id
NEXT_PUBLIC_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_APP_ID=your_app_id
```

Do not commit `.env.local` to version control.

### 4) Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5) Build for production

```bash
npm run build
```

## Route Summary

### Public Routes

- `/` - Landing page
- `/items` - Items listing with search/filter
- `/items/[id]` - Dynamic item details page
- `/projects` - Projects page
- `/projects/[id]` - Project details page
- `/about` - About page
- `/contact` - Contact page
- `/login` - Login page
- `/register` - Registration page

### Protected Routes

- `/items/add` - Add new item (authenticated users only)
- `/items/manage` - Manage items (authenticated users only)

## Authentication Behavior

- Unauthenticated users trying to access protected routes are redirected to `/login`.
- Authenticated users are redirected to `/` when visiting `/login` or `/register`.

## Future Improvements

- Booking and ticket checkout flow
- Payment gateway integration
- Full contact form backend integration
