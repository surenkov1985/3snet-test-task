import "./App.css";
import logo from "./assets/image/logo.png";

function App() {
	return (
		<div className="flex flex-col font-[Roboto] w-full h-screen max-h-[1080px]">
			<header className="py-[1.5rem] px-[40px] bg-primary">
				<div className="flex">
					<a href="/" className="flex items-center gap-[8px] text-light-blue">
						<img src={logo} alt="logo" className="h-[34px] " />
						<span className="font-extralight text-[11px] leading-[13px] uppercase opacity-20 pl-[6px] flex border-l-light-blue border-l-[1px] h-full items-center">
							cpa
							<br />
							network
						</span>
					</a>
				</div>
			</header>
			<main className="grow"></main>
		</div>
	);
}

export default App;
