import React, { useEffect, useRef, useState } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Wrapper = ({ children }) => {
  const prev = usePrevious(children);
  const [data, setData] = useState(children);

  useEffect(() => {
    debugger;
    if (prev) {
      setData(
        children.map((child, i) => {
          if (child.props.children !== prev[i].props.children) {
            setTimeout(() => {
              const newData = [...children];
              newData[i] = React.cloneElement(child, {
                className: '',
                key: i
              });
              setData(newData);
            }, 2000);
            return React.cloneElement(child, {
              className: 'red',
              key: i
            });
          }
          return child;
        })
      );
    }
  }, [children]);

  return <>{data}</>;
};

export default Wrapper;
