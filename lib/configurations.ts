export const ITEMS_PER_PAGE = 10;

type RouteAccessMap = {
  [key: string]: string[];
};

export const routeAccessMap: RouteAccessMap = {
  "/admin(.*)": ["ADMIN"],
  "/student(.*)": ["BISHOP"],

  "/list/teachers": ["admin"],

};
