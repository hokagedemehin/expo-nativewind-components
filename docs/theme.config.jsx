import { useConfig } from "nextra-theme-docs";

export default {
  logo: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <img
        src="https://raw.githubusercontent.com/hokagedemehin/expo-nativewind-components/main/play_store_512.png"
        alt="Logo"
        style={{
          // width: "100%",
          height: "30px",
        }}
      />
      {/* <span>Expowind Components</span> */}
    </div>
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
        content="Simple and easy to use NativeWind Components for Expo apps"
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
  footer: {
    text: (
      <>
        <div className="">
          Copyright {new Date().getFullYear()} ©{" "}
          <a
            href="https://github.com/hokagedemehin/expo-nativewind-components"
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
