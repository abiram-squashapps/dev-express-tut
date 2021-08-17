import React from "react";

function Preview(props) {
  return <pre>{JSON.stringify(props.data.formData)}</pre>;
}

export default Preview;
