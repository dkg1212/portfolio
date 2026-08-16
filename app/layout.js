import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  title: "Dimpal Gogoi — Portfolio",
  description: "Computer Science Student @ Tezpur University. Developer, Learner, Innovator.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
          overflow-x-hidden bg-slate-50 text-slate-800 dark:bg-[#020817] dark:text-slate-100`}
      >
        <div className="w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
