const opener = document.querySelector(".top-menu-opener");
const closer = document.querySelector(".top-menu-closer");
const nav = document.querySelector(".top-menu");

if (opener) {
	const onClickOpenMenu = () => {
		opener.classList.add("active");
		opener.removeEventListener("click", onClickOpenMenu);
		opener.addEventListener("click", closeMenuHandler);
		document.addEventListener("click", onOverlayClickCloseMenu);
	};

	const onOverlayClickCloseMenu = (evt) => {
		console.log(evt.target);
		if (evt.target === nav) {
			console.log(evt.target);
			closeMenuHandler();
		}
	};

	const closeMenuHandler = () => {
		opener.classList.remove("active");
		opener.removeEventListener("click", closeMenuHandler);
		opener.addEventListener("click", onClickOpenMenu);
		document.removeEventListener("click", onOverlayClickCloseMenu);
	};

	opener.addEventListener("click", onClickOpenMenu);
}
