import Table from "./components/Table/Table";
import "./index.css";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Table />
      </Container>
    </div>
  );
}

export default App;
