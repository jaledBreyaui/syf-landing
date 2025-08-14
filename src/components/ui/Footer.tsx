export default function Footer() {
    return (
        <footer className="bg-[#121212] text-gray-300 text-sm py-6">
            <div className="max-w-7xl mx-auto px-4 text-center">
                &copy; {new Date().getFullYear()} S&amp;F Global SAS. All rights reserved.
            </div>
        </footer>
    );
}