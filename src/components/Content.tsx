import React from "react";

type NameProps = {
    name:'string'
}

const Content = (props : NameProps) => {
    const {name} = props;
  return (
    <>
    <h1>{name}</h1>
    </>
  )
};

export default Content;
