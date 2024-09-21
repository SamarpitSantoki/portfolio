// app/providers.js
"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init("phc_dtk6rwqmh7q4VBNKwykLvSRaVfRkMJGXaOajSN2i9Dn", {
    api_host: "https://us.i.posthog.com",
    person_profiles: "always",
  });
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
