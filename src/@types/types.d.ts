import { ReactNode } from "react";

// FCC = Functional Component with children
// TS = Typescript definitions:
export type FCC = (props: { children: ReactNode }) => ReactNode;

export type RegisterType = {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  phone: string;
  email: string;
  password: string;
  image: {
    url: string;
    alt: string;
  };
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: number;
  };
  isBusiness: boolean;
};
