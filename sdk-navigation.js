// Mintlify treats cross-product shortcuts as external links. Keep these
// same-site SDK destinations in the current tab, including keyboard clicks.
document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const link = event.target.closest(
    ':is(#sidebar-content, #mobile-nav-content) a:is([href="/solana"], [href="/evm"], [href="/idp-sdk"])',
  );
  if (link instanceof HTMLAnchorElement) link.removeAttribute("target");
}, true);
