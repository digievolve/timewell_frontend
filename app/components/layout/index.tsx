import Header from "./Header";
import Footer from "./Footer";

export default function PageWrapper({
  children,
  fullBleedHero = false,
}: {
  children: React.ReactNode;
  fullBleedHero?: boolean;
}) {
  return (
    <>
      <Header />
      {/*
        fullBleedHero: hero carousel sits directly behind the transparent nav — no pt.
        Other pages still need pt-16 lg:pt-20 to clear the fixed header.
      */}
      <main className={`flex-1 ${fullBleedHero ? "" : "pt-16 lg:pt-20"}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}