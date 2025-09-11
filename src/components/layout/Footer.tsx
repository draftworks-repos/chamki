export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-center py-6 mt-8">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Chamki. All rights reserved.
      </p>
    </footer>
  );
}
