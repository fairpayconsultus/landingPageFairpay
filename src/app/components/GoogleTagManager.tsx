import { useEffect } from "react";

export function GoogleTagManager() {
  useEffect(() => {
    if (window.document.getElementById('gtm-script')) return;

    // Inyección manual del script de GTM para compatibilidad con Vite/React
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s) as HTMLScriptElement,dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.id='gtm-script';j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;if(f && f.parentNode) f.parentNode.insertBefore(j,f);
    else d.head.appendChild(j);
    })(window,document,'script','dataLayer','GTM-5ZPGSP28');
  }, []);

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5ZPGSP28"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}