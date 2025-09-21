import React, { useCallback, useEffect, useState } from 'react';

export interface PreviewAreaProps {
  component: React.ComponentType<any>;
  metadata: { [key: string]: any };
}

export const PreviewArea = ({ component: Component, metadata }: PreviewAreaProps) => {

  const [props, setProps] = useState(metadata);

  useEffect(() => {
    const initialProps: { [key: string]: any } = {};
    Object.keys(metadata).forEach((key) => {
      if (metadata[key] !== undefined) {
        initialProps[key] = metadata[key];
      }
    });
    setProps(initialProps);
  }, [metadata]);

  return (
    <div className=" p-4 rounded bg-white">
      <Component {...props} />
    </div>
  );
};