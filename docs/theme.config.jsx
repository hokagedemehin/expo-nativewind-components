import { useConfig } from "nextra-theme-docs";

export default {
  logo: (
    <img
      src="https://raw.githubusercontent.com/hokagedemehin/expo-nativewind-components/main/play_store_512.png"
      alt="Logo"
      style={{
        width: "100%",
        height: "30px",
      }}
    />
  ),
  project: {
    link: "https://github.com/hokagedemehin/expo-nativewind-components",
  },
  docsRepositoryBase:
    "https://github.com/hokagedemehin/expo-nativewind-components",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Expo Nativewind Components Documentation"
      />
      <meta
        name="og:title"
        content="Expo Nativewind Components Documentation"
      />
      <link
        rel="icon"
        href="https://raw.githubusercontent.com/hokagedemehin/expo-nativewind-components/main/play_store_512.png"
      />
    </>
  ),
  navigation: {
    prev: true,
    next: true,
  },
  editLink: {
    component: null,
  },
  // gitTimestamp: () => {
  //   const { gitTimestamp } = useConfig();
  //   console.log("gitTimestamp :>> ", gitTimestamp);
  //   return (
  //     <div>
  //       <p>Last Updated: {gitTimestamp}</p>
  //     </div>
  //   );
  // },
  footer: {
    text: (
      <>
        <div className="">
          Copyright {new Date().getFullYear()} ©{" "}
          <a
            href="https://admin-stg-f987f871eac0.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Expo NativeWind Components
          </a>
        </div>
      </>
    ),
  },
};
