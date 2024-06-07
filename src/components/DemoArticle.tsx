import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import './DemoArticle.css';

interface DemoArticleProps extends HTMLAttributes<HTMLDivElement> {}

const DemoArticle: FC<DemoArticleProps> = ({ children, className }) => {
    return (
        <article className={classNames(className, 'article', 'main-grid')}>
            <section className="article-hero full-width main-grid">
                <h2 className="content">Article Headline</h2>
                <img
                    src="https://picsum.photos/1280/800"
                    alt="Hero Image"
                    className="full-width"
                />
            </section>
            <section className="article-body content">
                <h3>Section Headline</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    ab consequuntur delectus doloremque doloribus eum fugiat
                    impedit iusto laboriosam modi nesciunt, non odit perferendis
                    praesentium quaerat, quibusdam quidem rerum voluptas!
                </p>
                <img src="https://picsum.photos/800/600" alt="Inline Image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus aliquam assumenda cupiditate ex, excepturi
                    laboriosam, magnam modi molestiae nihil nisi obcaecati
                    officiis pariatur perferendis perspiciatis possimus quasi
                    rem repudiandae tempora?
                </p>
                <figure>
                    <img
                        src="https://picsum.photos/600/600"
                        alt="A graph or so?"
                    />
                    <figcaption>What a nice image</figcaption>
                </figure>
            </section>
            <footer className="full-width main-grid">
                <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae consequatur cupiditate deleniti expedita hic maxime
                    molestiae nesciunt quibusdam veniam vitae. Ab aspernatur
                    doloribus eveniet ex hic, in laboriosam tempora ullam.
                </p>
                <img
                    src="https://picsum.photos/60/60"
                    alt="Logo"
                    className="content"
                />
            </footer>
        </article>
    );
};

export default DemoArticle;
