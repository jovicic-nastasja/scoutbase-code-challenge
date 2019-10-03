import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_ALL_CONTINENTS = gql`
  {
    continents {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;
const Continents = () => (
  <Query query={GET_ALL_CONTINENTS}>
    {({ loading, error, data }) => {
      if (loading) return <h1>Loading...</h1>;
      if (error) return <h2>404 Not found</h2>;

      return (
        <select>
          {data.continents.map(continent => (
            <option key={continent.code} value={continent.code}>
              {continent.name}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);

export default Continents;
