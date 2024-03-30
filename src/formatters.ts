import { ProfileFragment } from "@digiv3rse/client";

export function formatProfileHandle(profile: ProfileFragment) {
  return profile.handle ? profile.handle.fullHandle : profile.id;
}
