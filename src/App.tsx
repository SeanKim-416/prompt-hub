import PromptCard from "./components/PromptCard";

function App() {
  return (
    <div>
      <PromptCard
        id="1"
        title="테스트"
        description="테스트 설명입니다."
        tags={["테스트", "시작"]}
      />
    </div>
  );
}

export default App;
