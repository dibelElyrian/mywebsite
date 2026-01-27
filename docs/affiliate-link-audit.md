## Affiliate Link Audit

Date: 2026-01-27

Summary of affiliate links used and author confirmations for the two new posts added on 2026-01-27.

- Post: Budget Rice Cookers for Small Families in the Philippines
  - Links replaced with HTML anchors including `rel="sponsored noopener noreferrer"`.
  - Shopee links used (user-provided):
    - POWERPH Compact Rice Cooker 2L/3L/5L — https://s.shopee.ph/1VtGXDwR0u
    - Maimeite Rice Cooker Small Non-Stick Inner Pot — https://s.shopee.ph/5fipV0H4F9
    - 1.2L Rice Cooker Mini Non-stick Energy Saving — https://s.shopee.ph/30i4KAqCx9
  - Notes: Links provided by user; affiliate redirecting handled by site `AffiliateLink` component when affiliate IDs are set. For now links are direct with `rel="sponsored"` to mark them.

- Post: Affordable Date Night Ideas for Valentine’s Day in the Philippines
  - Links replaced with HTML anchors including `rel="sponsored noopener noreferrer"`.
  - Shopee links present (user supplied / found):
    - Picnic set (folding table and 2 chairs) — https://s.shopee.ph/AABEqXPny0
    - Comfort cards (couple edition) — https://s.shopee.ph/W0jL3CdxN
  - Notes: User confirmed they could not find a suggested 3rd product; user approved publishing with fewer than 3 affiliate links.

Action items: ensure environment variables `VITE_SHOPEE_AFFILIATE_ID` and `VITE_SHOPEE_SUB_ID` are set in CI or Netlify when enabling affiliate redirects. No sensitive values are stored in the repo.
