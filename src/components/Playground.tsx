import { FCC } from "../@types/types";

type PersonCardProps = {
  name: string;
  favoriteColor: string;
};

const PersonCard = (props: PersonCardProps) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Favorite Color{props.favoriteColor}</p>
    </div>
  );
};

export const Playground = () => {
  return (
    <div>
      <PersonCard favoriteColor="" name="" />
    </div>
  );
};
 

export const FlexDiv:FCC = (props)=>{
    return (
        <div className="flex flex-col gap-2">
            {props.children}
        </div>
    )
}

<FlexDiv >
    {/* children */}
    hello
    123
    <button>Click Me</button>
    <button>Click Me</button>
    <button>Click Me</button>
    <button>Click Me</button>
</FlexDiv>