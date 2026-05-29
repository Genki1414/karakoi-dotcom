import type { MetadataRoute } from "next";
import { products, servicePages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/sales", "/rental", "/rental/apply", "/sitemap"];
  const productRoutes = products.map((product) => `/products/${product.slug}`);
  const serviceRoutes = servicePages.map((page) => `/services/${page.slug}`);

  return [...routes, ...productRoutes, ...serviceRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
