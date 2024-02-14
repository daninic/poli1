
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.ee9a17f0cf440dc20c0c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/616.latest.pt-BR.959dc9443d895ee76f5b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/748.latest.pt-BR.ee3af826f9b349c71c90.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/40.latest.pt-BR.cf4d6c0a3863835fe90f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.c5999fe4b69df4ad7a2e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/240.latest.pt-BR.d48b54ea867b809eedba.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.latest.pt-BR.2004013e445b7353dc80.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/44.latest.pt-BR.ed5da7e5a1dddfca0e79.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.24e9c2290ca34267a6b5.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/616.latest.pt-BR.a30f4bd2dcc6ba6e87f5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.e5a7f63ca146c0549466.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.latest.pt-BR.4d273af8acf76b1eb555.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/457.latest.pt-BR.079fb20d3663833686ba.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  