import MenuCategories from "../menuCategories/MenuCategories";
import styles from "./menu.module.css";

const Menu = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.subtitle}>Discover by topic</h2>
			<h1 className={styles.title}>Categories</h1>
			<MenuCategories />
		</div>
	);
};

export default Menu;
