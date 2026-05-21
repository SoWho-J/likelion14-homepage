import { Outlet } from "react-router-dom"; //전체페이지의 공통 구조를 만드는 컴포넌트 outlet에 자식컴포넌트가 들어감 메인에서는 Main이 outlet에 들어감
import Header from "../components/header/Header"; //헤더 컴포넌트 불러오기

export default function RootLayout() {
  return (
    <>
      <Header /> {/*헤더*/}
      <main>
        <Outlet />
        {/*App.jsx에서 Root Layout 하위에 있던 Main 페이지가 설정한 경로에 따라 <Out let> 자리에 들어간다*/}
      </main>
    </>
  );
}
