import Content from './Content';
import './Home.style.css'

const Home = () => {
    return (
        <>
            <article className='article-header'>
                <header>
                    <h1>CRUD APPLICATION</h1>
                </header>

            </article>
            <Content name={'Nobin'}/>
        </>
    )
}

export default Home;