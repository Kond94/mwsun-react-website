import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

const About = (props) => {
  const classes = useStyles();
  const { slug, ...rest } = props;

  return (
    <>
      {/* <HeadMeta metaTitle={slug} /> */}
      <Header
        brand='Malawi Sun Hotel '
        rightLinks={<HeaderLinks />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {/* <SectionBasics /> */}
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>About</h2>
          </div>
          {slug === "About" ? (
            <h3>Main About Us Data</h3>
          ) : (
            <h2>Other About Us Data</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default About;

export async function getServerSideProps({ params }) {
  return {
    props: { slug: params },
  };
}
