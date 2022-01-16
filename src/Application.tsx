import React from "react";

type BoxProps = { children: React.ReactNode; style: React.CSSProperties };

const Box = ({ children, style = {} }: BoxProps) => {
  return (
    <section style={{ padding: "1em", border: "5px solid purple", ...style }}>
      {children}
    </section>
  );
};

export default function Application() {
  return (
    <Box
      style={{
        backgroundImage:
          "url(https://images7.alphacoders.com/493/thumb-350-493639.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        margin: '10px 10%'
      }}
    >
      Just a string.
      <p>Some HTML that is not nested.</p>
      <Box style={{ borderColor: "red" }}>
        <h2>Another React component with one child.</h2>
      </Box>
      <Box style={{ color: "pink" }}>
        <h2>A nested React component with two children.</h2>
        <p>The second child.</p>
      </Box>
    </Box>
  );
}
