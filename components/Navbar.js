import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    const router = useRouter();
    return (<>
        <div className={styles.navbar}>
            <div className={styles.title}>Gate 2022</div>
            <div className={styles.nav_links}>
                <div className={styles.link}>
                    <Link href="/revision">
                        <a className={router.pathname === "/revision" ? styles.active : ""}>Revision</a>
                    </Link>
                </div>
                <div className={styles.link}>
                    <Link href="/addQ">
                        <a className={router.pathname === "/addQ" ? styles.active : ""}>Add Question</a>
                    </Link>
                </div>
                <div className={styles.link}>
                    <Link href="/">
                        <a className={router.pathname === "/" ? styles.active : ""}>Take Quiz</a>
                    </Link>
                </div>
            </div>
        </div>
    </>);
}