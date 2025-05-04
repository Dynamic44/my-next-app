export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Dynamic!</h1>
      <p className="text-lg text-gray-700 mb-6">Tailwind + Next.js is live.</p>
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3LTc3Nzc3LTUuNys1NzU1LTc3NSs3NzctMjc3NSs3LTctMDc3NzgrLDU3Kzc3NysrN//AABEIABwAHAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAEBQYHA//EACcQAAIBAwQCAQQDAAAAAAAAAAECAwQREgAFITETUWEiQYHRBhQy/8QAFwEBAAMAAAAAAAAAAAAAAAAAAwABAv/EABkRAAMBAQEAAAAAAAAAAAAAAAABEQIxIf/aAAwDAQACEQMRAD8AylIiBc6sNn/g9TVN46ypaCewJpqekkqpYha48gQWQkEGxN+etc9to4YJ6OoB8Uq+J4pWZJVL4FySnpSLWv2w9csWFTusMFPDO8sMaRsYXstpJMWLvbhiQzMX9ow+w1Gq/C1EhBvWwHaqoQ/2YqgEXGKujp8PG4DI3wRoNaZwPpxt86u5aCqqoYKGqmWZo2ZoZ52PkiiOWKHslWxLKOStmHA6XttYQKC6ZYgsLH6T665/GpDLbAYEKq5RmXJe1Pff71Q7Rt43WhilhSSKaI+OXKOV4ncDlldVbG97lT0SbXGkcP8AgaYUEj06CSBjG5NiymxI/GnebwLOihG0x0VNlVsTPYmJTCEJJtYhGGSoovywBYngADkQ05xRbnFVxUfZR6HofGh0YsoYk3PJOjVdiBo3mCJ0/9k="
        alt="Welcome Image"
        className="w-64 h-auto rounded shadow-lg"
      />
    </div>
  );
}
