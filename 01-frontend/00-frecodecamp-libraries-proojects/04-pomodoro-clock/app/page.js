import Clock from "../components/Clock.jsx";

export default function Home() {
  return (
    <main>
      <audio
        src="https://s3-us-west-1.amazonaws.com/benjaminadk/Data+synth+beep+high+and+sweet.mp3"
        id="beep"
      ></audio>
      <Clock />
    </main>
  );
}
