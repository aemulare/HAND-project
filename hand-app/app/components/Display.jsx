import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export const Display = () => {
  return (
    <div id="page-content-wrapper">
      <div className="container-fluid xyz">
        <div className="row">
          <div className="col-lg-12">
            <Breadcrumbs />
            {}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Display;
