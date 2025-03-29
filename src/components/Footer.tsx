export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} TailTracker. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 