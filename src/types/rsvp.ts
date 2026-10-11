export type GuestResponse = {
  attending: "yes" | "no" | "";
  wednesdayNight: "yes" | "no" | "";
  accommodation: "yes" | "no" | "";
  diet: "none" | "vegetarian" | "vegan" | "other" | "";
  hasDietaryRequirements: "yes" | "no" | "";
  dietaryDetails: string;
};

export type GuestGroup = {
  id: string;
  names: string[];
  responses?: Record<string, GuestResponse | undefined>;
  questions?: string;
};
