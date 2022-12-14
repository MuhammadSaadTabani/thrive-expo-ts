import * as React from 'react';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export function navigate(name, params) {
  console.log(isReadyRef.current, navigationRef.current)
  // isReadyRef.current && navigationRef.current
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    console.log('err while navigation')
  }
}