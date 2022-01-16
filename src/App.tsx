import Application from "./Application";


type NameTagProps = {
  name: string;
};

const NameTag = (props: NameTagProps) => {


  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{props.name}</p>
      </section>
      <section className="import">
        <Application />
      </section>
      <footer />
    </main>
  );
};

const App = () => <NameTag name="Mo" />;

export default App;