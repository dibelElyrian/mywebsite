type AffiliateLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function AffiliateLink({ href, children }: AffiliateLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="link"
    >
      {children}
    </a>
  );
}
