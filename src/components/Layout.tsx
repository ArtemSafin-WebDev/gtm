import Header from "./Header";

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="relative flex grow">{children}</div>
    </div>
  );
}

export default Layout;
