import Header from './Header';

/* eslint-disable react/prop-types */
export default function Page({ children }) {
  return (
    <div>
      <Header>The Header</Header>
      <h2>I am the page</h2>
      {children}
    </div>
  );
}
