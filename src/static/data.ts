import { LARGE_MONSTERS, SMALL_MONSTERS } from "./monsters";

export type LookupItem = {
  name: String;
  type: "Large Monster" | "Small Monster";
};

const LOOKUP_LIST: LookupItem[] = [
  ...LARGE_MONSTERS.map((name) => ({ name, type: "Large Monster" as const })),
  ...SMALL_MONSTERS.map((name) => ({ name, type: "Small Monster" as const })),
];

export default LOOKUP_LIST;
