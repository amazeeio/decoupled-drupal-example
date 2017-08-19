// @flow

import React from 'react';
import Link from 'AsyncLink';
import gql from 'graphql-tag';
import Html from 'Html';

/* eslint-disable react/no-unused-prop-types */
export type ArticleTeaserProps = {
  title: string,
  url: {
    alias: string,
  },
  body: string,
  fieldMyfield: string,
};
/* eslint-enable react/no-unused-prop-types */

const ArticleTeaser = ({
  title,
  url,
  body,
  fieldMyfield,
}: ArticleTeaserProps): React.Element<any> =>
  (<div>
    <h2>
      <Link to={url && url.alias}>
        {title}
      </Link>
    </h2>
    <Html>
      {body}
    </Html>
    <strong>
      {fieldMyfield}
    </strong>
  </div>);

ArticleTeaser.fragments = {
  articleTeaserFragment: gql`
    fragment ArticleTeaserFragment on NodeArticle {
      url: entityUrl {
        alias
      }
      title
      body
      fieldMyfield
    }
  `,
};

export default ArticleTeaser;
