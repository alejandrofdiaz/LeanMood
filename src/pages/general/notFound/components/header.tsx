import * as React from 'react';
const classNames: any = require('./headerStyles.scss');

export const NotFoundHeader =  () => {
  return (
    <div className={`panel-heading ${classNames.dangerHeading}`}>
      <h3 className="text-center">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" /> Oops:
        <small>Page not found - <b>404 error</b></small>
      </h3>
    </div>
  );
};
