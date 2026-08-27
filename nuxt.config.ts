const drizzleDrivers = ["pglite", "sqlite"]

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: [
    "@nuxt/ui", 
    "nuxt-drizzle",
  ],
  runtimeConfig: {
    drizzle: {
      content: {
        driver: "pglite",
      },
      users: {
        driver: "pglite",
      },
    },
  },
  drizzle: {
    baseDir: "~~/server/db/drizzle",
    migrations: {
      migrateOnInit: true,
    },
    datasources: {
      content: {
        drivers: drizzleDrivers,
      },
      users: {
        drivers: drizzleDrivers,
      },
    },
  },
});
