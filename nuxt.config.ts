const drizzleDrivers: Record<"pglite" | "postgresql" | "sqlite" | "d1" | "mysql", boolean> = {
  // both typings and runtime driver
  pglite: true,
  d1: true,
  
  // typings only, driver is unavailable at runtime
  postgresql: false,
  sqlite: false,
  mysql: false,
}

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
