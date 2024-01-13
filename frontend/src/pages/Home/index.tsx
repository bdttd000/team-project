import React from "react";
import { LayoutDefault } from "../../layouts";
import Photo from "../../assets/przyklad.webp";
import Media from "./Media";

const Home: React.FC = () => {
  // TO DO
  // Zaczytywanie danych z bazy
  const data = [
    {
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore",
      longDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore",
      longDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore",
      longDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore",
      longDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore",
      longDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore",
      longDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore",
      longDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore",
      longDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <LayoutDefault>
      <div className="max-w-5xl p-4 m-5 mx-auto bg-slate-200 rounded-lg flex flex-col">
        <div className="mb-4">
          {/* TO DO */}
          {/* searchbar */}
          <input
            type="text"
            className="w-full border-2 outline-none p-2 rounded-lg"
            placeholder="Wyszukaj poradnik..."
          />
        </div>
        <div className="flex flex-col gap-4">
          {data
            ? data.map((x) => (
                <Media
                  photo={Photo}
                  shortDesc={x.shortDesc}
                  longDesc={x.longDesc}
                ></Media>
              ))
            : ""}
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Home;
