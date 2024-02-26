import { useState } from "react";

import { Container, Content, ClosedSideBar, OpenSideBar } from "./styles";

import {
	IoNotificationsSharp
} from "react-icons/io5";

import {
	MdSettings
} from "react-icons/md";

import {
	BsArrowRight,
	BsArrowLeft
} from "react-icons/bs";

import {
	DiReact
} from "react-icons/di";

import {
	RiLogoutCircleRLine
} from "react-icons/ri";


import logoImg from "../../assets/images/BrandLogo.png";
import userImg from "../../assets/images/eu.png";

export function SideBar() {
	const [sideBar, setSideBar] = useState(false);

	function handleChangeSideBar() {
		setSideBar((prevState) => !prevState);
	}
	return (
		<Container>
			<Content>
				{!sideBar ? (
					<ClosedSideBar>
						<nav>
							<button onClick={handleChangeSideBar}>
								<BsArrowRight />
							</button>

							<img src={logoImg} alt="Eu" />

							{/* Links principais do app */}
							<ul>
								<a href="/" title="Accueil">
									<DiReact />
								</a>
								<a href="/" title="Gestion">
									<DiReact />
								</a>
								<a href="/" title="Pointage">
									<DiReact />
								</a>
							</ul>
						</nav>
						<div>
							{/* Icones que pode não ser tão principais no app */}
							<ul>
								<a href="/" title="Notification">
									<IoNotificationsSharp />
								</a>
								<a href="/" title="Configuration">
									<MdSettings />
								</a>
								<a href="/" title="Déconnexion">
									<RiLogoutCircleRLine />
								</a>
							</ul>

							<span>
								<img src={userImg} alt="Eu" />
							</span>
						</div>
					</ClosedSideBar>
				) : (
					<OpenSideBar>
						<section>
							<nav>
								<span>
									<button onClick={handleChangeSideBar}>
										<BsArrowLeft />
									</button>
								</span>
								<div>
									<img src={logoImg} alt="Eu" />
									<h1>AssMatMgmt</h1>
								</div>

								{/* Icones principais do app */}
								<ul>
									<a href="/" title="Accueil">
										<DiReact />
										<p>Accueil</p>
									</a>
									<a href="/" title="Gestion">
										<DiReact />
										<p>Gestion</p>
									</a>
									<a href="/" title="Pointage">
										<DiReact />
										<p>Pointage</p>
									</a>
								</ul>
							</nav>
							<div>
								{/* Icones que pode não ser tão principais no app */}
								<ul>
									<a href="/">
										<IoNotificationsSharp />
										<p>Notification</p>
									</a>
									<a href="/">
										<MdSettings />
										<p>Configuration</p>
									</a>
									<a href="/">
										<RiLogoutCircleRLine />
										<p>Déconnexion</p>
									</a>
								</ul>
							</div>
						</section>
						<aside onClick={handleChangeSideBar} />
					</OpenSideBar>
				)}
			</Content>
		</Container>
	);
}
