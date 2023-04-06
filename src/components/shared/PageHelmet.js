import { Helmet } from "react-helmet";
import React from "react";

const PageHelmet = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{pageTitle} || Malawi Sun </title>
        <meta name='robots' content='noindex, follow' />
        <meta
          name='description'
          content='Malawi Sun Hotel and Conference Centre'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Helmet>
    </>
  );
};

export default PageHelmet;
