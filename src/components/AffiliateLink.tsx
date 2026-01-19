type AffiliateLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const SHOPEE_HOST_PATTERN = /^(?:https?:\/\/)?(?:www\.)?(shopee\.ph|shopee\.com\.ph)/i;
const SHOPEE_SHORTLINK_PATTERN = /^(?:https?:\/\/)?(?:www\.)?(shope\.ee|s\.shopee\.ph)\//i;
const SHOPEE_AFFILIATE_PARAM_PATTERN = /[?&](affiliate_id=|utm_source=an_|uls_trackid=)/i;

function buildShopeeAffiliateLink(href: string, affiliateId: string, subId?: string) {
  if (!SHOPEE_HOST_PATTERN.test(href) || SHOPEE_SHORTLINK_PATTERN.test(href)) {
    return href;
  }

  if (SHOPEE_AFFILIATE_PARAM_PATTERN.test(href)) {
    return href;
  }

  const params = new URLSearchParams({
    origin_link: href,
    affiliate_id: affiliateId
  });

  if (subId) {
    params.set("sub_id", subId);
  }

  return `https://s.shopee.ph/an_redir?${params.toString()}`;
}

export default function AffiliateLink({ href, children, className }: AffiliateLinkProps) {
  const affiliateId = import.meta.env.VITE_SHOPEE_AFFILIATE_ID?.trim();
  const subId = import.meta.env.VITE_SHOPEE_SUB_ID?.trim();
  const finalHref = affiliateId ? buildShopeeAffiliateLink(href, affiliateId, subId) : href;

  return (
    <a
      href={finalHref}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={className ?? "link"}
    >
      {children}
    </a>
  );
}
