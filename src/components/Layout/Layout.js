import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Footer from '../../pages/Footer';
 

function Layout(props) {
  return (
    <div>
      <div className={classes.layout}>
        <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      </div>
      
      <div className={classes.footer}>
        <Footer /> 
      </div>
    </div>
  );
}

export default Layout;