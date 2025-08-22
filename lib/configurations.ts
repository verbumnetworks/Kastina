export const ITEMS_PER_PAGE = 10;

type RouteAccessMap = {
  [key: string]: string[];
};

export const routeAccessMap: RouteAccessMap = {
  "/dashboard/admin(.*)": ["ADMIN"],
  "/dashboard/bishop(.*)": ["BISHOP", "ADMIN"],
};
