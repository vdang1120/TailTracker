export default function Footer() {
    return (
        <footer className="bg-gray-50">
            <div className="h-px bg-gradient-to-r from-white from-20% via-gray-300 to-white to-80%"></div>
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