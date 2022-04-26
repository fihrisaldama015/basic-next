import s from "../styles/Home.module.css";
import Navigation from "../components/navigation";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <div className={s.container}>
        <div className={s.main}>
          {children}
          <Navigation />
        </div>
      </div>
    </>
  );
};

export { s };
export default Layout;
