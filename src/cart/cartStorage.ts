import type { CartItem } from "./CartProvider";

const STORAGE_KEY = "audiophile_cart_v1";

export { STORAGE_KEY };

export function safeParseCart(raw: string | null): CartItem[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter((x) => x && typeof x.slug === "string")
      .map((x) => ({
        slug: String(x.slug),
        name: String(x.name ?? ""),
        price: Number(x.price ?? 0),
        image: String(x.image ?? ""),
        quantity: Math.max(1, Number(x.quantity ?? 1)),
      }));
  } catch {
    return [];
  }
}

