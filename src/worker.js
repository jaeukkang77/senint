const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
};

const LEGACY_REDIRECTS = {
  "/index.asp": "/",
  "/index.asp.html": "/",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const redirectTarget = LEGACY_REDIRECTS[url.pathname];
    if (redirectTarget) {
      url.pathname = redirectTarget;
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
      headers.set(key, value);
    }

    const path = url.pathname;
    if (path.startsWith("/common/images/")) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else if (path.startsWith("/common/css/") || path.startsWith("/common/js/")) {
      headers.set("Cache-Control", "public, max-age=86400");
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
