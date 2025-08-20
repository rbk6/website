import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { IoIosSunny } from 'react-icons/io';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import styles from './LandingPage.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import useTitle from '../../lib/useTitle';

const LandingPage: React.FC = () => {
	useTitle('about');
	const { theme, toggleTheme } = useTheme();

	return (
		<div>
			<main>
				<section>
					<div className={`${styles['content-wrap']}`}>
						<h1>hey, i'm ryan</h1>
						<p>
							i'm a software developer who likes to make cool things in my free time. my work involves aws, java, and
							react/typescript, mostly building microservices and related systems but i'm also delving more into game
							development.
						</p>
						<p>
							this site's still pretty minimal, but i'm planning to change that. lately, i've been exploring new
							interests and diving deeper into how things function, and i'll be sharing what i build along the way.
						</p>
						<p>
							check back soon to see what i've been working on. for now, i'm putting this site together as a home for my
							work.
						</p>
					</div>
				</section>
				<footer>
					<div className={`${styles['content-wrap']} ${styles['links']}`}>
						<a
							href="https://www.linkedin.com/in/ryan-backman/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="linkedIn profile"
							className={`${styles['social-btn']}`}
						>
							<FaLinkedin />
						</a>
						<a
							href="https://github.com/rbk6"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="github profile"
							className={`${styles['social-btn']}`}
						>
							<FaGithub />
						</a>
					</div>
				</footer>
				<button onClick={toggleTheme} aria-label="toggle theme" className={`${styles['theme-btn']}`}>
					{theme === 'light' ? <IoIosSunny size={24} /> : <BsFillMoonStarsFill size={18} />}
				</button>
			</main>
		</div>
	);
};

export default LandingPage;
