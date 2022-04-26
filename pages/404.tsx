import router from "next/router";
import { useEffect, useState } from "react";
import s from "../styles/Home.module.css";

const Custom_404 = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (content == "") {
        setContent("Redirecting to Home.");
      } else {
        setContent(content + ".");
      }
    }, 1000);
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, [content]);

  return (
    <div className={s.container}>
      <div className={s.main} style={{ fontSize: "2em" }}>
        {content == "" ? (
          <p>
            <b>404</b> | This is Custom Pages
          </p>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Custom_404;
