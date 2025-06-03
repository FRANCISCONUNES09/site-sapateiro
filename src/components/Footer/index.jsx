export default function Footer() {
  return (
    <footer className="w-full h-16 bg-red-600 text-white flex items-center justify-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()}  Conserto de calçados - Todos os direitos reservados.
      </p>
    </footer>
  );
}