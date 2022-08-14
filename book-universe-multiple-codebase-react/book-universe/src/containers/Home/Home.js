import React from 'react';
import db from '../../db.json';
import RemoteComponent from '@eclipse-muto/liveui-react';

const ProductCard = props => (
    <RemoteComponent name="productCard" {...props} />
);

export function Home() {
  return (
    <div className="container ms-Grid" dir="ltr">
      <div className="ms-Grid-row" style={{ marginBottom: 50 }}>
        {db.productList ? db.productList.map((productItem, index) => <ProductCard index={index} data={productItem} />) : null}
      </div>
    </div>
  );
};
