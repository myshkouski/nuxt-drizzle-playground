const drizzleDrivers: Record<"pglite" | "sqlite" | "mysql" | "postgresql", boolean> = {
  // both typings and runtime driver
  pglite: true,
  
  // typings only, driver is unavailable at runtime
  sqlite: false,
  mysql: false,
  postgresql: false,
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
