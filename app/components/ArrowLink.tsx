export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href}>
      <div className="link">
        <div className="link__indicator-wrapper">
          <span className="link__indicator" />
        </div>
        <span>{children}</span>
      </div>
    </a>
  );
}
