import { rules } from "./rules";

export function recommendCalculatedField(requirement: string) {
  const text = requirement.toLowerCase();

  const match = rules.find((rule) =>
    rule.keywords.some((keyword) => text.includes(keyword))
  );

  return {
    recommendedFunction:
      match?.function || "Manual Review Required",
  };
}