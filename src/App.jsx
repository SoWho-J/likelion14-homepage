import { BrowserRouter, Routes, Route } from "react-router-dom"; // react-router-dom에서 라우팅에 필요한 기능을 가져오는 부분.
import RootLayout from "../src/layout/RootLayout.jsx"; // 컴포넌트들 가져오기.
import Members from "../src/pages/main/Members.jsx";

function App() {
  // 앱의 중심컴포넌트
  return (
    // 화면에 보여줄 중심 컴포넌트 반환
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {/* 이 아래 모든 페이지는 RootLayout을 공통으로 사용하겠다는 의미*/}
          <Route path="/" element={<Members />} />
          {/* 메인 호출. 화면은 메인에서 시작, 주소가 /이면 메인페이지를 보여줘*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//BrowserRouter가 주소창 변화를 감지 -> Routes가 여러 route중에서 현재 주소와 맞는 공간을 찾음 -> 현재 주소와 맞으면 route는 현재 주소에 맞는 컴포넌트를 가져옴
export default App;
//App 컴포넌트를 다른 파일에서 사용할 수 있게 내보내는 코드.
