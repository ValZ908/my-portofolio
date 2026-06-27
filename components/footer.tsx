export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 px-6 text-center text-xs text-muted-foreground">
      <p>
        Built by{" "}
        <span className="text-foreground font-medium">Diah Safitri Pane</span>{" "}
        · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
