# ChatApp

Real-time chat application with instant messaging, group chats, and forum-style discussion channels.

## 🚀 Live Demo

[View Live Demo](https://kiranpokharkar2003.github.io/chatapp)

## 📸 Screenshots

### Home Page
![Home Page](./screenshots/home.png)

### Chat Interface
![Chat Interface](./screenshots/chat.png)

### Forum Channels
![Forum Channels](./screenshots/forum.png)

## Tech Stack

- **Next.js 15** - React framework
- **Stream Chat** - Real-time messaging
- **Clerk** - Authentication
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Features

- ✅ Real-time instant messaging
- ✅ Forum-style discussion channels
- ✅ User authentication
- ✅ Group chat functionality
- ✅ Responsive design
- ✅ Modern animated UI

## Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
Create `.env.local` file:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_STREAM_API_KEY=your_stream_key
STREAM_SECRET_KEY=your_stream_secret
```

3. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
chatapp/
├── app/              # Next.js app directory
│   ├── api/         # API routes
│   ├── chat/        # Chat page
│   ├── forum/       # Forum pages
│   └── forums/      # Forums listing
├── components/      # React components
│   ├── ui/         # UI components
│   ├── ChatForum.js
│   └── Navbar.js
├── lib/            # Utility functions
└── public/         # Static assets
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

MIT
