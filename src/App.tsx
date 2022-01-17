import Application from "./Application";
import QuizParty from "./QuizParty";


type NameTagProps = {
  name: string;
};

const NameTag = (props: NameTagProps) => {


  return (
    <main>
      <header>
        <h1 style={{fontSize: '6em'}}>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{props.name}</p>
      </section>
      <section className="import">
        <Application />
      </section>
      <hr style={{border: '4px solid black', margin: '6em 10em'}} />

      <footer />
    </main>
  );
};

const App = () => <NameTag name="Mo" />;

export default App;