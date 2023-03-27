import "./globals.css";
import Header from "./components/Header";
import Theme from "../providers/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-500">
        <Theme>
          <Header />
          <div className="max-w-[90rem] mx-auto">{children}</div>
        </Theme>
      </body>
    </html>
  );
}
