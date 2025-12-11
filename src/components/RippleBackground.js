'use client';
import { useEffect } from 'react';

const RippleBackground = ({ selector = '#ripple-section' }) => {
  useEffect(() => {
    const loadScripts = async () => {
      const jqueryScript = document.createElement('script');
      jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
      jqueryScript.async = false;

      const ripplesScript = document.createElement('script');
      ripplesScript.src = '/vendor/jquery.ripples.min.js';
      ripplesScript.async = false;

      document.body.appendChild(jqueryScript);

      jqueryScript.onload = () => {
        document.body.appendChild(ripplesScript);

        ripplesScript.onload = () => {
          try {
            window.$(selector).ripples({
              resolution: 512,
              dropRadius: 20,
              perturbance: 0.04,
            });
          } catch (e) {
            console.error('Ripple init failed:', e);
          }
        };
      };
    };

    loadScripts();

    return () => {
      try {
        if (window.$) window.$(selector).ripples('destroy');
      } catch {}
    };
  }, [selector]);

  return null;
};

export default RippleBackground;
