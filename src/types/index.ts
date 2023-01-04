export type Subcategory = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
  subcategories: Subcategory[];
};

export type OptionsSection = {
  title: string;
  type: string;
  options: string[];
};

export type SocialMedia = {
  id: number;
  name: string;
  profile: string;
  link: string;
};

export type NewEvent = {
  title: string;
  value: number;
  user_id: number;
  subcategory_id: number;
  sections: OptionsSection[];
};

export type SponsorEvent = {
  id: number;
  subcategory: {
    id: number;
    name: string;
  };
  name: string;
  status: string;
  value: number;
  create_date: string;
  modify_date: string;
  social_medias: SocialMedia[];
  sections: OptionsSection[];
  user: {
    id: number;
    name: string;
  };
};
