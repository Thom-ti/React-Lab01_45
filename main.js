function App() {
  const fullName = "Thom Santisa-nguansak";
  const year = new Date().getFullYear();
  const age = year - 1998;
  const st1 = { color: "gold", backgroundColor: "skyblue" };
  const st2 = { color: "silver", backgroundColor: "deeppink" };
  return (
    <div>
      <h1 style={st1}>Name : {fullName}</h1>
      <p style={st2}>Year : {age}</p>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
