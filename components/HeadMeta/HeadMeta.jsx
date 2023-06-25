import Head from "next/head";

const HeadMeta = ({ metaTitle, keywords }) => {
  return (
    <Head>
      {/* Basic metas */}
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta
        name='description'
        content='Malawi Sun Hotel & Conference Centre Website'
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta
        name='keywords'
        content={
          "Malawi Sun Hotel & Conference Centre Blantyre" + keywords
            ? keywords
            : ""
        }
      />
      <title>{`${
        metaTitle ? metaTitle : "One of Blantyre's Best & Most Popular Hotel"
      } - Malawi Sun Hotel & Conference Centre`}</title>
      <link
        rel='icon'
        type='image/x-icon'
        href={`${
          process.env.NODE_ENV === "production"
            ? process.env.NEXT_PUBLIC_BASEPATH ?? ""
            : ""
        }/favicon.ico`}
      />
    </Head>
  );
};

export default HeadMeta;
