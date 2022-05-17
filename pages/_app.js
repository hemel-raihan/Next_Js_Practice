import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  if(getLayout)
  {
    return getLayout(
      <Component {...pageProps} />
    )
  }

  return getLayout(
    <div>
    <Header/>
    
    <Footer/>
    </div>
  );
  
  
}

export default MyApp
