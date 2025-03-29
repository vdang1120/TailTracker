export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row justify-center items-center">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} TailTracker @ HackDay
          </div>
        </div>
      </div>
    </footer>
  );
} 