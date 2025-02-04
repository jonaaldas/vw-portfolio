import posthog from "posthog-js";

export default {
  install(app: any) {
    app.config.globalProperties.$posthog = posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
      api_host: "https://eu.i.posthog.com",
    });
  },
};
