import { Brand } from "@digiv3rse/shared-kernel";

export enum PlatformType {
  Web = "web",
  Mobile = "mobile",
}

export enum RouteKind {
  Home = "home",
  Profile = "profile",
  Publication = "publication",
}

export type SearchParams = {
  by?: string;
};

export type AppId = Brand<string, "AppId">;
