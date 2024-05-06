import json from "../static/data.json";

export const fetchSitemapRoutes = async () => {
  let routes = []

  const dynamicRoutes = json.map(data => `/career/${data.id}`)
  routes = [...routes, ...dynamicRoutes]

  return routes
}